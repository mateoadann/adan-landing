export function Wordmark({ size = 18, showTag = true }) {
  return (
    <a href="#home" className="brand" aria-label="ADAIN home">
      <span className="brand-mark" style={{ fontSize: size }}>
        <span>AD</span>
        <span className="lam">Λ</span>
        <span>IN</span>
      </span>
      {showTag && <span className="brand-tag">AI Solutions</span>}
    </a>
  );
}

export function Crosshair({ style }) {
  return <span className="crosshair" style={style} aria-hidden />;
}

export function Status({ children = "Sistema operativo · Aceptando proyectos" }) {
  return (
    <span className="status">
      <span className="status-dot" />
      {children}
    </span>
  );
}

export function SectionHead({ num, kicker, title, sub, right }) {
  return (
    <div className="section-head">
      <div className="section-num">
        <span>{num}</span>
        <span>{kicker}</span>
      </div>
      <div>
        <h2 className="section-title">{title}</h2>
        {sub && <p className="section-sub">{sub}</p>}
        {right}
      </div>
    </div>
  );
}

export function Arrow() {
  return <span className="arrow" aria-hidden>→</span>;
}
