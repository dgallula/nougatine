import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { MediaFrame } from "@/components/media-frame";
import { PageHero } from "@/components/seo/page-hero";
import { galleryItems } from "@/data/gallery";
import { seo } from "@/data/seo";

export const metadata: Metadata = {
  title: { absolute: seo.gallery.title },
  description: seo.gallery.description,
  alternates: { canonical: seo.gallery.path },
  openGraph: {
    title: seo.gallery.title,
    description: seo.gallery.description,
    url: seo.gallery.path,
  },
};

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "ראשי", path: "/" },
          { name: "גלריה", path: "/gallery" },
        ]}
      />
      <PageHero
        eyebrow="גלריה"
        title="מהמאפייה ומהוויטרינה"
        description="תמונות אמיתיות מנוגטין בהר נוף: חלות, עוגות, פטיסרי ומאפים טריים."
      />

      <section className="container-page py-14 md:py-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {galleryItems.map((item) => (
            <figure key={item.id} className="m-0">
              <MediaFrame
                src={item.src}
                alt={item.alt}
                ratio="portrait"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                quality={80}
              />
            </figure>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ink-soft">
          רוצים להזמין משהו שראיתם?{" "}
          <Link href="/contact" className="text-gold-deep underline-offset-4 hover:underline">
            צרו קשר
          </Link>
        </p>
      </section>
    </>
  );
}
