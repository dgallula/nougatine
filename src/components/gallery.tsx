"use client";

import { motion, useReducedMotion } from "motion/react";
import { galleryItems } from "@/data/gallery";
import { MediaFrame } from "@/components/media-frame";
import { ImageReveal } from "@/components/motion/image-reveal";
import { Reveal } from "@/components/motion/reveal";
import { easeOut } from "@/lib/motion";

export function Gallery() {
  const reduce = useReducedMotion();

  return (
    <section id="gallery" className="bg-bg py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto mb-12 max-w-xl text-center">
            <p className="eyebrow">גלריה</p>
            <h2 className="section-title mt-4 text-[clamp(2rem,4vw,3rem)]">מהמאפייה</h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft md:text-base">
              תמונות אמיתיות מהתנור ומהוויטרינה של נוגטין.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {galleryItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <ImageReveal delay={i * 0.03}>
                <motion.figure
                  className="m-0"
                  whileHover={reduce ? undefined : { y: -3 }}
                  transition={{ duration: 0.45, ease: easeOut }}
                >
                  <MediaFrame
                    src={item.src}
                    alt={item.alt}
                    ratio="portrait"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    quality={80}
                  />
                </motion.figure>
              </ImageReveal>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
