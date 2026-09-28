import os
import sys
import logging
from pathlib import Path
from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse

# Base Directory Setup
BASE = Path(__file__).resolve().parent
for p in [str(BASE), str(BASE / "backend")]:
    if p not in sys.path:
        sys.path.insert(0, p)

logger = logging.getLogger("farmdirect.server")

app = FastAPI(
    title="RythuSeva Agricultural Intelligence Platform",
    description="Production-grade API layer connecting Government Agricultural Datasets to FarmDirect Recommendation Engine & Multilingual Farmer UI.",
    version="2.0.0"
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 1. Mount Static Frontend Assets
if (BASE / "css").exists():
    app.mount("/css", StaticFiles(directory=str(BASE / "css")), name="css")
if (BASE / "js").exists():
    app.mount("/js", StaticFiles(directory=str(BASE / "js")), name="js")

# 2. Initialize Database on Startup
@app.on_event("startup")
def on_startup():
    try:
        from backend.database import init_db
        print("[FarmDirect] Initializing database and verifying tables...")
        init_db()
        print("[FarmDirect] Database initialized successfully.")
    except Exception as e:
        print(f"[FarmDirect Startup Warning] init_db skipped: {e}")

# 3. Register Real Database Routers
ROUTERS_LOADED = []
try:
    from backend.routers import markets, prices, recommendations, voice, admin, auth, bookings
    app.include_router(recommendations.router)
    app.include_router(markets.router)
    app.include_router(prices.router)
    app.include_router(voice.router)
    app.include_router(admin.router)
    app.include_router(auth.router)
    app.include_router(bookings.router)
    ROUTERS_LOADED = ["recommendations", "markets", "prices", "voice", "admin", "auth", "bookings"]
    print(f"[FarmDirect] All 7 production routers loaded successfully: {ROUTERS_LOADED}")
except Exception as e:
    print(f"[FarmDirect Router Warning] Error loading routers: {e}")

# 4. WebSockets for Live Queue
try:
    from backend.services.socket_manager import socket_manager
    @app.websocket("/ws/farmer/{client_id}")
    async def websocket_farmer_endpoint(websocket: WebSocket, client_id: str):
        await socket_manager.connect_farmer(client_id, websocket)
        try:
            while True:
                data = await websocket.receive_text()
                if data == "ping":
                    await websocket.send_text("pong")
        except (WebSocketDisconnect, Exception):
            socket_manager.disconnect_farmer(client_id, websocket)
except Exception as e:
    print(f"[FarmDirect WebSocket Warning]: {e}")

# 5. Core Health Check
@app.get("/api/health")
def health():
    return {
        "status": "HEALTHY",
        "service": "FarmDirect Production Backend",
        "version": "2.0.0",
        "routers_loaded": ROUTERS_LOADED,
        "docs_url": "/docs"
    }

# 6. Fallback Mock APIs (Only called if real routers were not loaded)
if not ROUTERS_LOADED:
    @app.get("/api/markets")
    def fallback_markets():
        return {"markets": [
            {"id": 1, "name": "Guntur Mirchi Yard", "mandi": "Guntur", "price": 18500, "crop": "chilli", "state": "Andhra Pradesh"},
            {"id": 2, "name": "Eluru Wari Yard", "mandi": "Eluru", "price": 2340, "crop": "paddy", "state": "Andhra Pradesh"},
            {"id": 3, "name": "Warangal Enamamula Yard", "mandi": "Warangal", "price": 7500, "crop": "cotton", "state": "Telangana"},
        ]}

    @app.get("/api/prices")
    def fallback_prices():
        return fallback_markets()

# 7. Root & Single-Page Application (SPA) HTML Serving
@app.get("/bolt")
@app.get("/home")
@app.get("/index.html")
@app.get("/")
def serve_index():
    index_file = BASE / "index.html"
    if index_file.exists():
        return FileResponse(str(index_file))
    return JSONResponse({"status": "Backend Live", "error": "index.html not found"})

@app.get("/{full_path:path}")
def serve_spa_routes(full_path: str):
    if "." in full_path and not full_path.startswith("api/"):
        target = BASE / full_path
        if target.exists():
            return FileResponse(str(target))
    index_file = BASE / "index.html"
    if index_file.exists():
        return FileResponse(str(index_file))
    return JSONResponse({"status": "Backend Live"})

# Entry point for local execution
if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    host = os.getenv("HOST", "0.0.0.0")
    uvicorn.run("main:app", host=host, port=port, reload=True)
