import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"a"> & {
  variant?: "primary" | "ghost" | "outlineLight" | "gold";
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
        "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-medium tracking-[0.16em] transition-[transform,background-color,color,border-color,box-shadow] duration-300 ease-[var(--ease-out)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        variant === "primary" && "bg-ink text-bg-elevated hover:bg-gold-deep",
        variant === "gold" && "bg-gold text-bg-elevated hover:bg-gold-deep",
        variant === "ghost" &&
          "border border-line-strong bg-transparent text-ink hover:border-ink hover:bg-bg-soft",
        variant === "outlineLight" && "btn-outline-light",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
