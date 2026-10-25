import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { MediaFrame } from "@/components/media-frame";
import { PageHero } from "@/components/seo/page-hero";
import { Button } from "@/components/ui/button";
import { breads } from "@/data/breads";
import { contact } from "@/data/contact";
import { seo } from "@/data/seo";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: seo.breads.title },
  description: seo.breads.description,
  alternates: { canonical: seo.breads.path },
  openGraph: {
    title: seo.breads.title,
    description: seo.breads.description,
    url: seo.breads.path,
  },
};

export default function BreadsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "ראשי", path: "/" },
          { name: "הלחמים", path: "/breads" },
        ]}
      />
      <PageHero
        eyebrow={site.breads.eyebrow}
        title={site.breads.title}
        description={site.breads.body}
      />

      <section className="container-page py-14 md:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {breads.map((bread) => (
            <article key={bread.id} className="flex h-full flex-col">
              <MediaFrame
                src={bread.image}
                alt={bread.name}
                ratio="portrait"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                quality={80}
              />
              <div className="mt-4 flex flex-1 flex-col">
                <h2 className="font-display text-2xl">{bread.name}</h2>
                <p className="mt-2 text-sm leading-7 text-ink-soft">{bread.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <Button href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer">
            הזמנה בוואטסאפ
          </Button>
          <Button href="/products" variant="ghost">
            לפטיסרי ולמאפים
          </Button>
        </div>
      </section>
    </>
  );
}
