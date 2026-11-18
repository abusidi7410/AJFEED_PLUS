import { COMPANY } from "../data/site";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
}

export function openWhatsApp(message: string): boolean {
  const url = whatsappUrl(message);
  const opened = window.open(url, "_blank");
  if (opened) {
    opened.opener = null;
  }
  return Boolean(opened);
}

export function buildContactMessage(fields: {
  fullName: string;
  phone: string;
  email: string;
  product: string;
  quantity: string;
  message: string;
}): string {
  const lines = [
    "Hello AJ FEED PLUS, I would like to make a product enquiry.",
    "",
    `Full Name: ${fields.fullName.trim()}`,
    `Phone Number: ${fields.phone.trim()}`,
  ];

  if (fields.email.trim()) {
    lines.push(`Email: ${fields.email.trim()}`);
  }

  lines.push(
    `Product of Interest: ${fields.product}`,
    `Quantity Required: ${fields.quantity.trim() || "To be discussed"}`,
  );

  if (fields.message.trim()) {
    lines.push(`Message: ${fields.message.trim()}`);
  }

  lines.push("", "Please share current price, availability, and delivery details.");
  return lines.join("\n");
}
