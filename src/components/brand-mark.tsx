import Image from "next/image";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { width: 140, height: 56, className: "h-10 w-auto md:h-11" },
  md: { width: 180, height: 72, className: "h-12 w-auto md:h-14" },
  lg: { width: 240, height: 96, className: "h-16 w-auto md:h-20" },
} as const;

export function BrandMark({ className, priority = false, size = "md" }: BrandMarkProps) {
  const s = sizes[size];

  return (
    <Image
      src={site.logo}
      alt={`${site.nameHe} — ${site.tagline}`}
      width={s.width}
      height={s.height}
      priority={priority}
      className={cn(
        "object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]",
        s.className,
        className,
      )}
    />
  );
}
