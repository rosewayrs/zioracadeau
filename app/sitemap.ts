import { MetadataRoute } from "next";
import { products } from "@/lib/data/products";
import { journalArticles } from "@/lib/data/journal";
import { eventCategories } from "@/lib/data/events";

const base = "https://zioracadeau.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/events", "/shop", "/custom-gift", "/corporate", "/about", "/journal"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const eventRoutes = eventCategories.map((e) => ({
    url: `${base}/events/${e.slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/shop/${p.slug}`,
    lastModified: new Date(),
  }));

  const journalRoutes = journalArticles.map((a) => ({
    url: `${base}/journal/${a.slug}`,
    lastModified: new Date(a.date),
  }));

  return [...staticRoutes, ...eventRoutes, ...productRoutes, ...journalRoutes];
}
