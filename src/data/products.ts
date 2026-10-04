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
    description: "שכבות זהובות, חמאה אמיתית, נאפה מדי בוקר.",
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
    description: "בצק פריך, קרם וניל ופירות מבריקים.",
    image: "/images/3d-tartlette.jpg",
    aspect: "square",
    featured: true,
    is3d: true,
  },
  {
    id: "challah",
    name: "חלות שבת",
    category: "מאפייה",
    description: "קלועות זהובות עם שומשום — טריות מהתנור.",
    image: "/images/real-challah.jpg",
    aspect: "portrait",
    featured: true,
  },
  {
    id: "cakes",
    name: "עוגות הבית",
    category: "עוגות",
    description: "עוגות שכבות לחגיגות ולרגעים באמצע השבוע.",
    image: "/images/real-cake.jpg",
    aspect: "landscape",
    featured: true,
  },
];

export const categories = [
  { id: "viennoiserie", name: "ויינאסרי", note: "קרואסונים · בריוש · שכבות חמאה" },
  { id: "patisserie", name: "פטיסרי", note: "אקלרים · טארטלטים · קינוחים" },
  { id: "challahs", name: "חלות", note: "לשבת ולחגים" },
  { id: "cakes", name: "עוגות", note: "אישיות ומעוצבות" },
  { id: "bagels", name: "בייגלים", note: "טריים מהתנור" },
  { id: "platters", name: "מגשי אירוח", note: "לשולחן ולאירוע" },
] as const;
