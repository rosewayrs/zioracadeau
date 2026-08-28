import RevealOnScroll from "./RevealOnScroll";

const steps = [
  { num: "01", title: "Discover", body: "Tell us who you're gifting." },
  { num: "02", title: "Curate", body: "We select pieces that fit the person and occasion." },
  { num: "03", title: "Personalise", body: "Add messages and finishing touches." },
  { num: "04", title: "Deliver", body: "Your gift arrives beautifully presented." },
];

export default function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
      {steps.map((s, i) => (
        <RevealOnScroll key={s.num} delay={i * 0.12}>
          <p className="editorial-num text-5xl md:text-6xl text-champagne mb-6">{s.num}</p>
          <h3 className="font-display text-2xl mb-3">{s.title}</h3>
          <p className="text-bark text-sm leading-relaxed max-w-[16rem]">{s.body}</p>
        </RevealOnScroll>
      ))}
    </div>
  );
}
