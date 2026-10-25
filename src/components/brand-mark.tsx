import Image from "next/image";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { width: 220, height: 220, className: "h-20 w-20 md:h-24 md:w-24" },
  md: { width: 320, height: 320, className: "h-28 w-28 md:h-32 md:w-32" },
  lg: { width: 420, height: 420, className: "h-36 w-36 md:h-44 md:w-44" },
} as const;

export function BrandMark({ className, priority = false, size = "md" }: BrandMarkProps) {
  const s = sizes[size];

  return (
    <Image
      src={site.logo}
      alt={`${site.nameEn} / ${site.nameHe}`}
      width={s.width}
      height={s.height}
      priority={priority}
      className={cn(
        "rounded-full object-cover object-center",
        s.className,
        className,
      )}
    />
  );
}
