// ── Design tokens ─────────────────────────────────────────────────────────
export const C = {
  bg:      "#08080F",
  dark:    "#0D0D1A",
  mid:     "#12121F",
  panel:   "#161625",
  border:  "#1E1E35",
  purple:  "#7C3AED",
  purpleL: "#A78BFA",
  teal:    "#0D9488",
  tealL:   "#2DD4BF",
  amber:   "#D97706",
  amberL:  "#FCD34D",
  white:   "#F8FAFC",
  slate:   "#94A3B8",
  light:   "#CBD5E1",
};

export const PAGES = ["Home", "Solutions", "About", "The Vault", "Assessment"];

// ── Reusable Tag chip ──────────────────────────────────────────────────────
export const Tag = ({ text, color = C.purple }) => (
  <span style={{
    background: color + "22",
    border: `1px solid ${color}44`,
    borderRadius: 4,
    padding: "3px 10px",
    fontSize: 11,
    color,
    fontFamily: "monospace",
    letterSpacing: 2,
    textTransform: "uppercase",
    display: "inline-block",
  }}>{text}</span>
);

// ── Fade-in on mount ───────────────────────────────────────────────────────
import { useState, useEffect } from "react";
export function useFade(delay = 0) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVis(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return {
    style: {
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(20px)",
      transition: "all 0.6s ease",
    }
  };
}
