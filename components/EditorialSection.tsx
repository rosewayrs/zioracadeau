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
  ctaSecondary,
  ctaSecondaryHref,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  image: string;
  imageSide?: "left" | "right";
  cta?: string;
  ctaHref?: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <RevealOnScroll className={imageSide === "left" ? "lg:order-1" : "lg:order-2"}>
        <PlaceholderImage label={image} aspect="aspect-[4/5]" animated />
      </RevealOnScroll>
      <RevealOnScroll
        delay={0.1}
        className={imageSide === "left" ? "lg:order-2" : "lg:order-1"}
      >
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <h2 className="display-2 mb-6 whitespace-pre-line">{title}</h2>
        <div className="text-bark leading-relaxed max-w-md space-y-4">{children}</div>
        {(cta && ctaHref) || (ctaSecondary && ctaSecondaryHref) ? (
          <div className="flex flex-wrap gap-4 mt-8">
            {cta && ctaHref && (
              <Link href={ctaHref} className="btn btn-outline inline-flex">
                {cta}
              </Link>
            )}
            {ctaSecondary && ctaSecondaryHref && (
              <Link href={ctaSecondaryHref} className="btn-ghost text-espresso inline-flex">
                {ctaSecondary}
              </Link>
            )}
          </div>
        ) : null}
      </RevealOnScroll>
    </div>
  );
}
