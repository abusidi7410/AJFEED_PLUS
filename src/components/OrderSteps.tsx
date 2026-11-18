import { ArrowRight } from "lucide-react";
import { ORDER_STEPS } from "../data/content";
import { DEFAULT_WHATSAPP_MESSAGE } from "../data/site";
import { whatsappUrl } from "../lib/whatsapp";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import WhatsAppIcon from "./WhatsAppIcon";

export default function OrderSteps() {
  return (
    <section className="section-padding bg-white" aria-labelledby="home-process">
      <div className="container-page">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="How we work"
            title={
              <span id="home-process">
                From enquiry to delivery, kept simple.
              </span>
            }
            description="No long forms and no guesswork. Tell our team what you are raising, and we will confirm the product, price and delivery details with you directly."
          />
          <a
            href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline shrink-0 self-start sm:self-auto"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Start an enquiry
          </a>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {ORDER_STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 80} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-brand-900/10 bg-cream p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-4xl font-extrabold leading-none text-brand-900/15">
                    {step.number}
                  </span>
                  <ArrowRight
                    className="h-4 w-4 text-brand-700/35"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-brand-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink/60">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
