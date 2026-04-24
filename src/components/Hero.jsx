import { useEffect, useState } from "react";
import { Wordmark, Crosshair, Status, Arrow } from "./atoms";
import { CALENDLY_LINK, WHATSAPP_LINK } from "../config";

export function Header() {
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const on = () => setCompact(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={"top" + (compact ? " compact" : "")}>
      <div className="top-inner">
        <Wordmark />
        <nav className="nav">
          <a href="#valor" data-num="01">Valor</a>
          <a href="#proceso" data-num="02">Proceso</a>
          <a href="#clientes" data-num="03">Clientes</a>
          <a href="#contacto" data-num="04">Contacto</a>
        </nav>
        <a href={CALENDLY_LINK} className="btn btn-primary btn-sm">
          Agendar <Arrow />
        </a>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section id="home" className="hero" style={{ position: "relative", paddingTop: 180, paddingBottom: 140, overflow: "hidden" }}>
      <div aria-hidden className="lam-bg">
        <span className="lam-bg-glyph lam-bg-glyph--outline">Λ</span>
        <span className="lam-bg-glyph lam-bg-glyph--fill">Λ</span>
      </div>

      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <Crosshair style={{ top: 120, left: -11 }} />
        <Crosshair style={{ top: 120, right: -11 }} />

        <div className="rise" style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.25em",
          textTransform: "uppercase", color: "var(--fg-3)",
          borderBottom: "1px solid var(--line)", paddingBottom: 12, marginBottom: 48,
        }}>
          <span>ADAIN · <span style={{ color: "var(--accent)" }}>AI · SOLUTIONS</span></span>
          <span style={{ display: "flex", gap: 24 }}>
            <span>REV · 2026.04</span>
            <span>CÓRDOBA · ARG</span>
          </span>
        </div>

        <div className="rise rise-2" style={{ marginBottom: 40 }}>
          <Status>Operativo · Diagnósticos disponibles</Status>
        </div>

        <h1 className="hero-title rise rise-3">
          Automatización
          <br />
          <em>con criterio.</em>
          <span className="caret" />
        </h1>

        <div className="rise rise-4 hero-grid" style={{
          display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48,
          marginTop: 56, alignItems: "start",
        }}>
          <p style={{ color: "var(--fg-1)", fontSize: 18, lineHeight: 1.55, maxWidth: 560, margin: 0 }}>
            Implementamos soluciones de inteligencia artificial y automatización en procesos administrativos, contables y operativos. Ingeniería aplicada, resultados medibles.
          </p>

          <div className="hero-ctas" style={{
            display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start",
            borderLeft: "1px solid var(--line)", paddingLeft: 32,
          }}>
            <span className="label">Puntos de contacto</span>
            <a href={CALENDLY_LINK} className="btn btn-primary" style={{ width: "100%", justifyContent: "space-between" }}>
              Agendar diagnóstico <Arrow />
            </a>
            <a href={WHATSAPP_LINK} className="btn" style={{ width: "100%", justifyContent: "space-between" }}>
              WhatsApp <Arrow />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { display: flex !important; flex-direction: column !important; gap: 28px !important; }
          .hero-ctas { border-left: 0 !important; padding-left: 0 !important; border-top: 1px solid var(--line); padding-top: 24px !important; width: 100%; }
        }
      `}</style>
    </section>
  );
}

export function Marquee() {
  const items = [
    "Automatización", "Workflows", "Data Pipelines", "AI Agents",
    "Integraciones", "ARCA / AFIP", "Reporting",
    "PDF → Excel", "CRM · Billing", "Observabilidad",
  ];
  const all = [...items, ...items];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {all.map((it, i) => <span key={i} className="marquee-item">{it}</span>)}
      </div>
    </div>
  );
}
