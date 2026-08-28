import { ReactNode } from "react";
import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import RevealOnScroll from "./RevealOnScroll";

export default function EditorialSection({
  eyebrow,
  title,
  children,
  image,
  imageSide = "right",
  cta,
  ctaHref,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  image: string;
  imageSide?: "left" | "right";
  cta?: string;
  ctaHref?: string;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <RevealOnScroll className={imageSide === "left" ? "lg:order-1" : "lg:order-2"}>
        <PlaceholderImage label={image} aspect="aspect-[4/5]" />
      </RevealOnScroll>
      <RevealOnScroll
        delay={0.1}
        className={imageSide === "left" ? "lg:order-2" : "lg:order-1"}
      >
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <h2 className="display-2 mb-6 whitespace-pre-line">{title}</h2>
        <div className="text-bark leading-relaxed max-w-md space-y-4">{children}</div>
        {cta && ctaHref && (
          <Link href={ctaHref} className="btn btn-outline mt-8 inline-flex">
            {cta}
          </Link>
        )}
      </RevealOnScroll>
    </div>
  );
}
