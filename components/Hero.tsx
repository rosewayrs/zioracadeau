"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import BackgroundVideo from "./BackgroundVideo";
import SplitReveal from "./SplitReveal";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section ref={sectionRef} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y: parallaxY }} className="absolute inset-0 h-[130%] w-full">
        <BackgroundVideo
          src="/video/hero-tablescape.mp4"
          label="Hero — a styled celebration in progress, table setting and a gift being placed"
          className="absolute inset-0 h-full w-full"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-soot/70 via-soot/10 to-soot/30" />

      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="wrap pb-16 md:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-champagne mb-6"
          >
            Zioracadeau — Events &amp; Gifting
          </motion.p>

          <SplitReveal
            as="h1"
            mode="onload"
            delay={0.15}
            text={"Every Celebration, Designed.\nEvery Gift, Considered."}
            className="display-1 text-ivory max-w-4xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-ivory/85 text-base md:text-lg max-w-md leading-relaxed"
          >
            From weddings to corporate milestones, we design the moment —
            and pair it with a gift worth giving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/events" className="btn btn-outline-light">
              Start Planning
            </Link>
            <Link href="/shop" className="btn-ghost text-ivory border-ivory/60 hover:text-champagne hover:border-champagne">
              Explore Gifting
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
