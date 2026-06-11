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
  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
  :root {
    --bg: #040d06; --panel: #080f0a; --border: #1a3320;
    --green: #00ff41; --gdim: #00c030; --gfaint: #004010;
    --amber: #ffb000; --red: #ff2244; --grey: #4a6650; --white: #c8e8cc;
  }
  html, body { height: 100%; background: var(--bg); color: var(--green); font-family: 'Courier New', monospace; overflow-x: hidden; }
  body::after { content:''; position:fixed; inset:0; background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.12) 2px,rgba(0,0,0,0.12) 4px); pointer-events:none; z-index:9999; }
  ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: var(--bg); } ::-webkit-scrollbar-thumb { background: var(--border); }

  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes fadeUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
  @keyframes pulse { 0%,100%{text-shadow:0 0 8px var(--green)} 50%{text-shadow:0 0 24px var(--green),0 0 48px var(--gdim)} }
  @keyframes slideDown { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
  @keyframes scanIn { from{opacity:0} to{opacity:1} }

  /* BOOT */
  #boot { position:fixed; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:24px 16px; z-index:100; background:var(--bg); transition:opacity 0.5s; }
  #boot.hidden { opacity:0; pointer-events:none; }
  .boot-logo { font-size:clamp(14px,4vw,22px); font-weight:900; letter-spacing:0.25em; color:var(--green); text-shadow:0 0 16px var(--green); margin-bottom:24px; text-align:center; }
  .terminal { width:min(560px,100%); background:var(--panel); border:1px solid var(--border); border-radius:4px; overflow:hidden; }
  .term-bar { background:var(--gfaint); border-bottom:1px solid var(--border); padding:5px 12px; display:flex; align-items:center; gap:6px; font-size:10px; color:var(--grey); letter-spacing:0.12em; }
  .term-log { padding:14px 18px; min-height:140px; font-size:clamp(11px,2vw,13px); line-height:1.9; }
  .term-line { animation:fadeUp 0.2s both; }
  .term-amber { color:var(--amber); font-weight:bold; }
  .term-white { color:var(--white); }
  .boot-prog-wrap { padding:0 18px 14px; }
  .boot-prog-label { font-size:10px; color:var(--grey); letter-spacing:0.1em; margin-bottom:4px; }
  .boot-prog-bar { height:4px; background:var(--gfaint); border-radius:2px; overflow:hidden; }
  .boot-prog-fill { height:100%; background:linear-gradient(90deg,var(--gdim),var(--green)); transition:width 0.03s linear; }
  .cursor { animation:blink 1s infinite; }

  /* DASHBOARD */
  #app { padding:clamp(10px,2vw,20px); padding-bottom:80px; animation:scanIn 0.4s both; }
  
  /* HEADER */
  .header { display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:10px; border-bottom:1px solid var(--border); padding-bottom:12px; margin-bottom:18px; }
  .logo { font-size:clamp(11px,3vw,18px); font-weight:900; letter-spacing:0.2em; color:var(--green); text-shadow:0 0 10px var(--green); }
  .status-line { font-size:9px; color:var(--grey); letter-spacing:0.12em; margin-top:3px; }
  .clock { font-size:clamp(16px,4vw,28px); color:var(--amber); text-shadow:0 0 8px var(--amber); letter-spacing:0.1em; font-weight:bold; text-align:right; }
  .dateline { font-size:9px; color:var(--grey); letter-spacing:0.1em; text-align:right; }

  /* PANELS */
  .panel { background:var(--panel); border:1px solid var(--border); border-radius:4px; overflow:hidden; margin-bottom:14px; animation:fadeUp 0.3s both; }
  .panel-header { background:var(--gfaint); border-bottom:1px solid var(--border); padding:7px 12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; }
  .panel-title { font-size:9px; letter-spacing:0.2em; color:var(--green); }
  .panel-badge { font-size:9px; color:var(--amber); border:1px solid var(--amber); padding:1px 6px; border-radius:2px; }
  .panel-body { padding:12px; }

  /* PROGRESS */
  .prog-wrap { margin-bottom:14px; }
  .prog-labels { display:flex; justify-content:space-between; font-size:10px; color:var(--grey); letter-spacing:0.1em; margin-bottom:5px; }
  .prog-bar { height:4px; background:var(--gfaint); border-radius:2px; overflow:hidden; }
  .prog-fill { height:100%; background:linear-gradient(90deg,var(--amber),#ff8800); transition:width 0.4s; }
  .prog-fill.complete { background:linear-gradient(90deg,var(--gdim),var(--green)); }

  /* MISSIONS */
  .cat-label { font-size:8px; letter-spacing:0.25em; color:var(--grey); border-bottom:1px solid var(--gfaint); padding-bottom:3px; margin-bottom:6px; margin-top:12px; }
  .cat-label:first-child { margin-top:0; }
  .mission { display:flex; align-items:center; gap:8px; padding:8px; margin-bottom:4px; background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:3px; cursor:pointer; transition:all 0.15s; -webkit-touch-callout:none; user-select:none; }
  .mission.done { background:rgba(0,255,65,0.05); border-color:var(--gdim); }
  .mission:active { opacity:0.8; transform:scale(0.99); }
  .checkbox { width:14px; height:14px; flex-shrink:0; border:2px solid var(--grey); border-radius:2px; display:flex; align-items:center; justify-content:center; transition:all 0.2s; }
  .checkbox.checked { border-color:var(--green); background:var(--green); box-shadow:0 0 6px var(--green); }
  .check-icon { color:var(--bg); font-size:9px; font-weight:900; }
  .mission-text { flex:1; }
  .mission-label { font-size:10px; letter-spacing:0.08em; color:var(--white); transition:all 0.2s; }
  .mission-label.done { color:var(--grey); text-decoration:line-through; }
  .mission-sub { font-size:9px; color:var(--white); margin-top:1px; opacity:0.85; }
  .priority { font-size:8px; letter-spacing:0.1em; padding:2px 5px; border-radius:2px; flex-shrink:0; }
  .p-HIGH { border:1px solid var(--red); color:var(--red); }
  .p-MED { border:1px solid var(--amber); color:var(--amber); }
  .p-LOW { border:1px solid var(--grey); color:var(--grey); }
  .del-btn { background:rgba(255,34,68,0.15); border:1px solid var(--red); color:var(--red); width:18px; height:18px; border-radius:2px; cursor:pointer; font-size:10px; display:flex; align-items:center; justify-content:center; flex-shrink:0; padding:0; }

  /* GRID */
  .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr)); gap:14px; }

  /* STREAK */
  .streak-num { font-size:clamp(48px,12vw,72px); font-weight:900; color:var(--green); line-height:1; text-align:center; animation:pulse 3s infinite; }
  .streak-label { font-size:10px; color:var(--grey); letter-spacing:0.2em; text-align:center; margin-top:6px; }
  .streak-dots { display:flex; justify-content:center; gap:4px; margin:10px 0; }
  .dot { width:8px; height:8px; border-radius:2px; }
  .dot.on { background:var(--green); box-shadow:0 0 5px var(--green); }
  .dot.off { background:var(--gfaint); }
  .streak-btns { display:flex; gap:8px; justify-content:center; margin-top:10px; }

  /* NOTES */
  .note-hint { font-size:9px; color:var(--grey); letter-spacing:0.1em; margin-bottom:8px; }
  .note-input-row { display:flex; gap:6px; margin-bottom:10px; }
  .note-input { flex:1; background:transparent; border:1px solid var(--border); border-radius:3px; padding:7px 8px; color:var(--green); font-family:'Courier New',monospace; font-size:12px; outline:none; -webkit-appearance:none; }
  .note-input:focus { border-color:var(--gdim); }
  .note-list { max-height:180px; overflow-y:auto; }
  .debrief-tabs { display:flex; gap:6px; margin-bottom:12px; flex-wrap:wrap; }
  .debrief-tab { background:transparent; border:1px solid var(--border); color:var(--grey); font-family:'Courier New',monospace; font-size:9px; letter-spacing:0.12em; padding:5px 10px; border-radius:2px; cursor:pointer; transition:all 0.15s; }
  .debrief-tab.active { background:var(--gfaint); border-color:var(--green); color:var(--green); }
  .debrief-section { display:none; }
  .debrief-section.active { display:block; }
  .debrief-q { margin-bottom:12px; }
  .debrief-q-label { font-size:9px; color:var(--amber); letter-spacing:0.15em; margin-bottom:5px; }
  .debrief-q-input { width:100%; background:transparent; border:1px solid var(--border); border-radius:3px; padding:7px 8px; color:var(--green); font-family:'Courier New',monospace; font-size:12px; outline:none; resize:none; min-height:48px; -webkit-appearance:none; }
  .debrief-q-input:focus { border-color:var(--gdim); }
  .debrief-save { margin-top:8px; }
  .debrief-log { max-height:200px; overflow-y:auto; margin-top:10px; }
  .debrief-entry { border:1px solid var(--border); border-radius:3px; padding:8px; margin-bottom:8px; animation:fadeUp 0.2s both; }
  .debrief-entry-date { font-size:9px; color:var(--amber); letter-spacing:0.1em; margin-bottom:6px; }
  .debrief-entry-item { font-size:10px; color:var(--white); margin-bottom:4px; }
  .debrief-entry-label { color:var(--grey); font-size:9px; }
  .edit-q-list { margin-bottom:10px; }
  .edit-q-item { display:flex; align-items:center; gap:6px; margin-bottom:6px; }
  .edit-q-text { flex:1; background:transparent; border:1px solid var(--border); border-radius:3px; padding:6px 8px; color:var(--green); font-family:'Courier New',monospace; font-size:11px; outline:none; }
  .edit-q-del { background:rgba(255,34,68,0.15); border:1px solid var(--red); color:var(--red); width:24px; height:24px; border-radius:2px; cursor:pointer; font-size:12px; display:flex; align-items:center; justify-content:center; flex-shrink:0; padding:0; }
  .note-item { padding:5px 0; border-bottom:1px solid var(--gfaint); font-size:11px; display:flex; gap:8px; animation:fadeUp 0.2s both; }
  .note-date { color:var(--grey); font-size:9px; flex-shrink:0; }
  .note-text { color:var(--white); }
  .no-notes { font-size:10px; color:var(--grey); }

  /* BUTTONS */
  .btn { background:transparent; border:1px solid var(--border); color:var(--grey); font-family:'Courier New',monospace; font-size:9px; letter-spacing:0.15em; padding:6px 12px; border-radius:2px; cursor:pointer; transition:all 0.15s; -webkit-tap-highlight-color:transparent; }
  .btn.primary { background:var(--gfaint); border-color:var(--green); color:var(--green); }
  .btn.primary:active { background:var(--gdim); box-shadow:0 0 10px var(--green); }
  .btn:active { opacity:0.8; }

  /* MODAL */
  .modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.85); z-index:150; display:flex; align-items:center; justify-content:center; padding:16px; }
  .modal { width:min(460px,95%); background:var(--panel); border:1px solid var(--green); border-radius:4px; overflow:hidden; animation:slideDown 0.2s both; box-shadow:0 0 30px rgba(0,255,65,0.15); max-height:90vh; overflow-y:auto; }
  .modal-header { background:var(--gfaint); border-bottom:1px solid var(--border); padding:8px 12px; display:flex; justify-content:space-between; align-items:center; position:sticky; top:0; }
  .modal-title { font-size:10px; letter-spacing:0.2em; color:var(--green); }
  .modal-body { padding:14px; display:flex; flex-direction:column; gap:12px; }
  .field-label { font-size:9px; color:var(--grey); letter-spacing:0.15em; margin-bottom:4px; }
  .field-input { width:100%; background:transparent; border:1px solid var(--border); border-radius:3px; padding:8px 10px; color:var(--green); font-family:'Courier New',monospace; font-size:13px; outline:none; -webkit-appearance:none; }
  .field-input:focus { border-color:var(--gdim); }
  .chip-group { display:flex; flex-wrap:wrap; gap:5px; }
  .chip { background:transparent; border:1px solid var(--border); color:var(--grey); font-family:'Courier New',monospace; font-size:8px; letter-spacing:0.1em; padding:4px 8px; border-radius:2px; cursor:pointer; transition:all 0.15s; }
  .chip.active { border-color:var(--green); color:var(--green); background:rgba(0,255,65,0.08); }
  .chip.active-HIGH { border-color:var(--red); color:var(--red); background:rgba(255,34,68,0.08); }
  .chip.active-MED { border-color:var(--amber); color:var(--amber); background:rgba(255,176,0,0.08); }
  .chip.active-LOW { border-color:var(--grey); color:var(--grey); background:rgba(74,102,80,0.08); }
  .modal-actions { display:flex; gap:8px; justify-content:flex-end; padding-top:4px; }

  /* FOOTER */
  .footer { margin-top:20px; padding-top:10px; border-top:1px solid var(--gfaint); display:flex; justify-content:space-between; flex-wrap:wrap; gap:6px; font-size:8px; color:var(--grey); letter-spacing:0.1em; }
  .blink { animation:blink 2s infinite; }

  /* FAB */
  .fab { position:fixed; bottom:20px; right:20px; width:48px; height:48px; background:var(--gfaint); border:2px solid var(--green); border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; box-shadow:0 0 16px rgba(0,255,65,0.3); font-size:20px; color:var(--green); z-index:50; transition:all 0.2s; }
  .fab:active { transform:scale(0.92); box-shadow:0 0 24px rgba(0,255,65,0.5); }
