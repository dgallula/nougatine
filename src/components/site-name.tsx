import { site } from "@/data/site";
import { cn } from "@/lib/cn";

type SiteNameProps = {
  className?: string;
  tone?: "light" | "dark";
  align?: "start" | "center" | "end";
};

export function SiteName({
  className,
  tone = "dark",
  align = "center",
}: SiteNameProps) {
  return (
    <div
      className={cn(
        "leading-tight",
        align === "center" && "text-center",
        align === "start" && "text-start",
        align === "end" && "text-end",
        className,
      )}
    >
      <p
        className={cn(
          "font-display text-[clamp(1.05rem,2.2vw,1.35rem)] font-medium tracking-[0.02em]",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        {site.nameEn}
      </p>
      <p
        className={cn(
          "mt-0.5 text-sm tracking-[0.04em]",
          tone === "light" ? "text-gold-soft" : "text-gold-deep",
        )}
      >
        {site.nameEnCoffee}
      </p>
      <p
        className={cn(
          "mt-1 text-sm tracking-[0.02em]",
          tone === "light" ? "text-white/85" : "text-ink-soft",
        )}
      >
        {site.nameHe}
        <span className="mx-1.5 opacity-60">·</span>
        {site.nameHeCoffee}
      </p>
    </div>
  );
}
