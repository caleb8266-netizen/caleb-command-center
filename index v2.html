<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="C.H. Command">
<meta name="theme-color" content="#040d06">
<title>C.H. Command Center</title>
<style>
  * { box-sizing:border-box; margin:0; padding:0; -webkit-tap-highlight-color:transparent; }
  :root {
    --bg:#040d06; --panel:#080f0a; --border:#1a3320;
    --green:#00ff41; --gdim:#00c030; --gfaint:#004010;
    --amber:#ffb000; --red:#ff2244;
  }
  html,body { height:100%; background:var(--bg); color:var(--green); font-family:'Courier New',monospace; overflow-x:hidden; }
  body::after { content:''; position:fixed; inset:0; background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.12) 2px,rgba(0,0,0,0.12) 4px); pointer-events:none; z-index:9999; }
  ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-track{background:var(--bg)} ::-webkit-scrollbar-thumb{background:var(--border)}

  @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
  @keyframes pulse{0%,100%{text-shadow:0 0 8px var(--green)}50%{text-shadow:0 0 24px var(--green),0 0 48px var(--gdim)}}
  @keyframes slideDown{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
  @keyframes scanIn{from{opacity:0}to{opacity:1}}

  /* BOOT */
  #boot{position:fixed;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;z-index:100;background:var(--bg);transition:opacity 0.5s;}
  .boot-logo{font-size:clamp(14px,4vw,22px);font-weight:900;letter-spacing:0.25em;color:var(--green);text-shadow:0 0 20px var(--green),0 0 40px var(--gdim);margin-bottom:24px;text-align:center;}
  .terminal{width:min(560px,100%);background:var(--panel);border:1px solid var(--border);border-radius:4px;overflow:hidden;}
  .term-bar{background:var(--gfaint);border-bottom:1px solid var(--border);padding:5px 12px;display:flex;align-items:center;gap:6px;font-size:10px;color:var(--green);letter-spacing:0.12em;}
  .term-log{padding:14px 18px;min-height:140px;font-size:clamp(11px,2vw,13px);line-height:1.9;}
  .term-line{animation:fadeUp 0.2s both;}
  .term-amber{color:var(--amber);font-weight:bold;}
  .boot-prog-wrap{padding:0 18px 14px;}
  .boot-prog-label{font-size:10px;color:var(--green);letter-spacing:0.1em;margin-bottom:4px;}
  .boot-prog-bar{height:4px;background:var(--gfaint);border-radius:2px;overflow:hidden;}
  .boot-prog-fill{height:100%;background:linear-gradient(90deg,var(--gdim),var(--green));transition:width 0.03s linear;}
  .cursor{animation:blink 1s infinite;}

  /* DASHBOARD */
  #app{padding:clamp(10px,2vw,20px);padding-bottom:80px;animation:scanIn 0.4s both;}

  /* HEADER */
  .header{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;border-bottom:1px solid var(--border);padding-bottom:12px;margin-bottom:18px;}
  .logo{font-size:clamp(11px,3vw,18px);font-weight:900;letter-spacing:0.2em;color:var(--green);text-shadow:0 0 10px var(--green);}
  .status-line{font-size:10px;color:var(--green);letter-spacing:0.12em;margin-top:3px;}
  .clock{font-size:clamp(16px,4vw,28px);color:var(--amber);text-shadow:0 0 8px var(--amber);letter-spacing:0.1em;font-weight:bold;text-align:right;}
  .dateline{font-size:10px;color:var(--green);letter-spacing:0.1em;text-align:right;}

  /* PANELS */
  .panel{background:var(--panel);border:1px solid var(--border);border-radius:4px;overflow:hidden;margin-bottom:14px;animation:fadeUp 0.3s both;}
  .panel-header{background:var(--gfaint);border-bottom:1px solid var(--border);padding:7px 12px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;}
  .panel-title{font-size:10px;letter-spacing:0.2em;color:var(--green);font-weight:bold;}
  .panel-badge{font-size:9px;color:var(--green);border:1px solid var(--green);padding:1px 6px;border-radius:2px;}
  .panel-body{padding:12px;}

  /* PROGRESS */
  .prog-wrap{margin-bottom:14px;}
  .prog-labels{display:flex;justify-content:space-between;font-size:10px;color:var(--green);letter-spacing:0.1em;margin-bottom:5px;}
  .prog-bar{height:4px;background:var(--gfaint);border-radius:2px;overflow:hidden;}
  .prog-fill{height:100%;background:linear-gradient(90deg,var(--gdim),var(--green));transition:width 0.4s;}

  /* MISSIONS */
  .cat-label{font-size:9px;letter-spacing:0.25em;color:var(--green);border-bottom:1px solid var(--gdim);padding-bottom:3px;margin-bottom:6px;margin-top:12px;font-weight:bold;}
  .cat-label:first-child{margin-top:0;}
  .mission{display:flex;align-items:center;gap:8px;padding:8px;margin-bottom:4px;background:rgba(255,255,255,0.02);border:1px solid var(--border);border-radius:3px;cursor:pointer;transition:all 0.15s;-webkit-touch-callout:none;user-select:none;}
  .mission.done{background:rgba(0,255,65,0.05);border-color:var(--gdim);}
  .mission:active{opacity:0.8;transform:scale(0.99);}
  .checkbox{width:14px;height:14px;flex-shrink:0;border:2px solid var(--green);border-radius:2px;display:flex;align-items:center;justify-content:center;transition:all 0.2s;}
  .checkbox.checked{background:var(--green);box-shadow:0 0 6px var(--green);}
  .check-icon{color:var(--bg);font-size:9px;font-weight:900;}
  .mission-text{flex:1;}
  .mission-label{font-size:11px;letter-spacing:0.08em;color:var(--green);font-weight:bold;}
  .mission-label.done{color:var(--gdim);text-decoration:line-through;opacity:0.6;}
  .mission-sub{font-size:10px;color:var(--green);margin-top:2px;}
  .priority{font-size:8px;letter-spacing:0.1em;padding:2px 5px;border-radius:2px;border:1px solid var(--gdim);color:var(--gdim);flex-shrink:0;}
  .mission-actions{display:flex;gap:5px;align-items:center;flex-shrink:0;}
  .edit-btn{background:rgba(0,255,65,0.08);border:1px solid var(--gdim);color:var(--gdim);width:22px;height:22px;border-radius:2px;cursor:pointer;font-size:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:0;}
  .edit-btn:active{background:rgba(0,255,65,0.25);}
  .del-btn{background:rgba(255,34,68,0.1);border:1px solid var(--red);color:var(--red);width:22px;height:22px;border-radius:2px;cursor:pointer;font-size:11px;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:0;}
  .del-btn:active{background:rgba(255,34,68,0.3);}

  /* GRID */
  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:14px;}

  /* STREAK */
  .streak-num{font-size:clamp(48px,12vw,72px);font-weight:900;color:var(--green);line-height:1;text-align:center;animation:pulse 3s infinite;}
  .streak-label{font-size:11px;color:var(--green);letter-spacing:0.2em;text-align:center;margin-top:6px;}
  .streak-dots{display:flex;justify-content:center;gap:4px;margin:10px 0;}
  .dot{width:8px;height:8px;border-radius:2px;}
  .dot.on{background:var(--green);box-shadow:0 0 5px var(--green);}
  .dot.off{background:var(--gfaint);}
  .streak-btns{display:flex;gap:8px;justify-content:center;margin-top:10px;}

  /* BUTTONS */
  .btn{background:transparent;border:1px solid var(--green);color:var(--green);font-family:'Courier New',monospace;font-size:9px;letter-spacing:0.15em;padding:6px 12px;border-radius:2px;cursor:pointer;transition:all 0.15s;-webkit-tap-highlight-color:transparent;}
  .btn.primary{background:var(--gfaint);}
  .btn:active{opacity:0.7;}

  /* FOOTER */
  .footer{margin-top:20px;padding-top:10px;border-top:1px solid var(--gdim);display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;font-size:9px;color:var(--green);letter-spacing:0.1em;}
  .blink{animation:blink 2s infinite;}

  /* FAB */
  .fab{position:fixed;bottom:20px;right:20px;width:48px;height:48px;background:var(--gfaint);border:2px solid var(--green);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 0 16px rgba(0,255,65,0.3);font-size:22px;color:var(--green);z-index:50;}
  .fab:active{transform:scale(0.92);}

  /* MODALS */
  .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:150;display:none;align-items:center;justify-content:center;padding:16px;}
  .modal-overlay.open{display:flex;}
  .modal{width:min(460px,95%);background:var(--panel);border:1px solid var(--green);border-radius:4px;overflow:hidden;animation:slideDown 0.2s both;box-shadow:0 0 30px rgba(0,255,65,0.15);max-height:90vh;overflow-y:auto;}
  .modal-header{background:var(--gfaint);border-bottom:1px solid var(--border);padding:8px 12px;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;}
  .modal-title{font-size:10px;letter-spacing:0.2em;color:var(--green);font-weight:bold;}
  .modal-close{background:none;border:none;color:var(--green);cursor:pointer;font-size:18px;line-height:1;padding:0;}
  .modal-body{padding:14px;display:flex;flex-direction:column;gap:12px;}
  .field-label{font-size:9px;color:var(--green);letter-spacing:0.15em;margin-bottom:4px;}
  .field-input{width:100%;background:transparent;border:1px solid var(--gdim);border-radius:3px;padding:8px 10px;color:var(--green);font-family:'Courier New',monospace;font-size:13px;outline:none;-webkit-appearance:none;}
  .field-input:focus{border-color:var(--green);}
  .chip-group{display:flex;flex-wrap:wrap;gap:5px;margin-top:4px;}
  .chip{background:transparent;border:1px solid var(--gdim);color:var(--gdim);font-family:'Courier New',monospace;font-size:8px;letter-spacing:0.1em;padding:4px 8px;border-radius:2px;cursor:pointer;transition:all 0.15s;}
  .chip.active{border-color:var(--green);color:var(--green);background:rgba(0,255,65,0.1);}
  .modal-actions{display:flex;gap:8px;justify-content:flex-end;padding-top:4px;}
