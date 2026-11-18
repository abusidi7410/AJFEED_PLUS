import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm";
import CtaBand from "../components/CtaBand";
import MapEmbed from "../components/MapEmbed";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import WhatsAppIcon from "../components/WhatsAppIcon";
import {
  COMPANY,
  DEFAULT_WHATSAPP_MESSAGE,
  MAP_DIRECTIONS_URL,
} from "../data/site";
import { usePageMeta } from "../lib/seo";
import { whatsappUrl } from "../lib/whatsapp";

const WHOLESALE_MESSAGE =
  "Hello AJ FEED PLUS, I would like to discuss a wholesale or distribution enquiry for feed products.";

const CONTACT_METHODS = [
  {
    label: "Telephone",
    value: COMPANY.phones.map((phone) => phone.display).join(" · "),
    helper: "Call our team directly",
    href: COMPANY.phoneHref,
    icon: Phone,
    external: false,
  },
  {
    label: "WhatsApp",
    value: "Chat with our team",
    helper: "Fastest route for product enquiries",
    href: whatsappUrl(DEFAULT_WHATSAPP_MESSAGE),
    icon: WhatsAppIcon,
    external: true,
  },
  {
    label: "Email",
    value: COMPANY.email,
    helper: "For written enquiries",
    href: `mailto:${COMPANY.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Address",
    value: COMPANY.address.line1,
    helper: `${COMPANY.address.line2}, ${COMPANY.address.country}`,
    href: MAP_DIRECTIONS_URL,
    icon: MapPin,
    external: true,
  },
];

export default function ContactPage() {
  usePageMeta({
    title: "Contact Us | AJ FEED PLUS",
    description:
      "Contact AJ FEED PLUS for feed enquiries. Reach our team by phone, email or WhatsApp, or send a product enquiry.",
    path: "/contact",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact AJ FEED PLUS",
      url: "https://www.ajfeedplus.com.ng/contact",
      mainEntity: {
        "@type": "Organization",
        name: COMPANY.name,
        telephone: "+2348023644982",
        email: COMPANY.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY.address.line1,
          addressLocality: "Funtua",
          addressRegion: "Katsina State",
          addressCountry: "NG",
        },
      },
    },
  });

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to the team behind the feed."
        description="For product enquiries, current pricing, availability and delivery, reach us directly. WhatsApp is the quickest way to start the conversation."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      >
        <a
          href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Chat on WhatsApp
        </a>
      </PageHero>

      <section className="section-padding bg-cream" aria-labelledby="contact-details">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal variant="left">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
              Direct contact
            </span>
            <h2
              id="contact-details"
              className="mt-4 font-display text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl"
            >
              Speak with our team.
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-ink/60">
              Visit us at the address listed below. Product availability, pack
              sizes, pricing and delivery are confirmed directly by our team.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {CONTACT_METHODS.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Reveal key={method.label} delay={index * 60} className="h-full">
                  <a
                    href={method.href}
                    {...(method.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex h-full flex-col rounded-2xl border border-brand-900/10 bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-700/25"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-900/10">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.16em] text-ink/40">
                      {method.label}
                    </p>
                    <p className="mt-1 break-words text-[12px] font-semibold text-brand-950">
                      {method.value}
                    </p>
                    <p className="mt-1 text-[10.5px] leading-snug text-ink/45">
                      {method.helper}
                    </p>
                  </a>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={120}>
            <div className="relative mt-4 overflow-hidden rounded-2xl bg-brand-950 p-6 text-white transition duration-500 hover:-translate-y-1 hover:shadow-card">
              <div className="absolute inset-0 bg-noise opacity-30" aria-hidden="true" />
              <div
                className="absolute -right-10 -top-10 h-32 w-32 animate-float-slow rounded-full border border-gold/20"
                aria-hidden="true"
              />
              <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-gold">
                Trade enquiries
              </p>
              <h3 className="relative mt-2 font-display text-lg font-bold">
                Wholesale &amp; distribution
              </h3>
              <p className="relative mt-2 max-w-sm text-[12px] leading-relaxed text-white/60">
                Speak with our team about volume supply, retail partnerships or
                distribution in your area.
              </p>
              <a
                href={whatsappUrl(WHOLESALE_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-4 inline-flex items-center gap-1.5 text-[11.5px] font-bold text-gold transition hover:text-gold-light"
              >
                Message our team
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
            </Reveal>

            <Reveal delay={160} className="mt-4">
              <MapEmbed compact />
            </Reveal>
          </Reveal>

          <Reveal variant="right" delay={100} className="lg:sticky lg:top-32">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Prefer a direct conversation?"
        description="Call or message our team with the product and quantity you have in mind. We will take it from there."
        secondaryLabel="View products"
        secondaryTo="/products"
      />
    </>
  );
}
