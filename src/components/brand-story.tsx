import { site } from "@/data/site";
import { Reveal } from "@/components/motion/reveal";

export function BrandStory() {
  return (
    <section id="about" className="bg-bg py-24 md:py-32">
      <div className="container-narrow">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.24em] text-accent md:text-sm">
            {site.brandStory.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-medium leading-[1.15] text-balance">
            {site.brandStory.title}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-2xl text-base leading-8 text-ink-soft md:text-lg md:leading-9">
            {site.brandStory.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
