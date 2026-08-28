"use client";

import { useState } from "react";

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("done");
      }}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      {status === "done" ? (
        <p className="text-sm text-ivory/80">Thank you — you're on the list.</p>
      ) : (
        <>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Your email address"
            className="flex-1 bg-transparent border-b border-ivory/30 py-2 text-sm text-ivory placeholder:text-ivory/50 focus:border-ivory outline-none"
          />
          <button type="submit" className="btn-ghost text-ivory border-ivory/60 hover:text-champagne hover:border-champagne text-[0.68rem] tracking-[0.22em] uppercase">
            Subscribe
          </button>
        </>
      )}
    </form>
  );
}
