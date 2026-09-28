import sys
import os
import types
from pathlib import Path

_CURRENT_DIR = Path(__file__).resolve().parent
_ROOT_DIR = _CURRENT_DIR.parent

for _p in [str(_ROOT_DIR), str(_CURRENT_DIR)]:
    if _p not in sys.path:
        sys.path.insert(0, _p)

if "backend" not in sys.modules and (_CURRENT_DIR / "config.py").exists() and not (_CURRENT_DIR / "backend").exists():
    _backend_pkg = types.ModuleType("backend")
    _backend_pkg.__path__ = [str(_CURRENT_DIR)]
    sys.modules["backend"] = _backend_pkg

from fastapi import FastAPI, Request, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
import logging

try:
    from backend.config import HOST, PORT, BASE_DIR
    from backend.database import init_db
    from backend.routers import markets, prices, recommendations, voice, admin, auth, bookings
except ModuleNotFoundError:
    from config import HOST, PORT, BASE_DIR
    from database import init_db
    from routers import markets, prices, recommendations, voice, admin, auth, bookings

try:
    from backend.services.socket_manager import socket_manager
except ModuleNotFoundError:
    from services.socket_manager import socket_manager

logger = logging.getLogger("farmdirect.server")

app = FastAPI(title="RythuSeva Smart Farmer API", version="2.0.0")

@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    logger.error(f"Error on {request.url}: {exc}")
    return JSONResponse(status_code=500, content={"error": True, "status": "SERVER_SAFE", "message": "Handled safely", "detail": str(exc)})

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

app.include_router(recommendations.router)
app.include_router(markets.router)
app.include_router(prices.router)
app.include_router(voice.router)
app.include_router(admin.router)
app.include_router(auth.router)
app.include_router(bookings.router)

@app.on_event("startup")
def on_startup():
    print("[RythuSeva] Initializing database...")
    init_db()
    print("[RythuSeva] DB Ready.")

@app.get("/api/health")
def health_check():
    return {"status": "HEALTHY", "service": "RythuSeva Production Backend", "version": "2.0.0"}

@app.websocket("/ws/farmer/{client_id}")
async def websocket_farmer_endpoint(websocket: WebSocket, client_id: str):
    await socket_manager.connect_farmer(client_id, websocket)
    try:
        while True:
            data = await websocket.receive_text()
            if data == "ping": await websocket.send_text("pong")
    except (WebSocketDisconnect, Exception):
        socket_manager.disconnect_farmer(client_id, websocket)

@app.websocket("/ws/admin")
async def websocket_admin_endpoint(websocket: WebSocket):
    await socket_manager.connect_admin(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            if data == "ping": await websocket.send_text("pong")
    except (WebSocketDisconnect, Exception):
        socket_manager.disconnect_admin(websocket)

def get_frontend_dir():
    candidates = [BASE_DIR, _CURRENT_DIR, _ROOT_DIR, _CURRENT_DIR / "frontend", _ROOT_DIR / "frontend", Path.cwd()]
    for c in candidates:
        if (c / "index.html").exists():
            return c
    return BASE_DIR

FRONTEND_DIR = get_frontend_dir()
print(f"[RythuSeva] Frontend from: {FRONTEND_DIR}")

if (FRONTEND_DIR / "css").exists():
    app.mount("/css", StaticFiles(directory=str(FRONTEND_DIR / "css")), name="css")
if (FRONTEND_DIR / "js").exists():
    app.mount("/js", StaticFiles(directory=str(FRONTEND_DIR / "js")), name="js")

@app.get("/bundle.js")
def serve_bundle_js():
    p = FRONTEND_DIR / "bundle.js"
    return FileResponse(str(p), media_type="application/javascript") if p.exists() else JSONResponse({"error":"not found"}, status_code=404)

@app.get("/bundle.css")
def serve_bundle_css():
    p = FRONTEND_DIR / "bundle.css"
    return FileResponse(str(p), media_type="text/css") if p.exists() else JSONResponse({"error":"not found"}, status_code=404)

@app.get("/bolt")
@app.get("/home")
@app.get("/index.html")
@app.get("/")
def serve_index():
    p = FRONTEND_DIR / "index.html"
    return FileResponse(str(p)) if p.exists() else JSONResponse({"status":"Backend Live, index.html missing", "path": str(FRONTEND_DIR)}, status_code=404)
