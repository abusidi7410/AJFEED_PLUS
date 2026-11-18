import WhatsAppIcon from "./WhatsAppIcon";
import { DEFAULT_WHATSAPP_MESSAGE } from "../data/site";
import { whatsappUrl } from "../lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AJ FEED PLUS on WhatsApp"
      className="group fixed bottom-5 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <span
        className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]"
        aria-hidden="true"
      />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-8px_rgba(37,211,102,0.65)] transition duration-200 group-hover:-translate-y-0.5 group-hover:bg-[#1fb85a] group-hover:shadow-[0_18px_36px_-8px_rgba(37,211,102,0.75)]">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
      <span
        className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-brand-950 px-3 py-2 text-[11px] font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block"
        aria-hidden="true"
      >
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