</style>
</head>
<body>

<!-- BOOT SCREEN -->
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

  <!-- MISSIONS PANEL -->
  <div class="panel">
    <div class="panel-header">
      <span class="panel-title">DAILY MISSION DOSSIER</span>
      <div style="display:flex;gap:6px;align-items:center">
        <span class="panel-badge" id="mission-badge">0/0 COMPLETE</span>
        <button class="btn primary" onclick="openModal()">+ INJECT</button>
      </div>
    </div>
    <div class="panel-body">
      <div class="prog-wrap">
        <div class="prog-labels"><span>OPS COMPLETION</span><span id="pct-label">0%</span></div>
        <div class="prog-bar"><div class="prog-fill" id="prog-fill-main" style="width:0%"></div></div>
      </div>
      <div id="mission-list"></div>
      <div style="margin-top:10px"><button class="btn primary" onclick="openModal()">+ INJECT NEW MISSION</button></div>
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

    <!-- DEBRIEF -->
    <div class="panel" style="grid-column:1/-1">
      <div class="panel-header">
        <span class="panel-title">NIGHTLY DEBRIEF — ENCRYPTED LOG</span>
        <button class="btn" onclick="toggleDebriefTab('edit')" style="font-size:8px">⚙ EDIT QUESTIONS</button>
      </div>
      <div class="panel-body">
        <div class="debrief-tabs">
          <button class="debrief-tab active" onclick="toggleDebriefTab('log')">▸ LOG TODAY</button>
          <button class="debrief-tab" onclick="toggleDebriefTab('history')">▸ PAST ENTRIES</button>
          <button class="debrief-tab" onclick="toggleDebriefTab('edit')">▸ EDIT QUESTIONS</button>
        </div>

        <!-- LOG TODAY -->
        <div class="debrief-section active" id="debrief-log">
          <div id="debrief-questions"></div>
          <div class="debrief-save">
            <button class="btn primary" onclick="saveDebrief()">▸ TRANSMIT DEBRIEF</button>
          </div>
        </div>

        <!-- HISTORY -->
        <div class="debrief-section" id="debrief-history">
          <div class="debrief-log" id="debrief-entries"></div>
        </div>

        <!-- EDIT QUESTIONS -->
        <div class="debrief-section" id="debrief-edit">
          <div class="edit-q-list" id="edit-q-list"></div>
          <div style="display:flex;gap:8px;margin-top:8px">
            <button class="btn primary" onclick="addDebriefQuestion()">+ ADD QUESTION</button>
            <button class="btn" onclick="saveDebriefQuestions()">SAVE QUESTIONS</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <span>C.H. COMMAND CENTER v4.7.1 // ALL TRANSMISSIONS MONITORED</span>
    <span class="blink">● SECURE CONNECTION ACTIVE</span>
  </div>
