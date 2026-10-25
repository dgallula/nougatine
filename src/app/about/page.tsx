import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { MediaFrame } from "@/components/media-frame";
import { PageHero } from "@/components/seo/page-hero";
import { Button } from "@/components/ui/button";
import { KashrutBadge } from "@/components/kashrut-badge";
import { contact } from "@/data/contact";
import { seo } from "@/data/seo";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: seo.about.title },
  description: seo.about.description,
  alternates: { canonical: seo.about.path },
  openGraph: {
    title: seo.about.title,
    description: seo.about.description,
    url: seo.about.path,
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "ראשי", path: "/" },
          { name: "אודות", path: "/about" },
        ]}
      />
      <PageHero
        eyebrow="אודות"
        title={`${site.nameShortHe} בייקרי בהר נוף`}
        description={site.brandStory.body}
      />

      <section className="container-page grid gap-12 py-16 md:grid-cols-2 md:items-start md:py-24">
        <MediaFrame
          src="/images/logo-storefront.jpg"
          alt="שלט נוגטין קונדיטוריה וקפה על חלון החנות בהר נוף"
          ratio="portrait"
          sizes="(max-width:768px) 100vw, 50vw"
          quality={80}
        />
        <div>
          <h2 className="section-title text-3xl">קונדיטוריה ובייגל בשכונה</h2>
          <p className="mt-5 text-base leading-8 text-ink-soft">
            אנחנו ממוקמים ב{contact.streetAddress}, {contact.neighborhood}. מגיעים אלינו לחלות
            שבת, לפטיסרי צרפתי, לעוגות מעוצבות ולבייגלים טריים, ולרגע של קפה ליד הוויטרינה.
          </p>
          <p className="mt-4 text-base leading-8 text-ink-soft">
            {site.craft.body}
          </p>
          <div className="mt-8">
            <KashrutBadge />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">איך מגיעים</Button>
            <Link href="/products" className="px-5 py-3 text-sm text-gold-deep underline-offset-4 hover:underline">
              לצפייה במאפים
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
