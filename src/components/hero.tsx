"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
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
          alt="מבחר פטיסרי צרפתי בנוגטין"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,8,0.55)_0%,rgba(12,10,8,0.42)_45%,rgba(12,10,8,0.72)_100%)]" />
      </motion.div>

      {/* Floating 3D croissant — scroll parallax + idle float */}
      <motion.div
        className="pointer-events-none absolute left-[2%] top-[18%] z-[1] hidden w-[min(36vw,360px)] lg:block"
        style={{ y: objectY }}
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
            priority
            quality={85}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-[2] container-page flex min-h-[100svh] flex-col items-center justify-center px-4 pb-16 pt-36 text-center md:pt-40"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          className="text-[0.7rem] font-medium tracking-[0.35em] text-gold-soft md:text-xs"
          initial={reduce ? false : { opacity: 0, y: 18, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.35em" }}
          transition={{ duration: 1, delay: 0.15, ease: easeOut }}
        >
          {site.hero.eyebrow}
        </motion.p>

        <motion.h1
          className="mt-4 max-w-4xl font-display text-[clamp(2.4rem,7vw,5.25rem)] font-medium leading-[1.08] text-balance"
          initial={reduce ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.15, delay: 0.28, ease: easeOut }}
        >
          {site.hero.title}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-sm leading-8 text-white/85 md:text-base md:leading-8"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.48, ease: easeOut }}
        >
          {site.hero.subtitle}
        </motion.p>

        <motion.div
          className="mt-8"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.62, ease: easeOut }}
          whileHover={reduce ? undefined : { scale: 1.03 }}
          whileTap={reduce ? undefined : { scale: 0.98 }}
        >
          <Button href={site.hero.ctaHref} variant="outlineLight">
            {site.hero.cta}
          </Button>
        </motion.div>

        <motion.div
          className="mt-14 grid w-full max-w-4xl grid-cols-2 gap-3 md:mt-16 md:grid-cols-4 md:gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.75 },
            },
          }}
        >
          {site.homeLinks.map((link) => (
            <motion.a
              key={link.href + link.label}
              href={link.href}
              className="border border-white/70 bg-black/20 px-3 py-4 text-[0.7rem] tracking-[0.14em] text-white backdrop-blur-[2px] md:text-xs"
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
            className="absolute bottom-6 flex flex-col items-center gap-2 text-[0.65rem] tracking-[0.22em] text-white/55"
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