</style>
</head>
<body>

<!-- BOOT -->
<div id="boot">
  <div class="boot-logo">◈ C.H. COMMAND CENTER ◈</div>
  <div class="terminal">
    <div class="term-bar">
      <span style="color:var(--red)">●</span>
      <span style="color:var(--amber)">●</span>
      <span style="color:var(--green)">●</span>
      <span style="flex:1;text-align:center">SECURE TERMINAL — AES-256 ENCRYPTED</span>
    </div>
    <div class="term-log" id="term-log"></div>
    <div class="boot-prog-wrap" id="boot-prog" style="display:none">
      <div class="boot-prog-label" id="prog-label">ESTABLISHING SECURE CHANNEL... 0%</div>
      <div class="boot-prog-bar"><div class="boot-prog-fill" id="prog-fill" style="width:0%"></div></div>
    </div>
  </div>
</div>

<!-- DASHBOARD -->
<div id="app" style="display:none">
  <div class="header">
    <div>
      <div class="logo">◈ C.H. COMMAND CENTER</div>
      <div class="status-line">OPERATIVE: CALEB HOLMES &nbsp;|&nbsp; CLEARANCE: OMEGA &nbsp;|&nbsp; ACTIVE</div>
    </div>
    <div>
      <div class="clock" id="clock">00:00:00</div>
      <div class="dateline" id="dateline">—</div>
    </div>
  </div>

  <!-- MISSIONS -->
  <div class="panel">
    <div class="panel-header">
      <span class="panel-title">DAILY MISSION DOSSIER</span>
      <div style="display:flex;gap:6px;align-items:center">
        <span class="panel-badge" id="mission-badge">0/0</span>
        <button class="btn primary" onclick="openAddModal()">+ INJECT</button>
      </div>
    </div>
    <div class="panel-body">
      <div class="prog-wrap">
        <div class="prog-labels"><span>OPS COMPLETION</span><span id="pct-label">0%</span></div>
        <div class="prog-bar"><div class="prog-fill" id="prog-fill-main" style="width:0%"></div></div>
      </div>
      <div id="mission-list"></div>
      <div style="margin-top:12px"><button class="btn primary" onclick="openAddModal()">+ INJECT NEW MISSION</button></div>
    </div>
  </div>

  <div class="grid">
    <!-- STREAK -->
    <div class="panel">
      <div class="panel-header"><span class="panel-title">CONSECUTIVE ACTIVE DAYS</span></div>
      <div class="panel-body">
        <div class="streak-num" id="streak-num">0</div>
        <div class="streak-label">DAYS UNBROKEN</div>
        <div class="streak-dots" id="streak-dots"></div>
        <div class="streak-btns">
          <button class="btn" onclick="changeStreak(-1)">◄ DEC</button>
          <button class="btn primary" onclick="changeStreak(1)">INC ►</button>
        </div>
      </div>
    </div>

    <!-- CLASSIFIED INTEL -->
    <div class="panel">
      <div class="panel-header"><span class="panel-title">CLASSIFIED INTEL</span></div>
      <div class="panel-body" style="font-size:10px;line-height:2;color:var(--gdim)">
        <div style="border-bottom:1px solid var(--gfaint);padding:3px 0">▸ All ops files encrypted at rest</div>
        <div style="border-bottom:1px solid var(--gfaint);padding:3px 0">▸ Dead-drop window: 0200–0400</div>
        <div style="border-bottom:1px solid var(--gfaint);padding:3px 0">▸ Next extraction: TBD</div>
        <div style="border-bottom:1px solid var(--gfaint);padding:3px 0">▸ Burn protocols: ARMED</div>
        <div style="padding:3px 0">▸ Safehouses: [REDACTED]</div>
      </div>
    </div>
  </div>

  <div class="footer">
    <span>C.H. COMMAND CENTER v4.7.1 // ALL TRANSMISSIONS MONITORED</span>
    <span class="blink">● SECURE</span>
  </div>
