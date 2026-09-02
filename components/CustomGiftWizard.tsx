"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const recipientOptions = ["Partner", "Friend", "Parent", "Child", "Colleague", "Client", "Employee", "Other"];
const occasionOptions = ["Birthday", "Anniversary", "Wedding", "Baby", "Corporate", "Thank You", "Celebration", "Just Because", "Other"];
const interestOptions = ["Beauty", "Food", "Fashion", "Wellness", "Travel", "Home", "Technology", "Books", "Experiences", "Other"];
const budgetOptions = ["Under $75", "$75 – $150", "$150 – $350", "$350+"];

interface FormState {
  recipient: string;
  occasion: string;
  interests: string[];
  budget: string;
  notes: string;
  name: string;
  email: string;
  phone: string;
  deliveryDate: string;
}

const initialState: FormState = {
  recipient: "",
  occasion: "",
  interests: [],
  budget: "",
  notes: "",
  name: "",
  email: "",
  phone: "",
  deliveryDate: "",
};

const totalSteps = 6;

function OptionGrid({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onSelect(opt)}
          aria-pressed={selected === opt}
          className={`px-5 py-4 text-sm border transition-colors text-left ${
            selected === opt
              ? "border-espresso bg-espresso text-ivory"
              : "border-espresso/20 hover:border-espresso/60"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function MultiOptionGrid({
  options,
  selected,
  onToggle,
}: {
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {options.map((opt) => {
        const active = selected.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onToggle(opt)}
            aria-pressed={active}
            className={`px-5 py-4 text-sm border transition-colors text-left ${
              active ? "border-espresso bg-espresso text-ivory" : "border-espresso/20 hover:border-espresso/60"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

export default function CustomGiftWizard() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const next = () => setStep((s) => Math.min(totalSteps, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const canProceed = () => {
    switch (step) {
      case 1:
        return !!form.recipient;
      case 2:
        return !!form.occasion;
      case 3:
        return form.interests.length > 0;
      case 4:
        return !!form.budget;
      case 5:
        return true;
      case 6:
        return !!form.name && !!form.email;
      default:
        return true;
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-20">
        <p className="editorial-num text-6xl text-champagne mb-6">✓</p>
        <h2 className="display-2">Thank You, {form.name.split(" ")[0] || "Friend"}.</h2>
        <p className="text-bark mt-5 max-w-md mx-auto leading-relaxed">
          We've received your gift brief and will be in touch shortly to begin
          curating something meaningful. [INSERT NEXT-STEPS / RESPONSE TIME]
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-12">
        <p className="eyebrow">
          Step {step} of {totalSteps}
        </p>
        <div className="h-px flex-1 mx-6 bg-espresso/10 relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-espresso transition-all duration-700 ease-editorial"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {step === 1 && (
            <div>
              <h2 className="display-3 mb-8">Who Are You Gifting?</h2>
              <OptionGrid
                options={recipientOptions}
                selected={form.recipient}
                onSelect={(v) => setForm({ ...form, recipient: v })}
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="display-3 mb-8">What Is the Occasion?</h2>
              <OptionGrid
                options={occasionOptions}
                selected={form.occasion}
                onSelect={(v) => setForm({ ...form, occasion: v })}
              />
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="display-3 mb-3">What Do They Love?</h2>
              <p className="text-sm text-bark mb-8">Select as many as apply.</p>
              <MultiOptionGrid
                options={interestOptions}
                selected={form.interests}
                onToggle={(v) =>
                  setForm({
                    ...form,
                    interests: form.interests.includes(v)
                      ? form.interests.filter((i) => i !== v)
                      : [...form.interests, v],
                  })
                }
              />
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="display-3 mb-8">What's Your Budget?</h2>
              <OptionGrid
                options={budgetOptions}
                selected={form.budget}
                onSelect={(v) => setForm({ ...form, budget: v })}
              />
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="display-3 mb-8">Tell Us More</h2>
              <label htmlFor="notes" className="sr-only">
                Anything else we should know
              </label>
              <textarea
                id="notes"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                rows={6}
                placeholder="Anything else that would help us understand this person, or the moment you're celebrating…"
                className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso"
              />
            </div>
          )}

          {step === 6 && (
            <div>
              <h2 className="display-3 mb-8">Your Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-xs uppercase tracking-wide text-bark mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wide text-bark mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-wide text-bark mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="deliveryDate" className="block text-xs uppercase tracking-wide text-bark mb-2">
                    Preferred Delivery Date
                  </label>
                  <input
                    id="deliveryDate"
                    type="date"
                    value={form.deliveryDate}
                    onChange={(e) => setForm({ ...form, deliveryDate: e.target.value })}
                    className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso"
                  />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between mt-14">
        <button
          type="button"
          onClick={back}
          disabled={step === 1}
          className="text-[0.7rem] tracking-[0.2em] uppercase text-bark disabled:opacity-0"
        >
          ← Back
        </button>
        {step < totalSteps ? (
          <button type="button" onClick={next} disabled={!canProceed()} className="btn btn-primary disabled:opacity-40">
            Continue
          </button>
        ) : (
          <button
            type="button"
            onClick={() => canProceed() && setSubmitted(true)}
            disabled={!canProceed()}
            className="btn btn-primary disabled:opacity-40"
          >
            Create My Gift
          </button>
        )}
      </div>
    </div>
  );
}
