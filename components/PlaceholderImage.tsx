"use client";

import { useState } from "react";
import { getStockPhotoUrl } from "@/lib/data/stockImages";

/**
 * Zioracadeau does not yet have real, brand-shot photography or video loaded
 * into this build. PlaceholderImage renders a temporary real stock photo
 * (sourced from Unsplash, generic and non-branded — see
 * lib/data/stockImages.ts) layered over Zioracadeau's signature gradient
 * surface, so the site reads as a finished, living page rather than gradient
 * blocks. These are stand-ins only — swap in real brand photography/video
 * (via next/image, next/video or a CMS) by replacing this component's
 * usage. The `label` prop documents exactly what should be shot in its
 * place, and also drives which themed stock photo is automatically
 * selected.
 *
 * Pass `useStock={false}` to opt a specific slot out of stock photography
 * and keep the plain gradient + visible label — used for the founder
 * portrait, so a stock model's photo is never presented as a specific real
 * person. If a stock photo fails to load, this component falls back to the
 * same gradient + label treatment automatically.
 *
 * `animated` adds a slow, continuous Ken Burns-style zoom (disabled under
 * prefers-reduced-motion) for full-bleed cinematic moments — hero, CTA and
 * event backgrounds — mirroring the subtle motion of an autoplay video
 * background without fabricating one. Leave it off for grid thumbnails,
 * where constant motion would feel busy rather than luxurious.
 *
 * `tone="mono"` applies a desaturated, slightly darkened treatment for a
 * quieter, more editorial closing moment (e.g. a final call-to-action).
 *
 * `overrideSrc` swaps in a specific real, cleared image (e.g. a real
 * Zioracadeau event photo the client has confirmed rights to use) instead of
 * the automatic stock-photo lookup — used sparingly, only where a real photo
 * has been explicitly supplied and approved.
 */
export default function PlaceholderImage({
  label,
  className = "",
  aspect = "aspect-[4/5]",
  animated = false,
  tone = "color",
  useStock = true,
  overrideSrc,
}: {
  label: string;
  className?: string;
  aspect?: string;
  animated?: boolean;
  tone?: "color" | "mono";
  useStock?: boolean;
  overrideSrc?: string;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImg = useStock && !imgFailed;
  const motionClass = animated ? "placeholder-kenburns" : "";
  const toneClass = tone === "mono" ? "placeholder-mono" : "";

  return (
    <div className={`placeholder-frame ${aspect} ${className}`} role="img" aria-label={label}>
      <div className={`placeholder-surface absolute inset-0 ${motionClass} ${toneClass}`} />
      {showImg && (
        <img
          src={overrideSrc ?? getStockPhotoUrl(label)}
          alt=""
          aria-hidden="true"
          loading="lazy"
          draggable={false}
          onError={(e) => {
            if (process.env.NODE_ENV !== "production") {
              console.warn(`[PlaceholderImage] stock photo failed to load for "${label}":`, e.currentTarget.src);
            }
            setImgFailed(true);
          }}
          className={`absolute inset-0 h-full w-full object-cover ${motionClass} ${toneClass}`}
        />
      )}
      {!showImg && <span className="placeholder-label">{label}</span>}
    </div>
  );
}