</div>

<!-- FAB -->
<div class="fab" id="fab" style="display:none" onclick="openAddModal()">+</div>

<!-- ADD MISSION MODAL -->
<div class="modal-overlay" id="add-modal" onclick="if(event.target===this)closeAddModal()">
  <div class="modal">
    <div class="modal-header">
      <span class="modal-title">▸ INJECT NEW MISSION</span>
      <button class="modal-close" onclick="closeAddModal()">✕</button>
    </div>
    <div class="modal-body">
      <div>
        <div class="field-label">MISSION DESIGNATION</div>
        <input class="field-input" id="add-label" placeholder="e.g. DAILY RECON" onkeydown="if(event.key==='Enter')submitAddMission()"/>
      </div>
      <div>
        <div class="field-label">OPERATIONAL BRIEF (optional)</div>
        <input class="field-input" id="add-sub" placeholder="Short description"/>
      </div>
      <div>
        <div class="field-label">ASSIGN TO UNIT</div>
        <div class="chip-group" id="add-cat-chips"></div>
      </div>
      <div>
        <div class="field-label">THREAT LEVEL</div>
        <div class="chip-group" id="add-pri-chips"></div>
      </div>
      <div class="modal-actions">
        <button class="btn" onclick="closeAddModal()">ABORT</button>
        <button class="btn primary" onclick="submitAddMission()">▸ INJECT</button>
      </div>
    </div>
  </div>
