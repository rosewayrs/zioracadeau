"use client";

import { useEffect, useState } from "react";
import PlaceholderImage from "./PlaceholderImage";
import { getStockPhotoUrl } from "@/lib/data/stockImages";

/**
 * Full-bleed, autoplaying background video for the moments that now have
 * real licensed footage (see /public/video). Falls back to the existing
 * PlaceholderImage treatment (real stock photo + Ken Burns motion) if the
 * video fails to load, or is simply not rendered — showing the static
 * fallback instead — when the visitor has prefers-reduced-motion set.
 */
export default function BackgroundVideo({
  src,
  label,
  className = "",
}: {
  src: string;
  label: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (failed || reducedMotion) {
    return (
      <PlaceholderImage label={label} aspect="aspect-auto" className={className} animated={!reducedMotion} />
    );
  }

  return (
    <video
      className={`object-cover ${className}`}
      poster={getStockPhotoUrl(label)}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      onError={() => setFailed(true)}
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
