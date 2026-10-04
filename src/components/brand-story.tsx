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
      </div>
    </section>
  );
}
