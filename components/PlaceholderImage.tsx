/**
 * Zioracadeau does not yet have real photography or video loaded into this
 * build. PlaceholderImage renders an elegant, clearly-labelled textured
 * surface in place of a photograph so nothing fabricated is presented as
 * real product or lifestyle photography. Swap in real images/video (via
 * next/image, next/video or a CMS) by replacing this component's usage —
 * the `label` prop documents exactly what should be shot/uploaded in its
 * place.
 *
 * `animated` adds a slow, continuous Ken Burns-style zoom (disabled under
 * prefers-reduced-motion) for full-bleed cinematic moments — hero, CTA and
 * event backgrounds — mirroring the subtle motion of an autoplay video
 * background without fabricating one. Leave it off for grid thumbnails,
 * where constant motion would feel busy rather than luxurious.
 *
 * `tone="mono"` applies a desaturated, slightly darkened treatment for a
 * quieter, more editorial closing moment (e.g. a final call-to-action).
 */
export default function PlaceholderImage({
  label,
  className = "",
  aspect = "aspect-[4/5]",
  animated = false,
  tone = "color",
}: {
  label: string;
  className?: string;
  aspect?: string;
  animated?: boolean;
  tone?: "color" | "mono";
}) {
  return (
    <div className={`placeholder-frame ${aspect} ${className}`} role="img" aria-label={label}>
      <div
        className={`placeholder-surface absolute inset-0 ${animated ? "placeholder-kenburns" : ""} ${
          tone === "mono" ? "placeholder-mono" : ""
        }`}
      />
      <span className="placeholder-label">{label}</span>
    </div>
  );
}
