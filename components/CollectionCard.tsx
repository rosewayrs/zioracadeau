import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import RevealOnScroll from "./RevealOnScroll";
import { Collection } from "@/lib/types";

export default function CollectionCard({
  collection,
  href,
  size = "default",
  delay = 0,
}: {
  collection: Collection;
  href: string;
  size?: "default" | "large";
  delay?: number;
}) {
  return (
    <RevealOnScroll delay={delay} className="h-full">
      <Link href={href} className="group block h-full">
        <div className="relative overflow-hidden">
          <div className="transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.06]">
            <PlaceholderImage
              label={collection.image}
              aspect={size === "large" ? "aspect-[4/5] md:aspect-[3/4]" : "aspect-[4/5]"}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-soot/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <h3 className={`text-ivory font-display ${size === "large" ? "text-3xl md:text-4xl" : "text-2xl"}`}>
              {collection.title}
            </h3>
            <p className="text-ivory/80 text-sm mt-2 max-w-xs">{collection.description}</p>
            <span className="inline-block mt-4 text-[0.66rem] tracking-[0.2em] uppercase text-champagne opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              View Collection →
            </span>
          </div>
        </div>
      </Link>
    </RevealOnScroll>
  );
}
