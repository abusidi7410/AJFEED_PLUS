import { ArrowRight } from "lucide-react";
import type { Product } from "../data/products";
import { Link } from "../router/Router";
import SmartImage from "./SmartImage";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-700/25 hover:shadow-card focus-visible:ring-offset-2"
    >
      <div className="relative">
        <SmartImage
          src={product.image}
          alt={product.imageAlt}
          name={product.name}
          category={product.categoryLabel}
          className="aspect-[4/5] w-full"
          imageClassName="p-3 transition duration-700 ease-out group-hover:scale-[1.06]"
        />
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-12deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
          aria-hidden="true"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.12em] text-brand-800 shadow-sm backdrop-blur transition duration-300 group-hover:bg-gold group-hover:text-brand-950">
          {product.categoryLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[17px] font-bold text-brand-950 transition group-hover:text-brand-700">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink/65">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-brand-900/10 pt-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/40">
            {[product.feedForm, product.packSize].filter(Boolean).join(" · ") ||
              product.categoryLabel}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-brand-700">
            View details
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
