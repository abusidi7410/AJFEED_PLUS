import { useEffect, useState } from "react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import {
  COMPANY,
  DEFAULT_WHATSAPP_MESSAGE,
  MAP_DIRECTIONS_URL,
  NAV_ITEMS,
} from "../data/site";
import { whatsappUrl } from "../lib/whatsapp";
import { Link, useRouter } from "../router/Router";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";

function isActive(path: string, href: string): boolean {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

export default function Header() {
  const { path } = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-brand-950 text-white lg:block">
        <div className="container-page flex h-9 items-center justify-between gap-6 text-[11px]">
          <a
            href={MAP_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white/65 transition hover:text-gold"
          >
            <MapPin className="h-3 w-3" aria-hidden="true" />
            {COMPANY.addressOneLine}
          </a>
          <div className="flex items-center gap-5">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-1.5 text-white/65 transition hover:text-gold"
            >
              <Phone className="h-3 w-3" aria-hidden="true" />
              {COMPANY.phoneDisplay}
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center gap-1.5 text-white/65 transition hover:text-gold"
            >
              <Mail className="h-3 w-3" aria-hidden="true" />
              {COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b border-brand-900/10 bg-cream/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_30px_-18px_rgba(10,92,54,0.4)]" : ""
        }`}
      >
        <div className="container-page flex h-[68px] items-center justify-between gap-4">
          <Link
            to="/"
            className="shrink-0 rounded-lg transition duration-300 hover:scale-[1.02] focus-visible:ring-offset-4"
            aria-label="AJ FEED PLUS home"
          >
            <Logo compact showTagline={false} />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              const active = isActive(path, item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative py-2 text-[13px] font-semibold transition ${
                    active ? "text-brand-800" : "text-ink/65 hover:text-brand-800"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-gold transition-all duration-200 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green hidden !min-h-[42px] !px-4 !text-[12px] sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Chat</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-900/15 bg-white text-brand-900 transition hover:border-brand-800/35 hover:bg-brand-50 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full max-h-[calc(100vh-68px)] animate-menu-in overflow-y-auto border-t border-brand-900/10 bg-cream shadow-xl lg:hidden"
        >
          <div className="container-page py-4">
            <nav className="flex flex-col" aria-label="Mobile">
              {NAV_ITEMS.map((item) => {
                const active = isActive(path, item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`border-b border-brand-900/10 py-3.5 text-sm font-semibold transition ${
                      active ? "text-brand-800" : "text-ink/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <a
              href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green mt-4 w-full"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>

            <div className="mt-5 space-y-2.5 pb-2 text-[12px] text-ink/60">
              <a href={COMPANY.phoneHref} className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-brand-700" aria-hidden="true" />
                {COMPANY.phoneDisplay}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-brand-700" aria-hidden="true" />
                {COMPANY.email}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-700" aria-hidden="true" />
                {COMPANY.addressOneLine}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
