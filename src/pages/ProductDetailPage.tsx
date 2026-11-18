import {
  ArrowLeft,
  ArrowRight,
  Check,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import CtaBand from "../components/CtaBand";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import WhatsAppIcon from "../components/WhatsAppIcon";
import {
  ORDER_STEPS,
  PRODUCT_DISCLAIMER,
  PRODUCT_ENQUIRY_NOTE,
} from "../data/content";
import {
  getRelatedProducts,
  productEnquiryMessage,
  type Product,
} from "../data/products";
import { COMPANY } from "../data/site";
import { usePageMeta } from "../lib/seo";
import { whatsappUrl } from "../lib/whatsapp";
import { Link } from "../router/Router";

export default function ProductDetailPage({ product }: { product: Product }) {
  const related = getRelatedProducts(product);
  const path = `/products/${product.slug}`;

  usePageMeta({
    title: `${product.name} | AJ FEED PLUS`,
    description: product.shortDescription,
    path,
    image: product.image
      ? `https://ajfeedplus.com${product.image}`
      : undefined,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: product.shortDescription,
      category: product.categoryLabel,
      url: `https://ajfeedplus.com${path}`,
      brand: { "@type": "Brand", name: COMPANY.name },
      additionalProperty: [
        ...(product.feedForm
          ? [
              {
                "@type": "PropertyValue",
                name: "Feed form",
                value: product.feedForm,
              },
            ]
          : []),
        ...(product.packSize
          ? [
              {
                "@type": "PropertyValue",
                name: "Pack size",
                value: product.packSize,
              },
            ]
          : []),
        {
          "@type": "PropertyValue",
          name: "Intended stage",
          value: product.stage,
        },
      ],
    },
  });

  return (
    <>
      <div className="border-b border-brand-900/10 bg-cream">
        <div className="container-page py-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      <section className="bg-white">
        <div className="container-page py-10 sm:py-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div className="animate-fade-up">
              <SmartImage
                src={product.image}
                alt={product.imageAlt}
                name={product.name}
                category={product.categoryLabel}
                className="aspect-[4/5] w-full rounded-3xl border border-brand-900/10 shadow-soft sm:aspect-square lg:aspect-[4/5]"
                imageClassName="p-5 transition duration-700 ease-out hover:scale-[1.02] sm:p-8"
                eager
              />
              {product.imageNote && (
                <p className="mt-3 text-[10.5px] leading-relaxed text-ink/45">
                  {product.imageNote}
                </p>
              )}
            </div>

            <div className="animate-fade-up [animation-delay:120ms]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-brand-50 px-3 py-1 text-[9.5px] font-bold uppercase tracking-[0.14em] text-brand-800 ring-1 ring-brand-900/10">
                  {product.categoryLabel}
                </span>
                {product.feedForm && (
                  <span className="rounded-full bg-gold-soft px-3 py-1 text-[9.5px] font-bold uppercase tracking-[0.14em] text-brand-900 ring-1 ring-gold/40">
                    {product.feedForm}
                  </span>
                )}
                {product.packSize && (
                  <span className="rounded-full bg-white px-3 py-1 text-[9.5px] font-bold uppercase tracking-[0.14em] text-brand-800 ring-1 ring-brand-900/15">
                    {product.packSize}
                  </span>
                )}
              </div>

              <h1 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-brand-950 sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-ink/65">
                {product.shortDescription}
              </p>

              <div className="mt-6 space-y-4">
                {product.description.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-xl text-[13.5px] leading-relaxed text-ink/60"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <dl className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-brand-900/10 bg-cream p-4">
                  <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-ink/40">
                    Product range
                  </dt>
                  <dd className="mt-1 text-[13px] font-bold text-brand-950">
                    {product.categoryLabel}
                  </dd>
                </div>
                <div className="rounded-xl border border-brand-900/10 bg-cream p-4">
                  <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-ink/40">
                    Intended stage
                  </dt>
                  <dd className="mt-1 text-[13px] font-bold text-brand-950">
                    {product.stage}
                  </dd>
                </div>
                {product.feedForm && (
                  <div className="rounded-xl border border-brand-900/10 bg-cream p-4">
                    <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-ink/40">
                      Feed form
                    </dt>
                    <dd className="mt-1 text-[13px] font-bold text-brand-950">
                      {product.feedForm}
                    </dd>
                  </div>
                )}
                {product.packSize && (
                  <div className="rounded-xl border border-brand-900/10 bg-cream p-4">
                    <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-ink/40">
                      Pack size
                    </dt>
                    <dd className="mt-1 text-[13px] font-bold text-brand-950">
                      {product.packSize}
                    </dd>
                  </div>
                )}
                <div className="rounded-xl border border-brand-900/10 bg-cream p-4">
                  <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-ink/40">
                    Availability
                  </dt>
                  <dd className="mt-1 text-[13px] font-bold text-brand-950">
                    Confirmed on enquiry
                  </dd>
                </div>
              </dl>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl(productEnquiryMessage(product))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-green"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Enquire on WhatsApp
                </a>
                {COMPANY.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="btn btn-outline"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {phone.display}
                  </a>
                ))}
              </div>

              <p className="mt-3 flex items-start gap-2 text-[10.5px] leading-relaxed text-ink/45">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-600" aria-hidden="true" />
                {PRODUCT_ENQUIRY_NOTE}
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 border-t border-brand-900/10 pt-10 lg:grid-cols-[1fr_0.8fr] lg:gap-12">
            <Reveal>
              <div>
                <h2 className="font-display text-xl font-extrabold text-brand-950">
                  Product overview
                </h2>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-3">
                  {product.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 rounded-xl border border-brand-900/10 bg-cream p-3.5 text-[11.5px] font-medium leading-snug text-ink/65 transition duration-300 hover:-translate-y-0.5 hover:border-brand-700/20 hover:bg-white"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-leaf-500" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="h-full rounded-2xl border border-brand-900/10 bg-brand-50/60 p-5">
                <h2 className="font-display text-[14px] font-bold text-brand-950">
                  Product information
                </h2>
                <p className="mt-2 text-[11.5px] leading-relaxed text-ink/55">
                  {PRODUCT_DISCLAIMER}
                </p>
                <Link
                  to="/products"
                  className="mt-4 inline-flex items-center gap-1.5 text-[11.5px] font-bold text-brand-700 transition hover:text-brand-900"
                >
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  Back to all products
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream" aria-labelledby="ordering">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
              How to order
            </span>
            <h2
              id="ordering"
              className="mt-4 font-display text-3xl font-extrabold tracking-tight text-brand-950"
            >
              A straightforward enquiry.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {ORDER_STEPS.map((step, index) => (
              <Reveal key={step.number} delay={index * 80} className="h-full">
                <div className="h-full rounded-2xl border border-brand-900/10 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-700/20 hover:shadow-card">
                  <span className="font-display text-2xl font-extrabold text-gold-dark/50">
                    {step.number}
                  </span>
                  <h3 className="mt-2 font-display text-[15px] font-bold text-brand-950">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-ink/55">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-white" aria-labelledby="related">
          <div className="container-page">
            <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
                  Related products
                </span>
                <h2
                  id="related"
                  className="mt-3 font-display text-2xl font-extrabold tracking-tight text-brand-950 sm:text-3xl"
                >
                  More from the range
                </h2>
              </div>
              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-700 transition hover:text-brand-900"
              >
                View all products
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </Reveal>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 70} className="h-full">
                  <ProductCard product={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={`Ready to enquire about ${product.name}?`}
        description="Send our team a message with the quantity you need. We will confirm current price, availability and delivery details."
        message={productEnquiryMessage(product)}
        secondaryLabel="Contact us"
        secondaryTo="/contact"
      />
    </>
  );
}
