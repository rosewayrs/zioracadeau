"use client";

import { useState } from "react";
import { eventCategories } from "@/lib/data/events";

const budgets = ["Under $5,000", "$5,000 – $15,000", "$15,000 – $40,000", "$40,000+"];

export default function EventEnquiryForm({ defaultEventType }: { defaultEventType?: string }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <p className="editorial-num text-6xl text-champagne mb-6">✓</p>
        <h2 className="display-3">Thank You.</h2>
        <p className="text-bark mt-5 max-w-md mx-auto leading-relaxed">
          Your event brief has been received. A member of our team will
          reach out to begin planning — and to talk through gifting for the
          day. [INSERT RESPONSE TIME COMMITMENT]
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      <div className="sm:col-span-2">
        <label htmlFor="e-name" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Name
        </label>
        <input id="e-name" required className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso" />
      </div>
      <div>
        <label htmlFor="e-email" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Email
        </label>
        <input id="e-email" type="email" required className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso" />
      </div>
      <div>
        <label htmlFor="e-phone" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Phone
        </label>
        <input id="e-phone" type="tel" className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso" />
      </div>
      <div>
        <label htmlFor="e-type" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Event Type
        </label>
        <select
          id="e-type"
          defaultValue={defaultEventType}
          className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso"
        >
          {eventCategories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.title}
            </option>
          ))}
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="e-guests" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Guest Count
        </label>
        <input id="e-guests" type="number" min={1} className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso" />
      </div>
      <div>
        <label htmlFor="e-date" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Event Date
        </label>
        <input id="e-date" type="date" className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso" />
      </div>
      <div>
        <label htmlFor="e-location" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Location
        </label>
        <input id="e-location" className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="e-budget" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Budget
        </label>
        <select id="e-budget" className="w-full sm:w-1/2 border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso">
          {budgets.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="e-gifting" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Interested in Paired Gifting?
        </label>
        <select id="e-gifting" className="w-full sm:w-1/2 border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso">
          <option>Yes, pair this event with gifting</option>
          <option>Not yet, events only</option>
          <option>Not sure — let's discuss</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="e-notes" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Tell Us About the Event
        </label>
        <textarea
          id="e-notes"
          rows={5}
          placeholder="Vision, must-haves, anything we should know…"
          className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso"
        />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-primary w-full sm:w-auto">
          Start Planning
        </button>
      </div>
    </form>
  );
}
