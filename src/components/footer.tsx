import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { DavidevCredit } from "@/components/davidev-credit";
import { KashrutBadge } from "@/components/kashrut-badge";
import { SiteName } from "@/components/site-name";
import { contact } from "@/data/contact";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-deep text-white">
      <div className="container-page flex flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between md:py-16">
        <div>
          <div className="flex items-center gap-4">
            <BrandMark size="lg" className="h-40 w-40 md:h-48 md:w-48" />
            <SiteName tone="light" align="start" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">{site.tagline}</p>
          <p className="mt-2 text-sm text-white/65">{contact.postalAddressDisplay}</p>
          <p className="mt-1 text-sm text-white/65">{contact.hours.display}</p>
          <p className="mt-3 text-xs tracking-[0.06em] text-gold-soft">פטיסרי צרפתי בהר נוף</p>
        </div>

        <div className="flex flex-col items-start gap-6 md:items-end">
          <nav
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/75"
            aria-label="קישורי תחתית"
          >
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={contact.whatsapp.href}
            className="text-sm text-gold-soft hover:text-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            וואטסאפ {contact.whatsapp.display}
          </a>
          <KashrutBadge />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center gap-4 py-5 text-xs text-white/45 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.nameHe}
          </p>
          <DavidevCredit />
          <p>כשר בד״ץ מהדרין, ירושלים</p>
        </div>
      </div>
    </footer>
  );
}