</div>

<!-- FAB -->
<div class="fab" id="fab" style="display:none" onclick="openModal()" title="Add Mission">+</div>

<!-- ADD MISSION MODAL -->
<div class="modal-overlay" id="modal" style="display:none" onclick="if(event.target===this)closeModal()">
  <div class="modal">
    <div class="modal-header">
      <span class="modal-title">▸ INJECT NEW MISSION</span>
      <button onclick="closeModal()" style="background:none;border:none;color:var(--grey);cursor:pointer;font-size:16px">✕</button>
    </div>
    <div class="modal-body">
      <div>
        <div class="field-label">MISSION DESIGNATION</div>
        <input class="field-input" id="new-label" placeholder="e.g. DAILY RECON" onkeydown="if(event.key==='Enter')injectMission()"/>
      </div>
      <div>
        <div class="field-label">OPERATIONAL BRIEF (optional)</div>
        <input class="field-input" id="new-sub" placeholder="Short description of the objective"/>
      </div>
      <div>
        <div class="field-label">ASSIGN TO UNIT</div>
        <div class="chip-group" id="cat-chips"></div>
      </div>
      <div>
        <div class="field-label">THREAT LEVEL</div>
        <div class="chip-group" id="pri-chips"></div>
      </div>
      <div class="modal-actions">
        <button class="btn" onclick="closeModal()">ABORT</button>
        <button class="btn primary" onclick="injectMission()">▸ INJECT MISSION</button>
      </div>
    </div>
  </div>
