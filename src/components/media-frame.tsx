import Image from "next/image";
import { cn } from "@/lib/cn";

type MediaFrameProps = {
  src: string;
  alt: string;
  /** Unified crop box — keeps grids flush */
  ratio?: "square" | "portrait" | "wide";
  fit?: "cover" | "contain";
  sizes?: string;
  quality?: number;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

const ratios = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  wide: "aspect-[16/10]",
} as const;

/**
 * Fixed-ratio media frame so mixed source sizes never leave uneven blanks.
 */
export function MediaFrame({
  src,
  alt,
  ratio = "portrait",
  fit = "cover",
  sizes = "(max-width:768px) 100vw, 50vw",
  quality = 80,
  priority = false,
  className,
  imageClassName,
}: MediaFrameProps) {
  return (
    <div className={cn("relative w-full overflow-hidden bg-bg-soft", ratios[ratio], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        priority={priority}
        className={cn(
          fit === "cover" ? "object-cover object-center" : "object-contain object-center p-[12%]",
          imageClassName,
        )}
      />
    </div>
  );
}
