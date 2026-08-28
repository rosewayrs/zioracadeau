import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import EditorialSection from "@/components/EditorialSection";
import RevealOnScroll from "@/components/RevealOnScroll";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story behind Zioracadeau — a gifting house built on the belief that the best gifts are expressions, not objects.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 md:pt-40">
      <section className="wrap pb-24 md:pb-32">
        <SectionHeading eyebrow="Our Story" title="The Story of Zioracadeau" size="display-1" />
        <RevealOnScroll delay={0.1} className="mt-8 max-w-xl">
          <p className="text-bark text-lg leading-relaxed">
            Zioracadeau is a gifting house for people who take giving
            seriously — built on the belief that the best gifts aren't
            simply beautiful objects, but expressions of love, appreciation,
            celebration, thought and connection.
          </p>
        </RevealOnScroll>
      </section>

      <section className="bg-espresso text-ivory py-28 md:py-40">
        <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <RevealOnScroll>
            <PlaceholderImage label="Founder portrait — [INSERT FOUNDER PHOTOGRAPH]" aspect="aspect-[4/5]" />
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="eyebrow text-champagne mb-5">In Her Own Words</p>
            <h2 className="display-2 text-ivory mb-6">Why Zioracadeau Exists</h2>
            <div className="text-ivory/75 leading-relaxed max-w-md space-y-4">
              <p>[FOUNDER STORY GOES HERE — the personal moment or realisation that led to starting Zioracadeau]</p>
              <p>[INSERT FOUNDER'S PHILOSOPHY OF GIFTING]</p>
              <p>[INSERT WHAT THE FOUNDER WANTS EVERY CLIENT TO FEEL]</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="wrap py-28 md:py-40">
        <EditorialSection
          eyebrow="What Makes Us Different"
          title={"Considered,\nNot Generic."}
          image="Our approach — a gift box being composed by hand"
        >
          <p>
            We don't work from a fixed catalogue of "gift sets." Every piece
            is chosen with a specific person, occasion and feeling in mind —
            whether that's a single curated box or a fully custom brief.
          </p>
          <p>
            Presentation is never an afterthought. Ribbon, box, note and
            timing are all part of the gift — because the moment of opening
            matters as much as what's inside.
          </p>
        </EditorialSection>
      </section>

      <section className="bg-cream py-28 md:py-40">
        <div className="wrap">
          <SectionHeading eyebrow="How It Works" title="The Gifting Process" />
          <div className="mt-16">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="relative h-[64vh] min-h-[420px] w-full overflow-hidden">
        <PlaceholderImage
          label="Our mission — a genuine moment of connection through gifting"
          aspect="aspect-auto"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-soot/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <RevealOnScroll className="wrap max-w-2xl mx-auto">
            <p className="display-2 text-ivory">
              Every gift we send is a small bet on the strength of a relationship.
            </p>
            <Link href="/custom-gift" className="btn btn-outline-light mt-10 inline-flex">
              Create a Gift
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
