import { C, Tag } from "./tokens";

export default function SolutionsPage({ setPage }) {

  // ── EDIT THESE to update Solutions page ───────────────────────────────
  const SOLUTIONS = [
    {
      tag: "PHASE 1", color: C.purple, num: "01",
      title: "The Blueprint",
      sub: "Operational Diagnostic",
      price: "Starting engagement",
      desc: "We start by understanding exactly how vendor data moves through your operation — or doesn't. We map every system, every manual handoff, every place your team loses time or your pricing loses accuracy.",
      delivers: [
        "Vendor data flow map — where information enters, moves, and breaks down",
        "Friction scoring across pricing, parts lookup, and order management",
        "Architecture gap analysis — what's missing and what it's costing you",
        "Prioritized build roadmap with clear ROI for each phase",
      ],
      fit: "Right for you if: You know something is broken but can't pinpoint exactly what or where to start.",
    },
    {
      tag: "PHASE 2", color: C.teal, num: "02",
      title: "The Build",
      sub: "Vendor Intelligence System",
      price: "Project-based",
      desc: "The hands-on build phase. We take the Blueprint roadmap and turn it into working systems — part number databases, automated pricing pipelines, CSR lookup tools, and cross-reference libraries that actually get used.",
      delivers: [
        "Vendor part number database across your primary suppliers",
        "CSR lookup tool — any part number, any vendor, one screen",
        "Structured price update process (manual to start, automated as you grow)",
        "Part number cross-reference table — customer numbers to your numbers to vendor numbers",
        "Complete build documentation so nothing lives only in someone's head",
      ],
      fit: "Right for you if: You're ready to stop doing manually what a system should do automatically.",
    },
    {
      tag: "PHASE 3", color: C.amber, num: "03",
      title: "The Architecture",
      sub: "Fractional Oversight",
      price: "Monthly retainer",
      desc: "Ongoing operational intelligence oversight. As your vendor relationships grow, your team changes, and your systems need to evolve — we're the consistent architecture layer that keeps everything connected and current.",
      delivers: [
        "Monthly system health review and optimization",
        "New vendor onboarding into existing architecture",
        "Automation upgrades as the foundation matures",
        "Price change monitoring and threshold alerting",
        "Direct access when something breaks or needs to change",
      ],
      fit: "Right for you if: You want someone accountable for keeping the system working as the business grows.",
    },
  ];

  const STACK = [
    { label: "Vendor Catalogs & Price Sheets", desc: "PDF ingestion, portal monitoring, email parsing" },
    { label: "Part Number Intelligence", desc: "Cross-reference databases, customer-to-vendor translation" },
    { label: "Pricing Pipelines", desc: "Automated updates, threshold alerts, margin protection" },
    { label: "CSR Lookup Tools", desc: "One-screen answers for any part, any vendor, any customer number" },
    { label: "Pipeline & CRM Tracking", desc: "Lead to client tracking without expensive software" },
    { label: "Decision Dashboards", desc: "Leadership visibility into operational health in real time" },
  ];
  // ── END EDITABLE SECTION ───────────────────────────────────────────────

  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: "80px clamp(20px,6vw,80px)" }}>
        <div style={{ maxWidth: 800, marginBottom: 64 }}>
          <Tag text="Solutions" color={C.purple}/>
          <h1 style={{
            fontFamily: "'Georgia', serif", fontSize: "clamp(28px,5vw,56px)",
            fontWeight: 400, color: C.white, margin: "20px 0 20px", lineHeight: 1.2,
          }}>
            Not another tool.<br/>
            <span style={{ color: C.purpleL }}>Not a full-time consultant.</span>
          </h1>
          <p style={{
            fontSize: 18, color: C.slate, lineHeight: 1.7,
            fontFamily: "'Georgia', serif", maxWidth: 600,
          }}>
            Vault Neuron sits in the space between expensive software and expensive headcount —
            building the operational infrastructure that makes both unnecessary.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {SOLUTIONS.map((s, i) => (
            <div key={i} style={{
              background: C.panel, border: `1px solid ${C.border}`,
              borderRadius: 14, overflow: "hidden",
            }}>
              <div style={{
                background: `linear-gradient(135deg, ${s.color}18, transparent)`,
                borderBottom: `1px solid ${C.border}`,
                padding: "28px 32px",
                display: "flex", alignItems: "flex-start",
                justifyContent: "space-between", flexWrap: "wrap", gap: 16,
              }}>
                <div>
                  <Tag text={s.tag} color={s.color}/>
                  <h2 style={{
                    fontFamily: "'Georgia', serif", fontSize: 28,
                    fontWeight: 400, color: C.white, margin: "12px 0 4px",
                  }}>{s.title}</h2>
                  <div style={{
                    fontSize: 13, color: s.color, fontFamily: "monospace", letterSpacing: 1,
                  }}>{s.sub}</div>
                </div>
                <span style={{
                  fontSize: 11, fontFamily: "monospace", color: s.color,
                  border: `1px solid ${s.color}44`, borderRadius: 4,
                  padding: "6px 14px", letterSpacing: 2, alignSelf: "flex-start",
                }}>{s.price}</span>
              </div>
              <div style={{ padding: "28px 32px" }}>
                <p style={{
                  fontSize: 16, color: C.light, lineHeight: 1.7,
                  fontFamily: "'Georgia', serif", margin: "0 0 24px",
                }}>{s.desc}</p>
                <div style={{
                  fontSize: 12, color: s.color, fontFamily: "monospace",
                  letterSpacing: 2, marginBottom: 12, textTransform: "uppercase",
                }}>What Gets Delivered</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                  {s.delivers.map((d, j) => (
                    <div key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ color: s.color, flexShrink: 0, marginTop: 2 }}>→</span>
                      <span style={{
                        fontSize: 14, color: C.slate,
                        fontFamily: "'Georgia', serif", lineHeight: 1.6,
                      }}>{d}</span>
                    </div>
                  ))}
                </div>
                <div style={{
                  background: s.color + "15",
                  border: `1px solid ${s.color}33`,
                  borderRadius: 8, padding: "12px 16px",
                  fontSize: 13, color: C.light,
                  fontFamily: "'Georgia', serif", fontStyle: "italic",
                }}>{s.fit}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section style={{
        padding: "80px clamp(20px,6vw,80px)",
        background: C.dark, borderTop: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Tag text="The Stack" color={C.teal}/>
          <h2 style={{
            fontFamily: "'Georgia', serif", fontSize: "clamp(24px,4vw,40px)",
            fontWeight: 400, color: C.white, margin: "20px 0 12px",
          }}>What we actually build</h2>
          <p style={{
            fontSize: 16, color: C.slate, maxWidth: 560, marginBottom: 40,
            fontFamily: "'Georgia', serif", lineHeight: 1.7,
          }}>
            Every engagement is different. But these are the layers we consistently
            build for industrial distributors.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14,
          }}>
            {STACK.map((item, i) => (
              <div key={i} style={{
                background: C.panel, border: `1px solid ${C.border}`,
                borderRadius: 10, padding: "20px 22px",
                borderLeft: `3px solid ${i % 2 === 0 ? C.teal : C.purple}`,
              }}>
                <div style={{
                  fontSize: 14, color: C.white, fontWeight: 700,
                  fontFamily: "'Georgia', serif", marginBottom: 6,
                }}>{item.label}</div>
                <div style={{ fontSize: 13, color: C.slate, fontFamily: "monospace" }}>
                  {item.desc}
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
        }}>Not sure which phase fits?</h2>
        <p style={{
          fontSize: 16, color: C.slate, maxWidth: 480, margin: "0 auto 36px",
          fontFamily: "'Georgia', serif", lineHeight: 1.7,
        }}>
          The assessment tells you exactly where your operation is leaking —
          and which phase addresses it first.
        </p>
        <button onClick={() => setPage("Assessment")} style={{
          background: `linear-gradient(135deg,${C.purple},${C.teal})`,
          border: "none", borderRadius: 8, padding: "14px 32px",
          color: "#fff", fontSize: 15, cursor: "pointer",
          fontFamily: "'Georgia', serif", fontWeight: 700,
        }}>Take the Free Assessment →</button>
      </section>
    </div>
  );
}
