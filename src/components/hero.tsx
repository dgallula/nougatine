"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { site } from "@/data/site";
import { easeOut } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 120]);
  const bgScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.08, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], reduce ? [1, 1] : [1, 0]);
  const objectY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -80]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-bg-deep text-white"
    >
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <Image
          src={site.hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,8,0.42)_0%,rgba(12,10,8,0.28)_40%,rgba(12,10,8,0.62)_100%)]" />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute left-[2%] top-[18%] z-[1] hidden w-[min(36vw,360px)] mix-blend-multiply lg:block"
        style={{ y: objectY }}
        aria-hidden
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 50, rotate: -10, scale: 0.92 }}
          animate={
            reduce
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  y: [0, -14, 0],
                  rotate: [-4, -2, -4],
                  scale: 1,
                }
          }
          transition={{
            opacity: { duration: 1.1, ease: easeOut },
            scale: { duration: 1.2, ease: easeOut },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
            rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
        >
          <Image
            src={site.hero.object3d}
            alt=""
            width={720}
            height={720}
            className="float-3d h-auto w-full object-contain"
            loading="lazy"
            quality={75}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-[2] container-page flex min-h-[100svh] flex-col items-center justify-center px-4 pb-16 pt-32 text-center md:pt-36"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          className="font-display text-[clamp(1.2rem,2.8vw,1.85rem)] font-medium tracking-[0.04em] text-white/95"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: easeOut }}
        >
          {site.hero.eyebrow}
        </motion.p>

        <motion.p
          className="mt-4 text-sm tracking-[0.14em] text-gold-soft"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: easeOut }}
        >
          {site.nameEn}
          <span className="mx-2 text-white/40">·</span>
          {site.nameEnCoffee}
        </motion.p>

        <motion.h1
          className="hero-title-shine mt-2 max-w-4xl font-display text-[clamp(2.4rem,6vw,4.6rem)] font-medium leading-[1.12] text-balance"
          initial={reduce ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.15, delay: 0.28, ease: easeOut }}
        >
          {site.hero.title}
        </motion.h1>

        <motion.p
          className="mt-4 text-base text-white/80"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: easeOut }}
        >
          {site.nameHe}
          <span className="mx-2 text-white/35">·</span>
          {site.nameHeCoffee}
        </motion.p>

        <motion.div
          className="mt-8 grid w-full max-w-4xl grid-cols-2 gap-3 md:mt-10 md:grid-cols-4 md:gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.55 },
            },
          }}
        >
          {site.homeLinks.map((link) => (
            <motion.a
              key={link.href + link.label}
              href={link.href}
              className="border border-white/75 bg-black/15 px-3 py-5 text-[0.8rem] tracking-[0.04em] text-white backdrop-blur-[2px] md:text-[0.85rem]"
              variants={
                reduce
                  ? undefined
                  : {
                      hidden: { opacity: 0, y: 18 },
                      visible: { opacity: 1, y: 0 },
                    }
              }
              transition={{ duration: 0.7, ease: easeOut }}
              whileHover={
                reduce
                  ? undefined
                  : { backgroundColor: "rgba(255,255,255,1)", color: "#1a1612", y: -3 }
              }
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        {!reduce && (
          <motion.div
            className="absolute bottom-6 flex flex-col items-center gap-2 text-[0.7rem] tracking-[0.08em] text-white/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            aria-hidden
          >
            <span>גללו</span>
            <motion.span
              className="block h-8 w-px bg-white/50"
              animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
