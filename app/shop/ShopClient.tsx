"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/data/products";
import ProductGrid from "@/components/ProductGrid";
import { ShopCategory } from "@/lib/types";

const categories: { label: string; value: ShopCategory | "all" }[] = [
  { label: "All Gifts", value: "all" },
  { label: "Birthday", value: "birthday" },
  { label: "Love", value: "love" },
  { label: "Corporate", value: "corporate" },
  { label: "Wedding", value: "wedding" },
  { label: "Baby", value: "baby" },
  { label: "Self-Care", value: "self-care" },
  { label: "Just Because", value: "just-because" },
];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A–Z", value: "name" },
];

export default function ShopClient() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as ShopCategory | null) ?? "all";

  const [category, setCategory] = useState<ShopCategory | "all">(initialCategory);
  const [sort, setSort] = useState("featured");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = products.filter((p) => category === "all" || p.category === category);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescriptor.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  }, [category, sort, query]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setCategory(c.value)}
              className={`text-[0.7rem] tracking-[0.16em] uppercase pb-1 border-b transition-colors ${
                category === c.value
                  ? "border-espresso text-espresso"
                  : "border-transparent text-bark hover:text-espresso"
              }`}
              aria-pressed={category === c.value}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <label className="sr-only" htmlFor="shop-search">
            Search gifts
          </label>
          <input
            id="shop-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search gifts…"
            className="border-b border-espresso/20 bg-transparent text-sm px-1 py-1.5 w-40 focus:w-56 transition-all outline-none focus:border-espresso"
          />
          <label className="sr-only" htmlFor="shop-sort">
            Sort gifts
          </label>
          <select
            id="shop-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border-b border-espresso/20 bg-transparent text-sm px-1 py-1.5 outline-none focus:border-espresso"
          >
            {sortOptions.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="text-xs text-bark mb-10">
        {filtered.length} gift{filtered.length === 1 ? "" : "s"}
      </p>

      <ProductGrid products={filtered} />
    </div>
  );
}
