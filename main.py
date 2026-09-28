from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

HTML_PAGE = """
<!DOCTYPE html>
<html>
<head>
<title>FarmDirect - Direct from Farm</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body{font-family:Arial;background:#f0fdf4;margin:0;padding:0}
header{background:#16a34a;color:white;padding:20px;text-align:center}
.card{background:white;margin:20px;padding:20px;border-radius:12px;box-shadow:0 2px 8px #0001}
.btn{background:#16a34a;color:white;padding:12px 20px;border:none;border-radius:8px;font-size:16px;width:100%}
h2{color:#16a34a}
</style>
</head>
<body>
<header>
<h1>🌾 FarmDirect</h1>
<p>Fresh Vegetables Direct from Farm to Customer</p>
</header>

<div class="card">
<h2>✅ Your Website is LIVE!</h2>
<p><b>Backend:</b> farmdirect1.onrender.com</p>
<p>Status: <span style="color:green">● Online</span></p>
<a href="/docs"><button class="btn">View API Docs</button></a>
</div>

<div class="card">
<h2>🛒 Markets</h2>
<p>Hyderabad - Fresh vegetables available</p>
<p>Price Today: Tomato ₹30/kg, Onion ₹25/kg</p>
<button class="btn">Browse Markets</button>
</div>

<div class="card">
<h2>📞 Contact</h2>
<p>FarmDirect Team - Hyderabad</p>
</div>
</body>
</html>
"""

@app.get("/", response_class=HTMLResponse)
def home():
    return HTML_PAGE

@app.get("/health")
def health():
    return {"status":"ok"}

@app.get("/api/status")
def status():
    return {"status":"FarmDirect API is Live","version":"2.0.0"}
