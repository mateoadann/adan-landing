import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { CALENDLY_LINK, WHATSAPP_LINK } from "../constants";

const words = [
  "automatizar",
  "simplificar",
  "acelerar",
  "transformar",
  "escalar",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "15%"]);
  const statsY = useTransform(scrollYProgress, [0, 0.6], ["0%", "25%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen overflow-hidden bg-ink">
      {/* Parallax background layers */}
      <motion.div className="pointer-events-none absolute inset-0" style={{ y: bgY }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-3xl" style={{ background: 'radial-gradient(ellipse, rgba(232,118,58,0.08) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: 'radial-gradient(ellipse, rgba(232,118,58,0.05) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute top-[20%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember/10 to-transparent" />
        <div className="absolute top-[80%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember/6 to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-32">
        <motion.div className="max-w-4xl" style={{ opacity: contentOpacity, y: contentY }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-ember" />
            <span className="font-body text-xs font-medium uppercase tracking-[0.35em] text-ember">
              Consultora de automatización
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif text-5xl leading-[1.1] text-cream md:text-7xl lg:text-8xl"
          >
            El desafío no es la AI.
            <br />
            <span className="text-ink-muted">Es saber qué</span>{" "}
            <span className="relative inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="text-gradient-ember italic"
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 max-w-xl font-body text-lg leading-relaxed text-ink-muted md:text-xl"
          >
            Construimos herramientas ágiles y fáciles de implementar.
            El paso cero para que tu equipo haga más, con menos.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href={CALENDLY_LINK}
              className="group inline-flex items-center gap-3 rounded-full bg-ember px-6 py-3.5 font-body text-sm font-medium text-ink transition hover:bg-ember-light hover:shadow-[0_0_40px_rgba(232,118,58,0.3)]"
            >
              Agendar una conversación
              <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>&#8594;</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              className="inline-flex items-center gap-2 rounded-full border border-cream/10 px-6 py-3.5 font-body text-sm font-medium text-cream/70 transition hover:border-cream/30 hover:text-cream"
            >
              Escribinos por WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{ y: statsY }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream/5 bg-cream/5 md:grid-cols-4"
        >
          {[
            { value: "+40", label: "herramientas" },
            { value: "2sem", label: "idea a producción" },
            { value: "85%", label: "menos tareas manuales" },
            { value: "24/7", label: "agentes activos" },
          ].map((stat, i) => (
            <div key={i} className="bg-ink-light/50 backdrop-blur-sm px-6 py-5">
              <div className="font-serif text-2xl text-ember md:text-3xl">{stat.value}</div>
              <div className="mt-1 font-body text-xs text-ink-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
