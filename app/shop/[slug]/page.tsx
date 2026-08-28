import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, getRelatedProducts, formatPrice, products } from "@/lib/data/products";
import ProductGallery from "@/components/ProductGallery";
import AddToCartButton from "@/components/AddToCartButton";
import ProductGrid from "@/components/ProductGrid";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeading from "@/components/SectionHeading";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescriptor,
    openGraph: { title: product.name, description: product.shortDescriptor },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <div className="pt-32 md:pt-40 pb-28 md:pb-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            offers: {
              "@type": "Offer",
              priceCurrency: product.currency,
              price: product.price,
              availability:
                product.availability === "in-stock"
                  ? "https://schema.org/InStock"
                  : "https://schema.org/PreOrder",
            },
          }),
        }}
      />

      <div className="wrap">
        <nav aria-label="Breadcrumb" className="text-xs text-bark mb-10">
          <Link href="/shop" className="hover:text-espresso">
            Shop
          </Link>{" "}
          / <span className="text-espresso">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <RevealOnScroll>
            <ProductGallery images={product.images} />
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="eyebrow mb-4">{product.category.replace("-", " ")}</p>
            <h1 className="display-2">{product.name}</h1>
            <p className="text-bark mt-4 leading-relaxed max-w-md">{product.description}</p>
            <p className="font-display text-2xl mt-6">{formatPrice(product.price)}</p>
            <p className="text-xs uppercase tracking-wide text-clay mt-2">
              {product.availability === "in-stock"
                ? "In Stock"
                : product.availability === "made-to-order"
                ? "Made to Order"
                : "Limited Availability"}
            </p>

            <div className="mt-8">
              <AddToCartButton product={product} />
            </div>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-24 md:mt-32">
          <RevealOnScroll>
            <p className="eyebrow mb-4">The Story</p>
            <p className="text-bark leading-relaxed">{product.story}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="eyebrow mb-4">Perfect For</p>
            <ul className="flex flex-wrap gap-3">
              {product.perfectFor.map((p) => (
                <li
                  key={p}
                  className="text-xs uppercase tracking-wide border border-espresso/20 px-3 py-2"
                >
                  {p}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>

        {related.length > 0 && (
          <div className="mt-28 md:mt-40">
            <SectionHeading eyebrow="Keep Exploring" title="You May Also Love" />
            <div className="mt-14">
              <ProductGrid products={related} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
