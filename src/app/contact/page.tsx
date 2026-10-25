import type { Metadata } from "next";
import { Location } from "@/components/location";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { PageHero } from "@/components/seo/page-hero";
import { JsonLd, bakeryJsonLd } from "@/components/seo/json-ld";
import { contact } from "@/data/contact";
import { seo } from "@/data/seo";

export const metadata: Metadata = {
  title: { absolute: seo.contact.title },
  description: seo.contact.description,
  alternates: { canonical: seo.contact.path },
  openGraph: {
    title: seo.contact.title,
    description: seo.contact.description,
    url: seo.contact.path,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={bakeryJsonLd()} />
      <Breadcrumbs
        items={[
          { name: "ראשי", path: "/" },
          { name: "צור קשר", path: "/contact" },
        ]}
      />
      <PageHero
        eyebrow="צור קשר"
        title="הגעה, שעות ווואטסאפ"
        description={`${contact.postalAddressDisplay}. ${contact.hours.detail}. ליצירת קשר מהירה: וואטסאפ ${contact.whatsapp.display}.`}
      />
      <Location />
    </>
  );
}
