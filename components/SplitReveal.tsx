"use client";

import { motion } from "framer-motion";

/**
 * Line-by-line "curtain lift" text reveal, in the spirit of the reference
 * site's cinematic title cards — each line of `text` (split on \n) sits in
 * an overflow-hidden band and slides up into place with a slight stagger,
 * instead of the type just fading in flat. Reserved for the site's biggest
 * typographic moments (the Hero headline, StatementBand copy, section
 * headings) so the effect keeps its impact rather than becoming wallpaper.
 *
 * `mode="onload"` animates immediately on mount (the Hero headline, which is
 * visible the instant the page loads). `mode="onview"` (default) animates
 * the first time the text scrolls into view, like the rest of the site's
 * scroll reveals.
 */
export default function SplitReveal({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
  mode = "onview",
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  mode?: "onload" | "onview";
}) {
  const lines = text.split("\n");
  // Same viewport margin as RevealOnScroll (proven reliable elsewhere on the
  // site) rather than a percentage margin, which can shrink the detection
  // window enough that a large heading never registers as intersecting —
  // leaving it stuck at opacity:0 ("vacant space") instead of revealing.
  // Deliberately NOT `once: true`: if a heading is ever missed on its first
  // pass (a fast scroll, a resize), it gets another chance next time it's in
  // view rather than staying blank for good.
  const viewProps =
    mode === "onview" ? { whileInView: "visible", viewport: { margin: "-80px" } } : { animate: "visible" };

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial="hidden"
            {...viewProps}
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 1, delay: delay + i * 0.12, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
