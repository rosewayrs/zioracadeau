import Link from "next/link";
import { footerEventLinks, footerShopLinks, footerCompanyLinks, instagramUrl } from "@/lib/data/nav";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="wrap pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-ivory/15">
          <div className="md:col-span-4">
            <p className="font-display text-2xl tracking-[0.16em] uppercase mb-5">Zioracadeau</p>
            <p className="text-ivory/70 text-sm leading-relaxed max-w-sm mb-8">
              An events and gifting house. We design the celebration, then
              pair it with a gift worth giving — composed for the moments
              worth remembering.
            </p>
            <p className="eyebrow text-champagne mb-3">Join the list</p>
            <Newsletter />
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <p className="eyebrow text-champagne mb-5">Events</p>
            <ul className="space-y-3 text-sm text-ivory/75">
              {footerEventLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-ivory transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 md:col-start-8">
            <p className="eyebrow text-champagne mb-5">Gifting</p>
            <ul className="space-y-3 text-sm text-ivory/75">
              {footerShopLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-ivory transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 md:col-start-10">
            <p className="eyebrow text-champagne mb-5">Zioracadeau</p>
            <ul className="space-y-3 text-sm text-ivory/75">
              {footerCompanyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-ivory transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ivory transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[0.68rem] tracking-[0.1em] uppercase text-ivory/50">
          <p>&copy; {new Date().getFullYear()} Zioracadeau. All rights reserved.</p>
          <div className="flex gap-6">
            <span>[Delivery Information]</span>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
