import { ClipboardCheck, Factory, Handshake, Layers3 } from "lucide-react";
import { COMMITMENTS } from "../data/content";
import Reveal from "./Reveal";

const ICONS = {
  layers: Layers3,
  clipboard: ClipboardCheck,
  handshake: Handshake,
  factory: Factory,
} as const;

export default function CommitmentCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {COMMITMENTS.map((item, index) => {
        const Icon = ICONS[item.icon];
        return (
          <Reveal
            key={item.title}
            delay={index * 80}
            className="h-full"
          >
            <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/[0.07]">
            <span className="absolute right-4 top-4 text-[10px] font-bold tracking-[0.14em] text-white/15">
              0{index + 1}
            </span>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/20">
              <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-[15px] font-bold leading-snug text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-[12px] leading-relaxed text-white/55">
              {item.description}
            </p>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
