/**
 * A slow, continuously scrolling strip of words — a small but deliberate
 * "the page is alive" touch used between the hero and the first content
 * section. Disabled automatically under prefers-reduced-motion (see
 * .marquee-track in globals.css).
 */
export default function MarqueeStrip({
  items,
  tone = "dark",
}: {
  items: string[];
  tone?: "dark" | "light";
}) {
  const line = items.join("   ·   ") + "   ·   ";

  return (
    <div
      className={`py-5 overflow-hidden border-y ${
        tone === "dark" ? "bg-espresso text-ivory/80 border-ivory/10" : "bg-ivory text-bark border-espresso/10"
      }`}
      aria-hidden="true"
    >
      <div className="marquee-track">
        <span className="eyebrow whitespace-nowrap pr-4" style={{ color: "inherit" }}>
          {line}
        </span>
        <span className="eyebrow whitespace-nowrap pr-4" style={{ color: "inherit" }}>
          {line}
        </span>
      </div>
    </div>
  );
}
