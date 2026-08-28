import { Suspense } from "react";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse thoughtfully curated gifts for birthdays, love, weddings, corporate gifting, new arrivals and just because.",
};

export default function ShopPage() {
  return (
    <div className="pt-32 md:pt-40 pb-28 md:pb-40">
      <div className="wrap">
        <SectionHeading eyebrow="Shop" title="Gifts, Curated With Intention" />
        <RevealOnScroll delay={0.1} className="max-w-xl mt-6">
          <p className="text-bark leading-relaxed">
            Every piece in the Zioracadeau shop is chosen for how it feels to
            give, not just how it looks. Filter by occasion, or simply browse
            — everything here has already been considered for you.
          </p>
        </RevealOnScroll>

        <div className="mt-16">
          <Suspense fallback={null}>
            <ShopClient />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
