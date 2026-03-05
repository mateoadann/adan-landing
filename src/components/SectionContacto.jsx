import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CALENDLY_LINK, EMAIL } from "../constants";

export default function SectionContacto() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section ref={sectionRef} id="contacto" className="relative py-24 md:py-32 bg-ink-light/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream/5 to-transparent" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-3xl" style={{ background: 'radial-gradient(ellipse, rgba(232,118,58,0.06) 0%, transparent 70%)' }} />

        <motion.div className="relative" style={{ scale, opacity }}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-ember" />
            <span className="font-body text-xs font-medium uppercase tracking-[0.35em] text-ember">
              Empezá ahora
            </span>
            <div className="h-px w-12 bg-ember" />
          </div>

          <h2 className="font-serif text-4xl text-cream md:text-6xl leading-[1.1]">
            ¿Cuántas horas perdés en lo que{" "}
            <span className="italic text-gradient-ember">no importa?</span>
          </h2>

          <p className="mt-6 font-body text-base text-ink-muted mx-auto max-w-md">
            30 minutos gratis. Te mostramos qué automatizar primero.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={CALENDLY_LINK}
              className="group inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 font-body text-sm font-medium text-ink transition hover:bg-ember-light hover:shadow-[0_0_50px_rgba(232,118,58,0.3)]"
            >
              Recuperar mi tiempo
              <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>&#8594;</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-cream/10 px-8 py-4 font-body text-sm font-medium text-cream/60 transition hover:border-cream/30 hover:text-cream"
            >
              {EMAIL}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
