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

  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? [1, 1, 1] : [0.92, 1, 0.96]);
  const textY = useTransform(scrollYProgress, [0.15, 0.55], reduce ? [0, 0] : [40, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.4], reduce ? [1, 1] : [0, 1]);

  return (
    <section
      ref={ref}
      className="relative min-h-[120svh] overflow-hidden bg-[#1a1511] text-bg-elevated"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,#3a2a1f_0%,#1a1511_55%)]" />

      <div className="relative container-page grid min-h-[120svh] items-center gap-10 py-24 md:grid-cols-2 md:gap-8">
        <motion.div style={{ y: textY, opacity: textOpacity }} className="order-2 md:order-1">
          <p className="text-xs tracking-[0.24em] text-accent-soft">רגע של מאפה</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[1.05]">
            {site.immersive.title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-bg-elevated/80 md:text-lg">
            {site.immersive.body}
          </p>
          <p className="mt-8 text-sm tracking-[0.2em] text-accent-soft">
            {site.immersive.detail}
          </p>
        </motion.div>

        <motion.div
          style={{ y, scale }}
          className="relative order-1 mx-auto aspect-square w-full max-w-md md:order-2 md:max-w-none"
        >
          <Image
            src="/images/immersive-pastry.jpg"
            alt="מאפה שוקולד פריך"
            fill
            sizes="(max-width:768px) 90vw, 42vw"
            className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
            quality={85}
          />
        </motion.div>
      </div>
    </section>
  );
}
