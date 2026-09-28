from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import logging
import traceback

logger = logging.getLogger("farmdirect.server")

app = FastAPI(title="FarmDirect API", version="2.0.0")

@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    logger.error(f"Error: {exc}\n{traceback.format_exc()}")
    return JSONResponse(status_code=500, content={"error": True, "detail": str(exc)})

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "FarmDirect API is Live", "version": "2.0.0"}

@app.get("/health")
def health():
    return {"status": "ok"}

try:
    from routers import recommendations, markets, prices, voice, admin, auth, bookings
    app.include_router(recommendations.router)
    app.include_router(markets.router)
    app.include_router(prices.router)
    app.include_router(voice.router)
    app.include_router(admin.router)
    app.include_router(auth.router)
    app.include_router(bookings.router)
    print("[FarmDirect] Routers loaded")
except Exception as e:
    print(f"[FarmDirect] Minimal mode: {e}")

print("[FarmDirect] Server started")
