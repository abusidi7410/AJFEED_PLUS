import { ArrowRight, Check } from "lucide-react";
import { ABOUT_INTRO } from "../data/content";
import { PRODUCTS, PRODUCT_COUNTS } from "../data/products";
import { COMPANY } from "../data/site";
import { Link } from "../router/Router";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SmartImage from "./SmartImage";

const BROILER =
  PRODUCTS.find((product) => product.slug === "broiler-super-starter") ??
  PRODUCTS[0];
const RUMINANT =
  PRODUCTS.find((product) => product.slug === "bul-fat") ?? PRODUCTS[0];

const POINTS = [
  "Broiler, layer and ruminant nutrition",
  "Manufacturing in Katsina State",
  "Supply for farmers and trade partners",
  "Direct ordering through our team",
];

export default function HomeAbout() {
  return (
    <section className="section-padding bg-white" aria-labelledby="home-about">
      <div className="container-page grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
        <Reveal variant="left">
          <SectionHeading
            eyebrow="Who we are"
            title={
              <span id="home-about">
                A Nigerian feed business built around the farmer.
              </span>
            }
            description={ABOUT_INTRO[0]}
          />

          <p className="mt-5 max-w-xl text-pretty text-[14.5px] leading-relaxed text-ink/65">
            {ABOUT_INTRO[1]}
          </p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-[12.5px] font-medium leading-snug text-brand-950"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/about" className="btn btn-green">
              More about our company
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/products" className="btn btn-outline">
              Our feed range
            </Link>
          </div>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-3">
              <SmartImage
                src={BROILER.image}
                alt={BROILER.imageAlt}
                name={BROILER.name}
                category={BROILER.categoryLabel}
                className="aspect-[4/5] rounded-2xl border border-brand-900/10"
                imageClassName="p-3"
              />

              <div className="flex aspect-square flex-col justify-between rounded-2xl bg-brand-950 p-5 text-white">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gold">
                  Our promise
                </p>
                <p className="font-display text-[15px] font-bold leading-snug">
                  A clear range.
                  <br />
                  Straightforward ordering.
                </p>
                <p className="text-[10.5px] leading-relaxed text-white/50">
                  {COMPANY.slogan}.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-8">
              <div className="flex aspect-[5/4] flex-col justify-center rounded-2xl border border-brand-900/10 bg-cream p-5">
                <p className="font-display text-3xl font-extrabold leading-none text-brand-950">
                  {PRODUCT_COUNTS.all}
                </p>
                <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-ink/45">
                  Feed products
                </p>
                <p className="mt-4 border-t border-brand-900/10 pt-3 text-[11.5px] leading-relaxed text-ink/55">
                  Across three nutrition ranges for poultry and ruminant
                  production.
                </p>
              </div>

              <SmartImage
                src={RUMINANT.image}
                alt={RUMINANT.imageAlt}
                name={RUMINANT.name}
                category={RUMINANT.categoryLabel}
                className="aspect-[4/5] rounded-2xl border border-brand-900/10"
                imageClassName="p-3"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