</div>

<script>
// ── DATA ──────────────────────────────────────────────────────────────────────
const DEFAULT_MISSIONS = [
  {id:1,  cat:"MORNING PREP",     label:"SECURE THE BASE",             sub:"Make your bed — control your environment first",            done:false, priority:"HIGH"},
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

const CATS = ["MORNING PREP","INTELLIGENCE","PHYSICAL OPS","CRAFT & COVER","NETWORK & FAITH","EVENING LOCKDOWN","CUSTOM OPS"];
const PRIS = ["HIGH","MED","LOW"];

let missions = [];
let streak = 0;
let notes = [];
let nextId = 100;
let selCat = "CUSTOM OPS";
let selPri = "MED";

// ── STORAGE ───────────────────────────────────────────────────────────────────
function save(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch(e) {} }
function load(key, fallback) { try { const v = localStorage.getItem(key); return v !== null ? JSON.parse(v) : fallback; } catch(e) { return fallback; } }
function getTodayStr() { return new Date().toISOString().slice(0,10); }

function initData() {
  const today = getTodayStr();
  const lastDate = load("chcc_lastDate", null);
  streak = load("chcc_streak", 0);
  notes = load("chcc_notes", []);
  nextId = load("chcc_nextId", 100);

  if (lastDate !== today) {
    // New day — reset checkboxes, keep custom missions
    const saved = load("chcc_missions", null);
    if (saved) {
      missions = saved.map(m => ({...m, done: false}));
    } else {
      missions = JSON.parse(JSON.stringify(DEFAULT_MISSIONS));
    }
    save("chcc_lastDate", today);
    save("chcc_missions", missions);
  } else {
    missions = load("chcc_missions", JSON.parse(JSON.stringify(DEFAULT_MISSIONS)));
  }
}

// ── BOOT ──────────────────────────────────────────────────────────────────────
const BOOT_LINES = [
  {text:"C.H. COMMAND CENTER v4.7.1 — INITIALIZING...", cls:""},
  {text:"▸ Loading encrypted kernel... [OK]", cls:"term-white"},
  {text:"▸ Verifying operative identity...", cls:"term-white"},
  {text:"&nbsp;", cls:""},
  {text:"&nbsp;&nbsp;IDENTITY CONFIRMED: CALEB HOLMES", cls:"term-amber"},
  {text:"&nbsp;&nbsp;ACCESS TIER: OMEGA", cls:"term-amber"},
  {text:"&nbsp;", cls:""},
  {text:"ALL SYSTEMS NOMINAL. WELCOME BACK, OPERATIVE.", cls:""},
];

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

  // Progress bar
  document.getElementById("boot-prog").style.display = "block";
  let p = 0;
  await new Promise(res => {
    const iv = setInterval(() => {
      p += 4;
      document.getElementById("prog-fill").style.width = p + "%";
      document.getElementById("prog-label").textContent = "ESTABLISHING SECURE CHANNEL... " + Math.min(p,100) + "%";
      if (p >= 100) { clearInterval(iv); res(); }
    }, 18);
  });
  await sleep(400);

  // Show dashboard
  const boot = document.getElementById("boot");
  boot.style.opacity = "0";
  setTimeout(() => {
    boot.style.display = "none";
    document.getElementById("app").style.display = "block";
    document.getElementById("fab").style.display = "flex";
    startClock();
    renderMissions();
    renderStreak();
    renderDebriefEntries();
  }, 500);
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

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
    catDiv.textContent = `── ${cat} ──`;
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
        <div class="priority p-${m.priority}">${m.priority}</div>
        <button class="del-btn" onclick="event.stopPropagation();deleteMission(${m.id})">✕</button>
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
  const fill = document.getElementById("prog-fill-main");
  fill.style.width = pct + "%";
  fill.className = "prog-fill" + (pct === 100 ? " complete" : "");
  document.getElementById("pct-label").style.color = pct === 100 ? "var(--green)" : "var(--amber)";
  document.getElementById("pct-label").textContent = pct + "%";
  document.getElementById("mission-badge").textContent = `${done}/${total} COMPLETE`;
}

