import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import RevealOnScroll from "./RevealOnScroll";

export default function CTASection({
  eyebrow,
  title,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  image,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  image: string;
}) {
  return (
    <section className="relative h-[86vh] min-h-[520px] w-full overflow-hidden">
      <PlaceholderImage label={image} aspect="aspect-auto" className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-soot/55" />
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <RevealOnScroll className="wrap max-w-3xl mx-auto">
          {eyebrow && <p className="eyebrow text-champagne mb-6">{eyebrow}</p>}
          <h2 className="display-1 text-ivory whitespace-pre-line">{title}</h2>
          {body && <p className="mt-6 text-ivory/85 text-base md:text-lg max-w-xl mx-auto">{body}</p>}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href={primaryHref} className="btn btn-outline-light">
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="btn-ghost text-ivory border-ivory/60 hover:text-champagne hover:border-champagne"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
