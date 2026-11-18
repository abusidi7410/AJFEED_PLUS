import { useState } from "react";
import { ArrowDown, Clock3, Wheat } from "lucide-react";
import CtaBand from "../components/CtaBand";
import PageHero from "../components/PageHero";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { COMING_SOON, COMING_SOON_MESSAGE, PRODUCT_ENQUIRY_NOTE } from "../data/content";
import {
  PRODUCTS,
  PRODUCT_COUNTS,
  type ProductCategory,
} from "../data/products";
import { DEFAULT_WHATSAPP_MESSAGE } from "../data/site";
import { usePageMeta } from "../lib/seo";
import { whatsappUrl } from "../lib/whatsapp";

const RANGE_FACTS = [
  { label: "Broiler products", value: String(PRODUCT_COUNTS.broiler) },
  { label: "Layer products", value: String(PRODUCT_COUNTS.layer) },
  { label: "Ruminant products", value: String(PRODUCT_COUNTS.ruminant) },
  { label: "Feed formats", value: "Crumbles · Mash · Pellets · Concentrate" },
];

const CATEGORY_FILTERS = [
  { value: "all", label: "All products", count: PRODUCT_COUNTS.all },
  { value: "broiler", label: "Broiler", count: PRODUCT_COUNTS.broiler },
  { value: "layer", label: "Layer", count: PRODUCT_COUNTS.layer },
  { value: "ruminant", label: "Ruminant", count: PRODUCT_COUNTS.ruminant },
] as const;

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">(
    "all",
  );
  const visibleProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === activeCategory);

  usePageMeta({
    title: "Poultry & Ruminant Feed Products | AJ FEED PLUS",
    description:
      "Explore the AJ FEED PLUS range of broiler, layer and ruminant feed products, from chick and grower feeds to concentrates and livestock nutrition.",
    path: "/products",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "AJ FEED PLUS feed products",
      itemListElement: PRODUCTS.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `https://ajfeedplus.com/products/${product.slug}`,
      })),
    },
  });

  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Poultry and ruminant nutrition in one clear catalogue."
        description={`${PRODUCTS.length} products across the broiler, layer and ruminant cycles — from chick development and growing pullets to finishing, egg production and livestock feeding.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#catalogue" className="btn btn-primary">
            Browse the catalogue
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost-light"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Ask about a product
          </a>
        </div>
      </PageHero>

      <section className="border-b border-brand-900/10 bg-white">
        <div className="container-page grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {RANGE_FACTS.map((fact, index) => (
            <Reveal
              key={fact.label}
              delay={index * 60}
              className="flex items-center gap-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Wheat className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-ink/40">
                  {fact.label}
                </p>
                <p className="mt-0.5 text-[12.5px] font-bold text-brand-950">
                  {fact.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="catalogue" className="section-padding bg-cream">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Complete Catalogue"
              title="Every product, one place."
              description="Open any product for its intended feeding stage, feed form and direct WhatsApp enquiry. Prices, pack sizes and availability are confirmed by our team."
            />
          </Reveal>

          <Reveal
            delay={80}
            variant="fade"
            className="mt-8 flex flex-wrap gap-2"
          >
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter products by category"
            >
              {CATEGORY_FILTERS.map((filter) => {
                const active = activeCategory === filter.value;
                return (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setActiveCategory(filter.value)}
                    aria-pressed={active}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11.5px] font-bold transition ${
                      active
                        ? "border-brand-800 bg-brand-800 text-white"
                        : "border-brand-900/15 bg-white text-ink/60 hover:border-brand-700/35 hover:text-brand-800"
                    }`}
                  >
                    {filter.label}
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[9px] ${
                        active ? "bg-white/15 text-white/80" : "bg-brand-50 text-brand-700"
                      }`}
                    >
                      {filter.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <p className="mt-3 text-[11px] text-ink/45" aria-live="polite">
            Showing {visibleProducts.length} of {PRODUCTS.length} products.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visibleProducts.map((product, index) => (
              <Reveal
                key={`${activeCategory}-${product.slug}`}
                delay={index * 50}
                className="h-full"
              >
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-[11px] leading-relaxed text-ink/45">
            {PRODUCT_ENQUIRY_NOTE}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="coming-soon">
        <div className="container-page">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-3xl border border-brand-900/10 bg-cream p-6 shadow-soft sm:p-8 lg:p-10">
            <div
              className="absolute -right-16 -top-16 h-48 w-48 animate-float-slow rounded-full bg-gold/15 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-soft px-3 py-1 text-[9.5px] font-bold uppercase tracking-[0.14em] text-brand-900 ring-1 ring-gold/40">
                  <Clock3 className="h-3 w-3" aria-hidden="true" />
                  Coming Soon
                </span>
                <h2
                  id="coming-soon"
                  className="mt-4 font-display text-2xl font-extrabold tracking-tight text-brand-950 sm:text-3xl"
                >
                  Products under consideration.
                </h2>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink/60">
                  These products are not yet available to order. They are shown
                  separately from the current catalogue for transparency.
                </p>
              </div>

              <a
                href={whatsappUrl(COMING_SOON_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline shrink-0 self-start"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Ask for updates
              </a>
            </div>

            <div className="relative mt-8 grid gap-4 md:grid-cols-3">
              {COMING_SOON.map((group) => (
                <div
                  key={group.group}
                  className="rounded-2xl border border-brand-900/10 bg-white p-5"
                >
                  <p className="font-display text-[15px] font-bold text-brand-950">
                    {group.group}
                  </p>
                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-ink/50">
                    {group.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center justify-between gap-2 border-t border-brand-900/10 pt-2 text-[12px] text-ink/65 first:border-t-0 first:pt-0"
                      >
                        {item}
                        <span className="shrink-0 text-[9px] font-bold uppercase tracking-[0.1em] text-ink/35">
                          Soon
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="relative mt-6 max-w-3xl text-[10.5px] leading-relaxed text-ink/45">
              Product names and groups shown here are indicative and may change.
              Contact our team to confirm what is currently available.
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Not sure which feed fits your flock?"
        description="Tell us the birds you are raising and the stage they are at. Our team will help you identify the right product to enquire about."
        secondaryLabel="About us"
        secondaryTo="/about"
      />
    </>
  );
}
