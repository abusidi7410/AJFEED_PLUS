import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      <span className={isDark ? "eyebrow-light" : "eyebrow"}>
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            isDark ? "bg-gold" : "bg-leaf"
          }`}
        />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-balance font-display text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.7rem] ${
          isDark ? "text-white" : "text-brand-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-pretty text-[15px] leading-relaxed sm:text-base ${
            isDark ? "text-white/70" : "text-ink/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
