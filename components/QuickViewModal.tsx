"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useQuickView } from "@/lib/store/quickview";
import { useCart } from "@/lib/store/cart";
import { formatPrice } from "@/lib/data/products";
import PlaceholderImage from "./PlaceholderImage";

export default function QuickViewModal() {
  const { product, close } = useQuickView();
  const addItem = useCart((s) => s.addItem);

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-soot/55 z-[70]"
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={`Quick view — ${product.name}`}
            className="fixed inset-x-4 bottom-4 top-16 sm:inset-x-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[42rem] sm:max-h-[85vh] bg-ivory z-[80] overflow-y-auto"
          >
            <button
              onClick={close}
              aria-label="Close quick view"
              className="absolute top-4 right-4 z-10 text-[0.68rem] tracking-[0.22em] uppercase bg-ivory/90 px-2 py-1"
            >
              Close
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <PlaceholderImage label={product.images[0]} aspect="aspect-square sm:aspect-auto sm:h-full" />
              <div className="p-6 md:p-8 flex flex-col">
                <p className="eyebrow mb-3">{product.category.replace("-", " ")}</p>
                <h3 className="display-3">{product.name}</h3>
                <p className="text-bark mt-3 leading-relaxed">{product.shortDescriptor}</p>
                <p className="font-display text-2xl mt-5">{formatPrice(product.price)}</p>
                <div className="mt-auto pt-8 flex flex-col gap-3">
                  <button
                    onClick={() => {
                      addItem({
                        productId: product.id,
                        name: product.name,
                        price: product.price,
                        quantity: 1,
                        image: product.images[0],
                      });
                      close();
                    }}
                    className="btn btn-primary w-full"
                  >
                    Add to Cart
                  </button>
                  <Link href={`/shop/${product.slug}`} onClick={close} className="btn btn-outline w-full">
                    View Full Details
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
