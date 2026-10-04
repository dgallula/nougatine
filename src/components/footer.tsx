import { BrandMark } from "@/components/brand-mark";
import { KashrutBadge } from "@/components/kashrut-badge";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-deep text-white">
      <div className="container-page flex flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between md:py-16">
        <div>
          <BrandMark size="lg" />
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">{site.tagline}</p>
          <p className="mt-3 text-xs tracking-[0.18em] text-gold-soft">פטיסרי צרפתי · הר נוף</p>
        </div>

        <div className="flex flex-col items-start gap-6 md:items-end">
          <nav
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/75"
            aria-label="קישורי תחתית"
          >
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <KashrutBadge />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/45 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.nameHe}
          </p>
          <p>כשר בד״ץ מהדרין · ירושלים</p>
        </div>
      </div>
    </footer>
  );
}
