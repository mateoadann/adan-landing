import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const steps = [
  { step: "01", title: "Diagnóstico", desc: "30 min. Gratis." },
  { step: "02", title: "Diseño", desc: "Máximo impacto, mínimo ruido." },
  { step: "03", title: "Construcción", desc: "2 semanas. Funcionando." },
  { step: "04", title: "Evolución", desc: "Medimos. Iteramos. AI." },
];

export default function SectionProceso() {
  const sectionRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="proceso" className="relative py-24 md:py-32 bg-ink-light/30 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream/5 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-ember" />
          <span className="font-body text-xs font-medium uppercase tracking-[0.35em] text-ember">
            Proceso
          </span>
        </div>

        <h2 className="font-serif text-3xl text-cream md:text-5xl leading-[1.15] max-w-2xl">
          De problema a la solución.{" "}
          <span className="italic text-ink-muted">Rápido.</span>
        </h2>

        <div ref={ref} className="mt-16 relative">
          {/* Animated vertical line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-[calc(16.666%-1px)] w-px bg-cream/5">
            <motion.div
              className="w-full bg-gradient-to-b from-ember to-ember-light origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-0">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group grid grid-cols-1 md:grid-cols-6 border-b border-cream/5 last:border-0"
              >
                <div className="flex items-center py-8 md:py-10">
                  <div className="relative flex items-center gap-4">
                    <div className="hidden md:block relative z-10 h-3 w-3 rounded-full border-2 border-ember bg-ink transition group-hover:bg-ember group-hover:shadow-[0_0_12px_rgba(232,118,58,0.4)]" />
                    <span className="font-serif text-3xl text-ember/30 transition group-hover:text-ember md:text-4xl">
                      {s.step}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-5 flex items-center gap-4 pb-8 md:py-10 md:pl-8">
                  <h3 className="font-body text-xl font-medium text-cream transition group-hover:text-ember">
                    {s.title}
                  </h3>
                  <span className="font-body text-sm text-ink-muted">{s.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
