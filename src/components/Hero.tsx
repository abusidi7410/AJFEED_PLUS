import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  Wheat,
} from "lucide-react";
import { PRODUCTS } from "../data/products";
import { COMPANY, DEFAULT_WHATSAPP_MESSAGE } from "../data/site";
import { whatsappUrl } from "../lib/whatsapp";
import { Link } from "../router/Router";
import WhatsAppIcon from "./WhatsAppIcon";

const RANGE_ROWS = [
  { label: "Broiler range", value: "Starter to finishing" },
  { label: "Layer range", value: "Chick to egg production" },
  { label: "Ruminant range", value: "Cattle & ram feeds" },
  { label: "Ordering", value: "Direct via WhatsApp" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      <div
        className="absolute inset-0 bg-grid-soft opacity-[0.12]"
        aria-hidden="true"
      />
      <div
        className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-leaf/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        aria-hidden="true"
      />

      <div className="container-page relative grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-24">
        <div>
          <span className="eyebrow-light animate-fade-up">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            Poultry &amp; Ruminant Feed Manufacturing
          </span>

          <h1 className="mt-5 max-w-2xl animate-fade-up text-balance font-display text-[2.65rem] font-extrabold leading-[1.02] tracking-[-0.02em] [animation-delay:90ms] sm:text-6xl lg:text-[4.1rem]">
            Perpetual Growth
            <span className="block text-gold">For Your Birds.</span>
          </h1>

          <p className="mt-6 max-w-xl animate-fade-up text-pretty text-[15px] leading-relaxed text-white/70 [animation-delay:180ms] sm:text-[17px]">
            Poultry and ruminant feed for the farmers, agro-dealers and
            distributors who keep Nigeria&apos;s livestock value chain moving.
          </p>

          <div className="mt-8 flex animate-fade-up flex-col gap-3 [animation-delay:270ms] sm:flex-row">
            <Link to="/products" className="btn btn-primary">
              Explore Products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost-light"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <ul className="mt-9 flex animate-fade-up flex-wrap gap-x-6 gap-y-2.5 text-[11.5px] font-medium text-white/55 [animation-delay:360ms]">
            <li className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              {COMPANY.address.line2}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Wheat className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              Broiler, layer &amp; ruminant range
            </li>
            <li className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              Details confirmed on enquiry
            </li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:220ms]">
          <div
            className="absolute -inset-3 rotate-2 animate-float-slow rounded-[2rem] border border-white/10"
            aria-hidden="true"
          />
          <div
            className="absolute -inset-3 -rotate-2 animate-float-slow rounded-[2rem] border border-gold/15 [animation-delay:800ms]"
            aria-hidden="true"
          />

          <div className="relative rounded-[1.75rem] bg-[#f6f8f5] p-5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)] sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-brand-700">
                  Our product range
                </p>
                <p className="mt-1 font-display text-xl font-extrabold text-brand-950">
                  Poultry &amp; Ruminant
                </p>
              </div>
              <span className="rounded-full bg-brand-50 px-3 py-1.5 text-[10px] font-bold text-brand-800 ring-1 ring-brand-900/10">
                {PRODUCTS.length} products
              </span>
            </div>

            <div className="relative mt-5 overflow-hidden rounded-2xl bg-brand-800 p-5 text-white">
              <div
                className="absolute inset-0 bg-noise opacity-40"
                aria-hidden="true"
              />
              <Wheat
                className="absolute -bottom-4 -right-3 h-28 w-28 text-white/10"
                strokeWidth={1}
                aria-hidden="true"
              />
              <p className="relative text-[9px] font-bold uppercase tracking-[0.24em] text-gold">
                AJ FEED PLUS
              </p>
              <p className="relative mt-2 max-w-[12rem] font-display text-2xl font-extrabold leading-[1.08]">
                Animal Nutrition
              </p>
              <p className="relative mt-2 text-[11px] leading-relaxed text-white/60">
                Poultry and ruminant feed in crumbles, mash, pellets and
                concentrate formats.
              </p>
            </div>

            <ul className="mt-4 divide-y divide-brand-900/10">
              {RANGE_ROWS.map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between gap-4 py-3"
                >
                  <span className="text-[12px] font-semibold text-brand-950">
                    {row.label}
                  </span>
                  <span className="text-right text-[11px] text-ink/55">
                    {row.value}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/products"
              className="mt-3 flex items-center justify-between rounded-xl bg-gold px-4 py-3 text-[12px] font-bold text-brand-950 transition hover:bg-gold-dark"
            >
              View the full catalogue
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="absolute -bottom-5 -left-3 hidden animate-float-soft items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 shadow-xl ring-1 ring-brand-900/10 sm:flex">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-brand-700">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[8.5px] font-bold uppercase tracking-[0.12em] text-ink/40">
                Manufactured in
              </p>
              <p className="text-[11px] font-bold text-brand-950">
                Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
