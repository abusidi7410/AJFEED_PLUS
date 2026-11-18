import { useState, type ChangeEvent, type FormEvent } from "react";
import { AlertTriangle, CheckCircle2, Send } from "lucide-react";
import { CONTACT_PRODUCT_OPTIONS } from "../data/content";
import {
  isNonEmpty,
  isValidEmail,
  isValidPhone,
  isValidQuantity,
} from "../lib/validation";
import { buildContactMessage, openWhatsApp, whatsappUrl } from "../lib/whatsapp";
import FormField from "./FormField";
import WhatsAppIcon from "./WhatsAppIcon";

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  product: string;
  quantity: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;
type SubmitStatus = "idle" | "opened" | "blocked";

const INITIAL_STATE: FormState = {
  fullName: "",
  phone: "",
  email: "",
  product: "General enquiry",
  quantity: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [fallbackUrl, setFallbackUrl] = useState("");

  const update =
    (field: keyof FormState) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
      setErrors((current) => ({ ...current, [field]: undefined }));
      setStatus("idle");
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {};

    if (!isNonEmpty(form.fullName)) {
      nextErrors.fullName = "Please enter your full name.";
    }
    if (!form.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    } else if (!isValidPhone(form.phone)) {
      nextErrors.phone = "Please enter a valid phone number.";
    }
    if (form.email.trim() && !isValidEmail(form.email)) {
      nextErrors.email = "Please enter a valid email address or leave this blank.";
    }
    if (!isValidQuantity(form.quantity)) {
      nextErrors.quantity = "Please keep the quantity description brief.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const message = buildContactMessage(form);
    setFallbackUrl(whatsappUrl(message));
    setStatus(openWhatsApp(message) ? "opened" : "blocked");
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-5 sm:p-7">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-900/10">
          <Send className="h-[18px] w-[18px]" aria-hidden="true" />
        </span>
        <div>
          <h2 className="font-display text-lg font-bold text-brand-950">
            Send an enquiry
          </h2>
          <p className="mt-1 text-[12px] leading-relaxed text-ink/55">
            Complete the form and continue the conversation on WhatsApp.
          </p>
        </div>
      </div>

      {status !== "idle" && (
        <div
          role="status"
          className={`mt-5 rounded-xl border px-4 py-3 text-[12px] leading-relaxed ${
            status === "opened"
              ? "border-leaf-300 bg-leaf-50 text-brand-800"
              : "border-gold/50 bg-gold-soft text-brand-900"
          }`}
        >
          <div className="flex items-start gap-2">
            {status === "opened" ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-leaf-500" aria-hidden="true" />
            ) : (
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
            )}
            <div>
              <p className="font-semibold">
                {status === "opened"
                  ? "WhatsApp opened in a new tab."
                  : "WhatsApp could not open automatically."}
              </p>
              <p className="mt-1 text-ink/60">
                {status === "opened"
                  ? "Send the prepared message to our team to complete your enquiry."
                  : "Use the link below to continue with your enquiry."}
              </p>
              <a
                href={fallbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 font-bold text-brand-800 underline decoration-brand-800/30 underline-offset-2"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                Open WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <FormField label="Full name" htmlFor="contact-name" required error={errors.fullName}>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            className={`field-input ${errors.fullName ? "field-input-error" : ""}`}
            value={form.fullName}
            onChange={update("fullName")}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "contact-name-error" : undefined}
            placeholder="Your name"
          />
        </FormField>

        <FormField label="Phone number" htmlFor="contact-phone" required error={errors.phone}>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={`field-input ${errors.phone ? "field-input-error" : ""}`}
            value={form.phone}
            onChange={update("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            placeholder="e.g. 0806 767 7676"
          />
        </FormField>

        <FormField
          label="Email address"
          htmlFor="contact-email"
          error={errors.email}
          hint="Optional"
          className="sm:col-span-2"
        >
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            className={`field-input ${errors.email ? "field-input-error" : ""}`}
            value={form.email}
            onChange={update("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            placeholder="you@example.com"
          />
        </FormField>

        <FormField label="Product of interest" htmlFor="contact-product" required>
          <select
            id="contact-product"
            name="product"
            className="field-input bg-white"
            value={form.product}
            onChange={update("product")}
          >
            {CONTACT_PRODUCT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          label="Quantity"
          htmlFor="contact-quantity"
          error={errors.quantity}
          hint="Optional — e.g. number of bags"
        >
          <input
            id="contact-quantity"
            name="quantity"
            type="text"
            inputMode="numeric"
            className={`field-input ${errors.quantity ? "field-input-error" : ""}`}
            value={form.quantity}
            onChange={update("quantity")}
            aria-invalid={Boolean(errors.quantity)}
            aria-describedby={errors.quantity ? "contact-quantity-error" : undefined}
            placeholder="e.g. 20 bags"
          />
        </FormField>

        <FormField
          label="Message"
          htmlFor="contact-message"
          hint="Optional — tell us what you need"
          className="sm:col-span-2"
        >
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            className="field-input resize-y"
            value={form.message}
            onChange={update("message")}
            placeholder="Delivery location, preferred timing, or any other details."
          />
        </FormField>
      </div>

      <button type="submit" className="btn btn-green mt-5 w-full sm:w-auto">
        <WhatsAppIcon className="h-4 w-4" />
        Continue on WhatsApp
      </button>

      <p className="mt-3 text-[10.5px] leading-relaxed text-ink/45">
        This form does not store your details on this website. It prepares a
        WhatsApp message for you to review and send.
      </p>
    </form>
  );
}
