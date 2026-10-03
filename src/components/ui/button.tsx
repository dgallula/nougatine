import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"a"> & {
  variant?: "primary" | "ghost" | "onDark";
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-6 py-3 text-sm font-medium tracking-wide transition-[transform,background-color,color,border-color] duration-300 ease-[var(--ease-out)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98]",
        variant === "primary" &&
          "bg-ink text-bg-elevated hover:bg-accent hover:text-bg-elevated",
        variant === "ghost" &&
          "border border-line-strong bg-transparent text-ink hover:border-ink hover:bg-bg-elevated",
        variant === "onDark" &&
          "bg-bg-elevated text-ink hover:bg-accent-soft",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
