"use client";

import { motion, useReducedMotion } from "motion/react";
import { featuredBreads } from "@/data/breads";
import { site } from "@/data/site";
import { MediaFrame } from "@/components/media-frame";
import { ImageReveal } from "@/components/motion/image-reveal";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { easeOut } from "@/lib/motion";

export function BreadsShowcase() {
  const reduce = useReducedMotion();

  return (
    <section id="breads" className="bg-bg-elevated py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow">{site.breads.eyebrow}</p>
            <h2 className="section-title mt-4 text-[clamp(2rem,4vw,3.4rem)]">
              {site.breads.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft md:text-base">
              {site.breads.body}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featuredBreads.map((bread, index) => (
            <Reveal key={bread.id} delay={Math.min(index, 5) * 0.06}>
              <article className="group">
                <ImageReveal delay={Math.min(index, 5) * 0.03}>
                  <motion.div
                    whileHover={reduce ? undefined : { scale: 1.015 }}
                    transition={{ duration: 0.7, ease: easeOut }}
                  >
                    <MediaFrame
                      src={bread.image}
                      alt={bread.name}
                      ratio="portrait"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      quality={80}
                    />
                  </motion.div>
                </ImageReveal>
                <h3 className="mt-4 font-display text-2xl">{bread.name}</h3>
                <p className="mt-2 text-sm leading-7 text-ink-soft">{bread.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-12 flex justify-center">
            <Button href="/breads" variant="ghost">
              לכל הלחמים
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
