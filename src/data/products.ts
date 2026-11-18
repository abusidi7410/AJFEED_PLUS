export type ProductCategory = "broiler" | "layer" | "ruminant";
export type FeedForm = "Crumbles" | "Mash" | "Pellets" | "Concentrate";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  stage: string;
  feedForm?: FeedForm;
  packSize?: string;
  shortDescription: string;
  description: string[];
  highlights: [string, string, string];
  image?: string;
  imageAlt?: string;
  imageNote?: string;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    slug: "broiler-super-starter",
    name: "Broiler Super Starter",
    category: "broiler",
    categoryLabel: "Broiler Nutrition",
    stage: "Earliest broiler stage",
    feedForm: "Crumbles",
    packSize: "25 ± 1 kg",
    shortDescription:
      "A dedicated super starter for the earliest broiler stage, presented in a crumble format.",
    description: [
      "Broiler Super Starter is positioned at the start of our broiler feeding range. It is intended for young meat birds at the earliest stage of production.",
      "It is presented in a crumble format and offered as a super starter option alongside Broiler Starter.",
    ],
    highlights: [
      "For the earliest broiler stage",
      "Crumble feed format",
      "Super starter option",
    ],
    image: "/images/products/broiler-super-starter.jpg",
    imageAlt: "AJ FEED PLUS Broiler Super Starter Crumble packaging label",
    imageNote:
      "Packaging label shown for product identification. Current pack design and label details may vary.",
    featured: true,
  },
  {
    slug: "broiler-starter",
    name: "Broiler Starter",
    category: "broiler",
    categoryLabel: "Broiler Nutrition",
    stage: "Early broiler growth",
    feedForm: "Crumbles",
    packSize: "25 ± 1 kg",
    shortDescription:
      "A starter feed for the early broiler growth stage, when birds need consistent nutrition to begin development.",
    description: [
      "Broiler Starter is positioned in the early part of the broiler feeding programme. It is intended for young meat birds during the early growth stage.",
      "It is presented in a crumble format and forms part of our broiler range alongside Broiler Super Starter and Broiler Finisher.",
    ],
    highlights: [
      "For the early broiler stage",
      "Crumble feed format",
      "Part of the broiler range",
    ],
    image: "/images/products/broiler-starter.jpg",
    imageAlt: "AJ FEED PLUS Broiler Starter Crumble poultry feed bag",
    imageNote:
      "Packaging shown for product identification. Current pack design and label details may vary.",
    featured: true,
  },
  {
    slug: "broiler-finisher",
    name: "Broiler Finisher",
    category: "broiler",
    categoryLabel: "Broiler Nutrition",
    stage: "Broiler finishing",
    feedForm: "Pellets",
    packSize: "25 ± 1 kg",
    shortDescription:
      "A finishing-stage feed that completes the broiler range, following the starter stages.",
    description: [
      "Broiler Finisher is the finishing-stage product in our broiler nutrition range. It is intended for meat birds during the finishing period.",
      "It follows the starter stages in the feeding programme and is presented in a pelleted format.",
    ],
    highlights: [
      "For the finishing stage",
      "Pelleted feed format",
      "Completes the broiler range",
    ],
    image: "/images/products/broiler-finisher.jpg",
    imageAlt: "AJ FEED PLUS Broiler Finisher Pellet poultry feed bag",
    imageNote:
      "Packaging shown for product identification. Current pack design and label details may vary.",
    featured: true,
  },
  {
    slug: "broiler-super-starter-concentrate",
    name: "Broiler Super Starter Concentrate",
    category: "broiler",
    categoryLabel: "Broiler Nutrition",
    stage: "Broiler ration mixing",
    feedForm: "Concentrate",
    packSize: "25 ± 1 kg",
    shortDescription:
      "A concentrate intended for mixing broiler starter rations with other ingredients, subject to formulation guidance.",
    description: [
      "Broiler Super Starter Concentrate is intended for mixing broiler starter rations with other feed ingredients.",
      "The packaging identifies it as a 40% concentrate. It should be used according to the appropriate formulation and mixing guidance, and is not automatically a complete feed.",
    ],
    highlights: [
      "For broiler ration mixing",
      "Concentrate format",
      "Formulation guidance required",
    ],
    image: "/images/products/broiler-super-starter-concentrate.jpg",
    imageAlt: "AJ FEED PLUS Broiler Super Starter Concentrate 40% bag",
    imageNote:
      "Packaging shown for product identification. Current pack design and label details may vary.",
  },
  {
    slug: "chick-mash",
    name: "Chick Mash",
    category: "layer",
    categoryLabel: "Layer Nutrition",
    stage: "Young layer chicks",
    feedForm: "Mash",
    packSize: "25 ± 1 kg",
    shortDescription:
      "An early-stage mash for young layer chicks, supporting the first phase of the layer rearing programme.",
    description: [
      "Chick Mash is an early-stage feed for young layer chicks. It is intended for the beginning of the layer rearing programme.",
      "The product is presented in a mash format for young birds.",
    ],
    highlights: [
      "For young layer chicks",
      "Mash feed format",
      "Early layer rearing stage",
    ],
    image: "/images/products/chick-mash.jpg",
    imageAlt: "AJ FEED PLUS Chick Mash poultry feed bag",
    imageNote:
      "Packaging shown for product identification. Current pack design and label details may vary.",
    featured: true,
  },
  {
    slug: "chick-starter-mash",
    name: "Chick Starter Mash",
    category: "layer",
    categoryLabel: "Layer Nutrition",
    stage: "Day-old layer chicks",
    feedForm: "Mash",
    shortDescription:
      "A starter mash for day-old layer chicks, positioned at the beginning of the layer nutrition programme.",
    description: [
      "Chick Starter Mash is intended for day-old layer chicks at the start of the rearing cycle.",
      "It provides a dedicated starter option within the layer range, presented in mash form.",
    ],
    highlights: [
      "For day-old layer chicks",
      "Mash feed format",
      "Starter stage of the layer range",
    ],
  },
  {
    slug: "grower-mash",
    name: "Grower Mash",
    category: "layer",
    categoryLabel: "Layer Nutrition",
    stage: "Growing pullets",
    feedForm: "Mash",
    packSize: "25 ± 1 kg",
    shortDescription:
      "A grower feed for developing pullets, bridging the chick and laying stages of the layer programme.",
    description: [
      "Grower Mash is intended for growing pullets as they develop toward the laying stage.",
      "It sits between the chick and layer feeds in our layer nutrition range.",
    ],
    highlights: [
      "For growing pullets",
      "Mash feed format",
      "Developmental stage of the layer range",
    ],
    image: "/images/products/grower-mash.jpg",
    imageAlt: "AJ FEED PLUS Grower Mash poultry feed bag",
    imageNote:
      "Packaging shown for product identification. Current pack design and label details may vary.",
    featured: true,
  },
  {
    slug: "grower-concentrate",
    name: "Grower Concentrate",
    category: "layer",
    categoryLabel: "Layer Nutrition",
    stage: "Grower ration mixing",
    feedForm: "Concentrate",
    packSize: "25 ± 1 kg",
    shortDescription:
      "A concentrate intended for mixing grower rations with other ingredients, subject to formulation guidance.",
    description: [
      "Grower Concentrate is intended for mixing grower rations for pullets with other feed ingredients.",
      "The packaging identifies it as a 30% concentrate. It should be used according to the appropriate formulation and mixing guidance, and is not automatically a complete feed.",
    ],
    highlights: [
      "For grower ration mixing",
      "Concentrate format",
      "Formulation guidance required",
    ],
    image: "/images/products/grower-concentrate.jpg",
    imageAlt: "AJ FEED PLUS Grower Concentrate 30% bag",
    imageNote:
      "Packaging shown for product identification. Current pack design and label details may vary.",
  },
  {
    slug: "layer-mash",
    name: "Layer Mash",
    category: "layer",
    categoryLabel: "Layer Nutrition",
    stage: "Egg production",
    feedForm: "Mash",
    packSize: "25 ± 1 kg",
    shortDescription:
      "A layer feed for the egg production stage, presented in a mash format for daily farm feeding.",
    description: [
      "Layer Mash is intended for laying birds during the egg production stage.",
      "It is one of two feed forms available for layers in our range, alongside Layer Pellets.",
    ],
    highlights: [
      "For the laying stage",
      "Mash feed format",
      "Layer nutrition range",
    ],
    image: "/images/products/layer-mash.jpg",
    imageAlt: "AJ FEED PLUS Layer Mash poultry feed bag",
    imageNote:
      "Packaging shown for product identification. Current pack design and label details may vary.",
    featured: true,
  },
  {
    slug: "layer-pellets",
    name: "Layer Pellets",
    category: "layer",
    categoryLabel: "Layer Nutrition",
    stage: "Egg production",
    feedForm: "Pellets",
    packSize: "25 ± 1 kg",
    shortDescription:
      "A pelleted layer feed for egg production, offering an alternative feed form within the layer range.",
    description: [
      "Layer Pellets is a pelleted feed intended for laying birds during egg production.",
      "It offers an alternative to Layer Mash for farmers who prefer a pelleted feed form.",
    ],
    highlights: [
      "For the laying stage",
      "Pelleted feed format",
      "Alternative to Layer Mash",
    ],
    image: "/images/products/layer-pellets.jpg",
    imageAlt: "AJ FEED PLUS Layer Pellet poultry feed bag",
    imageNote:
      "Packaging shown for product identification. Current pack design and label details may vary.",
    featured: true,
  },
  {
    slug: "layer-concentrate",
    name: "Layer Concentrate",
    category: "layer",
    categoryLabel: "Layer Nutrition",
    stage: "Layer ration mixing",
    feedForm: "Concentrate",
    packSize: "25 ± 1 kg",
    shortDescription:
      "A concentrate intended for mixing balanced layer rations with other ingredients, subject to formulation guidance.",
    description: [
      "Layer Concentrate is intended for mixing layer rations with other feed ingredients.",
      "The packaging identifies it as a 30% concentrate. It should be used according to the appropriate formulation and mixing guidance, and is not automatically a complete feed.",
    ],
    highlights: [
      "For ration mixing",
      "Concentrate format",
      "Formulation guidance required",
    ],
    image: "/images/products/layer-concentrate.jpg",
    imageAlt: "AJ FEED PLUS Layer Concentrate bag",
    imageNote:
      "Packaging shown for product identification. Current pack design and label details may vary.",
    featured: true,
  },
  {
    slug: "bul-fat",
    name: "BulFat",
    category: "ruminant",
    categoryLabel: "Ruminant Nutrition",
    stage: "Cattle fattening",
    packSize: "50 ± 1 kg",
    shortDescription:
      "A cattle fattening feed in the AJ FEED PLUS ruminant range, presented in a 50 ± 1 kg bag.",
    description: [
      "BulFat is a cattle fattening feed within our ruminant nutrition range.",
      "It is one of three ruminant products shown in the current packaging range, alongside Ram-Rise and Milk-Glory.",
    ],
    highlights: [
      "For cattle fattening",
      "Ruminant nutrition range",
      "50 ± 1 kg bag",
    ],
    image: "/images/products/bul-fat.jpg",
    imageAlt: "AJ FEED PLUS BulFat cattle fattening feed packaging",
    imageNote:
      "Packaging shown for product identification. Current pack design and label details may vary.",
    featured: true,
  },
  {
    slug: "ram-rise",
    name: "Ram-Rise",
    category: "ruminant",
    categoryLabel: "Ruminant Nutrition",
    stage: "Ram fattening",
    packSize: "50 ± 1 kg",
    shortDescription:
      "A ram fattening feed in the AJ FEED PLUS ruminant range, presented in a 50 ± 1 kg bag.",
    description: [
      "Ram-Rise is a ram fattening feed within our ruminant nutrition range.",
      "It is offered alongside BulFat and Milk-Glory in the current ruminant product line-up.",
    ],
    highlights: [
      "For ram fattening",
      "Ruminant nutrition range",
      "50 ± 1 kg bag",
    ],
    image: "/images/products/ram-rise.jpg",
    imageAlt: "AJ FEED PLUS Ram-Rise ram fattening feed packaging",
    imageNote:
      "Packaging shown for product identification. Current pack design and label details may vary.",
  },
  {
    slug: "milk-glory",
    name: "Milk-Glory",
    category: "ruminant",
    categoryLabel: "Ruminant Nutrition",
    stage: "Dairy cattle",
    packSize: "50 ± 1 kg",
    shortDescription:
      "A cow milk feed for dairy cattle in the AJ FEED PLUS ruminant range, presented in a 50 ± 1 kg bag.",
    description: [
      "Milk-Glory is a cow milk feed for dairy cattle within our ruminant nutrition range.",
      "It completes the current ruminant line-up alongside BulFat and Ram-Rise.",
    ],
    highlights: [
      "For dairy cattle",
      "Ruminant nutrition range",
      "50 ± 1 kg bag",
    ],
    image: "/images/products/milk-glory.jpg",
    imageAlt: "AJ FEED PLUS Milk-Glory cow milk feed packaging",
    imageNote:
      "Packaging shown for product identification. Current pack design and label details may vary.",
  },
];

export const FEATURED_PRODUCTS = PRODUCTS.filter((product) => product.featured);

export const PRODUCT_COUNTS = {
  all: PRODUCTS.length,
  broiler: PRODUCTS.filter((product) => product.category === "broiler").length,
  layer: PRODUCTS.filter((product) => product.category === "layer").length,
  ruminant: PRODUCTS.filter((product) => product.category === "ruminant").length,
} as const;

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const sameCategory = PRODUCTS.filter(
    (item) => item.category === product.category && item.slug !== product.slug,
  );
  const remaining = PRODUCTS.filter(
    (item) => item.category !== product.category && item.slug !== product.slug,
  );
  return [...sameCategory, ...remaining].slice(0, limit);
}

export function productEnquiryMessage(product: Product): string {
  return `Hello AJ FEED PLUS, I would like to enquire about ${product.name}. Please share the current price, pack sizes, availability and delivery details.`;
}
