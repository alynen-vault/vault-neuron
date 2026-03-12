import { C, Tag, useFade } from "./tokens";

export default function HomePage({ setPage }) {
  const h1 = useFade(100), h2 = useFade(250), h3 = useFade(400), h4 = useFade(550);

  // ── EDIT THESE to update the homepage content ──────────────────────────
  const HEADLINE      = "Your vendors have the data.";
  const HEADLINE_HL   = "Your team shouldn't have to hunt for it.";
  const SUBHEADLINE   = "Vault Neuron builds vendor intelligence systems for industrial distributors — so your CSRs answer in seconds, your pricing stays current automatically, and your quotes go out right the first time.";
  const CTA_PRIMARY   = "Run Your Operational Assessment →";
  const CTA_SECONDARY = "See How It Works";

  const PAIN_POINTS = [
    "Your CSRs visit 6 browser tabs to answer one customer question",
    "Vendor price sheets sit in inboxes waiting to be manually entered",
    "A customer tells you about a price change before your system does",
    "Quoting from last week's prices because this week's aren't in yet",
    "The person who knows your part number cross-references just quit",
  ];

  const PAIN_ICONS = ["⬡", "◈", "◎", "▣", "◆"];

  const STEPS = [
    {
      num: "01", title: "The Blueprint", sub: "Operational Diagnostic", color: C.purple,
      desc: "We map exactly how vendor data moves through your operation — what breaks, what's manual, what costs you time and margin every day.",
    },
    {
      num: "02", title: "The Build", sub: "Vendor Intelligence System", color: C.teal,
      desc: "We build the system. Part number databases, pricing pipelines, CSR lookup tools. Connected, clean, and yours to keep.",
    },
    {
      num: "03", title: "The Architecture", sub: "Fractional Oversight", color: C.amber,
      desc: "Ongoing support as you add vendors, grow your team, and layer in more automation. We evolve the system as the business does.",
    },
  ];
  // ── END EDITABLE SECTION ───────────────────────────────────────────────

  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "flex-start",
        padding: "120px clamp(20px,6vw,80px) 80px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}/>
        <div style={{
          position: "absolute", top: "20%", right: "10%",
          width: 500, height: 500, borderRadius: "50%",
          background: `radial-gradient(circle, ${C.purple}18 0%, transparent 70%)`,
          zIndex: 0,
        }}/>
        <div style={{
          position: "absolute", bottom: "20%", left: "5%",
          width: 400, height: 400, borderRadius: "50%",
          background: `radial-gradient(circle, ${C.teal}14 0%, transparent 70%)`,
          zIndex: 0,
        }}/>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 780 }}>
          <div {...h1} style={{ ...h1.style, marginBottom: 24 }}>
            <Tag text="For Industrial Distributors" color={C.teal}/>
          </div>
          <h1 {...h2} style={{
            ...h2.style,
            fontSize: "clamp(36px,6vw,72px)", fontWeight: 400, lineHeight: 1.1,
            fontFamily: "'Georgia', serif", color: C.white, margin: "0 0 24px",
          }}>
            {HEADLINE}<br/>
            <span style={{ color: C.purpleL }}>{HEADLINE_HL}</span>
          </h1>
          <p {...h3} style={{
            ...h3.style,
            fontSize: "clamp(16px,2vw,20px)", color: C.slate, lineHeight: 1.7,
            maxWidth: 600, margin: "0 0 40px", fontFamily: "'Georgia', serif",
          }}>{SUBHEADLINE}</p>
          <div {...h4} style={{ ...h4.style, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={() => setPage("Assessment")} style={{
              background: `linear-gradient(135deg,${C.purple},${C.teal})`,
              border: "none", borderRadius: 8, padding: "14px 28px",
              color: "#fff", fontSize: 15, cursor: "pointer",
              fontFamily: "'Georgia', serif", fontWeight: 700,
              boxShadow: `0 0 32px ${C.purple}44`,
            }}>{CTA_PRIMARY}</button>
            <button onClick={() => setPage("Solutions")} style={{
              background: "transparent",
              border: `1px solid ${C.border}`, borderRadius: 8, padding: "14px 28px",
              color: C.light, fontSize: 15, cursor: "pointer",
              fontFamily: "'Georgia', serif",
            }}>{CTA_SECONDARY}</button>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section style={{
        padding: "80px clamp(20px,6vw,80px)",
        background: C.dark, borderTop: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{
            fontFamily: "monospace", fontSize: 11, letterSpacing: 4,
            color: C.teal, textTransform: "uppercase", marginBottom: 16,
          }}>SOUND FAMILIAR?</p>
          <h2 style={{
            fontFamily: "'Georgia', serif", fontSize: "clamp(24px,4vw,40px)",
            fontWeight: 400, color: C.white, margin: "0 0 48px", lineHeight: 1.3,
          }}>The daily tax of a broken<br/>vendor data architecture</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {PAIN_POINTS.map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 20,
                background: C.panel, border: `1px solid ${C.border}`,
                borderRadius: 10, padding: "18px 24px",
                borderLeft: `3px solid ${i % 2 === 0 ? C.purple : C.teal}`,
              }}>
                <span style={{ fontSize: 20, flexShrink: 0, color: i % 2 === 0 ? C.purple : C.teal }}>
                  {PAIN_ICONS[i]}
                </span>
                <span style={{ fontSize: 16, color: C.light, fontFamily: "'Georgia', serif", lineHeight: 1.5 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 40, padding: "24px 28px",
            background: `linear-gradient(135deg, ${C.purple}15, ${C.teal}10)`,
            border: `1px solid ${C.purple}33`, borderRadius: 12,
          }}>
            <p style={{
              fontFamily: "'Georgia', serif", fontSize: 18,
              color: C.white, margin: 0, lineHeight: 1.6,
            }}>
              This isn't an IT problem. It's an{" "}
              <strong style={{ color: C.purpleL }}>operational architecture problem</strong>
              {" "}— and it has a fix that doesn't require a six-figure software contract or a full-time developer.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "80px clamp(20px,6vw,80px)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{
            fontFamily: "monospace", fontSize: 11, letterSpacing: 4,
            color: C.purple, textTransform: "uppercase", marginBottom: 16,
          }}>HOW IT WORKS</p>
          <h2 style={{
            fontFamily: "'Georgia', serif", fontSize: "clamp(24px,4vw,40px)",
            fontWeight: 400, color: C.white, margin: "0 0 48px",
          }}>Three phases. One connected system.</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20,
          }}>
            {STEPS.map((s, i) => (
              <div key={i} style={{
                background: C.panel, border: `1px solid ${C.border}`,
                borderRadius: 12, padding: "28px 24px",
                borderTop: `3px solid ${s.color}`,
              }}>
                <div style={{
                  fontFamily: "monospace", fontSize: 11, color: s.color,
                  letterSpacing: 3, marginBottom: 12,
                }}>{s.num}</div>
                <h3 style={{
                  fontFamily: "'Georgia', serif", fontSize: 22,
                  fontWeight: 400, color: C.white, margin: "0 0 4px",
                }}>{s.title}</h3>
                <div style={{
                  fontSize: 12, color: s.color, fontFamily: "monospace",
                  letterSpacing: 1, marginBottom: 16,
                }}>{s.sub}</div>
                <p style={{
                  fontSize: 14, color: C.slate, lineHeight: 1.7,
                  margin: 0, fontFamily: "'Georgia', serif",
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "80px clamp(20px,6vw,80px)",
        background: C.dark, borderTop: `1px solid ${C.border}`,
        textAlign: "center",
      }}>
        <Tag text="Free · 5 minutes" color={C.teal}/>
        <h2 style={{
          fontFamily: "'Georgia', serif", fontSize: "clamp(24px,4vw,44px)",
          fontWeight: 400, color: C.white, margin: "20px 0 16px",
        }}>Find out where your operation is leaking</h2>
        <p style={{
          fontSize: 17, color: C.slate, maxWidth: 520, margin: "0 auto 36px",
          fontFamily: "'Georgia', serif", lineHeight: 1.7,
        }}>
          The Operational Readiness Assessment identifies exactly which layer of your vendor
          data architecture is costing you the most time and margin.
        </p>
        <button onClick={() => setPage("Assessment")} style={{
          background: `linear-gradient(135deg,${C.purple},${C.teal})`,
          border: "none", borderRadius: 8, padding: "16px 36px",
          color: "#fff", fontSize: 16, cursor: "pointer",
          fontFamily: "'Georgia', serif", fontWeight: 700,
          boxShadow: `0 0 40px ${C.purple}44`,
        }}>Take the Assessment — It's Free →</button>
      </section>
    </div>
  );
}
