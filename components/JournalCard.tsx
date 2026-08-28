import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import RevealOnScroll from "./RevealOnScroll";
import { JournalArticle } from "@/lib/types";

export default function JournalCard({ article, delay = 0 }: { article: JournalArticle; delay?: number }) {
  return (
    <RevealOnScroll delay={delay}>
      <Link href={`/journal/${article.slug}`} className="group block">
        <div className="overflow-hidden">
          <div className="transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.05]">
            <PlaceholderImage label={article.image} aspect="aspect-[4/3]" />
          </div>
        </div>
        <p className="eyebrow mt-5 mb-2">{article.category}</p>
        <h3 className="font-display text-xl leading-snug group-hover:text-clay transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-bark mt-2 line-clamp-2">{article.excerpt}</p>
        <p className="text-xs text-bark/70 mt-3 tracking-wide uppercase">
          {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {article.readTime}
        </p>
      </Link>
    </RevealOnScroll>
  );
}
