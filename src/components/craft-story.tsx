import { site } from "@/data/site";
import { Reveal } from "@/components/motion/reveal";

export function CraftStory() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="container-page grid gap-14 md:grid-cols-[1.1fr_1fr] md:items-start md:gap-20">
        <div>
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.1] text-balance">
              {site.craft.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-md text-base leading-8 text-ink-soft md:text-lg md:leading-9">
              {site.craft.body}
            </p>
          </Reveal>
        </div>

        <ul className="space-y-8 border-t border-line pt-8 md:pt-2">
          {site.craft.points.map((point, i) => (
            <Reveal key={point.title} delay={0.08 * i}>
              <li className="border-b border-line pb-8">
                <p className="font-display text-xl md:text-2xl">{point.title}</p>
                <p className="mt-2 text-sm leading-7 text-ink-soft md:text-base">
                  {point.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
