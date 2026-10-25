export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  aspect: "portrait" | "landscape" | "square";
  featured?: boolean;
  is3d?: boolean;
};

export const signatureProducts: Product[] = [
  {
    id: "croissant",
    name: "קרואסון חמאה",
    category: "ויינאסרי",
    description: "שכבות זהובות וחמאה אמיתית, נאפה מדי בוקר.",
    image: "/images/3d-croissant.jpg",
    aspect: "square",
    featured: true,
    is3d: true,
  },
  {
    id: "eclair",
    name: "אקלר שוקולד",
    category: "פטיסרי",
    description: "גלזורה מבריקה וקרם עדין בסגנון צרפתי קלאסי.",
    image: "/images/3d-eclair.jpg",
    aspect: "square",
    featured: true,
    is3d: true,
  },
  {
    id: "tartlette",
    name: "טארטלט פירות",
    category: "פטיסרי",
    description: "בצק פריך, קרם וניל ופירות טריים.",
    image: "/images/3d-tartlette.jpg",
    aspect: "square",
    featured: true,
    is3d: true,
  },
  {
    id: "challah",
    name: "חלות שבת",
    category: "מאפייה",
    description: "קלועות זהובות עם שומשום, טריות מהתנור.",
    image: "/images/real-challah.jpg",
    aspect: "portrait",
    featured: true,
  },
  {
    id: "cakes",
    name: "עוגות הבית",
    category: "עוגות",
    description: "עוגות שכבות ומוס לחגיגות ולימי חול.",
    image: "/images/real-cake.jpg",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "chocolate",
    name: "קינוחי שוקולד",
    category: "קינוחים",
    description: "מוס שוקולד ומאפים עשירים מהוויטרינה.",
    image: "/images/real-chocolate-mousse.jpg",
    aspect: "portrait",
    featured: true,
  },
  {
    id: "tarts",
    name: "טארטים",
    category: "פטיסרי",
    description: "טארטים וטארטלטים מהוויטרינה: פריך מבחוץ, עשיר מבפנים.",
    image: "/images/real-tarts.jpg",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "entremet",
    name: "עוגות מוס",
    category: "עוגות",
    description: "עוגות מעוצבות עם גלסאז׳ ועיטורים עדינים לאירועים ולשבת.",
    image: "/images/real-entremet.jpg",
    aspect: "portrait",
    featured: true,
  },
];

export const categories = [
  { id: "viennoiserie", name: "ויינאסרי", note: "קרואסונים, בריוש ושכבות חמאה" },
  { id: "patisserie", name: "פטיסרי", note: "אקלרים, טארטלטים וקינוחים" },
  { id: "challahs", name: "חלות ולחמים", note: "לשבת, לחגים ולכל יום" },
  { id: "cakes", name: "עוגות", note: "אישיות ומעוצבות" },
  { id: "bagels", name: "בייגלים", note: "טריים מהתנור" },
  { id: "platters", name: "מגשי אירוח", note: "לשולחן ולאירוע" },
] as const;
