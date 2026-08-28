"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryNav, instagramUrl } from "@/lib/data/nav";
import CartButton from "./CartButton";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur border-b border-espresso/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="wrap flex items-center justify-between h-20 md:h-24">
        <Link
          href="/"
          className={`font-display text-lg md:text-xl tracking-[0.18em] uppercase transition-colors ${
            scrolled ? "text-espresso" : "text-ivory"
          }`}
        >
          Zioracadeau
        </Link>

        <nav
          className={`hidden md:flex items-center gap-9 text-[0.7rem] tracking-[0.18em] uppercase font-medium transition-colors ${
            scrolled ? "text-espresso" : "text-ivory"
          }`}
        >
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:opacity-60 transition-opacity">
              {item.label}
            </Link>
          ))}
        </nav>

        <div
          className={`hidden md:flex items-center gap-7 transition-colors ${
            scrolled ? "text-espresso" : "text-ivory"
          }`}
        >
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.68rem] tracking-[0.22em] uppercase font-medium hover:opacity-60 transition-opacity"
          >
            Instagram
          </a>
          <CartButton light={!scrolled} />
          <Link href="/custom-gift" className={scrolled ? "btn btn-primary" : "btn btn-outline-light"}>
            Create a Gift
          </Link>
        </div>

        <div className="flex items-center gap-5 md:hidden">
          <CartButton light={!scrolled} />
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className={`text-[0.68rem] tracking-[0.22em] uppercase font-medium ${
              scrolled ? "text-espresso" : "text-ivory"
            }`}
          >
            Menu
          </button>
        </div>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
