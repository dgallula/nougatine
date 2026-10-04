"use client";

import { motion, useReducedMotion } from "motion/react";
import { categories } from "@/data/products";
import { Reveal } from "@/components/motion/reveal";
import { easeOut } from "@/lib/motion";

export function Categories() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-bg-elevated py-16 md:py-20">
      <div className="container-page">
        <Reveal>
          <h2 className="section-title mb-10 text-center text-[clamp(1.8rem,3.5vw,2.6rem)]">
            מה תמצאו אצלנו
          </h2>
        </Reveal>

        <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <Reveal key={category.id} delay={i * 0.05}>
              <motion.div
                className="group flex h-full min-h-[140px] flex-col justify-between bg-bg-elevated p-7"
                whileHover={
                  reduce
                    ? undefined
                    : { backgroundColor: "var(--bg-soft)", y: -2 }
                }
                transition={{ duration: 0.4, ease: easeOut }}
              >
                <p className="font-display text-xl transition-transform duration-500 group-hover:-translate-y-0.5 md:text-2xl">
                  {category.name}
                </p>
                <p className="mt-6 text-sm text-ink-soft">{category.note}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
