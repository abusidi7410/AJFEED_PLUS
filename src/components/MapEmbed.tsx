import { ArrowUpRight, MapPin } from "lucide-react";
import { MAP_DIRECTIONS_URL, MAP_EMBED_URL } from "../data/site";

export default function MapEmbed({ compact = false }: { compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-soft">
      <div className={`relative w-full ${compact ? "h-64" : "h-72 sm:h-80"}`}>
        <iframe
          title="Map showing the AJ FEED PLUS location in Funtua, Katsina State"
          src={MAP_EMBED_URL}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="flex flex-col gap-2 border-t border-brand-900/10 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
        <p className="inline-flex items-start gap-2 text-[11.5px] text-ink/60">
          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-700" aria-hidden="true" />
          No. 03 Light Industrial Estate, Along Dry Port Road, Funtua
        </p>
        <a
          href={MAP_DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 text-[11.5px] font-bold text-brand-700 transition hover:text-brand-900"
        >
          Open in Google Maps
          <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
