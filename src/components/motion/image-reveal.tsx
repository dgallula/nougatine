"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/cn";

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Soft clip-path reveal for editorial images */
export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial={{ clipPath: "inset(12% 12% 12% 12%)", opacity: 0.4, scale: 1.06 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-8% 0px", amount: 0.35 }}
      transition={{ duration: 1.15, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
