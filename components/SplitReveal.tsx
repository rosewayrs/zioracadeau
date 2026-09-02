"use client";

import { motion, type Variants } from "framer-motion";

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
 *
 * IMPORTANT — the viewport check runs on the OUTER tag, not the lines:
 * an earlier version put `whileInView` directly on each line's motion.span
 * — the same element whose `y: "110%"` hidden state shifts it out of its
 * own layout box. The browser measures that element's actual, transformed
 * position for intersection purposes, so the shifted box doesn't reliably
 * line up with the (also shifted) detection window, and on many headings
 * it simply never gets flagged as "in view" — leaving it stuck at
 * opacity:0 forever (the reported vacant-space / solid-black-bar bug).
 * Watching the heading tag itself — which never moves — fixes that: its
 * box is static, so the check is unambiguous. Framer Motion then
 * propagates the resulting hidden/visible state down to the line spans
 * automatically (they share the same variant names), so they still
 * animate in with their stagger.
 */
const lineVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const tagMap = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
} as const;

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
  const MotionTag = tagMap[Tag];

  const containerVariants: Variants = {
    hidden: {},
    // delayChildren/staggerChildren reproduce the old per-line
    // `delay + i * 0.12` timing, orchestrated from the (static) container
    // instead of computed per line.
    visible: { transition: { delayChildren: delay, staggerChildren: 0.12 } },
  };

  // Deliberately NOT `once: true`: if a heading is ever missed on its first
  // pass (a fast scroll, a resize), it gets another chance next time it's
  // in view rather than staying blank for good.
  const triggerProps =
    mode === "onview"
      ? { whileInView: "visible" as const, viewport: { margin: "-80px" } }
      : { animate: "visible" as const };

  return (
    <MotionTag className={className} initial="hidden" variants={containerVariants} {...triggerProps}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span className="block" variants={lineVariants}>
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
