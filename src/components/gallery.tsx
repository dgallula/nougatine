import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/cn";

export function Gallery() {
  return (
    <section id="gallery" className="bg-bg-elevated py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <div className="mb-14 max-w-xl">
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-medium">
              גלריה
            </h2>
            <p className="mt-4 text-base leading-8 text-ink-soft">
              רגעים מהתנור, מהוויטרינה ומהשולחן — בלי רשת אחידה של ריבועים.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {galleryItems.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.05}
              className={cn(
                item.span === "wide" && "md:col-span-7",
                item.span === "tall" && "md:col-span-5",
                item.span === "square" && "md:col-span-4",
                i === 3 && "md:col-start-1",
              )}
            >
              <figure
                className={cn(
                  "relative overflow-hidden rounded-[var(--radius-lg)] bg-bg",
                  item.span === "wide" && "aspect-[16/10]",
                  item.span === "tall" && "aspect-[4/5]",
                  item.span === "square" && "aspect-square",
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out)] hover:scale-[1.03]"
                  quality={78}
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
