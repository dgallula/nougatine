type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <header className="border-b border-line bg-bg pb-14 pt-32 md:pb-20 md:pt-40">
      <div className="container-narrow text-center">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="section-title mt-5 text-[clamp(2.1rem,4.8vw,3.6rem)]">{title}</h1>
        <div className="mx-auto mt-6 h-px w-12 bg-gold/70" aria-hidden />
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink-soft md:text-lg">
          {description}
        </p>
      </div>
    </header>
  );
}
