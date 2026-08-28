import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import PlaceholderImage from "@/components/PlaceholderImage";
import JournalCard from "@/components/JournalCard";
import { journalArticles } from "@/lib/data/journal";

export const metadata: Metadata = {
  title: "The Gifting Journal",
  description:
    "Gift guides, personalisation ideas, hosting notes and thoughtful living — from the Zioracadeau journal.",
};

export default function JournalPage() {
  const [featured, ...rest] = journalArticles;
  const categories = Array.from(new Set(journalArticles.map((a) => a.category)));

  return (
    <div className="pt-32 md:pt-40 pb-28 md:pb-40">
      <div className="wrap">
        <SectionHeading eyebrow="Reading" title="The Gifting Journal" size="display-1" />

        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
          {categories.map((c) => (
            <span key={c} className="text-[0.68rem] tracking-[0.18em] uppercase text-bark">
              {c}
            </span>
          ))}
        </div>

        {featured && (
          <RevealOnScroll delay={0.1} className="mt-16">
            <Link href={`/journal/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
              <div className="overflow-hidden">
                <div className="transition-transform duration-[1200ms] ease-editorial group-hover:scale-105">
                  <PlaceholderImage label={featured.image} aspect="aspect-[16/10]" />
                </div>
              </div>
              <div>
                <p className="eyebrow mb-4">{featured.category}</p>
                <h2 className="display-2 group-hover:text-clay transition-colors">{featured.title}</h2>
                <p className="text-bark mt-5 leading-relaxed max-w-md">{featured.excerpt}</p>
                <p className="text-xs text-bark/70 mt-5 tracking-wide uppercase">
                  {new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {featured.readTime}
                </p>
              </div>
            </Link>
          </RevealOnScroll>
        )}

        <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {rest.map((a, i) => (
            <JournalCard key={a.id} article={a} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </div>
  );
}
