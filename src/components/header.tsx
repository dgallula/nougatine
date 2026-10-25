"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { SiteName } from "@/components/site-name";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

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

  const onDark = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500",
        scrolled || open || !isHome
          ? "bg-bg-elevated/95 shadow-[0_1px_0_var(--line)] backdrop-blur-md"
          : "bg-gradient-to-b from-black/45 to-transparent",
      )}
    >
      <div className="container-page flex flex-col items-center py-5 md:py-6">
        <div className="flex w-full items-center justify-between lg:justify-center">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-3 md:gap-4"
            onClick={() => setOpen(false)}
          >
            <BrandMark priority size="lg" />
            <SiteName tone={onDark ? "light" : "dark"} align="start" />
          </Link>

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
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[0.9rem] tracking-[0.02em] transition-colors duration-300",
                  onDark
                    ? "text-white/85 hover:text-white"
                    : active
                      ? "text-ink"
                      : "text-ink-soft hover:text-ink",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div
        id="mobile-nav"
        className={cn("border-t border-line bg-bg-elevated lg:hidden", open ? "block" : "hidden")}
      >
        <nav className="container-page flex flex-col gap-1 py-5" aria-label="ניווט נייד">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-2 py-3 text-lg text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
