export type ProductCategory = {
  title: string;
  cn: string;
  description: string;
  image: string;
};

export type SampleProduct = {
  sku: string;
  name: string;
  cn: string;
  category: string;
  fabric: string;
  moq: string;
  season: string;
  service: string;
  image: string;
};

export const productCategories: ProductCategory[] = [
  {
    title: "Down Jackets",
    cn: "\u7fbd\u7ed2\u670d",
    description:
      "Functional and fashion-driven down jackets developed for modern outerwear collections, private label programs, and seasonal wholesale business.",
    image: "/placeholders/down-jackets.svg",
  },
  {
    title: "Wool Coats",
    cn: "\u7f8a\u6bdb\u5927\u8863",
    description:
      "Premium wool coat styles designed for refined womenswear collections with a focus on silhouette, structure, and commercial wearability.",
    image: "/placeholders/wool-coats.svg",
  },
  {
    title: "Windbreaker Jackets",
    cn: "\u98ce\u8863\u5939\u514b",
    description:
      "Lightweight and versatile jackets suitable for transitional seasons, urban fashion programs, and practical volume production.",
    image: "/placeholders/windbreakers.svg",
  },
  {
    title: "Fashion Dresses",
    cn: "\u65f6\u5c1a\u8fde\u8863\u88d9",
    description:
      "Fashion dress styles that complement outerwear programs and help buyers build coordinated capsule collections for retail and private label use.",
    image: "/placeholders/dresses.svg",
  },
];

export const sampleProducts: SampleProduct[] = [
  {
    sku: "BY-DJ-2401",
    name: "Quilted Belted Down Jacket",
    cn: "\u7ed7\u7f1d\u7cfb\u5e26\u7fbd\u7ed2\u670d",
    category: "Down Jackets",
    fabric: "100% Polyester Shell",
    moq: "300 pcs / color",
    season: "Autumn Winter",
    service: "OEM / Private Label",
    image: "/placeholders/down-jackets.svg",
  },
  {
    sku: "BY-DJ-2407",
    name: "Oversized Hooded Puffer",
    cn: "\u5bbd\u677e\u8fde\u5e3d\u7fbd\u7ed2\u670d",
    category: "Down Jackets",
    fabric: "Nylon Taslon",
    moq: "300 pcs / color",
    season: "Autumn Winter",
    service: "OEM / ODM",
    image: "/placeholders/down-jackets.svg",
  },
  {
    sku: "BY-WC-2316",
    name: "Double Face Wool Coat",
    cn: "\u53cc\u9762\u5462\u5927\u8863",
    category: "Wool Coats",
    fabric: "Wool Blend",
    moq: "200 pcs / color",
    season: "Autumn Winter",
    service: "ODM / Private Label",
    image: "/placeholders/wool-coats.svg",
  },
  {
    sku: "BY-WB-2322",
    name: "Urban Lightweight Windbreaker",
    cn: "\u8f7b\u91cf\u57ce\u5e02\u98ce\u8863",
    category: "Windbreaker Jackets",
    fabric: "Poly Cotton Blend",
    moq: "400 pcs / color",
    season: "Spring Autumn",
    service: "OEM / ODM",
    image: "/placeholders/windbreakers.svg",
  },
  {
    sku: "BY-FD-2510",
    name: "Minimal Satin Midi Dress",
    cn: "\u7b80\u7ea6\u7f0e\u9762\u4e2d\u957f\u88d9",
    category: "Fashion Dresses",
    fabric: "Poly Satin",
    moq: "300 pcs / color",
    season: "Spring Summer",
    service: "ODM / Private Label",
    image: "/placeholders/dresses.svg",
  },
  {
    sku: "BY-FD-2518",
    name: "Structured Fashion Shirt Dress",
    cn: "\u5ed3\u5f62\u886c\u886b\u8fde\u8863\u88d9",
    category: "Fashion Dresses",
    fabric: "Cotton Nylon Blend",
    moq: "300 pcs / color",
    season: "Spring Summer",
    service: "OEM / ODM",
    image: "/placeholders/dresses.svg",
  },
];
