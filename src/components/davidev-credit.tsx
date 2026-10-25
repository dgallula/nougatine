export function DavidevCredit() {
  return (
    <a
      href="mailto:dgallula@gmail.com"
      dir="ltr"
      className="group inline-flex items-center gap-3 text-white/55 transition-colors hover:text-white"
      aria-label="site produit par davidev, dgallula@gmail.com"
    >
      <span className="text-[0.68rem] tracking-[0.16em]">site produit par</span>
      <span className="inline-flex items-center gap-2 text-gold-soft group-hover:text-gold">
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <rect
            x="1.25"
            y="1.25"
            width="29.5"
            height="29.5"
            rx="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
          />
          <path
            d="M11 8.5h6.2c3.7 0 6.3 2.5 6.3 7.5s-2.6 7.5-6.3 7.5H11V8.5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M11 16h8.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        <span className="font-display text-sm tracking-[0.12em]">davidev</span>
      </span>
    </a>
  );
}
