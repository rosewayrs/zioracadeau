"use client";

import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import RevealOnScroll from "./RevealOnScroll";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/data/products";
import { useCart } from "@/lib/store/cart";
import { useQuickView } from "@/lib/store/quickview";

export default function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  const addItem = useCart((s) => s.addItem);
  const openQuickView = useQuickView((s) => s.open);

  return (
    <RevealOnScroll delay={delay} className="group">
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="relative overflow-hidden">
          <div className="transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.04]">
            <PlaceholderImage label={product.images[0]} />
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem({
                  productId: product.id,
                  name: product.name,
                  price: product.price,
                  quantity: 1,
                  image: product.images[0],
                });
              }}
              className="flex-1 btn btn-outline-light !border-ivory/80 backdrop-blur-sm !py-3 !text-[0.62rem]"
            >
              Add to Cart
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                openQuickView(product);
              }}
              aria-label={`Quick view ${product.name}`}
              className="btn btn-outline-light !border-ivory/80 backdrop-blur-sm !py-3 !px-4 !text-[0.62rem]"
            >
              View
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-4">
        <Link href={`/shop/${product.slug}`} className="font-display text-lg leading-snug hover:text-clay transition-colors">
          {product.name}
        </Link>
        <p className="text-sm text-bark mt-1">{product.shortDescriptor}</p>
        <p className="text-sm mt-2">{formatPrice(product.price)}</p>
      </div>
    </RevealOnScroll>
  );
}
