import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import RevealOnScroll from "./RevealOnScroll";
import { instagramUrl } from "@/lib/data/nav";

const tiles = [
  "Instagram — gift unboxing moment",
  "Instagram — packaging detail",
  "Instagram — florals and ribbon",
  "Instagram — behind the scenes",
  "Instagram — client reaction",
  "Instagram — flat lay styling",
];

export default function InstagramGrid() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-1.5 md:gap-2">
      {tiles.map((t, i) => (
        <RevealOnScroll key={t} delay={(i % 6) * 0.05}>
          <Link
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden"
          >
            <div className="transition-transform duration-[1100ms] ease-editorial group-hover:scale-110">
              <PlaceholderImage label={t} aspect="aspect-square" />
            </div>
          </Link>
        </RevealOnScroll>
      ))}
    </div>
  );
}
