import { useEffect, useState } from "react";
import { Wheat } from "lucide-react";

interface SmartImageProps {
  src?: string;
  alt?: string;
  name: string;
  category: string;
  className?: string;
  imageClassName?: string;
  eager?: boolean;
}

export default function SmartImage({
  src,
  alt,
  name,
  category,
  className = "",
  imageClassName = "",
  eager = false,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!src || failed) {
    return (
      <div
        className={`relative overflow-hidden bg-brand-950 ${className}`}
        role="img"
        aria-label={`${name} — product image coming soon`}
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(99,169,75,0.35),transparent_46%),radial-gradient(circle_at_12%_88%,rgba(244,197,66,0.16),transparent_42%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-noise opacity-40"
          aria-hidden="true"
        />
        <div
          className="absolute -right-10 -top-12 h-44 w-44 rounded-full border border-gold/25"
          aria-hidden="true"
        />
        <div
          className="absolute -right-2 -top-4 h-28 w-28 rounded-full border border-white/10"
          aria-hidden="true"
        />
        <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
          <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-gold">
            AJ FEED PLUS
          </span>
          <div>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-gold ring-1 ring-white/15">
              <Wheat className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <p className="mt-4 font-display text-lg font-bold leading-tight text-white">
              {name}
            </p>
            <p className="mt-1 text-[10.5px] font-medium uppercase tracking-[0.14em] text-white/45">
              Product image coming soon
            </p>
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-leaf-300">
            {category}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#f2f5ef] ${className}`}>
      <img
        src={src}
        alt={alt || name}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onError={() => setFailed(true)}
        className={`h-full w-full object-contain ${imageClassName}`}
      />
    </div>
  );
}
