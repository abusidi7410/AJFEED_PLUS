import { useEffect, useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import type { Product } from "../data/products";
import { Link } from "../router/Router";
import SmartImage from "./SmartImage";

const AUTOPLAY_MS = 5200;

interface HeroSliderProps {
  products: Product[];
}

export default function HeroSlider({ products }: HeroSliderProps) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const count = products.length;
  const active = products[index];

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (hovered || userPaused || reducedMotion || count <= 1) return;
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % count),
      AUTOPLAY_MS,
    );
    return () => window.clearInterval(timer);
  }, [hovered, userPaused, reducedMotion, count]);

  useEffect(() => {
    if (index > count - 1) setIndex(0);
  }, [count, index]);

  if (!active) return null;

  return (
    <div
      className="relative mx-auto w-full max-w-[30rem]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="pointer-events-none absolute -right-14 -top-12 h-44 w-44 rounded-full bg-gold/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-10 -left-12 h-40 w-40 rounded-full bg-leaf/20 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -inset-6 animate-float-slow rounded-[2.6rem] border border-white/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -inset-3 animate-float-slow rounded-[2.3rem] border border-gold/20 [animation-delay:1.4s]"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-hero ring-1 ring-white/25">
        <div
          className="relative aspect-[4/5] overflow-hidden bg-[radial-gradient(circle_at_50%_18%,#ffffff_0%,#eef4ea_58%,#dbe8d8_100%)]"
          role="group"
          aria-roledescription="carousel"
          aria-label="Featured AJ FEED PLUS products"
        >
          {products.map((product, slideIndex) => {
            const isActive = slideIndex === index;
            return (
              <div
                key={product.slug}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={!isActive}
              >
                <SmartImage
                  src={product.image}
                  alt={product.imageAlt}
                  name={product.name}
                  category={product.categoryLabel}
                  className="h-full w-full bg-transparent"
                  imageClassName={`object-contain px-3 py-6 sm:px-5 sm:py-8 ${
                    isActive ? "animate-ken-burns" : ""
                  }`}
                  eager={slideIndex === 0}
                />
              </div>
            );
          })}

          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,48,29,0.06),transparent_30%,transparent_72%,rgba(5,48,29,0.18))]"
            aria-hidden="true"
          />

          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-950/85 px-3 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              Featured product
            </span>
            <button
              type="button"
              onClick={() => setUserPaused((value) => !value)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-brand-800 shadow-sm ring-1 ring-brand-900/10 backdrop-blur transition hover:bg-white hover:text-brand-950 focus-visible:ring-2 focus-visible:ring-gold"
              aria-label={
                userPaused ? "Resume product slideshow" : "Pause product slideshow"
              }
            >
              {userPaused ? (
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <Pause className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
            <div className="flex items-center gap-1.5">
              {products.map((product, dotIndex) => (
                <button
                  key={product.slug}
                  type="button"
                  onClick={() => setIndex(dotIndex)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    dotIndex === index
                      ? "w-7 bg-gold"
                      : "w-1.5 bg-brand-950/25 hover:bg-brand-950/45"
                  }`}
                  aria-label={`Show ${product.name}`}
                  aria-current={dotIndex === index}
                />
              ))}
            </div>
            <span className="font-display text-[11px] font-bold tabular-nums text-brand-950/60">
              {String(index + 1).padStart(2, "0")}
              <span className="text-brand-950/30">
                {" / "}
                {String(count).padStart(2, "0")}
              </span>
            </span>
          </div>
        </div>

        <div className="relative border-t border-brand-900/10 px-5 py-4 sm:px-6">
          <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-brand-700">
            {active.categoryLabel}
          </p>
          <div className="mt-1.5 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p
                key={active.slug}
                className="animate-fade-in truncate font-display text-[17px] font-extrabold text-brand-950"
              >
                {active.name}
              </p>
              <p className="mt-0.5 truncate text-[11px] text-ink/55">
                {[active.feedForm, active.packSize].filter(Boolean).join(" · ")}
              </p>
            </div>
            <Link
              to={`/products/${active.slug}`}
              className="inline-flex shrink-0 items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1.5 text-[10.5px] font-bold text-brand-800 ring-1 ring-brand-900/10 transition hover:bg-gold hover:text-brand-950"
            >
              View
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
