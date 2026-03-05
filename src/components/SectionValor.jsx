import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const pillars = [
  { number: "01", title: "Escuchamos", desc: "Qué duele, qué se repite, qué sobra." },
  { number: "02", title: "Construimos", desc: "Herramientas reales, no powerpoints." },
  { number: "03", title: "Medimos", desc: "Si no se mide, no cuenta." },
];

export default function SectionValor() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headlineX = useTransform(scrollYProgress, [0, 0.5], ["-5%", "0%"]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={sectionRef} id="nosotros" className="relative py-24 md:py-32 bg-ink overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream/5 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-ember" />
          <span className="font-body text-xs font-medium uppercase tracking-[0.35em] text-ember">
            Filosofía
          </span>
        </div>

        <motion.h2
          style={{ x: headlineX, opacity: headlineOpacity }}
          className="font-serif text-3xl text-cream md:text-5xl lg:text-6xl leading-[1.1] max-w-3xl"
        >
          Primero las herramientas.{" "}
          <span className="italic text-gradient-ember">Después la AI.</span>
        </motion.h2>

        <div ref={gridRef} className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl border border-cream/5 bg-ink-light/50 p-8 transition hover:border-ember/20 hover:bg-ink-light"
            >
              <span className="font-serif text-5xl text-ember/15 transition group-hover:text-ember/30">
                {p.number}
              </span>
              <h3 className="mt-4 font-body text-lg font-medium text-cream">{p.title}</h3>
              <p className="mt-2 font-body text-sm text-ink-muted">{p.desc}</p>
              <div className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 bg-gradient-to-r from-ember to-ember-light transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
