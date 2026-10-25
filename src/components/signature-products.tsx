"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { signatureProducts } from "@/data/products";
import { MediaFrame } from "@/components/media-frame";
import { ImageReveal } from "@/components/motion/image-reveal";
import { Reveal } from "@/components/motion/reveal";
import { easeOut } from "@/lib/motion";

export function SignatureProducts() {
  const reduce = useReducedMotion();
  const french = signatureProducts.filter((p) => p.is3d);
  const house = signatureProducts.filter((p) => !p.is3d).slice(0, 2);

  return (
    <>
      <section id="patisserie" className="bg-bg-elevated py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="eyebrow">פטיסרי צרפתי</p>
              <h2 className="section-title mt-4 text-[clamp(2rem,4vw,3.4rem)]">
                הקלאסיקות שלנו
              </h2>
              <p className="mt-4 text-sm leading-7 text-ink-soft md:text-base">
                הקלאסיקות של הפטיסרי הצרפתי: קרואסון, אקלר וטארטלט.
              </p>
            </div>
          </Reveal>

          <div className="grid items-start gap-8 md:grid-cols-3 md:gap-6">
            {french.map((product, index) => (
              <Reveal key={product.id} delay={index * 0.1} variant="scale">
                <motion.article
                  className="group text-center"
                  whileHover={reduce ? undefined : { y: -6 }}
                  transition={{ duration: 0.45, ease: easeOut }}
                >
                  <div className="relative mx-auto aspect-square w-full max-w-[300px] overflow-hidden bg-bg-soft">
                    <motion.div
                      className="absolute inset-0"
                      animate={
                        reduce
                          ? undefined
                          : {
                              y: [0, -8 - index * 2, 0],
                              rotate: [0, index % 2 === 0 ? 1.5 : -1.5, 0],
                            }
                      }
                      transition={{
                        duration: 5 + index * 0.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={reduce ? undefined : { scale: 1.04 }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width:768px) 80vw, 300px"
                        className="float-3d object-contain p-[14%]"
                        quality={85}
                      />
                    </motion.div>
                  </div>
                  <div>
                    <p className="mt-5 text-[0.78rem] tracking-[0.04em] text-gold-deep">
                      {product.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl md:text-[1.75rem]">
                      {product.name}
                    </h3>
                    <p className="mx-auto mt-2 max-w-xs text-sm leading-7 text-ink-soft">
                      {product.description}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="bg-bg-soft py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 className="section-title text-[clamp(1.8rem,3.5vw,2.8rem)]">מהתנור שלנו</h2>
              <p className="max-w-sm text-sm text-ink-soft">חלות ועוגות, הצד החם של נוגטין.</p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {house.map((product, index) => (
              <Reveal key={product.id} delay={index * 0.1}>
                <article className="group">
                  <ImageReveal delay={index * 0.05}>
                    <motion.div
                      whileHover={reduce ? undefined : { scale: 1.015 }}
                      transition={{ duration: 0.7, ease: easeOut }}
                    >
                      <MediaFrame
                        src={product.image}
                        alt={product.name}
                        ratio="portrait"
                        sizes="(max-width:768px) 100vw, 50vw"
                        quality={80}
                      />
                    </motion.div>
                  </ImageReveal>
                  <p className="mt-4 text-[0.78rem] tracking-[0.04em] text-gold-deep">
                    {product.category}
                  </p>
                  <h3 className="mt-1 font-display text-2xl">{product.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink-soft">{product.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
