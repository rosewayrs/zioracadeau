import { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "p1",
    name: "The Amber Hour Box",
    slug: "the-amber-hour-box",
    shortDescriptor: "A warm-toned curation for slow mornings",
    description:
      "A softly layered gift box built around scent, warmth and stillness — for the person who deserves a slower morning.",
    story:
      "[INSERT PRODUCT STORY — the inspiration behind this edit, the pieces inside, and why each one was chosen]",
    price: 68000,
    currency: "NGN",
    images: ["Amber Hour Box — flat lay", "Amber Hour Box — ribbon detail", "Amber Hour Box — being opened"],
    category: "self-care",
    tags: ["self-care", "just-because", "warm"],
    availability: "in-stock",
    personalisationAvailable: true,
    perfectFor: ["Birthday", "Thank You", "Just Because"],
  },
  {
    id: "p2",
    name: "For Her, Always",
    slug: "for-her-always",
    shortDescriptor: "A romantic edit for anniversaries and proposals",
    description:
      "Florals, a handwritten note and a single considered object — composed for the moments that ask for more than words.",
    story: "[INSERT PRODUCT STORY]",
    price: 145000,
    currency: "NGN",
    images: ["For Her Always — presentation", "For Her Always — florals", "For Her Always — card detail"],
    category: "love",
    tags: ["love", "anniversary", "proposal"],
    availability: "made-to-order",
    personalisationAvailable: true,
    perfectFor: ["Anniversary", "Proposal", "Valentine's Day"],
  },
  {
    id: "p3",
    name: "Welcome, Little One",
    slug: "welcome-little-one",
    shortDescriptor: "A gentle edit for new arrivals and new mothers",
    description:
      "Soft textures and considered keepsakes for the family beginning a new chapter — as much for mother as for baby.",
    story: "[INSERT PRODUCT STORY]",
    price: 92000,
    currency: "NGN",
    images: ["Welcome Little One — box open", "Welcome Little One — textures", "Welcome Little One — detail"],
    category: "baby",
    tags: ["baby", "new mother", "beginnings"],
    availability: "in-stock",
    personalisationAvailable: true,
    perfectFor: ["Baby Shower", "Newborn", "New Mother"],
  },
  {
    id: "p4",
    name: "The Boardroom Edit",
    slug: "the-boardroom-edit",
    shortDescriptor: "Refined gifting for clients and colleagues",
    description:
      "A composed, brand-ready presentation for the people who move your business forward.",
    story: "[INSERT PRODUCT STORY]",
    price: 78000,
    currency: "NGN",
    images: ["Boardroom Edit — packaging", "Boardroom Edit — contents", "Boardroom Edit — branding detail"],
    category: "corporate",
    tags: ["corporate", "client gifting", "team"],
    availability: "in-stock",
    personalisationAvailable: true,
    perfectFor: ["Corporate", "Client Gifting", "Employee Appreciation"],
  },
  {
    id: "p5",
    name: "Say I Do, Beautifully",
    slug: "say-i-do-beautifully",
    shortDescriptor: "For brides, grooms and the wedding party",
    description:
      "An elevated keepsake edit for the people standing closest on the big day.",
    story: "[INSERT PRODUCT STORY]",
    price: 110000,
    currency: "NGN",
    images: ["Say I Do — bridal party set", "Say I Do — detail", "Say I Do — presentation"],
    category: "wedding",
    tags: ["wedding", "bridal party", "celebration"],
    availability: "limited",
    personalisationAvailable: true,
    perfectFor: ["Wedding", "Bridal Party", "Engagement"],
  },
  {
    id: "p6",
    name: "Just Because, With Love",
    slug: "just-because-with-love",
    shortDescriptor: "No occasion required",
    description:
      "A small, beautifully composed gesture for the people who don't need a reason.",
    story: "[INSERT PRODUCT STORY]",
    price: 42000,
    currency: "NGN",
    images: ["Just Because — flat lay", "Just Because — ribbon", "Just Because — card"],
    category: "just-because",
    tags: ["just-because", "thank you"],
    availability: "in-stock",
    personalisationAvailable: true,
    perfectFor: ["Just Because", "Thank You", "Thinking of You"],
  },
  {
    id: "p7",
    name: "Another Beautiful Year",
    slug: "another-beautiful-year",
    shortDescriptor: "A celebratory edit for birthdays",
    description:
      "Bright, considered and a little indulgent — for marking another year with real intention.",
    story: "[INSERT PRODUCT STORY]",
    price: 58000,
    currency: "NGN",
    images: ["Another Beautiful Year — box", "Another Beautiful Year — detail", "Another Beautiful Year — candle"],
    category: "birthday",
    tags: ["birthday", "celebration"],
    availability: "in-stock",
    personalisationAvailable: true,
    perfectFor: ["Birthday"],
  },
  {
    id: "p8",
    name: "The Quiet Luxury Edit",
    slug: "the-quiet-luxury-edit",
    shortDescriptor: "Considered, restrained, unmistakably premium",
    description:
      "Fewer, better things — composed for someone with impeccable taste and no need for anything loud.",
    story: "[INSERT PRODUCT STORY]",
    price: 165000,
    currency: "NGN",
    images: ["Quiet Luxury Edit — presentation", "Quiet Luxury Edit — texture", "Quiet Luxury Edit — detail"],
    category: "self-care",
    tags: ["luxury", "self-care", "just-because"],
    availability: "limited",
    personalisationAvailable: true,
    perfectFor: ["Just Because", "Milestone", "Executive Gifting"],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 3) {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, count);
}

export function formatPrice(price: number, currency = "NGN") {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}
