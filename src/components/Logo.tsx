interface LogoProps {
  variant?: "dark" | "light";
  compact?: boolean;
  showTagline?: boolean;
  className?: string;
}

export default function Logo({
  variant = "dark",
  compact = false,
  showTagline = true,
  className = "",
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <span className={`inline-flex min-w-0 items-center gap-3 ${className}`}>
      <img
        src="/images/bag-logo.png"
        alt=""
        aria-hidden="true"
        className={`shrink-0 rounded-lg bg-white object-contain p-0.5 ring-1 ring-brand-900/10 ${
          compact ? "h-10 w-16" : "h-12 w-[76px]"
        }`}
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`whitespace-nowrap font-display font-black tracking-[0.06em] ${
            compact ? "text-[18px] sm:text-[19px]" : "text-xl"
          } ${isLight ? "text-white" : "text-brand-900"}`}
        >
          AJ FEED{" "}
          <span className={isLight ? "text-gold" : "text-brand-600"}>
            PLUS
          </span>
        </span>
        {showTagline && (
          <span
            className={`mt-1.5 text-[8.5px] font-semibold uppercase ${
              compact ? "tracking-[0.16em]" : "whitespace-nowrap tracking-[0.18em]"
            } ${
              isLight ? "text-white/60" : "text-brand-800/60"
            }`}
          >
            Perpetual Growth For Your Birds
          </span>
        )}
      </span>
    </span>
  );
}
