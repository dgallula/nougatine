"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { galleryItems } from "@/data/gallery";
import { ImageReveal } from "@/components/motion/image-reveal";
import { Reveal } from "@/components/motion/reveal";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/cn";

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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {galleryItems.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.06}
              className={cn(
                item.span === "wide" && "md:col-span-7",
                item.span === "tall" && "md:col-span-5",
              )}
            >
              <ImageReveal delay={i * 0.04}>
                <motion.figure
                  className={cn(
                    "relative overflow-hidden bg-bg-soft",
                    item.span === "wide" && "aspect-[16/10]",
                    item.span === "tall" && "aspect-[4/5]",
                  )}
                  whileHover={reduce ? undefined : { scale: 1.01 }}
                  transition={{ duration: 0.6, ease: easeOut }}
                >
                  <motion.div
                    className="absolute inset-0"
                    whileHover={reduce ? undefined : { scale: 1.06 }}
                    transition={{ duration: 0.9, ease: easeOut }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width:768px) 100vw, 50vw"
                      className="object-cover"
                      quality={80}
                    />
                  </motion.div>
                </motion.figure>
              </ImageReveal>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
