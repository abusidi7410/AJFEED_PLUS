import { ArrowRight } from "lucide-react";
import { PRODUCTS, PRODUCT_COUNTS } from "../data/products";
import { Link } from "../router/Router";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SmartImage from "./SmartImage";

const RANGES = [
  {
    label: "Broiler Nutrition",
    title: "Broiler",
    description:
      "Super starter and starter crumbles through to a pelleted finisher for meat birds.",
    count: PRODUCT_COUNTS.broiler,
    slug: "broiler-finisher",
  },
  {
    label: "Layer Nutrition",
    title: "Layer",
    description:
      "Chick, grower and laying feeds in mash, pellet and concentrate formats.",
    count: PRODUCT_COUNTS.layer,
    slug: "layer-pellets",
  },
  {
    label: "Ruminant Nutrition",
    title: "Ruminant",
    description:
      "Cattle fattening, ram fattening and a cow milk feed for dairy cattle.",
    count: PRODUCT_COUNTS.ruminant,
    slug: "bul-fat",
  },
] as const;

const RANGES_WITH_IMAGES = RANGES.map((range) => ({
  ...range,
  product:
    PRODUCTS.find((product) => product.slug === range.slug) ?? PRODUCTS[0],
}));

export default function FeedRange() {
  return (
    <section className="section-padding bg-cream" aria-labelledby="home-range">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Our feed range"
            title={
              <span id="home-range">
                Three ranges. One focus: the right feed for the stage.
              </span>
            }
            description="Our range is organised around the animals farmers raise and the stages they move through, making it easier to find the right product before enquiring."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {RANGES_WITH_IMAGES.map((range, index) => (
            <Reveal key={range.title} delay={index * 80} className="h-full">
              <Link
                to="/products"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-700/25 hover:shadow-card"
              >
                <SmartImage
                  src={range.product.image}
                  alt={range.product.imageAlt}
                  name={range.product.name}
                  category={range.product.categoryLabel}
                  className="aspect-[4/3] w-full"
                  imageClassName="p-4 transition duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div className="flex flex-1 flex-col border-t border-brand-900/10 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-700">
                        {range.label}
                      </p>
                      <h3 className="mt-1.5 font-display text-xl font-extrabold text-brand-950">
                        {range.title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-bold text-brand-800 ring-1 ring-brand-900/10">
                      {range.count} products
                    </span>
                  </div>

                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink/60">
                    {range.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-[11.5px] font-bold text-brand-700">
                    View range
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-8 flex justify-center">
          <Link to="/products" className="btn btn-green">
            Browse the full catalogue
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
