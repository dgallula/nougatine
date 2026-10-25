import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { MediaFrame } from "@/components/media-frame";
import { PageHero } from "@/components/seo/page-hero";
import { Button } from "@/components/ui/button";
import { categories, signatureProducts } from "@/data/products";
import { seo } from "@/data/seo";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: { absolute: seo.products.title },
  description: seo.products.description,
  alternates: { canonical: seo.products.path },
  openGraph: {
    title: seo.products.title,
    description: seo.products.description,
    url: seo.products.path,
  },
};

export default function ProductsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "ראשי", path: "/" },
          { name: "המאפים שלנו", path: "/products" },
        ]}
      />
      <PageHero
        eyebrow="המאפים שלנו"
        title="פטיסרי, חלות וקינוחים מהתנור"
        description="בנוגטין בהר נוף תמצאו ויינאסרי צרפתי, חלות שבת, עוגות, טארטים ובייגלים שנאפים מדי יום. להזמנות בוואטסאפ."
      />

      <section className="container-page py-14 md:py-20">
        <h2 className="section-title text-3xl">קטגוריות</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <li key={category.id} className="border border-line bg-bg-elevated p-6">
              <h3 className="font-display text-xl">{category.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{category.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-bg-soft py-14 md:py-20">
        <div className="container-page">
          <h2 className="section-title text-3xl">נבחרת מהוויטרינה</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {signatureProducts.map((product) => (
              <article key={product.id} className="flex h-full flex-col bg-bg-elevated">
                <MediaFrame
                  src={product.image}
                  alt={product.name}
                  ratio="portrait"
                  fit={product.is3d ? "contain" : "cover"}
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  quality={80}
                />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs tracking-[0.04em] text-gold-deep">{product.category}</p>
                  <h3 className="mt-2 font-display text-2xl">{product.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink-soft">{product.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Button href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer">
              הזמנה בוואטסאפ
            </Button>
            <Link href="/gallery" className="text-sm text-gold-deep underline-offset-4 hover:underline">
              לגלריה
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
