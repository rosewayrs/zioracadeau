import RevealOnScroll from "./RevealOnScroll";

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
    <RevealOnScroll className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className={`eyebrow mb-4 ${light ? "text-champagne" : ""}`}>{eyebrow}</p>
      )}
      <h2 className={`${size} ${light ? "text-ivory" : "text-espresso"} whitespace-pre-line`}>
        {title}
      </h2>
    </RevealOnScroll>
  );
}
