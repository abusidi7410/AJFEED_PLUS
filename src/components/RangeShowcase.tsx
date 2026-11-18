import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import type { ProductCategory } from "../data/products";
import { PRODUCTS, PRODUCT_COUNTS } from "../data/products";
import { Link } from "../router/Router";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SmartImage from "./SmartImage";

const TABS: {
  id: ProductCategory;
  label: string;
  blurb: string;
  count: number;
}[] = [
  {
    id: "broiler",
    label: "Broiler",
    blurb: "Super starter to finishing",
    count: PRODUCT_COUNTS.broiler,
  },
  {
    id: "layer",
    label: "Layer",
    blurb: "Chick to egg production",
    count: PRODUCT_COUNTS.layer,
  },
  {
    id: "ruminant",
    label: "Ruminant",
    blurb: "Cattle & ram feeding",
    count: PRODUCT_COUNTS.ruminant,
  },
];

const FIRST_BY_CATEGORY = TABS.reduce<Record<ProductCategory, string>>(
  (accumulator, tab) => {
    const product = PRODUCTS.find((item) => item.category === tab.id);
    if (product) accumulator[tab.id] = product.slug;
    return accumulator;
  },
  { broiler: "", layer: "", ruminant: "" },
);

export default function RangeShowcase() {
  const [category, setCategory] = useState<ProductCategory>("broiler");
  const [selectedSlug, setSelectedSlug] = useState(
    FIRST_BY_CATEGORY.broiler,
  );

  const items = PRODUCTS.filter((product) => product.category === category);
  const active = items.find((product) => product.slug === selectedSlug) ?? items[0];
  const activeTab = TABS.find((tab) => tab.id === category) ?? TABS[0];

  function chooseCategory(next: ProductCategory) {
    setCategory(next);
    setSelectedSlug(FIRST_BY_CATEGORY[next]);
  }

  if (!active) return null;

  return (
    <section
      className="section-padding relative overflow-hidden bg-cream"
      aria-labelledby="home-range"
    >
      <div
        className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-leaf/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Product finder"
            title={
              <span id="home-range">
                Find the feed that fits the stage.
              </span>
            }
            description="Pick a category, then select a product to preview it. Open the full details or send our team a message when you are ready."
          />
          <Link
            to="/products"
            className="btn btn-outline shrink-0 self-start sm:self-auto"
          >
            Full catalogue
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <Reveal variant="left">
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-3 rounded-[2.2rem] border border-brand-900/10"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[1.9rem] border border-brand-900/10 bg-white shadow-soft">
                <div className="relative aspect-[4/5] overflow-hidden bg-[radial-gradient(circle_at_50%_15%,#ffffff_0%,#eff5ec_55%,#dce9d8_100%)] sm:aspect-[5/4] lg:aspect-[4/5]">
                  {items.map((product) => {
                    const isActive = product.slug === active.slug;
                    return (
                      <div
                        key={product.slug}
                        className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isActive
                            ? "scale-100 opacity-100"
                            : "scale-105 opacity-0"
                        }`}
                        aria-hidden={!isActive}
                      >
                        <SmartImage
                          src={product.image}
                          alt={product.imageAlt}
                          name={product.name}
                          category={product.categoryLabel}
                          className="h-full w-full bg-transparent"
                          imageClassName="object-contain px-4 py-8 sm:px-8"
                        />
                      </div>
                    );
                  })}

                  <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
                    <span className="rounded-full bg-brand-950/85 px-3 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur">
                      {active.categoryLabel}
                    </span>
                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-brand-800 shadow-sm ring-1 ring-brand-900/10 backdrop-blur">
                      {active.feedForm ?? "Feed"}
                    </span>
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-white via-white/85 to-transparent p-4 pt-16">
                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-700">
                        {active.stage}
                      </p>
                      <p
                        key={active.slug}
                        className="animate-fade-in truncate font-display text-lg font-extrabold text-brand-950"
                      >
                        {active.name}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-bold text-brand-800 ring-1 ring-brand-900/10">
                      {active.packSize ?? "On enquiry"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-brand-900/10 px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    {items.map((product) => (
                      <span
                        key={product.slug}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          product.slug === active.slug
                            ? "w-6 bg-brand-700"
                            : "w-1.5 bg-brand-900/20"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="font-display text-[11px] font-bold tabular-nums text-ink/40">
                    {String(items.indexOf(active) + 1).padStart(2, "0")}
                    {" / "}
                    {String(items.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Nutrition categories">
              {TABS.map((tab) => {
                const isActive = tab.id === category;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => chooseCategory(tab.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[12px] font-bold transition duration-300 ${
                      isActive
                        ? "bg-brand-950 text-white shadow-soft"
                        : "bg-white text-brand-900 ring-1 ring-brand-900/10 hover:-translate-y-0.5 hover:bg-brand-50"
                    }`}
                  >
                    {tab.label}
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[9.5px] font-bold ${
                        isActive
                          ? "bg-white/15 text-gold"
                          : "bg-brand-50 text-brand-700"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-700">
              {activeTab.label} range · {activeTab.blurb}
            </p>
            <h3 className="mt-2 text-balance font-display text-2xl font-extrabold leading-tight text-brand-950 sm:text-3xl">
              {active.name}
            </h3>
            <p className="mt-3 text-pretty text-[13.5px] leading-relaxed text-ink/65">
              {active.shortDescription}
            </p>

            <ul className="mt-5 grid gap-2">
              {active.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2.5 rounded-xl border border-brand-900/10 bg-white/70 px-3 py-2 text-[12px] font-medium text-brand-950"
                >
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                    <Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-5 space-y-1.5">
              {items.map((product, index) => {
                const isActive = product.slug === active.slug;
                return (
                  <button
                    key={product.slug}
                    type="button"
                    onClick={() => setSelectedSlug(product.slug)}
                    onMouseEnter={() => setSelectedSlug(product.slug)}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl border px-3.5 py-2.5 text-left transition duration-200 ${
                      isActive
                        ? "border-brand-700/30 bg-brand-50"
                        : "border-brand-900/10 bg-white hover:border-brand-700/25 hover:bg-brand-50/60"
                    }`}
                  >
                    <span className="flex min-w-0 items-center gap-2.5">
                      <span
                        className={`font-display text-[10px] font-bold tabular-nums ${
                          isActive ? "text-brand-700" : "text-ink/30"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-[12.5px] font-bold text-brand-950">
                          {product.name}
                        </span>
                        <span className="block truncate text-[10.5px] text-ink/45">
                          {product.stage}
                        </span>
                      </span>
                    </span>
                    <ArrowRight
                      className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                        isActive
                          ? "translate-x-0 text-brand-700"
                          : "-translate-x-1 text-ink/25"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            <Link
              to={`/products/${active.slug}`}
              className="btn btn-green mt-5 w-full sm:w-auto"
            >
              View {active.name}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
