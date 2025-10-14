// src/App.jsx
import { useEffect, useState } from "react";

// --- Reemplazá estos valores ---
const CALENDLY_LINK =
  "https://cal.com/adain/30min"; // TODO
const WHATSAPP_LINK =
  "https://wa.me/message/SU5VAVYIU7NQO1"; // TODO
  const EMAIL = "mateo.adain@gmail.com"; // TODO
  const EMAIL1 = "luciano.adain@gmail.com"; // TODO
  // --------------------------------

export default function App() {
  const [email, setEmail] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [hideLinks, setHideLinks] = useState(false);

  const marqueeTools = [
    "Automatización",
    "Productividad",
    "Datos",
    "Optimización",
    "Workflows",
    "AI Agents",
  ];

    useEffect(() => {
      const COMPACT_AT = 40;     // antes 40
      const HIDE_LINKS_AT = 160; // ↑ persisten más tiempo
      const onScroll = () => {
        const y = window.scrollY;
        setIsCompact(y > COMPACT_AT);
        setHideLinks(y > HIDE_LINKS_AT);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${EMAIL}?subject=Diagn%C3%B3stico&body=Hola,%20quiero%20un%20diagn%C3%B3stico.%20Mi%20email%20es:%20${encodeURIComponent(
      email
    )}`;
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Aquí se configura el color */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_70%)] opacity-40 blur-3xl" />

      {/* ===== Header Fijo ===== */}
        <header
  className={`fixed inset-x-0 top-0 z-50 transition-all duration-500
    ${isCompact
      ? "bg-white/70 backdrop-blur-lg shadow-md ring-1 ring-black/5"
      : "bg-white/40 backdrop-blur-lg shadow-sm"}
  `}
>
  <div
    className={`mx-auto flex max-w-6xl items-center justify-between px-5
      ${isCompact ? "py-3" : "py-6"} transition-all duration-300`}
  >
    {/* Logo */}
    <a href="#home" className="flex flex-col leading-none">
      <span
        className={`
          whitespace-nowrap 
          font-semibold uppercase text-slate-800
          text-2xl sm:text-3xl 
          tracking-[0.35em] sm:tracking-[0.5em] 
        `}
      >
        <span className="mr-1">AD</span>
        <span className="inline-block -mx-0.5">Λ</span>
        <span>IN</span>
      </span>
      {(
        <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.7em] text-orange-500">
          AI Solutions
        </span>
      )}
      <span className="sr-only">ADAIN</span>
    </a>

    {/* Nav links: visibles SOLO antes de HIDE_LINKS_AT */}
    {!hideLinks && (
      <nav className="hidden md:flex items-center gap-8 text-sm text-slate-500">
        <a href="#valor" className="hover:text-slate-800 transition">Valor</a>
        <a href="#proceso" className="hover:text-slate-800 transition">Proceso</a>
        <a href="#clientes" className="hover:text-slate-800 transition">Clientes</a>
        <a href="#contacto" className="hover:text-slate-800 transition">Contacto</a>
      </nav>
    )}

    {/* CTA siempre visible */}
    <a
      href={CALENDLY_LINK}
      className={`
        inline-flex items-center justify-center gap-2 rounded-full
        border border-slate-900/10 bg-slate-900 text-white transition hover:bg-slate-800
        flex-shrink-0 
        px-2.5 py-1.5 text-[11px] 
        md:px-6 md:py-3 md:text-sm 
      `}
    >
      Agendar diagnóstico <span aria-hidden>→</span>
    </a>
  </div>
</header>

      <main className="relative">
        {/* ===== Hero ===== */}
        <section
          id="home"
          className="relative pt-36 md:pt-50 pb-10 md:pb-12"
        >
          {/* Fondo suave SIN corte */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.05),transparent_70%)]" />
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-5" />
          <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_120deg_at_20%_20%,rgba(249,115,22,0.06),rgba(251,146,60,0.02),rgba(59,130,246,0.02),rgba(249,115,22,0.06))] opacity-10 mix-blend-screen" />

          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 md:grid md:grid-cols-5 md:items-center">
            <div className="relative z-10 md:col-span-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-slate-500 shadow-sm backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-2 w-2 rounded-full bg-orange-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                </span>
                Consultoría en automatización
              </span>

              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Automatizá tus tareas. <br />
                <span className="text-slate-500">Recuperá tu tiempo.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base text-slate-600 md:text-lg">
                Diseño flujos simples y sostenibles para que
                pymes, estudios contables y equipos administrativos dejen de
                hacer tareas repetitivas y se enfoquen en lo que realmente
                importa.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={CALENDLY_LINK}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Descubrir cuánto tiempo puedo liberar <span aria-hidden>→</span>
                </a>
                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white px-5 py-3 text-sm font-medium text-slate-600 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900"
                >
                  Escribir por WhatsApp
                </a>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldIcon /> Seguridad
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon /> Ahorro de horas
                </div>
                <div className="flex items-center gap-2">
                  <FlowIcon /> Procesos claros
                </div>
              </div>
            </div>

            <div className="relative z-10 md:col-span-2 md:pl-6">
              <div className="relative rounded-3xl border border-white/70 bg-white/90 p-6 shadow-xl backdrop-blur md:p-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-orange-200/60 bg-white/95 px-2.5 py-1 text-[0.55rem] font-medium uppercase tracking-[0.3em] text-orange-500 shadow-sm whitespace-nowrap sm:px-3 sm:text-[0.65rem] sm:tracking-[0.45em]">
                  <SparkIcon className="h-3 w-3 text-orange-400" />
                  ¿Qué podemos hacer por vos?
                </span>
                <ul className="mt-5 space-y-4 text-slate-700">
                  <li className="flex gap-3">
                    <SparkIcon className="mt-0.5 h-4 w-4 text-orange-500" />
                    Consolidación automática de reportes mensuales. PDF → Excel
                  </li>
                  <li className="flex gap-3">
                    <SparkIcon className="mt-0.5 h-4 w-4 text-orange-500" />
                    <span>
                      Facturación masiva y automatizaciones en <span className="font-semibold">ARCA/AFIP</span>.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <SparkIcon className="mt-0.5 h-4 w-4 text-orange-500" />
                    Integraciones entre planillas, CRM y facturación.
                  </li>
                  <li className="flex gap-3">
                    <SparkIcon className="mt-0.5 h-4 w-4 text-orange-500" />
                    Integramos agentes IA en tus procesos.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Herramientas ===== */}
        <section
          aria-label="Herramientas y stack"
          className="border-y border-white/60 bg-white/70 backdrop-blur"
        >
          <div className="mx-auto max-w-6xl overflow-hidden px-5">
            <div className="animate-marquee flex gap-8 py-14 text-[0.7rem] uppercase tracking-[0.35em] text-slate-400 [min-width:220%]">
              {[...marqueeTools, ...marqueeTools].map((tool, i) => (
                <span key={`${tool}-${i}`} className="flex items-center gap-4">
                  {tool}
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Resto de secciones igual ===== */}
        <SectionValor />
        <SectionProceso />
        <SectionClientes />

        {/* CTA + Contacto */}
        <section id="contacto" className="border-t border-white/60 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-10 shadow-xl backdrop-blur">
              <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-br from-orange-200 via-sky-200 to-transparent opacity-50 blur-3xl" />
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                Comprá tiempo. Enfocate en lo que hace crecer tu negocio.
              </h2>
              <p className="mt-3 text-slate-600">
                Agendá un diagnóstico para tu negocio.
              </p>

              <div className="relative mt-8 flex flex-col items-center gap-3">
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href={CALENDLY_LINK}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    Agendar diagnóstico <span aria-hidden>→</span>
                  </a>
                  {/* <a
                    href={WHATSAPP_LINK}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white px-5 py-3 text-sm font-medium text-slate-600 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900"
                  >
                    WhatsApp
                  </a> */}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white px-5 py-3 text-sm font-medium text-slate-600 transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900"
                  >
                    Email
                  </a>
                </div>

                {/* <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md text-left">
                  <label htmlFor="email" className="text-sm text-slate-600">
                    Dejame tu email y te escribo
                  </label>
                  <div className="mt-2 flex gap-2">
                    <input
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      className="flex-1 rounded-2xl border border-slate-300/80 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
                    />
                    <button
                      type="submit"
                      className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                    >
                      Enviar
                    </button>
                  </div>
                </form> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/60 bg-white/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm text-slate-500 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-[0.4em] text-slate-700">ADΛIN</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`mailto:${EMAIL}`} className="transition hover:text-slate-800">
              {EMAIL}
            </a>
            <a href={`mailto:${EMAIL1}`} className="transition hover:text-slate-800">
              {EMAIL1}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ===== Secciones separadas para mantener el archivo limpio ===== */
function SectionValor() {
  return (
    <section id="valor" className="border-t border-white/60 pt-12 pb-16 md:pt-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
          Más tiempo para lo que realmente importa
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Confianza, escalabilidad, viabilidad y seguridad.
          Implemento solo lo necesario para que funcione bien y escale cuando
          lo necesites.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Diagnóstico ágil",
              desc:
                "En algunos minutos se detectan tareas repetitivas y oportunidades de automatización.",
            },
            {
              title: "Implementación simple",
              desc:
                "Flujos claros, documentación mínima y control por parte del equipo.",
            },
            {
              title: "Resultados medibles",
              desc:
                "Horas ahorradas, errores reducidos y foco donde está el valor.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="absolute inset-0 translate-y-full bg-gradient-to-br from-orange-100/40 via-sky-100/40 to-transparent transition duration-500 group-hover:translate-y-0" />
              <h3 className="relative text-lg font-medium text-slate-900">
                {f.title}
              </h3>
              <p className="relative mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionProceso() {
  return (
    <section id="proceso" className="border-t border-white/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
          Cómo trabajamos
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            {
              step: "1",
              title: "Exploración",
              desc: "Entendemos tu proceso y medimos el impacto.",
            },
            {
              step: "2",
              title: "Diseño",
              desc: "Qué automatizar primero y cómo, de forma simple.",
            },
            {
              step: "3",
              title: "Implementación",
              desc: "Integraciones ágiles y fáciles de mantener.",
            },
            {
              step: "4",
              title: "Resultados",
              desc: "Verificamos horas ahorradas y próximos pasos.",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                {p.step}
              </div>
              <h3 className="mt-4 font-medium text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionClientes() {
  return (
    <section id="clientes" className="border-t border-white/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
          Para quién es
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Pymes",
              desc:
                "Dueños y equipos que quieren escalar sin sumar horas manuales.",
            },
            {
              title: "Estudios contables",
              desc:
                "Procesos mensuales repetitivos: reportes, comprobantes. Gestiones varias en Arca.",
            },
            {
              title: "Administrativos / Autónomos",
              desc:
                "Tareas de carga, envíos, seguimiento y actualización de información.",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-medium text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Iconitos SVG minimal sin dependencias ---------- */
function ShieldIcon(props) {
  return (
    <svg
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
      {...props}
    >
      <path d="M12 2l7 4v6c0 5-3.4 9.3-7 10-3.6-.7-7-5-7-10V6l7-4zm0 2.2L7 6.7V12c0 4 .9 7.2 5 8 4.1-.8 5-4 5-8V6.7l-5-2.5z" />
      <path d="M10.3 12.7l1.4 1.4 3.6-3.6-1.4-1.4-2.2 2.1-.8-.8-1.4 1.4.8.9z" />
    </svg>
  );
}
function ClockIcon(props) {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden {...props}>
      <path d="M12 2a10 10 0 1010 10A10.01 10.01 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
      <path d="M12.5 7h-1v6l5 3 .5-.9-4.5-2.7z" />
    </svg>
  );
}
function FlowIcon(props) {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden {...props}>
      <path d="M4 7a3 3 0 106 0 3 3 0 00-6 0zm10 0h-2a5 5 0 11-10 0H0v2h2a5 5 0 0010 0h2a3 3 0 110 6h-2a5 5 0 01-10 0H0v2h2a5 5 0 0010 0h2a5 5 0 000-10z" />
    </svg>
  );
}
function SparkIcon(props) {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden {...props}>
      <path d="M12 2l1.7 4.4L18 8l-4.3 1.6L12 14l-1.7-4.4L6 8l4.3-1.6L12 2zM5 16l1 2.6L8.5 20 6 21.4 5 24l-1-2.6L1.5 20 4 18.6 5 16zm14 0l1 2.6L22.5 20 20 21.4 19 24l-1-2.6L15.5 20 18 18.6 19 16z" />
    </svg>
  );
}
