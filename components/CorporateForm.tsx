"use client";

import { useState } from "react";

const occasions = ["Client Gifting", "Employee Appreciation", "Executive Gifting", "Conference / Event", "End-of-Year", "Other"];
const budgets = ["Under $2,500", "$2,500 – $10,000", "$10,000 – $25,000", "$25,000+"];

export default function CorporateForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <p className="editorial-num text-6xl text-champagne mb-6">✓</p>
        <h2 className="display-3">Thank You.</h2>
        <p className="text-bark mt-5 max-w-md mx-auto leading-relaxed">
          Your enquiry has been received. A member of our team will reach out
          to begin the conversation. [INSERT RESPONSE TIME COMMITMENT]
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
      <div>
        <label htmlFor="c-name" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Name
        </label>
        <input id="c-name" required className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso" />
      </div>
      <div>
        <label htmlFor="c-company" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Company
        </label>
        <input id="c-company" required className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso" />
      </div>
      <div>
        <label htmlFor="c-email" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Email
        </label>
        <input id="c-email" type="email" required className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso" />
      </div>
      <div>
        <label htmlFor="c-phone" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Phone
        </label>
        <input id="c-phone" type="tel" className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso" />
      </div>
      <div>
        <label htmlFor="c-quantity" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Number of Gifts
        </label>
        <input id="c-quantity" type="number" min={1} className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso" />
      </div>
      <div>
        <label htmlFor="c-occasion" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Occasion
        </label>
        <select id="c-occasion" className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso">
          {occasions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="c-budget" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Budget
        </label>
        <select id="c-budget" className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso">
          {budgets.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="c-location" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Delivery Location
        </label>
        <input id="c-location" className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="c-date" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Preferred Delivery Date
        </label>
        <input id="c-date" type="date" className="w-full sm:w-1/2 border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="c-notes" className="block text-xs uppercase tracking-wide text-bark mb-2">
          Additional Requirements
        </label>
        <textarea id="c-notes" rows={5} className="w-full border border-espresso/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-espresso" />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-primary w-full sm:w-auto">
          Start a Corporate Gifting Conversation
        </button>
      </div>
    </form>
  );
}
