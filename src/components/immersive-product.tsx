"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { site } from "@/data/site";

export function ImmersiveProduct() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [70, -70]);
  const rotate = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-6, 6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? [1, 1, 1] : [0.88, 1.04, 0.96]);
  const textY = useTransform(scrollYProgress, [0.1, 0.45], reduce ? [0, 0] : [36, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.12, 0.4], reduce ? [1, 1] : [0, 1]);
  const glow = useTransform(scrollYProgress, [0.2, 0.55, 0.9], [0.15, 0.35, 0.15]);

  return (
    <section ref={ref} className="relative min-h-[110svh] overflow-hidden bg-bg-soft">
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[55vmax] w-[55vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl"
        style={{ opacity: glow }}
        aria-hidden
      />

      <div className="relative container-page grid min-h-[110svh] items-center gap-10 py-20 md:grid-cols-2">
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="order-2 text-center md:order-1 md:text-start"
        >
          <p className="eyebrow">רגע של פטיסרי</p>
          <h2 className="section-title mt-4 text-[clamp(2.2rem,4.5vw,3.8rem)]">
            {site.immersive.title}
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-8 text-ink-soft md:mx-0 md:text-lg">
            {site.immersive.body}
          </p>
          <p className="mt-8 text-sm tracking-[0.04em] text-gold-deep">{site.immersive.detail}</p>
        </motion.div>

        <motion.div
          style={{ y, scale, rotate }}
          className="relative order-1 mx-auto aspect-square w-full max-w-[22rem] overflow-hidden md:order-2 md:max-w-md"
        >
          <Image
            src={site.immersive.image}
            alt="אקלר שוקולד תלת־ממדי"
            fill
            sizes="(max-width:768px) 90vw, 28rem"
            className="float-3d object-contain p-[8%]"
            quality={85}
          />
        </motion.div>
      </div>
    </section>
  );
}
