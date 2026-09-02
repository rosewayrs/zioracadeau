import RevealOnScroll from "./RevealOnScroll";
import SplitReveal from "./SplitReveal";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  size = "display-2",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  size?: "display-1" | "display-2" | "display-3";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <RevealOnScroll>
          <p className={`eyebrow mb-4 ${light ? "text-champagne" : ""}`}>{eyebrow}</p>
        </RevealOnScroll>
      )}
      <SplitReveal
        as="h2"
        text={title}
        delay={eyebrow ? 0.1 : 0}
        className={`${size} ${light ? "text-ivory" : "text-espresso"} whitespace-pre-line`}
      />
    </div>
  );
}
