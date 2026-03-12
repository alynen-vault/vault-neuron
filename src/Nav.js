import { useState, useEffect } from "react";
import { C, PAGES } from "./tokens";

export function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(8,8,15,0.97)" : "transparent",
      borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
      transition: "all 0.3s",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      padding: "0 clamp(16px,4vw,48px)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: 64,
    }}>
      <button onClick={() => setPage("Home")} style={{
        background: "none", border: "none", cursor: "pointer",
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: `linear-gradient(135deg,${C.purple},${C.teal})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 14, fontWeight: 900, color: "#fff", fontFamily: "monospace",
        }}>VN</div>
        <span style={{
          fontSize: 15, fontWeight: 700, color: C.white,
          fontFamily: "'Georgia', serif", letterSpacing: 0.5,
        }}>Vault Neuron</span>
      </button>

      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        {PAGES.map(p => (
          <button key={p} onClick={() => setPage(p)} style={{
            background: p === "Assessment"
              ? `linear-gradient(135deg,${C.purple},${C.teal})`
              : page === p ? C.panel : "transparent",
            border: p === "Assessment" ? "none" : `1px solid ${page === p ? C.border : "transparent"}`,
            borderRadius: 6,
            padding: "7px 14px",
            color: p === "Assessment" ? "#fff" : page === p ? C.white : C.slate,
            fontSize: 13, cursor: "pointer",
            fontFamily: "'Georgia', serif",
            transition: "all 0.15s",
          }}>{p}</button>
        ))}
      </div>
    </nav>
  );
}

export function Footer({ setPage }) {
  return (
    <footer style={{
      background: C.dark,
      borderTop: `1px solid ${C.border}`,
      padding: "48px clamp(20px,6vw,80px) 32px",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        gap: 40, marginBottom: 40,
      }}>
        <div>
          <div style={{
            fontSize: 16, fontWeight: 700, color: C.white,
            fontFamily: "'Georgia', serif", marginBottom: 12,
          }}>Vault Neuron</div>
          <p style={{
            fontSize: 13, color: C.slate, lineHeight: 1.7,
            fontFamily: "'Georgia', serif", margin: "0 0 16px",
          }}>
            Vendor intelligence systems for industrial distributors. Not a tool.
            Not a consultant. The architecture in between.
          </p>
          <div style={{ fontSize: 13, color: C.teal, fontFamily: "monospace" }}>
            connect@vaultneuron.com
          </div>
        </div>

        <div>
          <div style={{
            fontSize: 11, color: C.slate, fontFamily: "monospace",
            letterSpacing: 2, marginBottom: 16,
          }}>NAVIGATE</div>
          {PAGES.map(p => (
            <button key={p} onClick={() => setPage(p)} style={{
              display: "block", background: "none", border: "none",
              color: C.slate, fontSize: 14, cursor: "pointer",
              marginBottom: 8, fontFamily: "'Georgia', serif",
              textAlign: "left", padding: 0,
            }}>{p}</button>
          ))}
        </div>

        <div>
          <div style={{
            fontSize: 11, color: C.slate, fontFamily: "monospace",
            letterSpacing: 2, marginBottom: 16,
          }}>START HERE</div>
          <button onClick={() => setPage("Assessment")} style={{
            background: `linear-gradient(135deg,${C.purple},${C.teal})`,
            border: "none", borderRadius: 8, padding: "12px 20px",
            color: "#fff", fontSize: 14, cursor: "pointer",
            fontFamily: "'Georgia', serif", fontWeight: 700,
          }}>Free Assessment →</button>
          <p style={{
            fontSize: 12, color: C.slate, marginTop: 12, fontFamily: "monospace",
          }}>5 minutes · Instant results</p>
        </div>
      </div>

      <div style={{
        borderTop: `1px solid ${C.border}`, paddingTop: 24,
        display: "flex", justifyContent: "space-between",
        flexWrap: "wrap", gap: 12,
        fontSize: 12, color: C.slate, fontFamily: "monospace",
      }}>
        <span>© 2026 Vault Neuron · Lynen Iron Legacy LLC</span>
        <span style={{ color: C.purple }}>Architecting Operational Intelligence</span>
      </div>
    </footer>
  );
}
