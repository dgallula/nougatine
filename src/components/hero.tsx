"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-bg-deep text-bg-elevated"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/hero-croissant.jpg"
            alt="קרואסון זהוב בתאורה חמה"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_40%]"
            quality={85}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/55 to-bg-deep/25" />
        <div className="absolute inset-0 grain opacity-60 mix-blend-overlay" />
      </div>

      <div className="relative container-page flex min-h-[100svh] flex-col pb-10 pt-[calc(var(--header-h)+1.5rem)] md:pb-16">
        <div className="flex flex-1 flex-col justify-end">
          <div className="max-w-3xl">
            <motion.p
              className="mb-4 text-xs font-medium tracking-[0.28em] text-accent-soft md:mb-5 md:text-sm"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              {site.tagline}
            </motion.p>

            <motion.h1
              className="font-display text-[clamp(2.5rem,7vw,5.75rem)] font-medium leading-[1.08] tracking-tight text-balance"
              initial={reduce ? false : { opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {site.hero.title}
            </motion.h1>

            <motion.p
              className="mt-5 max-w-xl text-base leading-8 text-bg-elevated/85 md:mt-6 md:text-lg md:leading-9"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
            >
              {site.hero.subtitle}
            </motion.p>

            <motion.div
              className="mt-8 md:mt-10"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button href={site.hero.ctaHref} variant="onDark">
                {site.hero.cta}
              </Button>
            </motion.div>
          </div>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-5 text-[0.7rem] tracking-[0.16em] text-bg-elevated/70 md:mt-12 md:gap-x-6 md:text-xs">
          {site.values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
