import { SectionHead, Arrow } from "./atoms";
import { CALENDLY_LINK, EMAIL_1, EMAIL_2 } from "../config";

export function SectionValor() {
  const items = [
    { num: "VALOR / 01", kicker: "DIAGNÓSTICO", title: "Relevamiento ágil", body: "Mapeamos procesos críticos y detectamos tareas repetitivas de alto costo operativo en sesiones cortas. Entregable: oportunidades priorizadas por ROI." },
    { num: "VALOR / 02", kicker: "IMPLEMENTACIÓN", title: "Soluciones sostenibles", body: "Desarrollamos flujos documentados, mantenibles y controlables por tu equipo. Sin cajas negras ni dependencia técnica innecesaria." },
    { num: "VALOR / 03", kicker: "RESULTADOS", title: "Métricas verificables", body: "Horas recuperadas, errores reducidos y procesos auditables. Cada implementación incluye métricas de impacto documentadas." },
  ];

  return (
    <section id="valor" className="section">
      <div className="wrap">
        <SectionHead
          num="§ 01"
          kicker="PROPUESTA DE VALOR"
          title="Ingeniería aplicada a procesos que importan."
          sub="Trabajamos sobre procesos administrativos y operativos concretos. Diseñamos soluciones mínimas, las implementamos con estándares de producción y medimos resultados."
        />
        <div className="valor-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--line)" }}>
          {items.map((it, i) => (
            <div key={i} style={{
              padding: "40px 32px",
              borderRight: i < items.length - 1 ? "1px solid var(--line)" : "none",
              borderBottom: "1px solid var(--line)",
              position: "relative",
            }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 28, display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--accent)" }}>{it.num}</span>
                <span style={{ color: "var(--fg-3)" }}>{it.kicker}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 26, lineHeight: 1.15, letterSpacing: "-0.015em", margin: "0 0 14px 0" }}>{it.title}</h3>
              <p style={{ color: "var(--fg-1)", fontSize: 15, lineHeight: 1.6, margin: 0 }}>{it.body}</p>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 860px) {
            .valor-grid { grid-template-columns: 1fr !important; }
            .valor-grid > div { border-right: 0 !important; }
          }
        `}</style>

        <div style={{ marginTop: 96 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
            <span className="label-accent">CAPACIDADES</span>
            <span className="label">SELECCIÓN · 04 / 12</span>
          </div>
          <ul className="capabilities">
            {[1,2,3,4].map(n => (
              <li key={n}>
                <span className="cap-num">{String(n).padStart(3, "0")}</span>
                <span style={{ color: "var(--fg-3)", fontStyle: "italic" }}>[ pendiente de definir ]</span>
                <span className="cap-tag">TBD</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function SectionProceso() {
  const steps = [
    { n: "00", label: "EXPLORACIÓN", title: "Entender el proceso.", body: "Entrevistas operativas, revisión de herramientas existentes y cuantificación del impacto potencial." },
    { n: "01", label: "DISEÑO", title: "Definir qué automatizar.", body: "Priorización por impacto y factibilidad. Documento técnico con alcance, riesgos y métricas objetivo." },
    { n: "02", label: "IMPLEMENTACIÓN", title: "Construir con rigor.", body: "Desarrollo iterativo con entregas parciales verificables. Integraciones robustas y fáciles de mantener." },
    { n: "03", label: "OPERACIÓN", title: "Medir y transferir.", body: "Verificación de métricas reales, capacitación del equipo y documentación para operación autónoma." },
  ];
  return (
    <section id="proceso" className="section">
      <div className="wrap">
        <SectionHead
          num="§ 02"
          kicker="METODOLOGÍA"
          title="Un proceso probado, en cuatro fases."
          sub="Desde el diagnóstico hasta la transferencia al equipo. Sin sorpresas, sin dependencias innecesarias."
        />
        <div className="process">
          {steps.map((s, i) => (
            <div key={i} className="process-step">
              <div className="process-num">
                <span>{s.n}</span>
                <span style={{ color: "var(--fg-3)" }}>{s.label}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionClientes() {
  const rows = [
    { num: "A", title: "Pymes", body: "Dueños y equipos operativos que requieren escalar capacidad sin incorporar horas manuales.", tags: ["OPERACIONES", "VENTAS"] },
    { num: "B", title: "Estudios contables", body: "Procesos mensuales repetitivos: reportes, comprobantes, gestiones en ARCA/AFIP y consolidación de clientes.", tags: ["FISCAL", "REPORTING"] },
    { num: "C", title: "Equipos administrativos", body: "Tareas de carga, envío, seguimiento y actualización de información entre sistemas no integrados.", tags: ["BACKOFFICE", "INTEGRATION"] },
  ];
  return (
    <section id="clientes" className="section">
      <div className="wrap">
        <SectionHead
          num="§ 03"
          kicker="PERFIL DE CLIENTE"
          title="Para quién trabajamos."
          sub="Organizaciones donde el trabajo manual crítico ya tiene costo pero todavía no tiene solución."
        />
        <div className="cli-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          {rows.map((r, i) => (
            <div key={i} style={{
              padding: "48px 32px",
              borderRight: i < rows.length - 1 ? "1px solid var(--line)" : "none",
              display: "flex", flexDirection: "column", gap: 14,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                <span style={{ width: 40, height: 40, border: "1px solid var(--accent)", color: "var(--accent)", display: "grid", placeItems: "center", fontFamily: "var(--font-mono)", fontSize: 14 }}>{r.num}</span>
                <span className="label">PERFIL · 0{i + 1}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 32, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>{r.title}</h3>
              <p style={{ color: "var(--fg-1)", fontSize: 15, lineHeight: 1.6, margin: 0 }}>{r.body}</p>
              <div style={{ display: "flex", gap: 8, marginTop: "auto", paddingTop: 24 }}>
                {r.tags.map((t, j) => (
                  <span key={j} style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.25em", padding: "4px 8px", border: "1px solid var(--line-strong)", color: "var(--fg-2)" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 860px) {
            .cli-grid { grid-template-columns: 1fr !important; }
            .cli-grid > div { border-right: 0 !important; border-bottom: 1px solid var(--line); }
            .cli-grid > div:last-child { border-bottom: 0 !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

export function SectionContacto() {
  return (
    <section id="contacto" className="section">
      <div className="wrap">
        <div className="cta-panel">
          <span className="label-accent" style={{ display: "block", marginBottom: 20 }}>§ 04 · INICIAR PROYECTO</span>
          <h2 className="cta-title">
            Comprá tiempo.<br />
            <span style={{ color: "var(--fg-2)" }}>Enfocá lo que mueve el negocio.</span>
          </h2>
          <p style={{ color: "var(--fg-1)", fontSize: 16, marginTop: 20, maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>
            Un diagnóstico sin cargo. Cuarenta minutos para identificar oportunidades concretas.
          </p>
          <div className="cta-actions">
            <a href={CALENDLY_LINK} className="btn btn-primary">Agendar diagnóstico <Arrow /></a>
            <a href={`mailto:${EMAIL_1}`} className="btn">Enviar email <Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-row">
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 14, letterSpacing: "0.45em" }}>
              AD<span style={{ color: "var(--accent)" }}>Λ</span>IN
            </span>
            <span style={{ color: "var(--fg-3)" }}>© {new Date().getFullYear()}</span>
          </div>
          <div className="foot-mid">AI · SOLUTIONS · CÓRDOBA</div>
          <div className="foot-r">
            <a href={`mailto:${EMAIL_1}`}>{EMAIL_1}</a>
            <a href={`mailto:${EMAIL_2}`}>{EMAIL_2}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
