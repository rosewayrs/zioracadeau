import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import EditorialSection from "@/components/EditorialSection";
import CollectionCard from "@/components/CollectionCard";
import ProductGrid from "@/components/ProductGrid";
import CTASection from "@/components/CTASection";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonial from "@/components/Testimonial";
import JournalCard from "@/components/JournalCard";
import InstagramGrid from "@/components/InstagramGrid";
import RevealOnScroll from "@/components/RevealOnScroll";
import PlaceholderImage from "@/components/PlaceholderImage";
import StatementBand from "@/components/StatementBand";
import MarqueeStrip from "@/components/MarqueeStrip";
import { eventCategories } from "@/lib/data/events";
import { edits } from "@/lib/data/collections";
import { products } from "@/lib/data/products";
import { testimonials } from "@/lib/data/testimonials";
import { journalArticles } from "@/lib/data/journal";
import { instagramUrl } from "@/lib/data/nav";

export default function HomePage() {
  const featured = products.slice(0, 6);
  const latestJournal = journalArticles.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Zioracadeau",
            description:
              "A luxury events and gifting house — designing celebrations and pairing them with thoughtfully curated, personalised gifts.",
            url: "https://zioracadeau.vercel.app",
            sameAs: [instagramUrl],
          }),
        }}
      />

      {/* 01 — Hero */}
      <Hero />

      <MarqueeStrip
        items={["Weddings", "Celebrations", "Birthdays", "Corporate Events", "Custom Gifting", "Corporate Gifting"]}
      />

      {/* 02 — Brand Statement */}
      <section className="wrap py-28 md:py-40">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Our Philosophy"
            title={"We Don't Just Plan Events.\nWe Don't Just Give Gifts."}
            size="display-1"
          />
          <RevealOnScroll delay={0.15} className="mt-10 space-y-5 text-bark text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              Zioracadeau began as a gifting house — built on the belief that
              the best gifts are not simply beautiful objects, but
              expressions of love, appreciation, celebration and connection.
            </p>
            <p>
              We've since grown into something more. We now design the
              celebrations themselves — the wedding, the milestone birthday,
              the corporate gala — and pair every one with gifting composed
              with the same care as the event itself.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <StatementBand text="The Art of Celebration" />

      {/* 03 — The Art of Celebration (Events) */}
      <section id="events" className="wrap py-28 md:py-40">
        <SectionHeading eyebrow="Events" title="Four Ways We Celebrate, Each Paired With Giving" />
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
            />
          ))}
        </div>
        <RevealOnScroll delay={0.2} className="mt-10">
          <Link href="/events" className="btn btn-outline">
            Start Planning an Event
          </Link>
        </RevealOnScroll>
      </section>

      {/* 04 — Paired With Giving */}
      <section className="bg-espresso text-ivory py-28 md:py-40">
        <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <RevealOnScroll>
            <p className="eyebrow text-champagne mb-5">The Pairing</p>
            <h2 className="display-2 text-ivory mb-6">Every Event, Paired With a Gift.</h2>
            <div className="text-ivory/75 leading-relaxed max-w-md space-y-4">
              <p>
                A beautifully designed event doesn't end when the last
                guest leaves — it continues in what they take home. Every
                celebration we design is paired with gifting: for the guest
                of honour, the bridal party, the team that made it happen,
                or the client on the other side of the table.
              </p>
              <p>
                It's why Zioracadeau exists as one house, not two separate
                businesses — the event and the gift are designed together,
                from the same brief.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/events" className="btn btn-outline-light">
                Plan an Event
              </Link>
              <Link href="/shop" className="btn-ghost text-ivory border-ivory/60 hover:text-champagne hover:border-champagne">
                Explore Gifting
              </Link>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <PlaceholderImage
              label="Paired With Giving — an event's gifting moment, gift beside a place setting"
              aspect="aspect-[4/5]"
              animated
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* 05 — The Zioracadeau Edit */}
      <section className="py-28 md:py-40">
        <div className="wrap">
          <SectionHeading eyebrow="Curated Collections" title="The Zioracadeau Edit" />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {edits.map((edit, i) => (
              <CollectionCard key={edit.id} collection={edit} href={`/shop`} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Featured Gifts */}
      <section className="bg-cream py-28 md:py-40">
        <div className="wrap">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHeading eyebrow="Shop the Edit" title="Gifts Worth Giving" />
            <RevealOnScroll delay={0.1}>
              <Link href="/shop" className="btn-ghost text-espresso">
                View All Gifts
              </Link>
            </RevealOnScroll>
          </div>
          <div className="mt-14">
            <ProductGrid products={featured} />
          </div>
        </div>
      </section>

      {/* 07 — Custom Gifting */}
      <section className="wrap py-28 md:py-40">
        <EditorialSection
          eyebrow="Custom Gifting"
          title={"Make It\nPersonal."}
          image="Custom Gifting — a gift being personalised by hand"
          cta="Create a Custom Gift"
          ctaHref="/custom-gift"
        >
          <p>
            Tell us who you're gifting, what you're celebrating, what they
            love and your budget. We'll help create something meaningful —
            composed piece by piece, for one person in particular.
          </p>
        </EditorialSection>
      </section>

      {/* 08 — How It Works */}
      <section className="bg-cream py-28 md:py-40">
        <div className="wrap">
          <SectionHeading eyebrow="How It Works" title="From Brief to Celebration" />
          <div className="mt-16">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* 09 — Corporate: Events & Gifting */}
      <section className="wrap py-28 md:py-40">
        <EditorialSection
          eyebrow="Corporate"
          title={"Events and Gifts\nThat Represent Your Brand."}
          image="Corporate — branded event and gift presentation"
          imageSide="left"
          cta="Enquire for Corporate Gifting"
          ctaHref="/corporate"
          ctaSecondary="Enquire for Corporate Events"
          ctaSecondaryHref="/events/corporate-events"
        >
          <p>
            From client dinners to end-of-year appreciation, executive
            welcomes to conference favours — we design corporate events and
            corporate gifting that reflect your brand as thoughtfully as
            you'd hope, together or on their own.
          </p>
          <p className="text-sm text-bark/80">
            Teams · Clients · Executives · Launches · Galas · Conferences · Brand Activations
          </p>
        </EditorialSection>
      </section>

      {/* 10 — Founder / Our Story */}
      <section className="bg-espresso text-ivory py-28 md:py-40">
        <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <RevealOnScroll>
            <PlaceholderImage label="Founder portrait — [INSERT FOUNDER PHOTOGRAPH]" aspect="aspect-[4/5]" />
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="eyebrow text-champagne mb-5">Our Story</p>
            <h2 className="display-2 text-ivory mb-6">The Story Behind Zioracadeau</h2>
            <div className="text-ivory/75 leading-relaxed max-w-md space-y-4">
              <p>[FOUNDER STORY GOES HERE — why the brand exists, in the founder's own words]</p>
              <p>[INSERT PHILOSOPHY OF EVENTS AND GIFTING, AND WHY THEY'RE PAIRED]</p>
              <p>[INSERT PERSONAL PERSPECTIVE ON WHAT MAKES A CELEBRATION — AND A GIFT — MEANINGFUL]</p>
            </div>
            <Link href="/about" className="btn btn-outline-light mt-8 inline-flex">
              Read Our Story
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* 11 — Emotional Statement */}
      <section className="relative h-[80vh] min-h-[480px] w-full overflow-hidden">
        <PlaceholderImage
          label="Emotional statement — a genuine reaction, mid-celebration"
          aspect="aspect-auto"
          className="absolute inset-0 h-full w-full"
          animated
        />
        <div className="absolute inset-0 bg-soot/45" />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <RevealOnScroll className="wrap">
            <p className="display-1 text-ivory">It's Not About the Box.</p>
            <p className="display-1 text-champagne mt-1">It's About the Whole Moment.</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* 12 — Testimonials */}
      <StatementBand text="Testimonials" />
      <section className="wrap py-28 md:py-40">
        <p className="eyebrow text-center mb-16">Words From Those We've Celebrated With</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {testimonials.map((t, i) => (
            <Testimonial key={t.name + i} testimonial={t} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* 13 — Journal */}
      <section className="bg-cream py-28 md:py-40">
        <div className="wrap">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHeading eyebrow="Reading" title="The Zioracadeau Journal" />
            <RevealOnScroll delay={0.1}>
              <Link href="/journal" className="btn-ghost text-espresso">
                Visit the Journal
              </Link>
            </RevealOnScroll>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {latestJournal.map((a, i) => (
              <JournalCard key={a.id} article={a} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* 14 — Instagram */}
      <StatementBand text="Follow the Celebration" />
      <section className="wrap py-28 md:py-40">
        <div className="text-center mb-14">
          <p className="eyebrow">@zioracadeau</p>
          <RevealOnScroll delay={0.1}>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-espresso mt-4 inline-block"
            >
              Follow Along
            </a>
          </RevealOnScroll>
        </div>
        <InstagramGrid />
      </section>

      {/* 15 — Final CTA */}
      <CTASection
        title={"Some Moments Deserve More\nThan “Happy Birthday.”"}
        body="Let's design the celebration, and the gift that goes with it."
        primaryLabel="Start Planning an Event"
        primaryHref="/events"
        secondaryLabel="Create a Gift"
        secondaryHref="/custom-gift"
        image="Final CTA — dramatic full-screen celebration and gifting moment, desaturated editorial treatment"
        tone="mono"
      />
    </>
  );
}
