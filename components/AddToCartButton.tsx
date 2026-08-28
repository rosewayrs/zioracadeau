"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { useCart } from "@/lib/store/cart";

const packagingOptions = ["Signature Box", "Gift Bag", "Minimal Wrap"];

export default function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCart((s) => s.addItem);
  const openCart = useCart((s) => s.open);
  const [quantity, setQuantity] = useState(1);
  const [giftMessage, setGiftMessage] = useState("");
  const [packaging, setPackaging] = useState(packagingOptions[0]);
  const [added, setAdded] = useState(false);

  return (
    <div className="space-y-6">
      {product.personalisationAvailable && (
        <div className="border-t border-espresso/10 pt-6 space-y-5">
          <p className="eyebrow">Make It Personal</p>
          <div>
            <label htmlFor="gift-message" className="block text-xs uppercase tracking-wide text-bark mb-2">
              Gift Message
            </label>
            <textarea
              id="gift-message"
              value={giftMessage}
              onChange={(e) => setGiftMessage(e.target.value)}
              rows={3}
              maxLength={280}
              placeholder="Write a note to be included with your gift…"
              className="w-full border border-espresso/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-espresso"
            />
          </div>
          <div>
            <label htmlFor="packaging" className="block text-xs uppercase tracking-wide text-bark mb-2">
              Packaging
            </label>
            <select
              id="packaging"
              value={packaging}
              onChange={(e) => setPackaging(e.target.value)}
              className="w-full border border-espresso/20 bg-transparent px-3 py-2 text-sm outline-none focus:border-espresso"
            >
              {packagingOptions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div className="flex items-center gap-4">
        <label htmlFor="quantity" className="text-xs uppercase tracking-wide text-bark">
          Quantity
        </label>
        <input
          id="quantity"
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-16 border border-espresso/20 bg-transparent px-2 py-1.5 text-sm outline-none focus:border-espresso"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => {
            addItem({
              productId: product.id,
              name: product.name,
              price: product.price,
              quantity,
              image: product.images[0],
              giftMessage: giftMessage || undefined,
              packaging,
            });
            setAdded(true);
            setTimeout(() => setAdded(false), 2200);
          }}
          className="btn btn-outline flex-1"
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
        <button
          onClick={() => {
            addItem({
              productId: product.id,
              name: product.name,
              price: product.price,
              quantity,
              image: product.images[0],
              giftMessage: giftMessage || undefined,
              packaging,
            });
            openCart();
          }}
          className="btn btn-primary flex-1"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
