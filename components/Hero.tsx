"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PlaceholderImage from "./PlaceholderImage";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <PlaceholderImage
        label="Hero — a gift being presented, ribbon and hands, elegant lifestyle environment"
        aspect="aspect-auto"
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-soot/70 via-soot/10 to-soot/30" />

      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="wrap pb-16 md:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-champagne mb-6"
          >
            Zioracadeau — A Gifting House
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="display-1 text-ivory max-w-4xl"
          >
            The Art of Giving
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-ivory/85 text-base md:text-lg max-w-md leading-relaxed"
          >
            Thoughtfully curated gifts for moments worth remembering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/shop" className="btn btn-outline-light">
              Explore the Collection
            </Link>
            <Link href="/custom-gift" className="btn-ghost text-ivory border-ivory/60 hover:text-champagne hover:border-champagne">
              Create a Custom Gift
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
