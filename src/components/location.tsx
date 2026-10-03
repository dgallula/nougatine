import { contact } from "@/data/contact";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/reveal";

function Field({
  label,
  value,
  verified,
  href,
}: {
  label: string;
  value: string;
  verified: boolean;
  href?: string;
}) {
  const content = href ? (
    <a href={href} className="underline-offset-4 hover:underline">
      {value}
    </a>
  ) : (
    value
  );

  return (
    <div className="border-t border-line py-5">
      <dt className="text-xs tracking-[0.18em] text-ink-faint">{label}</dt>
      <dd className="mt-2 text-base md:text-lg">
        {content}
        {!verified && (
          <span className="mr-2 text-xs text-accent"> · לאימות</span>
        )}
      </dd>
    </div>
  );
}

export function Location() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(contact.mapQuery.value)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="bg-bg py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-tight">
              {site.location.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-ink-soft">
              {site.location.body}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-10">
              <Field
                label="שכונה"
                value={contact.neighborhood.value}
                verified={contact.neighborhood.verified}
              />
              <Field
                label="כתובת"
                value={contact.address.value}
                verified={contact.address.verified}
              />
              <Field
                label="טלפון"
                value={contact.phone.value}
                verified={contact.phone.verified}
                href={contact.phone.href}
              />
              <Field
                label="וואטסאפ"
                value={contact.whatsapp.value}
                verified={contact.whatsapp.verified}
                href={contact.whatsapp.href}
              />
              <Field
                label="שעות פתיחה"
                value={contact.hours.value}
                verified={contact.hours.verified}
              />
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-line bg-bg-elevated">
            <iframe
              title="מפת נוגטים בהר נוף"
              src={mapSrc}
              className="aspect-[4/3] w-full grayscale-[20%] contrast-[0.95] md:aspect-square"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className="px-5 py-4 text-xs leading-6 text-ink-faint">
              מיקום משוער לפי הר נוף · יש לעדכן כתובת מדויקת ב־
              <code className="mx-1">src/data/contact.ts</code>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
