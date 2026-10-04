"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { signatureProducts } from "@/data/products";
import { ImageReveal } from "@/components/motion/image-reveal";
import { Reveal } from "@/components/motion/reveal";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function SignatureProducts() {
  const reduce = useReducedMotion();
  const french = signatureProducts.filter((p) => p.is3d);
  const house = signatureProducts.filter((p) => !p.is3d);

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
                מאפים תלת־ממדיים שמציגים את שפת הפטיסרי — קרואסון, אקלר וטארטלט.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {french.map((product, index) => (
              <Reveal key={product.id} delay={index * 0.1} variant="scale">
                <motion.article
                  className="group text-center"
                  whileHover={reduce ? undefined : { y: -6 }}
                  transition={{ duration: 0.45, ease: easeOut }}
                >
                  <div className="relative mx-auto aspect-square max-w-[320px] overflow-hidden bg-bg-soft">
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center p-6"
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
                      whileHover={reduce ? undefined : { scale: 1.06, y: -10 }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={480}
                        height={480}
                        className="float-3d h-full w-full object-contain"
                        quality={85}
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={false}
                    whileHover={reduce ? undefined : { y: -2 }}
                    transition={{ duration: 0.35 }}
                  >
                    <p className="mt-5 text-[0.7rem] tracking-[0.2em] text-gold-deep">
                      {product.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl md:text-[1.75rem]">
                      {product.name}
                    </h3>
                    <p className="mx-auto mt-2 max-w-xs text-sm leading-7 text-ink-soft transition-opacity duration-500 group-hover:opacity-100">
                      {product.description}
                    </p>
                  </motion.div>
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
              <p className="max-w-sm text-sm text-ink-soft">חלות ועוגות — הצד החם של נוגטין.</p>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {house.map((product, index) => (
              <Reveal key={product.id} delay={index * 0.1}>
                <article className="group">
                  <ImageReveal delay={index * 0.05}>
                    <div
                      className={cn(
                        "relative overflow-hidden bg-bg-elevated",
                        product.aspect === "portrait"
                          ? "aspect-[3/4] md:aspect-[4/5]"
                          : "aspect-[4/3]",
                      )}
                    >
                      <motion.div
                        className="absolute inset-0"
                        whileHover={reduce ? undefined : { scale: 1.05 }}
                        transition={{ duration: 0.8, ease: easeOut }}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width:768px) 100vw, 50vw"
                          className="object-cover"
                          quality={80}
                        />
                      </motion.div>
                    </div>
                  </ImageReveal>
                  <motion.div
                    className="pt-1"
                    initial={false}
                    whileHover={reduce ? undefined : { x: -4 }}
                    transition={{ duration: 0.35 }}
                  >
                    <p className="mt-4 text-[0.7rem] tracking-[0.18em] text-gold-deep">
                      {product.category}
                    </p>
                    <h3 className="mt-1 font-display text-2xl">{product.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-ink-soft">{product.description}</p>
                  </motion.div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