function toggleMission(id) {
  missions = missions.map(m => m.id === id ? {...m, done: !m.done} : m);
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

// ── NOTES ─────────────────────────────────────────────────────────────────────
// ── DEBRIEF SYSTEM ───────────────────────────────────────────────────────────
const DEFAULT_QUESTIONS = [
  "WINS: What went well today? Any mission completed or moment you're proud of?",
  "TRIGGERS: What was hard today? Any temptations, frustrations, or setbacks?",
  "SCREEN INTEL: How was your YouTube and phone usage today?",
  "BODY REPORT: Did you eat, drink water, and rest enough today?",
  "SURF LOG: Did you surf or get outside today? How did it feel?",
  "FAITH CHECK: Did you do quiet time? Any moments of gratitude or connection?",
  "TOMORROW'S PRIORITY: What is the one thing you want to do first tomorrow?",
  "GRATITUDE: Name one thing you are grateful for today, no matter how small."
];

let debriefQuestions = [];
let debriefEntries = [];

function initDebrief() {
  debriefQuestions = load("chcc_debrief_questions", DEFAULT_QUESTIONS);
  debriefEntries = load("chcc_debrief_entries", []);
  renderDebriefQuestions();
  renderDebriefEntries();
  renderEditQuestions();
}

function toggleDebriefTab(tab) {
  document.querySelectorAll(".debrief-section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".debrief-tab").forEach(t => t.classList.remove("active"));
  document.getElementById("debrief-" + tab).classList.add("active");
  document.querySelectorAll(".debrief-tab").forEach(t => {
    if (t.textContent.toLowerCase().includes(tab === "log" ? "log" : tab === "history" ? "past" : "edit")) {
      t.classList.add("active");
    }
  });
}

function renderDebriefQuestions() {
  const container = document.getElementById("debrief-questions");
  container.innerHTML = debriefQuestions.map((q, i) => `
    <div class="debrief-q">
      <div class="debrief-q-label">▸ ${q}</div>
      <textarea class="debrief-q-input" id="dq-${i}" placeholder="ENTER TRANSMISSION..."></textarea>
    </div>
  `).join("");
}

function saveDebrief() {
  const answers = debriefQuestions.map((q, i) => ({
    question: q,
    answer: (document.getElementById("dq-" + i) || {}).value?.trim() || ""
  })).filter(a => a.answer);
  
  if (answers.length === 0) return;
  
  const entry = {
    date: getTodayStr(),
    ts: new Date().toLocaleTimeString(),
    answers
  };
  
  debriefEntries.unshift(entry);
  save("chcc_debrief_entries", debriefEntries);
  
  // Clear inputs
  debriefQuestions.forEach((_, i) => {
    const el = document.getElementById("dq-" + i);
    if (el) el.value = "";
  });
  
  renderDebriefEntries();
  toggleDebriefTab("history");
}

function renderDebriefEntries() {
  const container = document.getElementById("debrief-entries");
  if (debriefEntries.length === 0) {
    container.innerHTML = '<div style="font-size:10px;color:var(--grey)">// NO TRANSMISSIONS LOGGED</div>';
    return;
  }
  container.innerHTML = debriefEntries.map(e => `
    <div class="debrief-entry">
      <div class="debrief-entry-date">▸ TRANSMISSION: ${e.date} [${e.ts}]</div>
      ${e.answers.map(a => `
        <div class="debrief-entry-item">
          <span class="debrief-entry-label">${a.question.split(":")[0]}: </span>${a.answer}
        </div>
      `).join("")}
    </div>
  `).join("");
}

function renderEditQuestions() {
  const container = document.getElementById("edit-q-list");
  container.innerHTML = debriefQuestions.map((q, i) => `
    <div class="edit-q-item">
      <input class="edit-q-text" id="eq-${i}" value="${q.replace(/"/g, '&quot;')}"/>
      <button class="edit-q-del" onclick="removeDebriefQuestion(${i})">✕</button>
    </div>
  `).join("");
}

function addDebriefQuestion() {
  debriefQuestions.push("NEW QUESTION: Enter your question here");
  renderEditQuestions();
}

function removeDebriefQuestion(i) {
  debriefQuestions.splice(i, 1);
  renderEditQuestions();
}

function saveDebriefQuestions() {
  debriefQuestions = debriefQuestions.map((_, i) => {
    const el = document.getElementById("eq-" + i);
    return el ? el.value.trim() : _;
  }).filter(q => q);
  save("chcc_debrief_questions", debriefQuestions);
  renderDebriefQuestions();
  toggleDebriefTab("log");
}

function renderNotes() {}
function addNote() {}

// ── MODAL ─────────────────────────────────────────────────────────────────────
function openModal() {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("new-label").value = "";
  document.getElementById("new-sub").value = "";
  renderCatChips();
  renderPriChips();
  setTimeout(() => document.getElementById("new-label").focus(), 100);
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function renderCatChips() {
  document.getElementById("cat-chips").innerHTML = CATS.map(c =>
    `<button class="chip${selCat===c?' active':''}" onclick="selCat='${c}';renderCatChips()">${c}</button>`
  ).join("");
}

function renderPriChips() {
  document.getElementById("pri-chips").innerHTML = PRIS.map(p =>
    `<button class="chip${selPri===p?' active-'+p:''}" onclick="selPri='${p}';renderPriChips()">${p}</button>`
  ).join("");
}

function injectMission() {
  const label = document.getElementById("new-label").value.trim().toUpperCase();
  if (!label) return;
  const sub = document.getElementById("new-sub").value.trim() || "Custom operative objective";
  const m = { id: nextId++, cat: selCat, label, sub, done: false, priority: selPri };
  missions.push(m);
  save("chcc_missions", missions);
  save("chcc_nextId", nextId);
  closeModal();
  renderMissions();
}

// ── SERVICE WORKER ────────────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  const swCode = `
    const CACHE = 'chcc-v1';
    self.addEventListener('install', e => {
      e.waitUntil(caches.open(CACHE).then(c => c.addAll(['/'])));
      self.skipWaiting();
    });
    self.addEventListener('fetch', e => {
      e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })));
    });
  `;
  const blob = new Blob([swCode], {type:'application/javascript'});
  const url = URL.createObjectURL(blob);
  navigator.serviceWorker.register(url).catch(() => {});
}

// ── INIT ──────────────────────────────────────────────────────────────────────
initData();
initDebrief();
runBoot();
</script>
</body>
</html>
