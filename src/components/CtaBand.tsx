import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { DEFAULT_WHATSAPP_MESSAGE } from "../data/site";
import { whatsappUrl } from "../lib/whatsapp";
import { Link } from "../router/Router";
import Reveal from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

interface CtaBandProps {
  title: ReactNode;
  description: string;
  message?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export default function CtaBand({
  title,
  description,
  message = DEFAULT_WHATSAPP_MESSAGE,
  secondaryLabel,
  secondaryTo,
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-brand-950">
      <div className="absolute inset-0 bg-grid-soft opacity-[0.1]" aria-hidden="true" />
      <div
        className="absolute -right-20 -top-24 h-72 w-72 animate-float-slow rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative py-14 sm:py-16">
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="eyebrow-light">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Talk to our team
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-pretty text-[14.5px] leading-relaxed text-white/65">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary whitespace-nowrap"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            {secondaryLabel && secondaryTo && (
              <Link to={secondaryTo} className="btn btn-ghost-light whitespace-nowrap">
                {secondaryLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
