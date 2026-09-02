import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import EditorialSection from "@/components/EditorialSection";
import RevealOnScroll from "@/components/RevealOnScroll";
import PlaceholderImage from "@/components/PlaceholderImage";
import BackgroundVideo from "@/components/BackgroundVideo";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story behind Zioracadeau — an events and gifting house built on the belief that celebrations should be designed, and the gifts that go with them should be just as considered.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 md:pt-40">
      <section className="wrap pb-24 md:pb-32">
        <SectionHeading eyebrow="Our Story" title="The Story of Zioracadeau" size="display-1" />
        <RevealOnScroll delay={0.1} className="mt-8 max-w-xl">
          <p className="text-bark text-lg leading-relaxed">
            Zioracadeau is an events and gifting house for people who take
            celebrating seriously — built on the belief that a beautifully
            designed event and a thoughtfully chosen gift come from the same
            instinct, and belong together. We design the wedding, the
            milestone birthday, the corporate gala — and pair each one with
            gifting that carries the same care.
          </p>
        </RevealOnScroll>
      </section>

      <section className="bg-espresso text-ivory py-28 md:py-40">
        <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <RevealOnScroll>
            <PlaceholderImage label="Founder portrait — [INSERT FOUNDER PHOTOGRAPH]" aspect="aspect-[4/5]" useStock={false} />
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="eyebrow text-champagne mb-5">In Her Own Words</p>
            <h2 className="display-2 text-ivory mb-6">Why Zioracadeau Exists</h2>
            <div className="text-ivory/75 leading-relaxed max-w-md space-y-4">
              <p>[FOUNDER STORY GOES HERE — the personal moment or realisation that led to starting Zioracadeau, and to pairing events with gifting]</p>
              <p>[INSERT FOUNDER'S PHILOSOPHY OF EVENTS AND GIFTING]</p>
              <p>[INSERT WHAT THE FOUNDER WANTS EVERY CLIENT TO FEEL]</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="wrap py-28 md:py-40">
        <EditorialSection
          eyebrow="What Makes Us Different"
          title={"Considered,\nNot Generic."}
          image="Our approach — an event being styled and a gift being composed, side by side"
          cta="Plan an Event"
          ctaHref="/events"
          ctaSecondary="Create a Gift"
          ctaSecondaryHref="/custom-gift"
        >
          <p>
            We don't work from a fixed catalogue of "packages" or "gift
            sets." Every event and every gift is composed for a specific
            person, occasion and feeling — whether that's a full wedding
            brief or a single curated box.
          </p>
          <p>
            Presentation is never an afterthought — on either side of the
            house. Tablescape or ribbon, seating plan or note, timing
            always matters as much as what's inside.
          </p>
        </EditorialSection>
      </section>

      <section className="bg-cream py-28 md:py-40">
        <div className="wrap">
          <SectionHeading eyebrow="How It Works" title="From Brief to Celebration" />
          <div className="mt-16">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="relative h-[64vh] min-h-[420px] w-full overflow-hidden">
        <BackgroundVideo
          src="/video/about-lanterns.mp4"
          label="Our mission — a genuine moment of connection, mid-celebration"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-soot/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <RevealOnScroll className="wrap max-w-2xl mx-auto">
            <p className="display-2 text-ivory">
              Every event we design, and every gift we send, is a small bet
              on the strength of a relationship.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link href="/events" className="btn btn-outline-light">
                Plan an Event
              </Link>
              <Link href="/custom-gift" className="btn-ghost text-ivory border-ivory/60 hover:text-champagne hover:border-champagne">
                Create a Gift
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
