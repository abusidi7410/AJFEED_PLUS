export const COMPANY = {
  name: "AJ FEED PLUS",
  slogan: "Perpetual Growth For Your Birds",
  sloganDisplay: "PERPETUAL GROWTH FOR YOUR BIRDS",
  business: "Poultry & Ruminant Feed Manufacturing",
  phoneDisplay: "0806767 7676",
  phoneHref: "tel:+2348067677676",
  whatsappNumber: "2348067677676",
  email: "info@ajfeedplus.com.ng",
  address: {
    line1: "No. 03 Light Industrial Estate",
    line2: "Along Dry Port Road, Funtua, Katsina State",
    country: "Nigeria",
  },
  addressOneLine:
    "No. 03 Light Industrial Estate, Along Dry Port Road, Funtua, Katsina State, Nigeria.",
  website: "https://www.ajfeedplus.com.ng",
} as const;

export const ROUTES = {
  home: "/",
  about: "/about",
  products: "/products",
  contact: "/contact",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: ROUTES.home },
  { label: "About Us", href: ROUTES.about },
  { label: "Products", href: ROUTES.products },
  { label: "Contact Us", href: ROUTES.contact },
] as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello AJ FEED PLUS, I would like to enquire about your feed products.";

export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=No.%2003%20Light%20Industrial%20Estate%2C%20Along%20Dry%20Port%20Road%2C%20Funtua%2C%20Katsina%20State%2C%20Nigeria&z=13&output=embed";

export const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=No.%2003%20Light%20Industrial%20Estate%2C%20Along%20Dry%20Port%20Road%2C%20Funtua%2C%20Katsina%20State%2C%20Nigeria";