</div>

<!-- EDIT MISSION MODAL -->
<div class="modal-overlay" id="edit-modal" onclick="if(event.target===this)closeEditModal()">
  <div class="modal">
    <div class="modal-header">
      <span class="modal-title">▸ MODIFY MISSION</span>
      <button class="modal-close" onclick="closeEditModal()">✕</button>
    </div>
    <div class="modal-body">
      <div>
        <div class="field-label">MISSION DESIGNATION</div>
        <input class="field-input" id="edit-label" placeholder="MISSION NAME" onkeydown="if(event.key==='Enter')submitEditMission()"/>
      </div>
      <div>
        <div class="field-label">OPERATIONAL BRIEF</div>
        <input class="field-input" id="edit-sub" placeholder="Mission description"/>
      </div>
      <div>
        <div class="field-label">ASSIGN TO UNIT</div>
        <div class="chip-group" id="edit-cat-chips"></div>
      </div>
      <div>
        <div class="field-label">THREAT LEVEL</div>
        <div class="chip-group" id="edit-pri-chips"></div>
      </div>
      <div class="modal-actions">
        <button class="btn" onclick="closeEditModal()">ABORT</button>
        <button class="btn primary" onclick="submitEditMission()">▸ SAVE CHANGES</button>
      </div>
    </div>
  </div>
