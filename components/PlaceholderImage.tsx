/**
 * Zioracadeau does not yet have real photography loaded into this build.
 * PlaceholderImage renders an elegant, clearly-labelled textured surface in
 * place of a photograph so nothing fabricated is presented as real product
 * or lifestyle photography. Swap in real images (via next/image or a CMS)
 * by replacing this component's usage — the `label` prop documents exactly
 * what should be shot/uploaded in its place.
 */
export default function PlaceholderImage({
  label,
  className = "",
  aspect = "aspect-[4/5]",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`placeholder-surface ${aspect} ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="placeholder-label">{label}</span>
    </div>
  );
}
