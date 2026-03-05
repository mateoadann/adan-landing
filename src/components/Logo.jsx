export default function Logo({ className = "" }) {
  return (
    <span
      className={`inline-block font-body font-semibold uppercase tracking-[0.35em] ${className}`}
      aria-label="ADAIN"
    >
      AD
      <span className="inline-block" style={{ fontFamily: 'inherit', letterSpacing: 'inherit' }}>
        Λ
      </span>
      IN
    </span>
  );
}
