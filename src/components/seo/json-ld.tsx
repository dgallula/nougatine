import { contact } from "@/data/contact";
import { absoluteUrl, siteUrl } from "@/data/seo";
import { site } from "@/data/site";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function bakeryJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "@id": `${siteUrl}/#bakery`,
    name: site.nameHe,
    alternateName: [site.nameEn, site.nameShortHe, "נוגטים", "Nougatine"],
    description: site.brandStory.body,
    url: siteUrl,
    image: [absoluteUrl(site.logo), absoluteUrl("/images/real-vitrine.jpg")],
    telephone: `+${contact.whatsapp.local.replace(/^0/, "972")}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.streetAddress,
      addressLocality: contact.addressLocality,
      addressRegion: "ירושלים",
      addressCountry: contact.addressCountry,
    },
    openingHoursSpecification: contact.hours.openingHoursSpecification.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.dayOfWeek,
      opens: spec.opens,
      closes: spec.closes,
    })),
    hasMap: contact.maps.google,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
