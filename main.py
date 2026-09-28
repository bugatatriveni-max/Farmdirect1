from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], allow_methods=["*"], allow_headers=["*"],
)

HTML_PAGE = """
<!DOCTYPE html>
<html>
<head>
<title>RythuSeva - Smart Farmer</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body{margin:0;font-family:system-ui,Segoe UI,Arial;background:#f5f7f5}
.top{background:#004d2a;color:white;display:flex;gap:20px;padding:6px 20px;font-size:12px;flex-wrap:wrap}
.header{background:white;display:flex;justify-content:space-between;align-items:center;padding:10px 20px;box-shadow:0 2px 6px #0001;flex-wrap:wrap}
.logo{font-weight:800;color:#0a5c36;font-size:20px;line-height:16px}
.badge{background:#e6f4ea;color:#0a5c36;padding:6px 12px;border-radius:20px;font-size:12px;font-weight:600}
.userbar{background:#f0faf0;padding:10px 20px;display:flex;gap:15px;align-items:center;font-size:13px;flex-wrap:wrap}
.stat-row{display:grid;grid-template-columns:repeat(4,1fr);gap:15px;padding:15px 20px}
.stat{background:white;border-radius:12px;padding:15px;box-shadow:0 2px 8px #0001}
.stat b{font-size:22px}
.main-row{display:grid;grid-template-columns:1.3fr 1fr;gap:15px;padding:0 20px}
.card{border-radius:12px;padding:20px;color:white}
.green{background:#0f6b3a}
.brown{background:#8b3a1a}
.live{background:#0a3d2e;color:white;margin:15px 20px;border-radius:12px;padding:20px}
.btn{background:white;color:#0f6b3a;border:none;padding:8px 14px;border-radius:20px;font-weight:600;cursor:pointer;margin-top:10px}
.bottom{position:fixed;bottom:0;width:100%;background:white;display:flex;justify-content:space-around;padding:10px 0;box-shadow:0 -2px 10px #0002}
.bottom div{text-align:center;font-size:11px}
.token{font-size:32px;font-weight:900;color:#fde68a;margin:5px 0}
@media(max-width:800px){.stat-row,.main-row{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="top">
<span>24x7 Kisan Toll-Free Helpline: 1800-180-1551 (All India)</span>
<span>e-NAM: 1800-270-0224</span>
<span>State Rythu: 155251</span>
</div>
<div class="header">
<div class="logo">🌱 RythuSeva<br><small style="font-size:11px;font-weight:400">Smart Farmer Procurement & Mandi Intelligence</small></div>
<div style="display:flex;gap:8px;flex-wrap:wrap">
<span class="badge">🏠 Home</span>
<span class="badge">Backend: Online (v2.0)</span>
<span class="badge">✅ All Indian States & Districts Covered</span>
<span class="badge">navAdmin</span>
</div>
</div>
<div class="userbar">
<span>👤 Venkat Reddy (వెంకట్ రెడ్డి)</span>
<span style="background:#d1fae5;padding:4px 8px;border-radius:6px">Kisan ID: KS-AP-GNT-4821</span>
<span>✓ Auth: Biometric (Fingerprint / Face ID)</span>
<span>🔧 Fix / Change Security Password</span>
<span style="background:#fee2e2;padding:4px 8px;border-radius:6px">Logout</span>
</div>
<div class="stat-row">
<div class="stat">🏛️<br><b>120+</b><br>Active Govt Mandis</div>
<div class="stat">⏱️<br><b>18 mins</b><br>Avg Mandi Wait Time</div>
<div class="stat">🔥<br><b>₹1,420 Cr</b><br>Direct DBT Transferred</div>
<div class="stat">🎫<br><b>1,842</b><br>Active Slot Tokens</div>
</div>
<div class="main-row">
<div class="card green">
<h3>Farmer Registration & Yard Slot Booking</h3>
<p style="font-size:13px;opacity:0.9">Reserve your mandi arrival time, prevent waiting in long truck lines, and receive an instant QR Token Pass.</p>
<button class="btn">Book Slot Now →</button>
</div>
<div class="card brown">
<h3>Best Selling & Net Profit Calculator</h3>
<p style="font-size:12px">Formula: Best Selling (Net Earnings) = Crop Price - Transportation Cost - Other Charges</p>
<button class="btn" style="color:#8b3a1a">Calculate Best Mandi →</button>
</div>
</div>
<div class="live">
<div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:20px">
<div>
<span style="background:#ef4444;padding:4px 10px;border-radius:12px;font-size:11px">● LIVE YARD CALL</span><br>
<small>Now Calling Token</small><br>
<div class="token">AP-ELU-2026-0038</div>
<small>Guntur Mirchi Yard • Gate 2 Weighbridge</small><br>
<button class="btn" style="background:#ffffff22;color:white;border:1px solid white">View Live Queue Board →</button>
</div>
<div style="display:flex;gap:20px;font-size:12px;flex-wrap:wrap">
<div><b>ELECTRONIC WEIGHBRIDGE<br>(BAYS 1 & 2)</b><br>Bays 1 & 2: Active<br><small>Avg. 4 mins / truck</small></div>
<div><b>QUALITY & MOISTURE TESTING<br>(BAY 3)</b><br>Bay 3: Moisture Check<br><small>Paddy, Cotton & Chili QA</small></div>
<div><b>UNLOADING & BAG STACKING<br>SHEDS</b><br>Sheds A, B, C: Ready<br><small>Hamali Crew On-Duty</small></div>
</div>
</div>
</div>
<div style="height:80px"></div>
<div class="bottom">
<div>🏠<br>Home</div>
<div>📅<br>Book Slot</div>
<div>🔴<br>Live Queue</div>
<div>📊<br>Markets & Best Profit</div>
<div>🎤<br>Voice Assistant & Q&A</div>
<div>📍<br>Track Status</div>
<div>👤<br>navAdmin</div>
</div>
</body>
</html>
"""

@app.get("/", response_class=HTMLResponse)
def home():
    return HTML_PAGE

@app.get("/health")
def health():
    return {"status":"ok","service":"RythuSeva Live"}

@app.get("/api/status")
def status():
    return {"status":"RythuSeva API is Live","version":"2.0.0"}
