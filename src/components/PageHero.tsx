import type { ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  crumbs: { label: string; href?: string }[];
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      <div
        className="absolute inset-0 bg-grid-soft opacity-[0.12]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 -top-40 h-96 w-96 animate-drift rounded-full bg-leaf/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 left-1/3 h-72 w-72 animate-float-slow rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative py-12 sm:py-16 lg:py-20">
        <Breadcrumbs items={crumbs} tone="light" />
        <div className="mt-8 max-w-3xl">
          <span className="eyebrow-light animate-fade-up">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            {eyebrow}
          </span>
          <h1 className="mt-4 animate-fade-up text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight [animation-delay:90ms] sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl animate-fade-up text-pretty text-[15px] leading-relaxed text-white/70 [animation-delay:180ms] sm:text-base">
            {description}
          </p>
          {children && (
            <div className="mt-8 animate-fade-up [animation-delay:270ms]">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
