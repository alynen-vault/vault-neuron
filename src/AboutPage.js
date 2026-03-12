import { C, Tag } from "./tokens";

export default function AboutPage({ setPage }) {

  // ── EDIT THESE to update About page ───────────────────────────────────
  const TIMELINE = [
    {
      year: "Army",
      role: "Military Police & Ordnance Officer",
      note: "Learned to operate in high-stakes, high-complexity environments where systems either work or people pay the price.",
    },
    {
      year: "Logistics",
      role: "Cross-Dock Supervisor · Hormel",
      note: "First real look at what happens when operational data doesn't flow — and how much it costs per hour when it doesn't.",
    },
    {
      year: "Field Ops",
      role: "Branch Manager · Airgas",
      note: "Ran the largest branch in the district. Industrial distribution, vendor relationships, and the daily fight to keep pricing and inventory accurate.",
    },
    {
      year: "Defense",
      role: "Program Manager · C-17 Contractor",
      note: "Complex multi-stakeholder program management. Systems thinking at scale.",
    },
    {
      year: "Now",
      role: "Business Intelligence · Air Force AFICC",
      note: "5 years in government BI — building intelligence systems, automating reporting, and designing data architecture that actually gets used.",
    },
  ];

  const FAST_FACTS = [
    { label: "Industries", value: "Industrial distribution, logistics, defense, government BI" },
    { label: "Background", value: "Operations management, program management, business intelligence" },
    { label: "Approach", value: "Build it, document it, hand it to you running" },
    { label: "Location", value: "Dayton, Ohio area · Serving industrial distributors nationally" },
  ];
  // ── END EDITABLE SECTION ───────────────────────────────────────────────

  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: "80px clamp(20px,6vw,80px)" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))",
          gap: 60, maxWidth: 1000, alignItems: "start",
        }}>
          <div>
            <Tag text="The Architect" color={C.purple}/>
            <h1 style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(28px,4vw,52px)",
              fontWeight: 400, color: C.white, margin: "20px 0 24px", lineHeight: 1.2,
            }}>
              Built by someone who's been on your side of the problem
            </h1>
            <p style={{
              fontSize: 16, color: C.light, lineHeight: 1.8,
              fontFamily: "'Georgia', serif", marginBottom: 20,
            }}>
              Vault Neuron was founded by Amber Lynen — not because she saw a market opportunity,
              but because she spent 15 years watching the same operational problem repeat itself
              across every industry she worked in.
            </p>
            <p style={{
              fontSize: 16, color: C.slate, lineHeight: 1.8,
              fontFamily: "'Georgia', serif", marginBottom: 20,
            }}>
              Branch manager at a major industrial gas distributor. Cross-dock supervisor.
              Program manager on defense contracts. Business intelligence architect for the Air Force.
              A master's in transportation and logistics she finally found a use for.
            </p>
            <p style={{
              fontSize: 16, color: C.slate, lineHeight: 1.8,
              fontFamily: "'Georgia', serif",
            }}>
              In every role, the same thing broke down: systems that didn't talk to each other,
              pricing that lived in someone's inbox, and teams spending half their day moving data
              that should move itself.
            </p>
          </div>

          <div>
            <div style={{
              background: C.panel, border: `1px solid ${C.border}`,
              borderRadius: 14, padding: "32px 28px",
              borderTop: `3px solid ${C.purple}`, marginBottom: 20,
            }}>
              <div style={{
                fontSize: 11, color: C.purple, fontFamily: "monospace",
                letterSpacing: 3, marginBottom: 20, textTransform: "uppercase",
              }}>The Core Belief</div>
              <blockquote style={{
                fontFamily: "'Georgia', serif", fontSize: 22,
                color: C.white, lineHeight: 1.5,
                margin: "0 0 24px", fontStyle: "italic",
              }}>
                "Most companies don't have an automation problem. They have an operational architecture problem."
              </blockquote>
              <p style={{
                fontSize: 14, color: C.slate, lineHeight: 1.7,
                fontFamily: "'Georgia', serif", margin: 0,
              }}>
                The tools usually exist. The data usually exists. What's missing is the architecture
                that connects them — and someone who understands operations well enough to build it right.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {FAST_FACTS.map(({ label, value }, i) => (
                <div key={i} style={{
                  display: "flex", gap: 16,
                  background: C.panel, border: `1px solid ${C.border}`,
                  borderRadius: 8, padding: "12px 16px",
                }}>
                  <span style={{
                    fontSize: 11, color: C.teal, fontFamily: "monospace",
                    letterSpacing: 1, flexShrink: 0, paddingTop: 2, minWidth: 80,
                  }}>{label}</span>
                  <span style={{ fontSize: 13, color: C.light, fontFamily: "'Georgia', serif" }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{
        padding: "80px clamp(20px,6vw,80px)",
        background: C.dark, borderTop: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Tag text="The Background" color={C.teal}/>
          <h2 style={{
            fontFamily: "'Georgia', serif", fontSize: "clamp(22px,4vw,40px)",
            fontWeight: 400, color: C.white, margin: "20px 0 48px",
          }}>15 years of operational reality</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {TIMELINE.map((item, i) => (
              <div key={i} style={{
                display: "flex", gap: 24, paddingBottom: 32,
                borderLeft: i < TIMELINE.length - 1
                  ? `2px solid ${C.border}`
                  : "2px solid transparent",
                marginLeft: 12,
              }}>
                <div style={{
                  width: 24, height: 24, borderRadius: "50%",
                  background: `linear-gradient(135deg,${C.purple},${C.teal})`,
                  flexShrink: 0, marginLeft: -13, marginTop: 2,
                }}/>
                <div>
                  <div style={{
                    fontSize: 11, color: C.teal, fontFamily: "monospace",
                    letterSpacing: 2, marginBottom: 4, textTransform: "uppercase",
                  }}>{item.year}</div>
                  <div style={{
                    fontSize: 16, color: C.white, fontWeight: 700,
                    fontFamily: "'Georgia', serif", marginBottom: 8,
                  }}>{item.role}</div>
                  <div style={{
                    fontSize: 14, color: C.slate, fontFamily: "'Georgia', serif", lineHeight: 1.6,
                  }}>{item.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px clamp(20px,6vw,80px)", textAlign: "center" }}>
        <h2 style={{
          fontFamily: "'Georgia', serif", fontSize: "clamp(22px,4vw,40px)",
          fontWeight: 400, color: C.white, margin: "0 0 16px",
        }}>Ready to fix the architecture?</h2>
        <button onClick={() => setPage("Assessment")} style={{
          background: `linear-gradient(135deg,${C.purple},${C.teal})`,
          border: "none", borderRadius: 8, padding: "14px 32px",
          color: "#fff", fontSize: 15, cursor: "pointer",
          fontFamily: "'Georgia', serif", fontWeight: 700, marginTop: 8,
        }}>Start with the Free Assessment →</button>
      </section>
    </div>
  );
}
