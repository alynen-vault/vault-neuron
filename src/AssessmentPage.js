import { useState } from "react";
import { C, Tag } from "./tokens";

export default function AssessmentPage() {
  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult]   = useState(null);
  const [name, setName]       = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail]     = useState("");

  // ── EDIT THESE to update assessment questions ──────────────────────────
  const QUESTIONS = [
    {
      id: "v1", pillar: "Vendor Data", color: C.teal,
      q: "When a vendor sends a price update, how does it get into your system?",
      opts: [
        { text: "Someone enters it manually when they get to it", pts: 2 },
        { text: "We have a process but it still requires manual entry", pts: 6 },
        { text: "It flows in semi-automatically with some manual review", pts: 10 },
      ],
    },
    {
      id: "v2", pillar: "Vendor Data", color: C.teal,
      q: "How current is the pricing in your quoting system right now?",
      opts: [
        { text: "Honestly — I'm not sure. It could be weeks behind.", pts: 2 },
        { text: "Usually within a week or two of vendor updates", pts: 6 },
        { text: "Within a day or two — we're pretty on top of it", pts: 10 },
      ],
    },
    {
      id: "v3", pillar: "Vendor Data", color: C.teal,
      q: "How do your CSRs look up part specifications when a customer calls?",
      opts: [
        { text: "Vendor portals, PDF catalogs, or calling the vendor directly", pts: 2 },
        { text: "A mix — some vendors in our system, some external", pts: 6 },
        { text: "Mostly in one system — we have most vendors covered", pts: 10 },
      ],
    },
    {
      id: "w1", pillar: "Workflow Velocity", color: C.purple,
      q: "How long does it typically take a CSR to answer a customer's part availability question?",
      opts: [
        { text: "5+ minutes — they have to check multiple places", pts: 2 },
        { text: "2 to 5 minutes — usually a couple of lookups", pts: 5 },
        { text: "Under 2 minutes — it's pretty streamlined", pts: 8 },
      ],
    },
    {
      id: "w2", pillar: "Workflow Velocity", color: C.purple,
      q: "When a customer uses their own internal part number, how does your team handle it?",
      opts: [
        { text: "It depends on who picks up — some people just know", pts: 2 },
        { text: "We have a rough reference but it's not always complete", pts: 5 },
        { text: "We have a solid cross-reference system for regular customers", pts: 8 },
      ],
    },
    {
      id: "d1", pillar: "Decision Intelligence", color: C.amber,
      q: "How does your leadership currently track operational performance?",
      opts: [
        { text: "Mostly gut feel and experience — formal reporting is light", pts: 2 },
        { text: "Some reports exist but they're built manually and infrequent", pts: 6 },
        { text: "We have regular reporting but it takes time to pull together", pts: 10 },
      ],
    },
    {
      id: "d2", pillar: "Decision Intelligence", color: C.amber,
      q: "How do you find out about a pricing or order problem?",
      opts: [
        { text: "Usually when a customer tells us", pts: 2 },
        { text: "Someone on the team catches it during their workflow", pts: 6 },
        { text: "We have checks in place that catch most issues proactively", pts: 10 },
      ],
    },
    {
      id: "d3", pillar: "Decision Intelligence", color: C.amber,
      q: "How many primary vendors does your team actively manage?",
      opts: [
        { text: "20 or more — and keeping up with all of them is a challenge", pts: 2 },
        { text: "10 to 20 — manageable but there are gaps", pts: 6 },
        { text: "Under 10 — we have pretty good coverage", pts: 10 },
      ],
    },
  ];

  // Score tiers — adjust thresholds and copy here
  const TIERS = [
    {
      min: 80, color: C.teal,
      tier: "Operational Intelligence Ready",
      headline: "Your foundation is solid.",
      desc: "Your systems are largely connected and your team has reasonable coverage. The opportunity is augmenting with automation and AI to get from good to exceptional.",
      rec: "The Architecture — fractional oversight to layer in advanced automation",
    },
    {
      min: 60, color: C.purple,
      tier: "Scaling Friction Detected",
      headline: "You have the pieces — they're just not connected.",
      desc: "Your systems exist but work independently. Manual handoffs, pricing delays, and lookup friction are costing you time and margin every day that compounds as you grow.",
      rec: "The Build — vendor intelligence system across your primary suppliers",
    },
    {
      min: 40, color: C.amber,
      tier: "Architecture Stress Identified",
      headline: "Your operation is carrying significant hidden cost.",
      desc: "Multiple layers of your vendor data architecture are under stress. Pricing, parts lookup, and operational visibility are all areas where manual processes substitute for systems that should exist.",
      rec: "The Blueprint — start with a full operational diagnostic",
    },
    {
      min: 0, color: "#EF4444",
      tier: "Critical Operational Fragmentation",
      headline: "Your team is the system right now.",
      desc: "Your operation is heavily dependent on manual coordination and institutional knowledge. This works until it doesn't — and the cost grows every month.",
      rec: "The Blueprint — urgent operational diagnostic and architecture roadmap",
    },
  ];
  // ── END EDITABLE SECTION ───────────────────────────────────────────────

  const PILLARS = [
    { name: "Vendor Data", max: 30, color: C.teal },
    { name: "Workflow Velocity", max: 16, color: C.purple },
    { name: "Decision Intelligence", max: 30, color: C.amber },
  ];

  const progress = step < QUESTIONS.length
    ? Math.round((step / QUESTIONS.length) * 100)
    : step === QUESTIONS.length ? 95 : 100;

  const handleAnswer = (qid, pts) => {
    const newAnswers = { ...answers, [qid]: pts };
    setAnswers(newAnswers);
    if (step < QUESTIONS.length - 1) {
      setStep(s => s + 1);
    } else {
      setStep(QUESTIONS.length);
    }
  };

  const handleSubmit = () => {
    const total = Object.values(answers).reduce((a, b) => a + b, 0);
    const max = 76;
    const pct = Math.round((total / max) * 100);
    const tier = TIERS.find(t => pct >= t.min) || TIERS[TIERS.length - 1];
    setResult({ total, max, pct, ...tier });
    setStep(QUESTIONS.length + 1);
  };

  const q = QUESTIONS[step];

  const pillarScores = PILLARS.map(p => ({
    ...p,
    score: Object.entries(answers)
      .filter(([k]) => QUESTIONS.find(q => q.id === k)?.pillar === p.name)
      .reduce((a, [, v]) => a + v, 0),
  }));

  const inputStyle = {
    width: "100%", background: C.panel,
    border: `1px solid ${C.border}`, borderRadius: 8,
    padding: "12px 16px", color: C.white, fontSize: 15,
    fontFamily: "'Georgia', serif", outline: "none",
    boxSizing: "border-box",
  };

  return (
    <div style={{ paddingTop: 80, minHeight: "100vh" }}>
      <section style={{ padding: "60px clamp(20px,6vw,80px)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>

          {/* Intro header — shows before first answer */}
          {step === 0 && Object.keys(answers).length === 0 && (
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <Tag text="Free · 5 Minutes" color={C.teal}/>
              <h1 style={{
                fontFamily: "'Georgia', serif", fontSize: "clamp(26px,5vw,48px)",
                fontWeight: 400, color: C.white, margin: "20px 0 16px", lineHeight: 1.2,
              }}>Operational Readiness Assessment</h1>
              <p style={{
                fontSize: 17, color: C.slate, lineHeight: 1.7,
                fontFamily: "'Georgia', serif", maxWidth: 520, margin: "0 auto",
              }}>
                Eight questions across three pillars — vendor data, workflow velocity,
                and decision intelligence. You'll get a scored diagnostic and a
                recommended starting point.
              </p>
            </div>
          )}

          {/* Progress bar */}
          {step <= QUESTIONS.length && (
            <div style={{ marginBottom: 40 }}>
              <div style={{
                display: "flex", justifyContent: "space-between",
                fontSize: 11, fontFamily: "monospace", color: C.slate, marginBottom: 8,
              }}>
                <span>
                  {step < QUESTIONS.length
                    ? `QUESTION ${step + 1} OF ${QUESTIONS.length}`
                    : "ALMOST DONE"}
                </span>
                <span style={{ color: C.teal }}>{progress}%</span>
              </div>
              <div style={{ height: 3, background: C.border, borderRadius: 2 }}>
                <div style={{
                  width: progress + "%", height: "100%", borderRadius: 2,
                  background: `linear-gradient(90deg,${C.purple},${C.teal})`,
                  transition: "width 0.4s ease",
                }}/>
              </div>
            </div>
          )}

          {/* Question */}
          {step < QUESTIONS.length && (
            <div>
              <div style={{ marginBottom: 24 }}>
                <Tag text={q.pillar} color={q.color}/>
              </div>
              <h2 style={{
                fontFamily: "'Georgia', serif", fontSize: "clamp(20px,3vw,28px)",
                fontWeight: 400, color: C.white, margin: "0 0 32px", lineHeight: 1.4,
              }}>{q.q}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {q.opts.map((opt, i) => (
                  <button key={i} onClick={() => handleAnswer(q.id, opt.pts)} style={{
                    background: C.panel, border: `1px solid ${C.border}`,
                    borderRadius: 10, padding: "18px 22px", textAlign: "left",
                    cursor: "pointer", color: C.light, fontSize: 16,
                    fontFamily: "'Georgia', serif", lineHeight: 1.5,
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = q.color;
                    e.currentTarget.style.background = q.color + "18";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.background = C.panel;
                  }}>
                    <span style={{
                      display: "inline-block", width: 20, height: 20,
                      borderRadius: "50%", border: `2px solid ${C.border}`,
                      marginRight: 14, verticalAlign: "middle",
                    }}/>
                    {opt.text}
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button onClick={() => setStep(s => s - 1)} style={{
                  marginTop: 20, background: "transparent", border: "none",
                  color: C.slate, fontSize: 13, cursor: "pointer", fontFamily: "monospace",
                }}>← Back</button>
              )}
            </div>
          )}

          {/* Contact info */}
          {step === QUESTIONS.length && (
            <div>
              <Tag text="One Last Step" color={C.purple}/>
              <h2 style={{
                fontFamily: "'Georgia', serif", fontSize: "clamp(20px,3vw,32px)",
                fontWeight: 400, color: C.white, margin: "16px 0 12px",
              }}>Where should we send your diagnostic?</h2>
              <p style={{
                fontSize: 15, color: C.slate, marginBottom: 32,
                fontFamily: "'Georgia', serif",
              }}>
                Your personalized report will include your score, pillar breakdown,
                and recommended next step.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
                {[
                  { label: "Your Name", val: name, set: setName, ph: "First name is fine" },
                  { label: "Company", val: company, set: setCompany, ph: "Your company name" },
                  { label: "Work Email", val: email, set: setEmail, ph: "you@yourcompany.com" },
                ].map(({ label, val, set, ph }) => (
                  <div key={label}>
                    <div style={{
                      fontSize: 11, color: C.slate, fontFamily: "monospace",
                      letterSpacing: 2, marginBottom: 6,
                    }}>{label.toUpperCase()}</div>
                    <input value={val} onChange={e => set(e.target.value)}
                      placeholder={ph} style={inputStyle}/>
                  </div>
                ))}
              </div>
              <button onClick={handleSubmit} disabled={!name || !email} style={{
                width: "100%",
                background: name && email
                  ? `linear-gradient(135deg,${C.purple},${C.teal})`
                  : C.border,
                border: "none", borderRadius: 8, padding: "16px",
                color: name && email ? "#fff" : C.slate,
                fontSize: 16,
                cursor: name && email ? "pointer" : "default",
                fontFamily: "'Georgia', serif", fontWeight: 700,
              }}>Get My Diagnostic Report →</button>
            </div>
          )}

          {/* Results */}
          {result && step === QUESTIONS.length + 1 && (
            <div>
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <Tag text={result.tier} color={result.color}/>
                <h2 style={{
                  fontFamily: "'Georgia', serif", fontSize: "clamp(22px,4vw,40px)",
                  fontWeight: 400, color: C.white, margin: "16px 0 12px",
                }}>{result.headline}</h2>
                <p style={{
                  fontSize: 16, color: C.light, lineHeight: 1.7,
                  fontFamily: "'Georgia', serif", maxWidth: 520, margin: "0 auto",
                }}>{result.desc}</p>
              </div>

              {/* Score card */}
              <div style={{
                background: C.panel, border: `1px solid ${result.color}44`,
                borderRadius: 12, padding: "28px", marginBottom: 24,
              }}>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "flex-end", marginBottom: 16,
                }}>
                  <div>
                    <div style={{
                      fontSize: 11, color: C.slate, fontFamily: "monospace",
                      letterSpacing: 2, marginBottom: 4,
                    }}>OVERALL SCORE</div>
                    <div style={{
                      fontSize: 52, color: result.color,
                      fontFamily: "monospace", fontWeight: 700, lineHeight: 1,
                    }}>
                      {result.pct}
                      <span style={{ fontSize: 22, color: C.slate }}>%</span>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, color: C.slate }}>
                    {result.total} / {result.max} points
                  </div>
                </div>
                <div style={{ height: 6, background: C.border, borderRadius: 3, marginBottom: 24 }}>
                  <div style={{
                    width: result.pct + "%", height: "100%", borderRadius: 3,
                    background: `linear-gradient(90deg,${C.purple},${result.color})`,
                  }}/>
                </div>
                {/* Pillar breakdown */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {pillarScores.map((ps, i) => (
                    <div key={i}>
                      <div style={{
                        display: "flex", justifyContent: "space-between",
                        fontSize: 12, marginBottom: 5,
                      }}>
                        <span style={{ fontFamily: "monospace", color: ps.color, letterSpacing: 1 }}>
                          {ps.name}
                        </span>
                        <span style={{ fontFamily: "monospace", color: C.slate }}>
                          {ps.score}/{ps.max}
                        </span>
                      </div>
                      <div style={{ height: 4, background: C.border, borderRadius: 2 }}>
                        <div style={{
                          width: Math.round((ps.score / ps.max) * 100) + "%",
                          height: "100%", borderRadius: 2, background: ps.color,
                        }}/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendation */}
              <div style={{
                background: `linear-gradient(135deg,${C.purple}18,${C.teal}12)`,
                border: `1px solid ${C.purple}44`,
                borderRadius: 12, padding: "24px 28px", marginBottom: 28,
              }}>
                <div style={{
                  fontSize: 11, color: C.purple, fontFamily: "monospace",
                  letterSpacing: 2, marginBottom: 10,
                }}>RECOMMENDED STARTING POINT</div>
                <div style={{
                  fontSize: 18, color: C.white,
                  fontFamily: "'Georgia', serif", fontWeight: 700,
                }}>{result.rec}</div>
              </div>

              <div style={{
                fontSize: 14, color: C.slate, fontFamily: "'Georgia', serif",
                textAlign: "center", marginBottom: 24, lineHeight: 1.6,
              }}>
                Your full diagnostic report has been sent to{" "}
                <strong style={{ color: C.white }}>{email}</strong>
              </div>

              <button style={{
                width: "100%",
                background: `linear-gradient(135deg,${C.purple},${C.teal})`,
                border: "none", borderRadius: 8, padding: "16px",
                color: "#fff", fontSize: 16, cursor: "pointer",
                fontFamily: "'Georgia', serif", fontWeight: 700,
              }}>
                Schedule a 20-Minute Call with Vault Neuron →
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
