import { navigation } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-deep text-bg-elevated">
      <div className="container-page flex flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between md:py-16">
        <div>
          <p className="font-display text-3xl md:text-4xl">{site.nameHe}</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-bg-elevated/70">
            {site.tagline}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-bg-elevated/75" aria-label="קישורי תחתית">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-bg-elevated">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-bg-elevated/50 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {site.nameHe}</p>
          <p>נאפה בהר נוף · ירושלים</p>
        </div>
      </div>
    </footer>
  );
}
