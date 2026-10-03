"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter,color] duration-500",
        scrolled || open
          ? "bg-bg-elevated/90 text-ink shadow-[0_1px_0_var(--line)] backdrop-blur-md"
          : "bg-transparent text-bg-elevated",
      )}
    >
      <div className="container-page flex h-[var(--header-h)] items-center justify-between gap-6">
        <a
          href="#top"
          className="font-display text-2xl font-medium tracking-tight md:text-[1.7rem]"
          onClick={() => setOpen(false)}
        >
          {site.nameHe}
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="ניווט ראשי">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition-colors duration-300",
                onDark ? "text-bg-elevated/80 hover:text-bg-elevated" : "text-ink-soft hover:text-ink",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] transition-colors lg:hidden",
            onDark ? "hover:bg-white/10" : "hover:bg-bg",
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-line bg-bg-elevated lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="container-page flex flex-col gap-1 py-6" aria-label="ניווט נייד">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[var(--radius-md)] px-3 py-3 text-lg text-ink transition-colors hover:bg-bg"
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
