import { C, Tag } from "./tokens";

export default function VaultPage({ setPage }) {

  // ── ADD NEW BLOG POSTS HERE — just copy a block and fill it in ────────
  const POSTS = [
    {
      tag: "Vendor Intelligence", color: C.teal, date: "March 2026",
      title: "If Your Data Is a Mess, AI Is Just a Faster Way to Be Wrong",
      excerpt: "Everyone is rushing to add AI to their operations. But if the pricing in your system is two weeks old and your part numbers don't match your customers' numbers, AI doesn't fix that — it just makes the wrong answer arrive faster.",
      read: "5 min read",
    },
    {
      tag: "Pricing Architecture", color: C.purple, date: "February 2026",
      title: "The Hidden Cost of Manual Price Entry in Industrial Distribution",
      excerpt: "You know manual price entry is slow. What most distributors haven't calculated is what it costs in margin — every quote that goes out on last week's prices, every customer who catches the discrepancy before you do.",
      read: "4 min read",
    },
    {
      tag: "Operations", color: C.amber, date: "January 2026",
      title: "Why the Person Who Knows Everything Is Your Biggest Operational Risk",
      excerpt: "Every industrial distributor has one. The person who knows the part number cross-references, the vendor quirks, the customer preferences. When that person leaves, they take your operational knowledge with them.",
      read: "6 min read",
    },
    {
      tag: "Getting Started", color: C.teal, date: "December 2025",
      title: "The Three Layers of Operational Friction (And Which One to Fix First)",
      excerpt: "Not all operational friction is the same. Pricing friction, parts friction, and process friction each cost you differently and require different fixes. Here's how to identify which layer is hurting you most right now.",
      read: "7 min read",
    },
  ];
  // ── END EDITABLE SECTION ───────────────────────────────────────────────

  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: "80px clamp(20px,6vw,80px)" }}>
        <div style={{ maxWidth: 800, marginBottom: 64 }}>
          <Tag text="The Vault" color={C.purple}/>
          <h1 style={{
            fontFamily: "'Georgia', serif", fontSize: "clamp(28px,5vw,56px)",
            fontWeight: 400, color: C.white, margin: "20px 0 20px",
          }}>
            Operational intelligence isn't created by tools.
          </h1>
          <p style={{
            fontSize: 18, color: C.slate, lineHeight: 1.7,
            fontFamily: "'Georgia', serif",
          }}>
            It comes from how systems are designed. The Vault is where Vault Neuron shares
            what we learn building vendor intelligence systems for industrial distributors.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 20,
        }}>
          {POSTS.map((post, i) => (
            <div key={i} style={{
              background: C.panel, border: `1px solid ${C.border}`,
              borderRadius: 12, padding: "28px 26px",
              borderTop: `3px solid ${post.color}`,
              cursor: "pointer", display: "flex", flexDirection: "column",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <Tag text={post.tag} color={post.color}/>
                <span style={{ fontSize: 11, color: C.slate, fontFamily: "monospace" }}>
                  {post.date}
                </span>
              </div>
              <h3 style={{
                fontFamily: "'Georgia', serif", fontSize: 20,
                fontWeight: 400, color: C.white, lineHeight: 1.3,
                margin: "0 0 14px", flex: 1,
              }}>{post.title}</h3>
              <p style={{
                fontSize: 14, color: C.slate, lineHeight: 1.7,
                fontFamily: "'Georgia', serif", margin: "0 0 20px",
              }}>{post.excerpt}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 12, color: post.color, fontFamily: "monospace" }}>
                  {post.read}
                </span>
                <span style={{ color: post.color, fontSize: 16 }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{
        padding: "80px clamp(20px,6vw,80px)",
        background: C.dark, borderTop: `1px solid ${C.border}`,
        textAlign: "center",
      }}>
        <Tag text="Free Resource" color={C.teal}/>
        <h2 style={{
          fontFamily: "'Georgia', serif", fontSize: "clamp(22px,4vw,40px)",
          fontWeight: 400, color: C.white, margin: "20px 0 16px",
        }}>See where your operation stands</h2>
        <p style={{
          fontSize: 16, color: C.slate, maxWidth: 480, margin: "0 auto 36px",
          fontFamily: "'Georgia', serif", lineHeight: 1.7,
        }}>
          Five minutes. Three pillars. A clear picture of what's costing you the most.
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
