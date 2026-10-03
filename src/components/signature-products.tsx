"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { signatureProducts } from "@/data/products";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/cn";

export function SignatureProducts() {
  const reduce = useReducedMotion();

  return (
    <section id="products" className="bg-bg-elevated py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <div className="mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-tight">
              המאפים שלנו
            </h2>
            <p className="max-w-sm text-sm leading-7 text-ink-soft md:text-base">
              לא כרטיסיות זהות — כל מוצר מקבל במה משלו, כמו בוויטרינה.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {signatureProducts.map((product, index) => {
            const wide = index === 0;
            return (
              <Reveal
                key={product.id}
                delay={index * 0.08}
                className={cn(
                  wide ? "md:col-span-7" : index === 1 ? "md:col-span-5" : "md:col-span-6 md:col-start-7",
                )}
              >
                <article className="group">
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-[var(--radius-lg)] bg-bg",
                      product.aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]",
                      wide && "md:aspect-[16/11]",
                    )}
                  >
                    <motion.div
                      className="absolute inset-0"
                      whileHover={reduce ? undefined : { scale: 1.035 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes={wide ? "(max-width:768px) 100vw, 58vw" : "(max-width:768px) 100vw, 42vw"}
                        className="object-cover"
                        quality={80}
                      />
                    </motion.div>
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <div>
                      <p className="text-xs tracking-[0.18em] text-ink-faint">
                        {product.category}
                      </p>
                      <h3 className="mt-1 font-display text-2xl transition-transform duration-500 group-hover:-translate-y-0.5 md:text-3xl">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-2 max-w-md text-sm leading-7 text-ink-soft opacity-90 transition-opacity duration-500 group-hover:opacity-100 md:text-base">
                    {product.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
