import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="text-bark py-16 text-center">
        No gifts match those filters just yet — try broadening your search.
      </p>
    );
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
      {products.map((p, i) => (
        <ProductCard key={p.id} product={p} delay={(i % 3) * 0.08} />
      ))}
    </div>
  );
}
