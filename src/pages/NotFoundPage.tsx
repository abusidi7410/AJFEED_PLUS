import { ArrowRight, Home } from "lucide-react";
import { usePageMeta } from "../lib/seo";
import { Link, useRouter } from "../router/Router";

export default function NotFoundPage() {
  const { path } = useRouter();

  usePageMeta({
    title: "Page Not Found | AJ FEED PLUS",
    description: "The page you are looking for could not be found.",
    path,
    noindex: true,
  });

  return (
    <section className="relative overflow-hidden bg-brand-950">
      <div className="absolute inset-0 bg-grid-soft opacity-[0.1]" aria-hidden="true" />
      <div
        className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <span className="eyebrow-light">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          404
        </span>
        <h1 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          This page could not be found.
        </h1>
        <p className="mt-4 max-w-md text-[14px] leading-relaxed text-white/60">
          The page may have moved, or the address may be incorrect. Use the
          links below to continue.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn btn-primary">
            <Home className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
          <Link to="/products" className="btn btn-ghost-light">
            Browse products
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
