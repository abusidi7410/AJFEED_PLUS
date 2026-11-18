import { ArrowRight, MapPin, ShieldCheck, Wheat } from "lucide-react";
import { FEATURED_PRODUCTS } from "../data/products";
import { DEFAULT_WHATSAPP_MESSAGE } from "../data/site";
import { whatsappUrl } from "../lib/whatsapp";
import { Link } from "../router/Router";
import HeroSlider from "./HeroSlider";
import WhatsAppIcon from "./WhatsAppIcon";

const HERO_PRODUCTS = FEATURED_PRODUCTS.slice(0, 3);

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-950 text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-48 -top-48 h-[40rem] w-[40rem] animate-aurora rounded-full bg-leaf/15 blur-[130px]" />
        <div className="absolute -right-40 top-1/3 h-[32rem] w-[32rem] animate-aurora-slow rounded-full bg-gold/[0.08] blur-[120px]" />
        <div className="absolute inset-0 bg-grid-soft opacity-[0.12]" />
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,transparent_35%,rgba(5,48,29,0.75)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      <div className="container-page relative grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-24">
        <div>
          <span className="eyebrow-light animate-fade-up">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ring-pulse rounded-full bg-gold" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
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
            <Link to="/products" className="btn btn-primary group">
              Explore Products
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
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
              Katsina State, Nigeria
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

        <div className="relative animate-fade-up [animation-delay:200ms]">
          <HeroSlider products={HERO_PRODUCTS} />
        </div>
      </div>
    </section>
  );
}