</div>

<script>
// ── CONSTANTS ─────────────────────────────────────────────────────────────────
const CATS = ["MORNING PREP","INTELLIGENCE","PHYSICAL OPS","CRAFT & COVER","NETWORK & FAITH","EVENING LOCKDOWN","CUSTOM OPS"];
const PRIS = ["HIGH","MED","LOW"];

const DEFAULT_MISSIONS = [
  {id:1,  cat:"MORNING PREP",     label:"SECURE THE BASE",             sub:"Make your bed — control your environment first",             done:false, priority:"HIGH"},
  {id:2,  cat:"MORNING PREP",     label:"SENSORY SYSTEMS CHECK",       sub:"Clean glasses, brush teeth — operative must be field-ready", done:false, priority:"HIGH"},
  {id:3,  cat:"MORNING PREP",     label:"SIGNAL BLACKOUT — MORNING",   sub:"No phone in bed. Screen discipline starts at 0600",          done:false, priority:"HIGH"},
  {id:4,  cat:"MORNING PREP",     label:"HYDRATION PROTOCOL",          sub:"Water before all else — mission readiness begins here",      done:false, priority:"MED"},
  {id:5,  cat:"INTELLIGENCE",     label:"DECRYPT THE ARCHIVE",         sub:"One Psalm, one Proverb, one NT passage",                    done:false, priority:"HIGH"},
  {id:6,  cat:"INTELLIGENCE",     label:"ANALOG FIRST DIRECTIVE",      sub:"Notebook before screen when thinking or creating",           done:false, priority:"MED"},
  {id:7,  cat:"PHYSICAL OPS",     label:"FIELD DEPLOYMENT",            sub:"Surf or get outside — a walk counts on no-surf days",        done:false, priority:"HIGH"},
  {id:8,  cat:"PHYSICAL OPS",     label:"POST-OP RECOVERY",            sub:"Shower and recovery rest after surfing",                    done:false, priority:"MED"},
  {id:9,  cat:"PHYSICAL OPS",     label:"FUEL INTAKE x2",              sub:"Eat at least two real meals — assets don't run on empty",   done:false, priority:"MED"},
  {id:10, cat:"PHYSICAL OPS",     label:"SUSTAINED HYDRATION",         sub:"Stay hydrated through the full operational window",          done:false, priority:"LOW"},
  {id:11, cat:"CRAFT & COVER",    label:"FOCUSED OPERATION",           sub:"One deep work block — even 20-30 min counts",               done:false, priority:"HIGH"},
  {id:12, cat:"CRAFT & COVER",    label:"HAMMERHEAD / DEFIANCE BRIEF", sub:"Move one thing forward — even small is a live op",          done:false, priority:"HIGH"},
  {id:13, cat:"CRAFT & COVER",    label:"THREE PAGES — WRITERDUET",    sub:"Transmit at least three pages. The story is the mission",   done:false, priority:"HIGH"},
  {id:14, cat:"CRAFT & COVER",    label:"BUSINESS ASSET ACTION",       sub:"One business move per day — build the network",             done:false, priority:"MED"},
  {id:15, cat:"NETWORK & FAITH",  label:"REPORT TO COMMAND",           sub:"Church, SA, or youth group — show up when scheduled",       done:false, priority:"HIGH"},
  {id:16, cat:"NETWORK & FAITH",  label:"ONE HONEST TRANSMISSION",     sub:"One real conversation with someone today",                  done:false, priority:"MED"},
  {id:17, cat:"EVENING LOCKDOWN", label:"COMMS QUARANTINE",            sub:"Phone on the counter when you get home",                    done:false, priority:"HIGH"},
  {id:18, cat:"EVENING LOCKDOWN", label:"CLEAN EXTRACTION",            sub:"No YouTube or compromising content before sleep",            done:false, priority:"HIGH"},
  {id:19, cat:"EVENING LOCKDOWN", label:"NIGHTLY DEBRIEF",             sub:"Log what happened, what didn't, what's next",               done:false, priority:"HIGH"},
];

