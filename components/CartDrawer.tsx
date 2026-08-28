"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/lib/store/cart";
import { formatPrice } from "@/lib/data/products";
import PlaceholderImage from "./PlaceholderImage";

export default function CartDrawer() {
  const { items, isOpen, close, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={close}
            className="fixed inset-0 bg-soot/50 z-[70]"
            aria-hidden="true"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full w-full sm:w-[26rem] bg-ivory z-[80] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between px-6 md:px-8 py-6 border-b border-espresso/10">
              <p className="eyebrow">Your Cart</p>
              <button
                onClick={close}
                aria-label="Close cart"
                className="text-[0.68rem] tracking-[0.22em] uppercase"
              >
                Close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-20">
                  <p className="display-3">Your cart is quiet, for now.</p>
                  <button onClick={close} className="btn btn-outline">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={item.productId} className="flex gap-4">
                      <PlaceholderImage
                        label={item.image}
                        aspect="aspect-square"
                        className="w-24 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-display text-lg leading-tight">{item.name}</p>
                        <p className="text-sm text-bark mt-1">{formatPrice(item.price)}</p>
                        {item.giftMessage && (
                          <p className="text-xs text-bark mt-1 italic truncate">
                            “{item.giftMessage}”
                          </p>
                        )}
                        <div className="flex items-center gap-3 mt-3">
                          <label className="sr-only" htmlFor={`qty-${item.productId}`}>
                            Quantity
                          </label>
                          <input
                            id={`qty-${item.productId}`}
                            type="number"
                            min={1}
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.productId, parseInt(e.target.value) || 1)
                            }
                            className="w-14 border border-espresso/20 text-sm px-2 py-1 bg-transparent"
                          />
                          <button
                            onClick={() => removeItem(item.productId)}
                            className="text-xs uppercase tracking-wide text-bark hover:text-clay"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="px-6 md:px-8 py-6 border-t border-espresso/10 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-bark">Subtotal</span>
                  <span className="font-display text-lg">{formatPrice(subtotal())}</span>
                </div>
                <p className="text-xs text-bark">
                  Delivery estimate calculated at checkout. [INSERT DELIVERY INFORMATION]
                </p>
                <Link href="/custom-gift" onClick={close} className="btn btn-primary w-full">
                  Proceed to Checkout
                </Link>
                <button onClick={close} className="btn btn-outline w-full">
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
