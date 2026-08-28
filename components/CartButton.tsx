"use client";

import { useCart } from "@/lib/store/cart";

export default function CartButton({ light = false }: { light?: boolean }) {
  const { items, open } = useCart();
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <button
      onClick={open}
      aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
      className={`relative text-[0.68rem] tracking-[0.22em] uppercase font-medium ${
        light ? "text-ivory" : "text-espresso"
      }`}
    >
      Cart
      {count > 0 && (
        <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-clay text-ivory text-[0.6rem] align-middle">
          {count}
        </span>
      )}
    </button>
  );
}
