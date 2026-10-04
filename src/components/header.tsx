"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onDark = !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500",
        scrolled || open
          ? "bg-bg-elevated/95 shadow-[0_1px_0_var(--line)] backdrop-blur-md"
          : "bg-gradient-to-b from-black/45 to-transparent",
      )}
    >
      <div className="container-page flex flex-col items-center py-3 md:py-4">
        <div className="flex w-full items-center justify-between lg:justify-center">
          <a href="#top" className="inline-flex" onClick={() => setOpen(false)}>
            <BrandMark priority size="md" />
          </a>

          <button
            type="button"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center lg:hidden",
              onDark ? "text-white" : "text-ink",
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>

        <nav
          className="mt-3 hidden items-center justify-center gap-8 lg:flex"
          aria-label="ניווט ראשי"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-[0.8rem] tracking-[0.12em] transition-colors duration-300",
                onDark ? "text-white/85 hover:text-white" : "text-ink-soft hover:text-ink",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div
        id="mobile-nav"
        className={cn("border-t border-line bg-bg-elevated lg:hidden", open ? "block" : "hidden")}
      >
        <nav className="container-page flex flex-col gap-1 py-5" aria-label="ניווט נייד">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-2 py-3 text-lg text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
