import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import PlaceholderImage from "@/components/PlaceholderImage";
import BackgroundVideo from "@/components/BackgroundVideo";
import CollectionCard from "@/components/CollectionCard";
import EventEnquiryForm from "@/components/EventEnquiryForm";
import CTASection from "@/components/CTASection";
import MarqueeStrip from "@/components/MarqueeStrip";
import StatementBand from "@/components/StatementBand";
import { eventCategories } from "@/lib/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Luxury event design for weddings, celebrations, birthdays and corporate events — every one paired with thoughtfully curated gifting.",
};

export default function EventsPage() {
  return (
    <div className="pt-32 md:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Event Design and Planning",
            provider: { "@type": "Organization", name: "Zioracadeau" },
            areaServed: "NG",
            description:
              "Luxury event design for weddings, celebrations, birthdays and corporate events, paired with curated gifting.",
          }),
        }}
      />

      <section className="relative h-[64vh] min-h-[440px] w-full overflow-hidden">
        <BackgroundVideo
          src="/video/events-hero-mandap.mp4"
          label="Events — a styled celebration mid-preparation"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-soot/50" />
        <div className="relative z-10 h-full flex items-end">
          <div className="wrap pb-16">
            <RevealOnScroll>
              <p className="eyebrow text-champagne mb-5">Events</p>
              <h1 className="display-1 text-ivory max-w-3xl whitespace-pre-line">
                {"The Art of Celebration,\nPaired With Giving."}
              </h1>
              <p className="mt-6 text-ivory/85 max-w-lg leading-relaxed">
                We design weddings, celebrations, birthdays and corporate
                events — and pair every one with gifting composed for the
                people in the room.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <MarqueeStrip items={["Weddings", "Celebrations", "Birthdays", "Corporate Events"]} />

      <section className="wrap py-28 md:py-40">
        <SectionHeading eyebrow="What We Design" title="Four Ways We Celebrate" />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {eventCategories.map((cat, i) => (
            <CollectionCard
              key={cat.slug}
              collection={{
                id: cat.slug,
                title: cat.title,
                slug: cat.slug,
                description: cat.description,
                image: cat.image,
              }}
              href={`/events/${cat.slug}`}
              size="large"
              delay={i * 0.08}
              imageSrc={cat.slug === "weddings" ? "/images/weddings-featured.jpg" : undefined}
            />
          ))}
        </div>
      </section>

      <section className="bg-espresso text-ivory py-28 md:py-40">
        <div className="wrap max-w-2xl">
          <RevealOnScroll>
            <p className="eyebrow text-champagne mb-5">The Pairing</p>
            <h2 className="display-2 text-ivory mb-6">Gifting, Built Into Every Brief.</h2>
            <p className="text-ivory/75 leading-relaxed">
              You don't need to plan your gifting separately. Tell us about
              your event below, and let us know if you'd like it paired with
              gifting — for your guest of honour, your bridal party, your
              guests, or your own team — and we'll fold it into the same
              conversation.
            </p>
            <Link href="/shop" className="btn-ghost text-ivory border-ivory/60 hover:text-champagne hover:border-champagne mt-8 inline-flex">
              Or Browse Gifting First
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <StatementBand text="Start Planning" />

      <section id="plan" className="wrap py-28 md:py-40 scroll-mt-24">
        <SectionHeading eyebrow="Start Planning" title="Tell Us About Your Event" />
        <div className="mt-14 max-w-3xl">
          <EventEnquiryForm />
        </div>
      </section>

      <CTASection
        eyebrow="Corporate"
        title={"Planning Something\nFor Your Company?"}
        body="From launches to end-of-year galas — paired with corporate gifting, if you'd like it."
        primaryLabel="Enquire for Corporate Events"
        primaryHref="/events/corporate-events"
        secondaryLabel="Corporate Gifting"
        secondaryHref="/corporate"
        image="Corporate Events CTA — branded gala setup"
      />
    </div>
  );
}