// ── STATE ─────────────────────────────────────────────────────────────────────
let missions = [];
let streak = 0;
let nextId = 100;
let addCat = "CUSTOM OPS";
let addPri = "MED";
let editingId = null;
let editCat = "CUSTOM OPS";
let editPri = "MED";

// ── STORAGE ───────────────────────────────────────────────────────────────────
function save(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch(e) {}
}
function load(key, fallback) {
  try { const v = localStorage.getItem(key); return v !== null ? JSON.parse(v) : fallback; } catch(e) { return fallback; }
}
function getTodayStr() { return new Date().toISOString().slice(0,10); }

function initData() {
  const today = getTodayStr();
  const lastDate = load("chcc_lastDate", null);
  streak = load("chcc_streak", 0);
  nextId = load("chcc_nextId", 100);
  if (lastDate !== today) {
    const saved = load("chcc_missions", null);
    missions = saved ? saved.map(m => ({...m, done:false})) : JSON.parse(JSON.stringify(DEFAULT_MISSIONS));
    save("chcc_lastDate", today);
    save("chcc_missions", missions);
  } else {
    missions = load("chcc_missions", JSON.parse(JSON.stringify(DEFAULT_MISSIONS)));
  }
}

// ── BOOT ──────────────────────────────────────────────────────────────────────
const BOOT_LINES = [
  {text:"C.H. COMMAND CENTER v4.7.1 — INITIALIZING...", cls:""},
  {text:"▸ Loading encrypted kernel... [OK]", cls:""},
  {text:"▸ Verifying operative identity...", cls:""},
  {text:"&nbsp;", cls:""},
  {text:"&nbsp;&nbsp;IDENTITY CONFIRMED: CALEB HOLMES", cls:"term-amber"},
  {text:"&nbsp;&nbsp;ACCESS TIER: OMEGA", cls:"term-amber"},
  {text:"&nbsp;", cls:""},
  {text:"ALL SYSTEMS NOMINAL. WELCOME BACK, OPERATIVE.", cls:""},
];

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function runBoot() {
  const log = document.getElementById("term-log");
  for (let i = 0; i < BOOT_LINES.length; i++) {
    await sleep(i === 0 ? 100 : 250);
    const d = document.createElement("div");
    d.className = "term-line " + BOOT_LINES[i].cls;
    d.innerHTML = BOOT_LINES[i].text;
    log.appendChild(d);
  }
  const cur = document.createElement("span");
  cur.className = "cursor"; cur.textContent = "█";
  log.appendChild(cur);
  await sleep(300);
  cur.remove();
  document.getElementById("boot-prog").style.display = "block";
  let p = 0;
  await new Promise(res => {
    const iv = setInterval(() => {
      p += 4; setProg(p);
      if (p >= 100) { clearInterval(iv); res(); }
    }, 18);
  });
  await sleep(400);
  const boot = document.getElementById("boot");
  boot.style.opacity = "0";
  setTimeout(() => {
    boot.style.display = "none";
    document.getElementById("app").style.display = "block";
    document.getElementById("fab").style.display = "flex";
    startClock();
    renderMissions();
    renderStreak();
  }, 500);
}

