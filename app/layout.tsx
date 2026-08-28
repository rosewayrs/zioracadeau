import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import QuickViewModal from "@/components/QuickViewModal";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zioracadeau.vercel.app"),
  title: {
    default: "Zioracadeau | The Art of Thoughtful Gifting",
    template: "%s | Zioracadeau",
  },
  description:
    "Thoughtfully curated gifts and personalised gifting experiences designed to make every celebration memorable.",
  openGraph: {
    title: "Zioracadeau | The Art of Thoughtful Gifting",
    description:
      "Thoughtfully curated gifts and personalised gifting experiences designed to make every celebration memorable.",
    siteName: "Zioracadeau",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zioracadeau | The Art of Thoughtful Gifting",
    description:
      "Thoughtfully curated gifts and personalised gifting experiences designed to make every celebration memorable.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ivory focus:text-espresso focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <CartDrawer />
        <QuickViewModal />
      </body>
    </html>
  );
}
