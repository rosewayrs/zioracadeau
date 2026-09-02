export type OccasionSlug =
  | "birthdays"
  | "love"
  | "baby-and-mother"
  | "corporate"
  | "weddings"
  | "just-because";

export type ShopCategory =
  | "birthday"
  | "love"
  | "corporate"
  | "wedding"
  | "baby"
  | "self-care"
  | "just-because";

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescriptor: string;
  description: string;
  story: string;
  price: number;
  currency: string;
  images: string[]; // placeholder tokens describing the image
  category: ShopCategory;
  tags: string[];
  availability: "in-stock" | "made-to-order" | "limited";
  personalisationAvailable: boolean;
  perfectFor: string[];
}

export interface Collection {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
}

export type EventCategorySlug = "weddings" | "celebrations" | "birthdays" | "corporate-events";

export interface EventCategory {
  slug: EventCategorySlug;
  title: string;
  eyebrow: string;
  description: string;
  longDescription: string[];
  image: string;
  pairedGiftingNote: string;
  pairedShopCategory: ShopCategory;
}

export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  body: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  context: string;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  giftMessage?: string;
  packaging?: string;
}