function setProg(p) {
  document.getElementById("prog-fill").style.width = p + "%";
  document.getElementById("prog-label").textContent = "ESTABLISHING SECURE CHANNEL... " + Math.min(p,100) + "%";
}

// ── CLOCK ─────────────────────────────────────────────────────────────────────
function startClock() {
  function tick() {
    const now = new Date();
    const pad = n => String(n).padStart(2,"0");
    document.getElementById("clock").textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    document.getElementById("dateline").textContent = now.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}).toUpperCase();
  }
  tick();
  setInterval(tick, 1000);
}

// ── MISSIONS ──────────────────────────────────────────────────────────────────
function renderMissions() {
  const list = document.getElementById("mission-list");
  list.innerHTML = "";
  const cats = [...new Set(missions.map(m => m.cat))];
  cats.forEach(cat => {
    const catMs = missions.filter(m => m.cat === cat);
    const catDiv = document.createElement("div");
    catDiv.className = "cat-label";
    catDiv.textContent = "── " + cat + " ──";
    list.appendChild(catDiv);
    catMs.forEach(m => {
      const row = document.createElement("div");
      row.className = "mission" + (m.done ? " done" : "");
      row.innerHTML = `
        <div class="checkbox ${m.done?'checked':''}">${m.done?'<span class="check-icon">✓</span>':''}</div>
        <div class="mission-text">
          <div class="mission-label ${m.done?'done':''}">${m.label}</div>
          <div class="mission-sub">${m.sub}</div>
        </div>
        <div class="mission-actions">
          <span class="priority">${m.priority}</span>
          <button class="edit-btn" onclick="event.stopPropagation();openEditModal(${m.id})">✎</button>
          <button class="del-btn" onclick="event.stopPropagation();deleteMission(${m.id})">✕</button>
        </div>
      `;
      row.addEventListener("click", () => toggleMission(m.id));
      list.appendChild(row);
    });
  });
  updateProgress();
}

function updateProgress() {
  const done = missions.filter(m => m.done).length;
  const total = missions.length;
  const pct = total ? Math.round((done/total)*100) : 0;
  document.getElementById("prog-fill-main").style.width = pct + "%";
  document.getElementById("pct-label").textContent = pct + "%";
  document.getElementById("mission-badge").textContent = done + "/" + total;
}

function toggleMission(id) {
  missions = missions.map(m => m.id === id ? {...m, done:!m.done} : m);
  save("chcc_missions", missions);
  renderMissions();
}

function deleteMission(id) {
  missions = missions.filter(m => m.id !== id);
  save("chcc_missions", missions);
  renderMissions();
}

// ── STREAK ────────────────────────────────────────────────────────────────────
function renderStreak() {
  document.getElementById("streak-num").textContent = streak;
  const dots = document.getElementById("streak-dots");
  dots.innerHTML = "";
  const filled = streak % 7 || (streak > 0 ? 7 : 0);
  for (let i = 0; i < 7; i++) {
    const d = document.createElement("div");
    d.className = "dot " + (i < filled ? "on" : "off");
    dots.appendChild(d);
  }
}

