import { useScrollPosition } from "../hooks/useScrollPosition";
import { CALENDLY_LINK } from "../constants";
import Logo from "./Logo";

export default function Header() {
  const { isCompact, hideLinks } = useScrollPosition();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500
        ${isCompact
          ? "bg-ink/80 backdrop-blur-2xl shadow-[0_1px_0_rgba(232,118,58,0.06)]"
          : "bg-transparent"}
      `}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6
          ${isCompact ? "py-3" : "py-5"} transition-all duration-300`}
      >
        <a href="#home">
          <Logo size="md" className="text-cream text-xl sm:text-2xl" />
        </a>

        {!hideLinks && (
          <nav className="hidden md:flex items-center gap-8 text-sm font-body text-ink-muted">
            {[
              ["#nosotros", "Nosotros"],
              ["#proceso", "Proceso"],
              ["#soluciones", "Soluciones"],
              ["#contacto", "Contacto"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="relative transition hover:text-cream after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-ember after:transition-all hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>
        )}

        <a
          href={CALENDLY_LINK}
          className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-2 text-xs font-body font-medium text-ember transition hover:bg-ember hover:text-ink hover:border-ember sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Hablemos
          <span aria-hidden className="text-xs">&#8599;</span>
        </a>
      </div>
    </header>
  );
}
