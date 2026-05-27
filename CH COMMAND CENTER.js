import { useState, useEffect, useRef } from "react";

const C = {
  bg: "#040d06", panel: "#080f0a", border: "#1a3320",
  green: "#00ff41", greenDim: "#00c030", greenFaint: "#004010",
  amber: "#ffb000", red: "#ff2244", grey: "#4a6650", white: "#c8e8cc",
};

const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: ${C.bg}; color: ${C.green};
    font-family: 'Share Tech Mono', monospace; overflow-x: hidden; cursor: crosshair;
  }
  body::after {
    content: ''; position: fixed; inset: 0;
    background: repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.15) 2px,rgba(0,0,0,0.15) 4px);
    pointer-events: none; z-index: 9999;
  }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: ${C.bg}; }
  ::-webkit-scrollbar-thumb { background: ${C.border}; }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes scanIn { from{clip-path:inset(0 0 100% 0)} to{clip-path:inset(0 0 0% 0)} }
  @keyframes fadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
  @keyframes pulse { 0%,100%{box-shadow:0 0 6px ${C.green}} 50%{box-shadow:0 0 18px ${C.green},0 0 40px ${C.greenDim}} }
  @keyframes slideDown { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }
`;

const BOOT_LINES = [
  "C.H. COMMAND CENTER v4.7.1 — INITIALIZING...",
  "▸ Verifying operative identity...",
  "  IDENTITY CONFIRMED: CALEB HOLMES",
  "  ACCESS TIER: OMEGA",
  "ALL SYSTEMS NOMINAL. WELCOME BACK, OPERATIVE.",
];

const DEFAULT_MISSIONS = [
  { id: 1,  cat: "MORNING PREP",     label: "SECURE THE BASE",             sub: "Make your bed — control your environment before anything else",    done: false, priority: "HIGH" },
  { id: 2,  cat: "MORNING PREP",     label: "SENSORY SYSTEMS CHECK",       sub: "Clean glasses, brush teeth — operative must be field-ready",        done: false, priority: "HIGH" },
  { id: 3,  cat: "MORNING PREP",     label: "SIGNAL BLACKOUT — MORNING",   sub: "No phone in bed. Screen discipline starts at 0600",                 done: false, priority: "HIGH" },
  { id: 4,  cat: "MORNING PREP",     label: "HYDRATION PROTOCOL",          sub: "Water before all else — mission readiness begins here",             done: false, priority: "MED"  },
  { id: 5,  cat: "INTELLIGENCE",     label: "DECRYPT THE ARCHIVE",         sub: "One Psalm, one Proverb, one NT passage — read the source material", done: false, priority: "HIGH" },
  { id: 6,  cat: "INTELLIGENCE",     label: "ANALOG FIRST DIRECTIVE",      sub: "Notebook before screen when thinking or creating",                  done: false, priority: "MED"  },
  { id: 7,  cat: "PHYSICAL OPS",     label: "FIELD DEPLOYMENT",            sub: "Surf or get outside — a walk counts on no-surf days",               done: false, priority: "HIGH" },
  { id: 8,  cat: "PHYSICAL OPS",     label: "POST-OP RECOVERY",            sub: "Shower and recovery rest after surfing",                            done: false, priority: "MED"  },
  { id: 9,  cat: "PHYSICAL OPS",     label: "FUEL INTAKE x2",              sub: "Eat at least two real meals — assets don't run on empty",           done: false, priority: "MED"  },
  { id: 10, cat: "PHYSICAL OPS",     label: "SUSTAINED HYDRATION",         sub: "Stay hydrated through the full operational window",                 done: false, priority: "LOW"  },
  { id: 11, cat: "CRAFT & COVER",    label: "FOCUSED OPERATION",           sub: "One deep work block — even 20-30 min counts. Go dark, go deep",     done: false, priority: "HIGH" },
  { id: 12, cat: "CRAFT & COVER",    label: "HAMMERHEAD / DEFIANCE BRIEF", sub: "Move one thing forward — even a small action is a live op",         done: false, priority: "HIGH" },
  { id: 13, cat: "CRAFT & COVER",    label: "THREE PAGES — WRITERDUET",    sub: "Transmit at least three pages. The story is the mission",           done: false, priority: "HIGH" },
  { id: 14, cat: "CRAFT & COVER",    label: "BUSINESS ASSET ACTION",       sub: "One business move per day — build the network, protect the future", done: false, priority: "MED"  },
  { id: 15, cat: "NETWORK & FAITH",  label: "REPORT TO COMMAND",           sub: "Church, SA, or youth group — show up when scheduled",               done: false, priority: "HIGH" },
  { id: 16, cat: "NETWORK & FAITH",  label: "ONE HONEST TRANSMISSION",     sub: "One real conversation with someone today — no cover story",         done: false, priority: "MED"  },
  { id: 17, cat: "EVENING LOCKDOWN", label: "COMMS QUARANTINE",            sub: "Phone on the counter when you get home — mission ends here",        done: false, priority: "HIGH" },
  { id: 18, cat: "EVENING LOCKDOWN", label: "CLEAN EXTRACTION",            sub: "No YouTube or compromising content before sleep. Stay sharp",       done: false, priority: "HIGH" },
  { id: 19, cat: "EVENING LOCKDOWN", label: "NIGHTLY DEBRIEF",             sub: "Check in here — log what happened, what didn't, what's next",       done: false, priority: "HIGH" },
];

const STORAGE_KEYS = {
  missions: "chcc_missions",
  streak: "chcc_streak",
  lastDate: "chcc_lastDate",
  notes: "chcc_notes",
  nextId: "chcc_nextId",
  customMissions: "chcc_custom",
};

function saveToStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch(e) {}
}
function loadFromStorage(key, fallback) {
  try {
    const val = localStorage.getItem(key);
    return val !== null ? JSON.parse(val) : fallback;
  } catch(e) { return fallback; }
}
function getTodayStr() {
  return new Date().toISOString().slice(0, 10);
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function useTypewriter(lines, delay = 40, startDelay = 0) {
  const [displayed, setDisplayed] = useState([]);
  const [done, setDone] = useState(false);
  useEffect(() => {
    let cancelled = false;
    async function run() {
      await sleep(startDelay);
      const out = [];
      for (let i = 0; i < lines.length; i++) {
        if (cancelled) return;
        out.push(""); setDisplayed([...out]);
        for (let c = 0; c < lines[i].length; c++) {
          if (cancelled) return;
          out[i] = lines[i].slice(0, c + 1);
          setDisplayed([...out]);
          await sleep(delay);
        }
        await sleep(80);
      }
      if (!cancelled) setDone(true);
    }
    run();
    return () => { cancelled = true; };
  }, []);
  return { displayed, done };
}

// ── BOOT (5 seconds total) ────────────────────────────────────────────────────
function BootSequence({ onComplete }) {
  const { displayed, done } = useTypewriter(BOOT_LINES, 18, 100);
  const [progress, setProgress] = useState(0);
  const [entering, setEntering] = useState(false);
  const bottomRef = useRef(null);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [displayed]);
  useEffect(() => {
    if (!done) return;
    let p = 0;
    const iv = setInterval(() => {
      p += 4; setProgress(p);
      if (p >= 100) { clearInterval(iv); setEntering(true); setTimeout(onComplete, 400); }
    }, 20);
  }, [done]);

  return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", padding:"40px 20px" }}>
      <div style={{ fontFamily:"'Orbitron',sans-serif", fontSize:"clamp(14px,4vw,28px)", fontWeight:900, letterSpacing:"0.3em", color:C.green, textShadow:`0 0 20px ${C.green},0 0 60px ${C.greenDim}`, marginBottom:36, textAlign:"center" }}>
        ◈ C.H. COMMAND CENTER ◈
      </div>
      <div style={{ width:"min(680px,95vw)", background:C.panel, border:`1px solid ${C.border}`, boxShadow:`0 0 40px rgba(0,255,65,0.08)`, borderRadius:4, overflow:"hidden" }}>
        <div style={{ background:C.greenFaint, borderBottom:`1px solid ${C.border}`, padding:"6px 14px", display:"flex", alignItems:"center", gap:8, fontSize:11, color:C.grey, letterSpacing:"0.15em" }}>
          <span style={{color:C.red,fontSize:10}}>●</span>
          <span style={{color:C.amber,fontSize:10}}>●</span>
          <span style={{color:C.green,fontSize:10}}>●</span>
          <span style={{flex:1,textAlign:"center"}}>SECURE TERMINAL — AES-256 ENCRYPTED</span>
        </div>
        <div style={{ padding:"20px 24px", minHeight:180, overflowY:"auto", fontSize:"clamp(11px,1.8vw,13px)", lineHeight:2 }}>
          {displayed.map((line, i) => (
            <div key={i} style={{ color: line.startsWith("  ") ? C.amber : line.startsWith("▸") ? C.white : C.green, fontWeight: line.startsWith("  ") ? "bold" : "normal", animation:"fadeUp 0.15s ease both" }}>
              {line || "\u00a0"}
            </div>
          ))}
          {!done && <span style={{animation:"blink 1s infinite"}}>█</span>}
          <div ref={bottomRef}/>
        </div>
        {done && (
          <div style={{padding:"0 24px 20px"}}>
            <div style={{fontSize:11,color:C.grey,marginBottom:6,letterSpacing:"0.1em"}}>ESTABLISHING SECURE CHANNEL... {progress}%</div>
            <div style={{height:4,background:C.greenFaint,borderRadius:2,overflow:"hidden"}}>
              <div style={{height:"100%",width:`${progress}%`,background:`linear-gradient(90deg,${C.greenDim},${C.green})`,boxShadow:`0 0 8px ${C.green}`,transition:"width 0.02s linear"}}/>
            </div>
          </div>
        )}
      </div>
      {entering && <div style={{marginTop:20,fontSize:13,letterSpacing:"0.3em",color:C.amber,animation:"blink 0.4s infinite"}}>► ACCESS GRANTED — ENTERING COMMAND CENTER</div>}
    </div>
  );
}

// ── ADD MISSION DRAWER ────────────────────────────────────────────────────────
const CATEGORIES = ["MORNING PREP","INTELLIGENCE","PHYSICAL OPS","CRAFT & COVER","NETWORK & FAITH","EVENING LOCKDOWN","CUSTOM OPS"];
const PRIORITIES = ["HIGH","MED","LOW"];

function AddMissionDrawer({ onAdd, onClose }) {
  const [label, setLabel] = useState("");
  const [sub, setSub] = useState("");
  const [cat, setCat] = useState("CUSTOM OPS");
  const [priority, setPriority] = useState("MED");
  const handleAdd = () => {
    if (!label.trim()) return;
    onAdd({ label: label.toUpperCase().trim(), sub: sub.trim() || "No further details", cat, priority });
    onClose();
  };
  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.75)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ width:"min(520px,95vw)", background:C.panel, border:`1px solid ${C.green}`, borderRadius:4, overflow:"hidden", boxShadow:`0 0 40px rgba(0,255,65,0.2)`, animation:"slideDown 0.25s ease both" }}>
        <div style={{ background:C.greenFaint, borderBottom:`1px solid ${C.border}`, padding:"10px 16px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span style={{ fontFamily:"'Orbitron',sans-serif", fontSize:11, letterSpacing:"0.2em", color:C.green }}>▸ INJECT NEW MISSION</span>
          <button onClick={onClose} style={{ background:"transparent", border:"none", color:C.grey, cursor:"pointer", fontSize:16 }}>✕</button>
        </div>
        <div style={{ padding:20, display:"flex", flexDirection:"column", gap:14 }}>
          <div>
            <FieldLabel>MISSION DESIGNATION</FieldLabel>
            <TermInput value={label} onChange={e=>setLabel(e.target.value)} placeholder="e.g. DAILY RECON" onKeyDown={e=>e.key==="Enter"&&handleAdd()} autoFocus/>
          </div>
          <div>
            <FieldLabel>OPERATIONAL BRIEF (optional)</FieldLabel>
            <TermInput value={sub} onChange={e=>setSub(e.target.value)} placeholder="Short description of the objective"/>
          </div>
          <div>
            <FieldLabel>ASSIGN TO UNIT</FieldLabel>
            <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginTop:6 }}>
              {CATEGORIES.map(c => <Chip key={c} active={cat===c} onClick={()=>setCat(c)}>{c}</Chip>)}
            </div>
          </div>
          <div>
            <FieldLabel>THREAT LEVEL</FieldLabel>
            <div style={{ display:"flex", gap:6, marginTop:6 }}>
              {PRIORITIES.map(p => <Chip key={p} active={priority===p} onClick={()=>setPriority(p)} color={p==="HIGH"?C.red:p==="MED"?C.amber:C.grey}>{p}</Chip>)}
            </div>
          </div>
          <div style={{ display:"flex", gap:8, justifyContent:"flex-end", marginTop:4 }}>
            <TermBtn onClick={onClose} label="ABORT"/>
            <TermBtn onClick={handleAdd} label="▸ INJECT MISSION" primary/>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldLabel({ children }) {
  return <div style={{ fontSize:10, color:C.grey, letterSpacing:"0.15em", marginBottom:4 }}>{children}</div>;
}
function TermInput({ value, onChange, placeholder, onKeyDown, autoFocus }) {
  return (
    <input value={value} onChange={onChange} placeholder={placeholder} onKeyDown={onKeyDown} autoFocus={autoFocus}
      style={{ width:"100%", background:"transparent", border:`1px solid ${C.border}`, borderRadius:3, padding:"8px 12px", color:C.green, fontFamily:"'Share Tech Mono',monospace", fontSize:12, letterSpacing:"0.08em", outline:"none" }}/>
  );
}
function Chip({ children, active, onClick, color }) {
  const col = color || C.green;
  return (
    <button onClick={onClick} style={{ background: active ? col+"22" : "transparent", border:`1px solid ${active?col:C.border}`, color: active ? col : C.grey, fontFamily:"'Share Tech Mono',monospace", fontSize:9, letterSpacing:"0.12em", padding:"4px 10px", borderRadius:2, cursor:"pointer", transition:"all 0.15s" }}>
      {children}
    </button>
  );
}

// ── DASHBOARD ─────────────────────────────────────────────────────────────────
function Dashboard() {
  const [missions, setMissions] = useState(() => {
    // Load saved custom missions and merge with defaults
    const today = getTodayStr();
    const lastDate = loadFromStorage(STORAGE_KEYS.lastDate, null);
    const savedCustom = loadFromStorage(STORAGE_KEYS.customMissions, []);
    const isNewDay = lastDate !== today;

    if (isNewDay) {
      // New day — reset checkboxes, keep custom missions, save new date
      saveToStorage(STORAGE_KEYS.lastDate, today);
      const merged = [...DEFAULT_MISSIONS, ...savedCustom].map(m => ({ ...m, done: false }));
      saveToStorage(STORAGE_KEYS.missions, merged);
      return merged;
    } else {
      // Same day — load saved state
      return loadFromStorage(STORAGE_KEYS.missions, DEFAULT_MISSIONS);
    }
  });

  const [streak, setStreak] = useState(() => loadFromStorage(STORAGE_KEYS.streak, 0));
  const [notes, setNotes] = useState(() => loadFromStorage(STORAGE_KEYS.notes, []));
  const [note, setNote] = useState("");
  const [time, setTime] = useState(new Date());
  const [showAdd, setShowAdd] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const nextId = useRef(loadFromStorage(STORAGE_KEYS.nextId, 100));

  // Save missions whenever they change
  useEffect(() => { saveToStorage(STORAGE_KEYS.missions, missions); }, [missions]);
  useEffect(() => { saveToStorage(STORAGE_KEYS.streak, streak); }, [streak]);
  useEffect(() => { saveToStorage(STORAGE_KEYS.notes, notes); }, [notes]);

  // Clock
  useEffect(() => { const iv = setInterval(()=>setTime(new Date()),1000); return()=>clearInterval(iv); }, []);

  const toggleMission = id => setMissions(ms=>ms.map(m=>m.id===id?{...m,done:!m.done}:m));

  const deleteMission = id => {
    setMissions(ms=>ms.filter(m=>m.id!==id));
    // Also remove from custom missions if it's a custom one
    const custom = loadFromStorage(STORAGE_KEYS.customMissions, []);
    saveToStorage(STORAGE_KEYS.customMissions, custom.filter(m=>m.id!==id));
  };

  const addMission = ({ label, sub, cat, priority }) => {
    const newMission = { id:nextId.current++, cat, label, sub, done:false, priority };
    setMissions(ms=>[...ms, newMission]);
    // Save custom missions separately so they survive daily resets
    const custom = loadFromStorage(STORAGE_KEYS.customMissions, []);
    saveToStorage(STORAGE_KEYS.customMissions, [...custom, newMission]);
    saveToStorage(STORAGE_KEYS.nextId, nextId.current);
  };

  const addNote = () => {
    if (!note.trim()) return;
    setNotes(n=>[{text:note, ts:new Date().toLocaleTimeString(), date:getTodayStr()},...n]);
    setNote("");
  };

  const completedCount = missions.filter(m=>m.done).length;
  const pct = missions.length ? Math.round((completedCount/missions.length)*100) : 0;
  const priorityColor = p => p==="HIGH"?C.red:p==="MED"?C.amber:C.grey;
  const pad = n=>String(n).padStart(2,"0");
  const timeStr = `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}`;
  const dateStr = time.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"}).toUpperCase();
  const cats = [...new Set(missions.map(m=>m.cat))];

  return (
    <>
      {showAdd && <AddMissionDrawer onAdd={addMission} onClose={()=>setShowAdd(false)}/>}
      <div style={{ minHeight:"100vh", padding:"clamp(12px,3vw,28px)" }}>

        <header style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:12, borderBottom:`1px solid ${C.border}`, paddingBottom:16, marginBottom:24 }}>
          <div>
            <div style={{ fontFamily:"'Orbitron',sans-serif", fontSize:"clamp(12px,3.5vw,22px)", fontWeight:900, letterSpacing:"0.25em", color:C.green, textShadow:`0 0 14px ${C.green}` }}>◈ C.H. COMMAND CENTER</div>
            <div style={{ fontSize:11, color:C.grey, letterSpacing:"0.18em", marginTop:4 }}>OPERATIVE: CALEB HOLMES &nbsp;|&nbsp; CLEARANCE: OMEGA &nbsp;|&nbsp; STATUS: ACTIVE</div>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{ fontFamily:"'Orbitron',sans-serif", fontSize:"clamp(16px,4vw,30px)", color:C.amber, textShadow:`0 0 10px ${C.amber}`, letterSpacing:"0.1em" }}>{timeStr}</div>
            <div style={{ fontSize:11, color:C.grey, letterSpacing:"0.15em" }}>{dateStr}</div>
          </div>
        </header>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,340px),1fr))", gap:20 }}>

          <div style={{ gridColumn:"1/-1" }}>
            <Panel title="DAILY MISSION DOSSIER" badge={`${completedCount}/${missions.length} COMPLETE`}
              action={<TermBtn onClick={()=>setShowAdd(true)} label="+ INJECT MISSION" primary/>}>
              <div style={{ marginBottom:18 }}>
                <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, color:C.grey, marginBottom:6, letterSpacing:"0.1em" }}>
                  <span>OPS COMPLETION</span>
                  <span style={{color:pct===100?C.green:C.amber}}>{pct}%</span>
                </div>
                <div style={{ height:5, background:C.greenFaint, borderRadius:3, overflow:"hidden" }}>
                  <div style={{ height:"100%", width:`${pct}%`, background:pct===100?`linear-gradient(90deg,${C.greenDim},${C.green})`:`linear-gradient(90deg,${C.amber},#ff8800)`, boxShadow:`0 0 8px ${pct===100?C.green:C.amber}`, transition:"width 0.4s ease" }}/>
                </div>
              </div>
              {cats.map(cat => {
                const catMissions = missions.filter(m=>m.cat===cat);
                return (
                  <div key={cat} style={{ marginBottom:20 }}>
                    <div style={{ fontSize:9, letterSpacing:"0.25em", color:C.grey, borderBottom:`1px solid ${C.greenFaint}`, paddingBottom:4, marginBottom:8 }}>── {cat} ──</div>
                    {catMissions.map(m => (
                      <div key={m.id}
                        onMouseEnter={()=>setHoveredId(m.id)}
                        onMouseLeave={()=>setHoveredId(null)}
                        style={{ display:"flex", alignItems:"center", gap:10, padding:"9px 10px", marginBottom:5, background:m.done?"rgba(0,255,65,0.05)":"rgba(255,255,255,0.02)", border:`1px solid ${m.done?C.greenDim:C.border}`, borderRadius:3, transition:"all 0.15s", position:"relative" }}>
                        <div onClick={()=>toggleMission(m.id)} style={{ width:15, height:15, flexShrink:0, border:`2px solid ${m.done?C.green:C.grey}`, borderRadius:2, background:m.done?C.green:"transparent", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:m.done?`0 0 8px ${C.green}`:"none", cursor:"pointer", transition:"all 0.2s" }}>
                          {m.done && <span style={{color:C.bg,fontSize:9,fontWeight:900}}>✓</span>}
                        </div>
                        <div style={{flex:1,cursor:"pointer"}} onClick={()=>toggleMission(m.id)}>
                          <div style={{ fontSize:11, letterSpacing:"0.1em", color:m.done?C.grey:C.white, textDecoration:m.done?"line-through":"none" }}>{m.label}</div>
                          <div style={{ fontSize:10, color:C.grey, marginTop:1 }}>{m.sub}</div>
                        </div>
                        <div style={{ fontSize:9, letterSpacing:"0.12em", padding:"2px 6px", border:`1px solid ${priorityColor(m.priority)}`, color:priorityColor(m.priority), borderRadius:2, flexShrink:0 }}>{m.priority}</div>
                        {hoveredId===m.id && (
                          <button onClick={()=>deleteMission(m.id)}
                            style={{ position:"absolute", right:6, top:"50%", transform:"translateY(-50%)", background:"rgba(255,34,68,0.15)", border:`1px solid ${C.red}`, color:C.red, width:18, height:18, borderRadius:2, cursor:"pointer", fontSize:10, display:"flex", alignItems:"center", justifyContent:"center", lineHeight:1, padding:0 }}>
                            ✕
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                );
              })}
              <div style={{ marginTop:8 }}>
                <TermBtn onClick={()=>setShowAdd(true)} label="+ INJECT NEW MISSION" primary/>
              </div>
            </Panel>
          </div>

          <Panel title="CONSECUTIVE ACTIVE DAYS">
            <div style={{ textAlign:"center", padding:"12px 0" }}>
              <div style={{ fontFamily:"'Orbitron',sans-serif", fontSize:"clamp(48px,10vw,72px)", fontWeight:900, color:C.green, textShadow:`0 0 20px ${C.green},0 0 60px ${C.greenDim}`, lineHeight:1, animation:"pulse 3s infinite" }}>{streak}</div>
              <div style={{ fontSize:11, color:C.grey, letterSpacing:"0.2em", marginTop:8 }}>DAYS UNBROKEN</div>
              <div style={{ marginTop:14, display:"flex", justifyContent:"center", gap:4 }}>
                {Array.from({length:7}).map((_,i)=>(
                  <div key={i} style={{ width:10, height:10, borderRadius:2, background:i<(streak%7||7)?C.green:C.greenFaint, boxShadow:i<(streak%7||7)?`0 0 6px ${C.green}`:"none" }}/>
                ))}
              </div>
              <div style={{ marginTop:16, display:"flex", gap:8, justifyContent:"center" }}>
                <TermBtn onClick={()=>setStreak(s=>Math.max(0,s-1))} label="◄ DEC"/>
                <TermBtn onClick={()=>setStreak(s=>s+1)} label="INC ►" primary/>
              </div>
            </div>
          </Panel>

          <Panel title="FIELD NOTES — ENCRYPTED LOG">
            <div style={{ marginBottom:8, fontSize:10, color:C.grey, letterSpacing:"0.1em" }}>NIGHTLY DEBRIEF — LOG WINS, TRIGGERS, REFLECTIONS</div>
            <div style={{ display:"flex", gap:8, marginBottom:12 }}>
              <input value={note} onChange={e=>setNote(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addNote()} placeholder="LOG INTEL..."
                style={{ flex:1, background:"transparent", border:`1px solid ${C.border}`, borderRadius:3, padding:"8px 10px", color:C.green, fontFamily:"'Share Tech Mono',monospace", fontSize:12, letterSpacing:"0.08em", outline:"none" }}/>
              <TermBtn onClick={addNote} label="LOG" primary/>
            </div>
            <div style={{ maxHeight:200, overflowY:"auto" }}>
              {notes.length===0 && <div style={{fontSize:11,color:C.grey}}>// NO TRANSMISSIONS LOGGED</div>}
              {notes.map((n,i)=>(
                <div key={i} style={{ padding:"6px 0", borderBottom:`1px solid ${C.greenFaint}`, fontSize:12, display:"flex", gap:10, animation:"fadeUp 0.2s both" }}>
                  <span style={{color:C.grey,fontSize:10,flexShrink:0}}>[{n.date} {n.ts}]</span>
                  <span style={{color:C.white}}>{n.text}</span>
                </div>
              ))}
            </div>
          </Panel>

        </div>

        <div style={{ marginTop:28, paddingTop:12, borderTop:`1px solid ${C.greenFaint}`, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:8, fontSize:10, color:C.grey, letterSpacing:"0.12em" }}>
          <span>C.H. COMMAND CENTER v4.7.1 // ALL TRANSMISSIONS MONITORED</span>
          <span style={{animation:"blink 2s infinite"}}>● SECURE CONNECTION ACTIVE</span>
        </div>
      </div>
    </>
  );
}

function Panel({ title, badge, children, action }) {
  return (
    <div style={{ background:C.panel, border:`1px solid ${C.border}`, borderRadius:4, overflow:"hidden", animation:"scanIn 0.5s ease both" }}>
      <div style={{ background:C.greenFaint, borderBottom:`1px solid ${C.border}`, padding:"8px 16px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:8 }}>
        <span style={{ fontFamily:"'Orbitron',sans-serif", fontSize:10, letterSpacing:"0.2em", color:C.green }}>{title}</span>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          {badge && <span style={{ fontSize:10, color:C.amber, border:`1px solid ${C.amber}`, padding:"1px 6px", borderRadius:2 }}>{badge}</span>}
          {action}
        </div>
      </div>
      <div style={{padding:16}}>{children}</div>
    </div>
  );
}

function TermBtn({ onClick, label, primary }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{ background:primary&&hov?C.greenDim:primary?C.greenFaint:"transparent", border:`1px solid ${primary?C.green:C.border}`, color:primary?C.green:C.grey, fontFamily:"'Share Tech Mono',monospace", fontSize:10, letterSpacing:"0.15em", padding:"6px 12px", borderRadius:2, cursor:"pointer", boxShadow:primary&&hov?`0 0 12px ${C.green}`:"none", transition:"all 0.15s" }}>
      {label}
    </button>
  );
}

export default function App() {
  const [booted, setBooted] = useState(false);
  return (
    <>
      <style>{globalCSS}</style>
      {booted ? <Dashboard/> : <BootSequence onComplete={()=>setBooted(true)}/>}
    </>
  );
}
