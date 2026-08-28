import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import PlaceholderImage from "@/components/PlaceholderImage";
import CorporateForm from "@/components/CorporateForm";

export const metadata: Metadata = {
  title: "Corporate Gifting",
  description:
    "Gifting experiences for corporate teams, clients, employees, executives and events — designed to represent your brand.",
};

export default function CorporatePage() {
  return (
    <div className="pt-32 md:pt-40">
      <section className="relative h-[64vh] min-h-[420px] w-full overflow-hidden">
        <PlaceholderImage
          label="Corporate Gifting — branded gift table at an executive event"
          aspect="aspect-auto"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-soot/50" />
        <div className="relative z-10 h-full flex items-end">
          <div className="wrap pb-16">
            <RevealOnScroll>
              <p className="eyebrow text-champagne mb-5">Corporate Gifting</p>
              <h1 className="display-1 text-ivory max-w-3xl">
                Gifts That Represent Your Brand.
              </h1>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="wrap py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll>
            <p className="text-bark leading-relaxed max-w-md">
              From client gifts to end-of-year appreciation, executive
              welcomes to conference favours — Zioracadeau designs gifting
              experiences for corporate teams, clients, employees, executives,
              weddings, conferences, events and brand activations.
            </p>
            <p className="text-bark leading-relaxed max-w-md mt-5">
              Every corporate gift is composed with the same intention as our
              personal gifting — because how a business gives says as much
              about it as anything else.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-cream py-28 md:py-40">
        <div className="wrap max-w-3xl">
          <SectionHeading eyebrow="Enquire" title="Start a Corporate Gifting Conversation" />
          <div className="mt-14">
            <CorporateForm />
          </div>
        </div>
      </section>
    </div>
  );
}
