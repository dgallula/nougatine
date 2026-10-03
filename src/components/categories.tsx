import { categories } from "@/data/products";
import { Reveal } from "@/components/motion/reveal";

export function Categories() {
  return (
    <section id="cakes" className="bg-bg-elevated py-24 md:py-28">
      <div className="container-page">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-medium">
            מה תמצאו אצלנו
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, i) => (
            <Reveal key={category.id} delay={i * 0.04}>
              <div className="group flex h-full flex-col justify-between bg-bg-elevated p-6 transition-colors duration-300 hover:bg-bg md:p-8">
                <p className="font-display text-2xl md:text-[1.75rem]">{category.name}</p>
                <p className="mt-6 text-sm text-ink-soft transition-transform duration-500 group-hover:-translate-y-0.5">
                  {category.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
