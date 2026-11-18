import { PRODUCTS } from "./products";

export const COMPANY_FACTS = [
  { label: "Location", value: "Funtua, Katsina State" },
  { label: "Focus", value: "Poultry & ruminant nutrition" },
  { label: "Business", value: "Animal feed manufacturing" },
  { label: "Serves", value: "Farmers, dealers & distributors" },
] as const;

export const ABOUT_INTRO = [
  "AJ FEED PLUS is a Nigerian animal feed manufacturing business. We produce poultry and ruminant nutrition for the farmers, agro-dealers and distributors who keep Nigeria's livestock value chain moving.",
  "Our work is practical: turning agricultural ingredients into feed for birds raised for meat and eggs, and for cattle and rams, giving livestock businesses a straightforward way to source the nutrition their animals depend on.",
] as const;

export const WHAT_WE_DO = [
  {
    title: "Broiler Nutrition",
    description:
      "A focused range for meat birds, from super starter and starter feeds through to finishing.",
    icon: "broiler",
  },
  {
    title: "Layer Nutrition",
    description:
      "Feed options across the layer cycle, from chick development through growing pullets to egg production.",
    icon: "layer",
  },
  {
    title: "Ruminant Nutrition",
    description:
      "Cattle and ram feeding options, including fattening feeds and a cow milk feed for dairy cattle.",
    icon: "ruminant",
  },
  {
    title: "Farmer & Trade Supply",
    description:
      "A clear product range for livestock farmers, feed retailers, agro-dealers and wholesale buyers.",
    icon: "trade",
  },
] as const;

export const COMMITMENTS = [
  {
    title: "Stage-Focused Nutrition",
    description:
      "Our range is organised around the stages of broiler, layer and ruminant production, so farmers can identify the right product for their animals.",
    icon: "layers",
  },
  {
    title: "Clear Product Information",
    description:
      "Feed form, intended stage and product details are presented clearly, with current availability confirmed directly by our team.",
    icon: "clipboard",
  },
  {
    title: "Farmer-Focused Service",
    description:
      "We aim to make product enquiries and ordering straightforward, with WhatsApp as a direct line to our team.",
    icon: "handshake",
  },
  {
    title: "Local Manufacturing",
    description:
      "Our manufacturing places production close to the agricultural economy of northern Nigeria.",
    icon: "factory",
  },
] as const;

export const COMMITMENT_STATEMENT =
  "Good feed is part of the story. Dependable supply, clear communication and long-term partnership complete it.";

export const ORDER_STEPS = [
  {
    number: "01",
    title: "Choose a product",
    description:
      "Browse the broiler, layer and ruminant range and open the product that fits your animals' stage.",
  },
  {
    number: "02",
    title: "Send an enquiry",
    description:
      "Message our team on WhatsApp with the product and quantity you have in mind.",
  },
  {
    number: "03",
    title: "Confirm your order",
    description:
      "Our team confirms current price, availability and delivery details with you directly.",
  },
] as const;

export const PRODUCT_ENQUIRY_NOTE =
  "Prices, pack sizes, availability and delivery are confirmed directly by our team. Product information on this website is for general identification and does not replace current product labelling or professional feeding advice.";

export const PRODUCT_DISCLAIMER =
  "Packaging images and product details are shown for general identification. Current product labelling is the authoritative source; please confirm details with our team.";

export const COMING_SOON = [
  {
    group: "Broiler Range",
    description: "Potential additions to the broiler nutrition programme.",
    items: ["Broiler Grower", "Further starter formats"],
  },
  {
    group: "Layer Range",
    description: "Potential additions across the layer cycle.",
    items: ["Developer Mash", "Pre-Layer Mash"],
  },
  {
    group: "Feed Formats",
    description: "New formats under consideration.",
    items: ["Specialised crumbles", "Further pellet formats"],
  },
] as const;

export const COMING_SOON_MESSAGE =
  "Hello AJ FEED PLUS, I would like to ask about upcoming products in your feed range.";

export const CONTACT_PRODUCT_OPTIONS = [
  "General enquiry",
  ...PRODUCTS.map((product) => product.name),
  "Wholesale / distribution",
];
