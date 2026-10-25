export type Bread = {
  id: string;
  name: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const breads: Bread[] = [
  {
    id: "baguettes",
    name: "בגטים צרפתיים",
    description: "בגטים קריספיים עם קרום זהוב וחריצים קלאסיים, טריים מהתנור.",
    image: "/images/bread-baguettes.jpg",
    featured: true,
  },
  {
    id: "multigrain-baguettes",
    name: "בגטים עם דגנים",
    description: "בגטים עשירים מצופים שיבולת שועל, חמניות וזרעים.",
    image: "/images/bread-multigrain-baguettes.jpg",
    featured: true,
  },
  {
    id: "baguette",
    name: "בגט קלאסי",
    description: "בגט צרפתי ארוך עם קרום פריך ופנים רך.",
    image: "/images/bread-baguette.jpg",
    featured: true,
  },
  {
    id: "olive",
    name: "לחם זיתים",
    description: "כיכר כפרית עם זיתים שחורים, קרום קמחי וטעם עמוק.",
    image: "/images/bread-olive.jpg",
    featured: true,
  },
  {
    id: "seeded",
    name: "לחם דגנים",
    description: "כיכר עם תערובת זרעים וקמח על החריצים.",
    image: "/images/bread-seeded-loaf.jpg",
    featured: true,
  },
  {
    id: "sesame-loaf",
    name: "לחם שומשום",
    description: "כיכר זהובה מצופה שומשום, מושלמת לשולחן.",
    image: "/images/bread-sesame-loaf.jpg",
    featured: true,
  },
  {
    id: "batard",
    name: "בטרד כפרי",
    description: "כיכר אובלית עם חריצים אלכסוניים וקרום קמחי.",
    image: "/images/bread-batard.jpg",
  },
  {
    id: "crosshatch",
    name: "לחם משבצות",
    description: "כיכר כפרית עם חריצי משבצת וקמח לבן על הקרום.",
    image: "/images/bread-crosshatch.jpg",
  },
  {
    id: "country",
    name: "לחם כפרי",
    description: "כיכר עגולה־סגלגלה עם חריץ עמוק וקרום זהוב.",
    image: "/images/bread-country.jpg",
  },
  {
    id: "sourdough",
    name: "לחם מחמצת",
    description: "כיכר מחמצת עם חריצים עמוקים וקרום קראנצ׳י.",
    image: "/images/bread-sourdough.jpg",
  },
  {
    id: "boule",
    name: "בול מחמצת",
    description: "כיכר עגולה מצופה קמח, בסגנון צרפתי קלאסי.",
    image: "/images/bread-boule.jpg",
  },
  {
    id: "rolls",
    name: "לחמניות דגנים",
    description: "לחמניות אישיות עם זרעים, מושלמות לכריכים.",
    image: "/images/bread-rolls.jpg",
  },
  {
    id: "baguette-classic",
    name: "בגט יומי",
    description: "הבגט של כל יום: פריך מבחוץ, רך מבפנים.",
    image: "/images/bread-baguette-classic.jpg",
  },
  {
    id: "challah",
    name: "חלות שבת",
    description: "קלועות זהובות עם שומשום, טריות מהתנור לשבת ולחגים.",
    image: "/images/bread-challah.jpg",
    featured: true,
  },
];

export const featuredBreads = breads.filter((b) => b.featured);
