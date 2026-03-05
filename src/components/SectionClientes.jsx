import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const solutions = [
  { tag: "Automatización", title: "Reportes que se arman solos" },
  { tag: "Integración", title: "Sistemas que hablan entre sí" },
  { tag: "AI Agents", title: "Agentes que trabajan 24/7" },
  { tag: "Procesos", title: "Facturación sin tocar un botón" },
];

export default function SectionClientes() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardsY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={sectionRef} id="soluciones" className="relative py-24 md:py-32 bg-ink overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream/5 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-ember" />
          <span className="font-body text-xs font-medium uppercase tracking-[0.35em] text-ember">
            Soluciones
          </span>
        </div>

        <h2 className="font-serif text-3xl text-cream md:text-5xl leading-[1.15] max-w-xl">
          Cosas que hicimos{" "}
          <span className="italic text-gradient-ember">esta semana</span>
        </h2>

        <motion.div ref={gridRef} style={{ y: cardsY }} className="mt-16 grid gap-4 md:grid-cols-2">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-cream/5 bg-ink-light/40 p-8 transition hover:border-ember/15 hover:bg-ink-light/70"
            >
              <span className="inline-block rounded-full border border-ember/20 bg-ember/5 px-3 py-1 font-body text-[0.65rem] font-medium uppercase tracking-[0.2em] text-ember">
                {s.tag}
              </span>
              <h3 className="mt-5 font-serif text-xl text-cream md:text-2xl">
                {s.title}
              </h3>
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-ember/5 to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
