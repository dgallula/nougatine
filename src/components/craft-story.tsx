import { site } from "@/data/site";
import { Reveal } from "@/components/motion/reveal";

export function CraftStory() {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="container-page grid gap-12 md:grid-cols-[1.05fr_1fr] md:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">המלאכה</p>
            <h2 className="section-title mt-4 text-[clamp(2rem,4.5vw,3.4rem)] text-balance">
              {site.craft.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-base leading-8 text-ink-soft md:text-lg">
              {site.craft.body}
            </p>
          </Reveal>
        </div>

        <ul className="space-y-0 border-t border-line">
          {site.craft.points.map((point, i) => (
            <Reveal key={point.title} delay={0.08 * i}>
              <li className="border-b border-line py-7">
                <p className="font-display text-xl md:text-2xl">{point.title}</p>
                <p className="mt-2 text-sm leading-7 text-ink-soft md:text-base">{point.body}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
