import Link from "next/link";
import { contact } from "@/data/contact";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/reveal";

export function BrandStory() {
  return (
    <section id="about" className="bg-bg py-20 md:py-28">
      <div className="container-narrow text-center">
        <Reveal>
          <p className="eyebrow">{site.brandStory.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="section-title mt-5 text-[clamp(2rem,4.5vw,3.5rem)]">
            {site.brandStory.title}
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-ink-soft md:text-lg md:leading-9">
            {site.brandStory.body}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-ink-faint">
            {site.nameHe}, {contact.postalAddressDisplay}
            <br />
            <a
              href={contact.whatsapp.href}
              className="text-gold-deep underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              וואטסאפ {contact.whatsapp.display}
            </a>
          </p>
          <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-ink-soft">
            <Link href="/products" className="underline-offset-4 hover:underline">
              הפטיסרי
            </Link>
            <Link href="/events" className="underline-offset-4 hover:underline">
              מגשי אירוח
            </Link>
            <Link href="/contact" className="underline-offset-4 hover:underline">
              החנות שלנו
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
