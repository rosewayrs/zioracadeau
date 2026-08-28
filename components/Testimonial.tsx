import RevealOnScroll from "./RevealOnScroll";
import { Testimonial as TestimonialType } from "@/lib/types";

export default function Testimonial({ testimonial, delay = 0 }: { testimonial: TestimonialType; delay?: number }) {
  return (
    <RevealOnScroll delay={delay}>
      <blockquote className="max-w-2xl">
        <p className="display-3 leading-snug text-espresso">“{testimonial.quote}”</p>
        <footer className="mt-6 eyebrow text-bark">
          {testimonial.name} <span className="text-clay">— {testimonial.context}</span>
        </footer>
      </blockquote>
    </RevealOnScroll>
  );
}
