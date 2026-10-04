import Image from "next/image";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

type KashrutBadgeProps = {
  className?: string;
  compact?: boolean;
};

export function KashrutBadge({ className, compact = false }: KashrutBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-[var(--radius-md)] bg-white px-3 py-2 text-ink shadow-sm",
        compact && "gap-2 px-2.5 py-1.5",
        className,
      )}
    >
      <Image
        src={site.kashrut.badge}
        alt={site.kashrut.text}
        width={compact ? 44 : 56}
        height={compact ? 44 : 56}
        className={cn("object-contain", compact ? "h-11 w-11" : "h-14 w-14")}
      />
      <div className={cn("leading-5", compact ? "text-[0.7rem]" : "text-xs")}>
        <p className="font-medium">{site.kashrut.label}</p>
        <p className="text-ink-soft">{site.kashrut.text}</p>
      </div>
    </div>
  );
}
