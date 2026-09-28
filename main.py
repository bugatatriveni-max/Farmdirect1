import sys, os
from pathlib import Path
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
import logging

_CURRENT_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(_CURRENT_DIR))
sys.path.insert(0, str(_CURRENT_DIR / "backend"))

print(f"DEBUG: Running from {_CURRENT_DIR}")
print(f"DEBUG: Files here: {os.listdir(_CURRENT_DIR)}")

app = FastAPI(title="RythuSeva - Smart Farmer", version="2.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], allow_credentials=True,
    allow_methods=["*"], allow_headers=["*"],
)
app.mount("/css", StaticFiles(directory=str(_CURRENT_DIR / "css")), name="css")
app.mount("/js", StaticFiles(directory=str(_CURRENT_DIR / "js")), name="js")

# --- TRY TO LOAD YOUR REAL BACKEND, BUT DON'T CRASH IF FAILS ---
BASE_DIR = _CURRENT_DIR
HOST, PORT = "0.0.0.0", 8000

try:
    # Try to find BASE_DIR from config.py
    import config as cfg
    BASE_DIR = getattr(cfg, 'BASE_DIR', _CURRENT_DIR)
    print(f"Loaded config BASE_DIR={BASE_DIR}")
except Exception as e:
    print(f"config.py not loaded: {e}")
    try:
        import backend.config as bcfg
        BASE_DIR = getattr(bcfg, 'BASE_DIR', _CURRENT_DIR)
        print(f"Loaded backend.config BASE_DIR={BASE_DIR}")
    except Exception as e2:
        print(f"backend.config not loaded: {e2}")

# Try to init DB safely
try:
    from database import init_db
    init_db()
except:
    try:
        from backend.database import init_db
        init_db()
    except Exception as e:
        print(f"DB init skipped: {e}")

# Try to load routers safely - ONE BY ONE
def safe_include(router_path):
    try:
        import importlib
        mod = importlib.import_module(router_path)
        app.include_router(mod.router)
        print(f"✅ Router loaded: {router_path}")
        return True
    except Exception as e:
        print(f"⚠️ Router failed {router_path}: {e}")
        return False

# Try both locations
for pkg in ["routers", "backend.routers"]:
    for name in ["markets","prices","recommendations","voice","admin","auth","bookings"]:
        safe_include(f"{pkg}.{name}")

@app.get("/api/health")
def health():
    return {"status": "HEALTHY", "service": "RythuSeva Live", "frontend": str(BASE_DIR)}

# --- FRONTEND FINDER - WILL FIND YOUR index.html ---
def find_frontend():
    for p in [BASE_DIR, _CURRENT_DIR, _CURRENT_DIR / "backend", Path.cwd(), _CURRENT_DIR.parent]:
        if p and (p / "index.html").exists():
            return p
    # Check if index.html is in root
    if (_CURRENT_DIR / "index.html").exists():
        return _CURRENT_DIR
    return _CURRENT_DIR

FRONTEND = find_frontend()
print(f"Frontend dir: {FRONTEND}")

# Mount css/js if they exist
try:
    if (FRONTEND / "css").exists():
        app.mount("/css", StaticFiles(directory=str(FRONTEND / "css")), name="css")
    if (FRONTEND / "js").exists():
        app.mount("/js", StaticFiles(directory=str(FRONTEND / "js")), name="js")
except Exception as e:
    print(f"Static mount failed: {e}")

@app.get("/bundle.js")
def bundle_js():
    f = FRONTEND / "bundle.js"
    return FileResponse(str(f)) if f.exists() else JSONResponse({"error":"not found"})

@app.get("/bundle.css")
def bundle_css():
    f = FRONTEND / "bundle.css"
    return FileResponse(str(f)) if f.exists() else JSONResponse({"error":"not found"})

@app.get("/")
def index():
    f = FRONTEND / "index.html"
    if f.exists():
        return FileResponse(str(f))
    else:
        # Show what files exist so we can debug
        files = []
        try: files = os.listdir(FRONTEND)
        except: pass
        return JSONResponse({
            "status": "Backend is LIVE ✅",
            "message": "But index.html not found. Upload your RythuSeva index.html to GitHub root",
            "looking_in": str(FRONTEND),
            "files_found": files
        })

@app.get("/home")
@app.get("/index.html")
@app.get("/bolt")
def index_alias():
    return index()
