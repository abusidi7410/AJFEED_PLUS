import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Hero from "../components/Hero";
import CommitmentCards from "../components/CommitmentCards";
import FeedRange from "../components/FeedRange";
import HomeAbout from "../components/HomeAbout";
import MapEmbed from "../components/MapEmbed";
import OrderSteps from "../components/OrderSteps";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { COMMITMENT_STATEMENT } from "../data/content";
import {
  COMPANY,
  DEFAULT_WHATSAPP_MESSAGE,
  MAP_DIRECTIONS_URL,
} from "../data/site";
import { usePageMeta } from "../lib/seo";
import { whatsappUrl } from "../lib/whatsapp";
import { Link } from "../router/Router";

const CONTACT_CARDS = [
  {
    label: "Call us",
    value: COMPANY.phones.map((phone) => phone.display).join(" · "),
    href: COMPANY.phoneHref,
    icon: Phone,
    external: false,
  },
  {
    label: "WhatsApp",
    value: "Chat with our team",
    href: whatsappUrl(DEFAULT_WHATSAPP_MESSAGE),
    icon: WhatsAppIcon,
    external: true,
  },
  {
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    icon: Mail,
    external: false,
  },
];

export default function HomePage() {
  usePageMeta({
    title: "AJ FEED PLUS | Feed Manufacturer in Nigeria",
    description:
      "Broiler, layer and ruminant feed from AJ FEED PLUS in Nigeria. Explore the range and enquire directly on WhatsApp.",
    path: "/",
  });

  return (
    <>
      <Hero />

      <HomeAbout />

      <FeedRange />

      <OrderSteps />

      <section className="relative overflow-hidden bg-brand-950" aria-labelledby="home-commitment">
        <div className="absolute inset-0 bg-grid-soft opacity-[0.1]" aria-hidden="true" />
        <div
          className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-leaf/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-page relative section-padding">
          <Reveal>
            <SectionHeading
              eyebrow="Our Commitment"
              tone="dark"
              title={
                <span id="home-commitment">
                  Built on dependable products and clear communication.
                </span>
              }
              description="We keep our focus practical: a clear poultry and ruminant nutrition range, straightforward ordering, and direct contact with the team behind the feed."
            />
          </Reveal>

          <div className="mt-10">
            <CommitmentCards />
          </div>

          <Reveal delay={120}>
            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-gold/20 bg-gold/[0.06] p-5 transition duration-300 hover:border-gold/35 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <p className="max-w-2xl font-display text-[15px] font-semibold leading-relaxed text-white/85">
                {COMMITMENT_STATEMENT}
              </p>
              <Link
                to="/about"
                className="inline-flex shrink-0 items-center gap-1.5 text-[12px] font-bold text-gold transition hover:text-gold-light"
              >
                Learn about us
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-cream" aria-labelledby="home-contact">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal variant="left">
            <SectionHeading
              eyebrow="Contact Us"
              title={<span id="home-contact">Let&apos;s talk about your flock.</span>}
              description="Product availability, pricing and delivery are confirmed directly by our team. Reach us by phone, email or WhatsApp."
            />

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {CONTACT_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <a
                    key={card.label}
                    href={card.href}
                    {...(card.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group rounded-2xl border border-brand-900/10 bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-700/25"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-900/10">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.16em] text-ink/40">
                      {card.label}
                    </p>
                    <p className="mt-1 break-words text-[12px] font-semibold text-brand-950">
                      {card.value}
                    </p>
                  </a>
                );
              })}

              <a
                href={MAP_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-brand-900/10 bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-700/25"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-900/10">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.16em] text-ink/40">
                  Visit us
                </p>
                <p className="mt-1 text-[12px] font-semibold leading-snug text-brand-950">
                  {COMPANY.address.line1}, {COMPANY.address.line2}
                </p>
              </a>
            </div>

            <Link to="/contact" className="btn btn-green mt-6">
              Contact our team
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <MapEmbed />
          </Reveal>
        </div>
      </section>
    </>
  );
}
