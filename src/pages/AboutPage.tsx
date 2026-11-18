import { ArrowRight, Beef, Bird, Egg, Store } from "lucide-react";
import CommitmentCards from "../components/CommitmentCards";
import CtaBand from "../components/CtaBand";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import WhatsAppIcon from "../components/WhatsAppIcon";
import {
  ABOUT_INTRO,
  COMMITMENT_STATEMENT,
  COMPANY_FACTS,
  WHAT_WE_DO,
} from "../data/content";
import { COMPANY, DEFAULT_WHATSAPP_MESSAGE } from "../data/site";
import { usePageMeta } from "../lib/seo";
import { whatsappUrl } from "../lib/whatsapp";
import { Link } from "../router/Router";

const WHAT_WE_DO_ICONS = {
  broiler: Bird,
  layer: Egg,
  ruminant: Beef,
  trade: Store,
} as const;

export default function AboutPage() {
  usePageMeta({
    title: "About Us | AJ FEED PLUS Feed Manufacturer",
    description:
      "Learn about AJ FEED PLUS, a Nigerian animal feed manufacturing business producing poultry and ruminant nutrition for farmers and trade partners.",
    path: "/about",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About AJ FEED PLUS",
      url: "https://ajfeedplus.com/about",
      about: {
        "@type": "Organization",
        name: "AJ FEED PLUS",
        slogan: COMPANY.slogan,
      },
    },
  });

  return (
    <>
      <PageHero
        eyebrow="About AJ FEED PLUS"
        title="Feed, made for the practical work of farming."
        description="A Nigerian animal feed manufacturing business serving the farmers, agro-dealers and distributors who keep the country's livestock value chain moving."
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/products" className="btn btn-primary">
            Explore our products
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost-light"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Talk to our team
          </a>
        </div>
      </PageHero>

      <section className="section-padding bg-white" aria-labelledby="about-who">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal variant="left">
            <SectionHeading
              eyebrow="Who We Are"
              title={
                <span id="about-who">
                  A Nigerian feed business built around the farmer.
                </span>
              }
              description={ABOUT_INTRO[0]}
            />
            <p className="mt-5 max-w-2xl text-pretty text-[14.5px] leading-relaxed text-ink/65">
              {ABOUT_INTRO[1]}
            </p>
            <p className="mt-4 max-w-2xl text-pretty text-[14.5px] leading-relaxed text-ink/65">
              Our product range is presented by animal type and feeding stage.
              That keeps the catalogue easy to navigate for farmers planning a
              cycle, and for trade partners sourcing for the customers they
              serve.
            </p>
          </Reveal>

          <Reveal variant="right" delay={120}>
          <aside className="relative overflow-hidden rounded-3xl bg-brand-950 p-6 text-white shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-card sm:p-8">
            <div className="absolute inset-0 bg-grid-soft opacity-[0.1]" aria-hidden="true" />
            <div
              className="absolute -right-12 -top-12 h-40 w-40 animate-float-slow rounded-full border border-gold/20"
              aria-hidden="true"
            />
            <p className="relative text-[9.5px] font-bold uppercase tracking-[0.2em] text-gold">
              At a glance
            </p>
            <dl className="relative mt-5 divide-y divide-white/10">
              {COMPANY_FACTS.map((fact) => (
                <div key={fact.label} className="flex items-start justify-between gap-4 py-3.5">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40">
                    {fact.label}
                  </dt>
                  <dd className="max-w-[60%] text-right text-[12.5px] font-semibold leading-snug text-white/85">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              to="/contact"
              className="relative mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold text-gold transition hover:text-gold-light"
            >
              Contact our team
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </aside>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-cream" aria-labelledby="about-do">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title={
                <span id="about-do">
                  Nutrition across poultry and ruminant production.
                </span>
              }
              description="Our range covers broiler, layer and ruminant feeding, with a clear route to the right product for each stage."
              align="center"
            />
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {WHAT_WE_DO.map((item, index) => {
              const Icon = WHAT_WE_DO_ICONS[item.icon];
              return (
                <Reveal key={item.title} delay={index * 80} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-2xl border border-brand-900/10 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-700/25">
                  <span className="absolute right-5 top-5 text-[10px] font-bold tracking-[0.14em] text-brand-900/15">
                    0{index + 1}
                  </span>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-900/10">
                    <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-brand-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/60">
                    {item.description}
                  </p>
                </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-950" aria-labelledby="about-commitment">
        <div className="absolute inset-0 bg-grid-soft opacity-[0.1]" aria-hidden="true" />
        <div className="container-page relative section-padding">
          <Reveal>
            <SectionHeading
              eyebrow="Our Commitment"
              tone="dark"
              title={
                <span id="about-commitment">
                  Dependable supply matters as much as formulation.
                </span>
              }
              description="We aim to build a feed business that livestock farmers can plan around — with clear product information and direct communication."
            />
          </Reveal>

          <div className="mt-10">
            <CommitmentCards />
          </div>

          <Reveal delay={120}>
            <p className="mt-8 max-w-3xl border-l-2 border-gold/60 pl-5 font-display text-lg font-semibold leading-relaxed text-white/80">
              {COMMITMENT_STATEMENT}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Have a question about our feed range?"
        description="Our team can confirm product availability, pack sizes, pricing and delivery for your location."
        secondaryLabel="View products"
        secondaryTo="/products"
      />
    </>
  );
}
