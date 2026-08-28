import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import PlaceholderImage from "@/components/PlaceholderImage";
import CustomGiftWizard from "@/components/CustomGiftWizard";

export const metadata: Metadata = {
  title: "Create a Custom Gift",
  description:
    "Tell us who you're gifting, what you're celebrating, what they love and your budget — we'll help create something meaningful.",
};

export default function CustomGiftPage() {
  return (
    <div className="pt-32 md:pt-40">
      <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-28 md:pb-40">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="Custom Gifting" title={"Make It\nPersonal."} size="display-1" />
          <RevealOnScroll delay={0.1} className="mt-6 max-w-sm">
            <p className="text-bark leading-relaxed">
              A few questions is all it takes. Tell us who you're gifting,
              what you're celebrating, what they love and your budget — we'll
              take it from there.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2} className="mt-10 hidden lg:block">
            <PlaceholderImage label="Custom Gift — pieces being selected and wrapped" aspect="aspect-[3/4]" />
          </RevealOnScroll>
        </div>

        <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-espresso/10">
          <CustomGiftWizard />
        </div>
      </div>
    </div>
  );
}
