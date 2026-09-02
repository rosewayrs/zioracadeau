import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getEventCategoryBySlug, eventCategories } from "@/lib/data/events";
import PlaceholderImage from "@/components/PlaceholderImage";
import BackgroundVideo from "@/components/BackgroundVideo";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeading from "@/components/SectionHeading";
import CollectionCard from "@/components/CollectionCard";
import EventEnquiryForm from "@/components/EventEnquiryForm";

export function generateStaticParams() {
  return eventCategories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = getEventCategoryBySlug(params.slug);
  if (!category) return {};
  return {
    title: category.title,
    description: category.description,
    openGraph: { title: `${category.title} | Zioracadeau Events`, description: category.description, type: "website" },
  };
}

// Real venue footage we have on hand only covers these two categories —
// birthdays and corporate-events keep the stock-photo + Ken Burns treatment.
const categoryVideo: Partial<Record<string, string>> = {
  weddings: "/video/weddings-hero-aisle.mp4",
  celebrations: "/video/celebrations-hero-lounge.mp4",
};

export default function EventCategoryPage({ params }: { params: { slug: string } }) {
  const category = getEventCategoryBySlug(params.slug);
  if (!category) notFound();

  const otherCategories = eventCategories.filter((c) => c.slug !== category.slug);
  const videoSrc = categoryVideo[category.slug];

  return (
    <div className="pt-32 md:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: `${category.title} Event Design`,
            provider: { "@type": "Organization", name: "Zioracadeau" },
            description: category.description,
          }),
        }}
      />

      <section className="relative h-[64vh] min-h-[440px] w-full overflow-hidden">
        {videoSrc ? (
          <BackgroundVideo src={videoSrc} label={category.image} className="absolute inset-0 h-full w-full" />
        ) : (
          <PlaceholderImage label={category.image} aspect="aspect-auto" className="absolute inset-0 h-full w-full" animated />
        )}
        <div className="absolute inset-0 bg-soot/50" />
        <div className="relative z-10 h-full flex items-end">
          <div className="wrap pb-16">
            <RevealOnScroll>
              <nav aria-label="Breadcrumb" className="text-xs text-ivory/70 mb-5">
                <Link href="/events" className="hover:text-ivory">
                  Events
                </Link>{" "}
                / <span className="text-ivory">{category.title}</span>
              </nav>
              <p className="eyebrow text-champagne mb-5">{category.eyebrow}</p>
              <h1 className="display-1 text-ivory max-w-2xl">{category.title}</h1>
              <p className="mt-6 text-ivory/85 max-w-lg leading-relaxed">{category.description}</p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="wrap py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll>
            <p className="eyebrow mb-5">What We Design</p>
            <div className="text-bark leading-relaxed max-w-md space-y-4">
              {category.longDescription.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <PlaceholderImage label={`${category.title} — [INSERT PAST PORTFOLIO IMAGE]`} aspect="aspect-[4/5]" animated />
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-cream py-28 md:py-40">
        <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <p className="eyebrow mb-5">Paired With Giving</p>
            <h2 className="display-3 mb-6">A Gift, Built Into This Event.</h2>
            <p className="text-bark leading-relaxed max-w-md">{category.pairedGiftingNote}</p>
            <Link
              href={`/shop?category=${category.pairedShopCategory}`}
              className="btn btn-outline mt-8 inline-flex"
            >
              Browse Gifting for {category.title}
            </Link>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <PlaceholderImage label={`${category.title} — paired gift detail`} aspect="aspect-[4/5]" animated />
          </RevealOnScroll>
        </div>
      </section>

      <section id="plan" className="wrap py-28 md:py-40 scroll-mt-24">
        <SectionHeading eyebrow="Start Planning" title={`Tell Us About Your ${category.title} Event`} />
        <div className="mt-14 max-w-3xl">
          <EventEnquiryForm defaultEventType={category.slug} />
        </div>
      </section>

      <section className="wrap pb-28 md:pb-40">
        <SectionHeading eyebrow="Explore" title="Other Ways We Celebrate" />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherCategories.map((c, i) => (
            <CollectionCard
              key={c.slug}
              collection={{ id: c.slug, title: c.title, slug: c.slug, description: c.description, image: c.image }}
              href={`/events/${c.slug}`}
              delay={i * 0.08}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
