import RevealOnScroll from "./RevealOnScroll";

/**
 * A full-bleed, high-contrast band carrying a single oversized line of type
 * between major sections — a deliberate, editorial pacing device (not a
 * content section in itself) that gives the page moments of visual rest and
 * drama between imagery, in the spirit of a luxury print spread.
 */
export default function StatementBand({
  text,
  tone = "dark",
}: {
  text: string;
  tone?: "dark" | "light";
}) {
  return (
    <section
      className={`py-16 md:py-24 overflow-hidden ${
        tone === "dark" ? "bg-espresso text-ivory" : "bg-ivory text-espresso"
      }`}
    >
      <RevealOnScroll className="wrap">
        <p className="statement-band-text text-center text-[9vw] md:text-[5.5vw] xl:text-[4.25rem]">
          {text}
        </p>
      </RevealOnScroll>
    </section>
  );
}
