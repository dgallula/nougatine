import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { MediaFrame } from "@/components/media-frame";
import { PageHero } from "@/components/seo/page-hero";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";
import { seo } from "@/data/seo";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: seo.events.title },
  description: seo.events.description,
  alternates: { canonical: seo.events.path },
  openGraph: {
    title: seo.events.title,
    description: seo.events.description,
    url: seo.events.path,
  },
};

export default function EventsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "ראשי", path: "/" },
          { name: "אירוח ואירועים", path: "/events" },
        ]}
      />
      <PageHero
        eyebrow={site.events.eyebrow}
        title={site.events.title}
        description={site.events.body}
      />

      <section className="container-page grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <MediaFrame
          src="/images/real-croquembouche.jpg"
          alt="קרוקמבוש מפואר לאירוע בנוגטין הר נוף"
          ratio="portrait"
          sizes="(max-width:768px) 100vw, 50vw"
          quality={80}
          priority
        />
        <div>
          <h2 className="section-title text-3xl">לאילו אירועים אנחנו מתאימים</h2>
          <ul className="mt-8 space-y-3">
            {site.events.services.map((service) => (
              <li key={service} className="border-b border-line pb-3 text-base">
                {service}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-8 text-ink-soft">
            לתיאום מגש, עוגה או קרוקמבוש כתבו לנו בוואטסאפ ונחזור אליכם עם הפרטים.
          </p>
          <div className="mt-8">
            <Button href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer">
              {site.events.cta}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
