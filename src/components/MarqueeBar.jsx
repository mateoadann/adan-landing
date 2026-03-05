const items = [
  "Herramientas ágiles",
  "Automatización real",
  "Menos tareas manuales",
  "AI que trabaja por vos",
  "De idea a producción en 2 semanas",
  "Resultados medibles",
  "Tu paso cero hacia la AI",
];

export default function MarqueeBar() {
  return (
    <section aria-label="Marquee" className="border-y border-cream/5 bg-ink-light/50">
      <div className="overflow-hidden">
        <div className="animate-marquee flex gap-12 py-5 [min-width:220%]">
          {[...items, ...items].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-12 whitespace-nowrap">
              <span className="font-body text-[0.7rem] uppercase tracking-[0.3em] text-ink-muted">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rotate-45 bg-ember/40" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
