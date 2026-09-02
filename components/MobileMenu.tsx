"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav, instagramUrl } from "@/lib/data/nav";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] bg-espresso text-ivory md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="wrap flex items-center justify-between py-6">
            <span className="eyebrow text-champagne">Menu</span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="text-[0.68rem] tracking-[0.22em] uppercase"
            >
              Close
            </button>
          </div>
          <motion.nav
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
            }}
            className="wrap flex flex-col gap-1 mt-8"
          >
            {primaryNav.map((item, i) => (
              <motion.div
                key={item.href}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 display-3 border-b border-ivory/10"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
          <div className="wrap mt-10 flex flex-col gap-4">
            <Link
              href="/events"
              onClick={onClose}
              className="btn btn-outline-light w-full"
            >
              Start Planning
            </Link>
            <Link href="/custom-gift" onClick={onClose} className="eyebrow text-ivory/70">
              Or Create a Gift →
            </Link>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow text-ivory/70"
            >
              Instagram
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
