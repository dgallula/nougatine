"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { easeOut, fadeIn, scaleIn } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  variant?: "up" | "fade" | "scale";
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  variant = "up",
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const variants =
    variant === "fade"
      ? fadeIn
      : variant === "scale"
        ? scaleIn
        : {
            hidden: { opacity: 0, y },
            visible: { opacity: 1, y: 0 },
          };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-12% 0px -8% 0px", amount: 0.2 }}
      transition={{ duration: 0.85, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