function changeStreak(delta) {
  streak = Math.max(0, streak + delta);
  save("chcc_streak", streak);
  renderStreak();
}

// ── ADD MISSION ───────────────────────────────────────────────────────────────
function openAddModal() {
  addCat = "CUSTOM OPS";
  addPri = "MED";
  document.getElementById("add-label").value = "";
  document.getElementById("add-sub").value = "";
  document.getElementById("add-modal").classList.add("open");
  renderChips("add-cat-chips", CATS, () => addCat, v => { addCat = v; renderChips("add-cat-chips", CATS, () => addCat, arguments.callee); });
  renderChips("add-pri-chips", PRIS, () => addPri, v => { addPri = v; renderChips("add-pri-chips", PRIS, () => addPri, arguments.callee); });
  renderAddChips();
  setTimeout(() => document.getElementById("add-label").focus(), 100);
}

function closeAddModal() {
  document.getElementById("add-modal").classList.remove("open");
}

function renderAddChips() {
  document.getElementById("add-cat-chips").innerHTML = CATS.map(c =>
    `<button class="chip${addCat===c?' active':''}" onclick="addCat='${c}';renderAddChips()">${c}</button>`
  ).join("");
  document.getElementById("add-pri-chips").innerHTML = PRIS.map(p =>
    `<button class="chip${addPri===p?' active':''}" onclick="addPri='${p}';renderAddChips()">${p}</button>`
  ).join("");
}

function submitAddMission() {
  const label = document.getElementById("add-label").value.trim().toUpperCase();
  if (!label) return;
  const sub = document.getElementById("add-sub").value.trim() || "Custom operative objective";
  missions.push({ id:nextId++, cat:addCat, label, sub, done:false, priority:addPri });
  save("chcc_missions", missions);
  save("chcc_nextId", nextId);
  closeAddModal();
  renderMissions();
}

// ── EDIT MISSION ──────────────────────────────────────────────────────────────
function openEditModal(id) {
  const m = missions.find(m => m.id === id);
  if (!m) return;
  editingId = id;
  editCat = m.cat;
  editPri = m.priority;
  document.getElementById("edit-label").value = m.label;
  document.getElementById("edit-sub").value = m.sub;
  document.getElementById("edit-modal").classList.add("open");
  renderEditChips();
  setTimeout(() => document.getElementById("edit-label").focus(), 100);
}

function closeEditModal() {
  document.getElementById("edit-modal").classList.remove("open");
  editingId = null;
}

function renderEditChips() {
  document.getElementById("edit-cat-chips").innerHTML = CATS.map(c =>
    `<button class="chip${editCat===c?' active':''}" onclick="editCat='${c}';renderEditChips()">${c}</button>`
  ).join("");
  document.getElementById("edit-pri-chips").innerHTML = PRIS.map(p =>
    `<button class="chip${editPri===p?' active':''}" onclick="editPri='${p}';renderEditChips()">${p}</button>`
  ).join("");
}

function submitEditMission() {
  if (!editingId) return;
  const label = document.getElementById("edit-label").value.trim().toUpperCase();
  const sub = document.getElementById("edit-sub").value.trim();
  if (!label) return;
  missions = missions.map(m => m.id === editingId ? {...m, label, sub:sub||m.sub, cat:editCat, priority:editPri} : m);
  save("chcc_missions", missions);
  closeEditModal();
  renderMissions();
}

// ── SERVICE WORKER ────────────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  const sw = `const C='chcc-v2';self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['/'])));self.skipWaiting();});self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});`;
  const blob = new Blob([sw], {type:'application/javascript'});
  navigator.serviceWorker.register(URL.createObjectURL(blob)).catch(()=>{});
}

// ── INIT ──────────────────────────────────────────────────────────────────────
initData();
runBoot();
</script>
</body>
</html>
