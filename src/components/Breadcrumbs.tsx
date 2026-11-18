import { ChevronRight } from "lucide-react";
import { Link } from "../router/Router";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: Crumb[];
  tone?: "dark" | "light";
}) {
  const muted = tone === "light" ? "text-white/55" : "text-ink/45";
  const active = tone === "light" ? "text-white" : "text-brand-900";

  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-1.5 text-[11px] font-medium ${muted}`}>
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <Link
                  to={item.href}
                  className={`transition hover:text-gold ${tone === "light" ? "hover:text-gold" : "hover:text-brand-700"}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={last ? `font-semibold ${active}` : ""} aria-current={last ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight className="h-3 w-3 opacity-50" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
