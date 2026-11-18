import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { PRODUCTS } from "../data/products";
import {
  COMPANY,
  DEFAULT_WHATSAPP_MESSAGE,
  MAP_DIRECTIONS_URL,
  NAV_ITEMS,
} from "../data/site";
import { whatsappUrl } from "../lib/whatsapp";
import { Link } from "../router/Router";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-950 text-white">
      <div className="absolute inset-0 bg-noise opacity-30" aria-hidden="true" />
      <div
        className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-leaf/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="inline-flex rounded-lg focus-visible:ring-offset-brand-950"
              aria-label="AJ FEED PLUS home"
            >
              <Logo variant="light" showTagline />
            </Link>
            <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-white/55">
              Poultry and ruminant feed manufacturing for broiler, layer and
              livestock farmers, agro-dealers and distributors across Nigeria.
            </p>
            <a
              href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold-outline mt-6 !min-h-[42px] !px-4 !text-[12px]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-[12.5px] text-white/60 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold">
              Products
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {PRODUCTS.map((product) => (
                <li key={product.slug}>
                  <Link
                    to={`/products/${product.slug}`}
                    className="text-[12.5px] text-white/60 transition hover:text-white"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-[12.5px] text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-leaf-300" aria-hidden="true" />
                <span>
                  {COMPANY.address.line1}, {COMPANY.address.line2},{" "}
                  {COMPANY.address.country}
                </span>
              </li>
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-2.5 transition hover:text-white"
                >
                  <Phone className="h-3.5 w-3.5 text-leaf-300" aria-hidden="true" />
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2.5 break-all transition hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-leaf-300" aria-hidden="true" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={MAP_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-gold transition hover:text-gold-light"
                >
                  Get directions
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {COMPANY.name}. All rights reserved.
          </p>
          <p className="font-semibold uppercase tracking-[0.16em] text-white/50">
            {COMPANY.slogan}
          </p>
        </div>
      </div>
    </footer>
  );
}
