import Image from "next/image";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function Events() {
  return (
    <section id="events" className="bg-bg py-24 md:py-32">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] md:aspect-[5/6]">
            <Image
              src="/images/product-cake.jpg"
              alt="עוגה לאירוע"
              fill
              sizes="(max-width:1024px) 100vw, 48vw"
              className="object-cover"
              quality={80}
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs tracking-[0.24em] text-accent">{site.events.eyebrow}</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-tight text-balance">
              {site.events.title}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-ink-soft md:text-lg">
              {site.events.body}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-3">
              {site.events.services.map((service) => (
                <li
                  key={service}
                  className="border-b border-line-strong pb-1 text-sm text-ink md:text-base"
                >
                  {service}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10">
              <Button href={site.events.ctaHref}>{site.events.cta}</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
