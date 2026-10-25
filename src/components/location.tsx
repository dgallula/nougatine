import type { ReactNode } from "react";
import { contact } from "@/data/contact";
import { site } from "@/data/site";
import { KashrutBadge } from "@/components/kashrut-badge";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-t border-line py-5">
      <dt className="text-xs tracking-[0.04em] text-ink-faint">{label}</dt>
      <dd className="mt-2 text-base md:text-lg">{children}</dd>
    </div>
  );
}

export function Location() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="bg-bg py-24 md:py-32" aria-labelledby="contact-heading">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <h2 id="contact-heading" className="section-title text-[clamp(2rem,4vw,3.5rem)] leading-tight">
              {site.location.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-ink-soft">{site.location.body}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-10">
              <Field label="שכונה">{contact.neighborhood}</Field>
              <Field label="כתובת">{contact.postalAddressDisplay}</Field>
              <div className="border-t border-line py-5">
                <dt className="text-xs tracking-[0.04em] text-ink-faint">וואטסאפ</dt>
                <dd className="mt-3 flex flex-wrap items-center gap-4">
                  <a
                    href={contact.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                    aria-label="פתיחת שיחת וואטסאפ"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                  <div>
                    <a
                      href={contact.whatsapp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base underline-offset-4 hover:underline md:text-lg"
                    >
                      {contact.whatsapp.display}
                    </a>
                    <p className="mt-1 text-sm text-ink-soft">לחצו לפתיחת שיחה בוואטסאפ</p>
                  </div>
                </dd>
              </div>
              <Field label="שעות פתיחה">
                <span>{contact.hours.display}</span>
                <p className="mt-1 text-sm text-ink-soft">{contact.hours.detail}</p>
              </Field>
              <div className="border-t border-line py-5">
                <dt className="mb-3 text-xs tracking-[0.04em] text-ink-faint">כשרות</dt>
                <dd>
                  <KashrutBadge />
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={contact.maps.google} target="_blank" rel="noopener noreferrer">
                ניווט בגוגל מפות
              </Button>
              <Button
                href={contact.maps.waze}
                variant="ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                ניווט בווייז
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="overflow-hidden border border-line bg-bg-elevated">
            <iframe
              title="מפת נוגטין ברחוב שאולזון 51, הר נוף"
              src={mapSrc}
              className="aspect-[4/3] w-full grayscale-[15%] contrast-[0.95] md:aspect-square"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className="px-5 py-4 text-xs leading-6 text-ink-faint">
              {contact.postalAddressDisplay}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
