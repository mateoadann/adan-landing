import { EMAIL, EMAIL1 } from "../constants";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-cream/5 bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-baseline gap-4">
            <Logo size="sm" className="text-cream text-base" />
            <span className="font-body text-xs text-ink-muted">
              © {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href={`mailto:${EMAIL}`} className="font-body text-sm text-ink-muted transition hover:text-ember">
              {EMAIL}
            </a>
            <a href={`mailto:${EMAIL1}`} className="font-body text-sm text-ink-muted transition hover:text-ember">
              {EMAIL1}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
