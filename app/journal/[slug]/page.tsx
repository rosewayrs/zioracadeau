import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, journalArticles } from "@/lib/data/journal";
import PlaceholderImage from "@/components/PlaceholderImage";
import RevealOnScroll from "@/components/RevealOnScroll";
import JournalCard from "@/components/JournalCard";
import SectionHeading from "@/components/SectionHeading";

export function generateStaticParams() {
  return journalArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt, type: "article" },
  };
}

export default function JournalArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = journalArticles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="pt-32 md:pt-40 pb-28 md:pb-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.date,
          }),
        }}
      />
      <div className="wrap max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-xs text-bark mb-8">
          <Link href="/journal" className="hover:text-espresso">
            Journal
          </Link>{" "}
          / <span className="text-espresso">{article.category}</span>
        </nav>
        <RevealOnScroll>
          <p className="eyebrow mb-5">{article.category}</p>
          <h1 className="display-1 !text-4xl md:!text-6xl">{article.title}</h1>
          <p className="text-xs text-bark uppercase tracking-wide mt-6">
            {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {article.readTime}
          </p>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={0.1} className="wrap mt-12">
        <PlaceholderImage label={article.image} aspect="aspect-[16/9]" />
      </RevealOnScroll>

      <div className="wrap max-w-2xl mt-16 space-y-6">
        {article.body.map((p, i) => (
          <RevealOnScroll key={i} delay={i * 0.05}>
            <p className="text-bark leading-relaxed text-base md:text-lg">{p}</p>
          </RevealOnScroll>
        ))}
      </div>

      <div className="wrap mt-28 md:mt-40">
        <SectionHeading eyebrow="Continue Reading" title="More From the Journal" />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {related.map((a, i) => (
            <JournalCard key={a.id} article={a} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </div>
  );
}
