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
import { occasions, edits } from "@/lib/data/collections";
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
              "A luxury gifting house offering thoughtfully curated gifts and personalised gifting experiences.",
            url: "https://zioracadeau.vercel.app",
            sameAs: [instagramUrl],
          }),
        }}
      />

      {/* 01 — Hero */}
      <Hero />

      {/* 02 — Brand Statement */}
      <section className="wrap py-28 md:py-40">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Our Philosophy"
            title={"More Than a Gift.\nA Memory in the Making."}
            size="display-1"
          />
          <RevealOnScroll delay={0.15} className="mt-10 space-y-5 text-bark text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              Zioracadeau believes the best gifts are not simply beautiful
              objects. They are expressions — of love, appreciation,
              celebration, thought and connection.
            </p>
            <p>
              We exist for the people who want their gifting to feel as
              intentional as everything else they do — considered from the
              first idea to the moment it's opened.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* 03 — The World of Zioracadeau */}
      <section id="occasions" className="wrap pb-28 md:pb-40">
        <SectionHeading eyebrow="Occasions" title="The World of Zioracadeau" />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
          <div className="md:col-span-4">
            <CollectionCard
              collection={occasions[0]}
              href={`/shop?category=birthday`}
              size="large"
            />
          </div>
          <div className="md:col-span-2">
            <CollectionCard collection={occasions[1]} href={`/shop?category=love`} delay={0.1} />
          </div>
          <div className="md:col-span-2">
            <CollectionCard collection={occasions[2]} href={`/shop?category=baby`} delay={0.15} />
          </div>
          <div className="md:col-span-2">
            <CollectionCard collection={occasions[3]} href={`/shop?category=corporate`} delay={0.2} />
          </div>
          <div className="md:col-span-2">
            <CollectionCard collection={occasions[4]} href={`/shop?category=wedding`} delay={0.25} />
          </div>
          <div className="md:col-span-4">
            <CollectionCard
              collection={occasions[5]}
              href={`/shop?category=just-because`}
              size="large"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* 04 — The Zioracadeau Edit */}
      <section className="bg-cream py-28 md:py-40">
        <div className="wrap">
          <SectionHeading eyebrow="Curated Collections" title="The Zioracadeau Edit" />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {edits.map((edit, i) => (
              <CollectionCard key={edit.id} collection={edit} href={`/shop`} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Featured Gifts */}
      <section className="wrap py-28 md:py-40">
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
      </section>

      {/* 06 — Custom Gifting */}
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

      {/* 07 — Custom Gift Process */}
      <section className="bg-cream py-28 md:py-40">
        <div className="wrap">
          <SectionHeading eyebrow="How It Works" title="The Custom Gift Process" />
          <div className="mt-16">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* 08 — Corporate Gifting */}
      <section className="wrap py-28 md:py-40">
        <EditorialSection
          eyebrow="Corporate Gifting"
          title="Gifts That Represent Your Brand."
          image="Corporate Gifting — branded gift presentation on a desk"
          imageSide="left"
          cta="Enquire for Corporate Gifting"
          ctaHref="/corporate"
        >
          <p>
            From client gifts to end-of-year appreciation, executive
            welcomes to conference favours — we design gifting experiences
            that reflect your brand as thoughtfully as you'd hope.
          </p>
          <p className="text-sm text-bark/80">
            Teams · Clients · Executives · Weddings · Conferences · Events · Brand Activations
          </p>
        </EditorialSection>
      </section>

      {/* 09 — Founder / Our Story */}
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
              <p>[INSERT PHILOSOPHY OF GIFTING AND MISSION]</p>
              <p>[INSERT PERSONAL PERSPECTIVE ON WHAT MAKES A GIFT MEANINGFUL]</p>
            </div>
            <Link href="/about" className="btn btn-outline-light mt-8 inline-flex">
              Read Our Story
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* 10 — Emotional Statement */}
      <section className="relative h-[80vh] min-h-[480px] w-full overflow-hidden">
        <PlaceholderImage
          label="Emotional statement — a genuine reaction to receiving a gift"
          aspect="aspect-auto"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-soot/45" />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <RevealOnScroll className="wrap">
            <p className="display-1 text-ivory">It's Not About the Box.</p>
            <p className="display-1 text-champagne mt-1">It's About the Reaction.</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* 11 — Testimonials */}
      <section className="wrap py-28 md:py-40">
        <SectionHeading eyebrow="Testimonials" title="Words From Those Who Gift With Us" />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {testimonials.map((t, i) => (
            <Testimonial key={t.name + i} testimonial={t} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* 12 — Journal */}
      <section className="bg-cream py-28 md:py-40">
        <div className="wrap">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHeading eyebrow="Reading" title="The Gifting Journal" />
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

      {/* 13 — Instagram */}
      <section className="wrap py-28 md:py-40">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <SectionHeading eyebrow="@zioracadeau" title="From the World of Zioracadeau" />
          <RevealOnScroll delay={0.1}>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost text-espresso">
              Follow Along
            </a>
          </RevealOnScroll>
        </div>
        <InstagramGrid />
      </section>

      {/* 14 — Final CTA */}
      <CTASection
        title={"Some Moments Deserve More\nThan “Happy Birthday.”"}
        body="Let's create something they'll remember."
        primaryLabel="Start Your Gift"
        primaryHref="/custom-gift"
        secondaryLabel="Shop Gifts"
        secondaryHref="/shop"
        image="Final CTA — dramatic full-screen gifting moment"
      />
    </>
  );
}
