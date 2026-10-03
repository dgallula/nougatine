export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  aspect: "portrait" | "landscape" | "square";
  featured?: boolean;
};

export const signatureProducts: Product[] = [
  {
    id: "challah",
    name: "חלות שבת",
    category: "חלות",
    description: "קלועות זהובות, ריח שמרים וטעם של בית.",
    image: "/images/product-challah.jpg",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "croissants",
    name: "קרואסונים",
    category: "קרואסונים",
    description: "שכבות חמאה פריכות, נאפים מדי בוקר.",
    image: "/images/product-croissants.jpg",
    aspect: "portrait",
    featured: true,
  },
  {
    id: "cakes",
    name: "עוגות הבית",
    category: "עוגות",
    description: "עוגות לחגיגות ולרגעים קטנים באמצע השבוע.",
    image: "/images/product-cake.jpg",
    aspect: "landscape",
    featured: true,
  },
];

export const categories = [
  { id: "breads", name: "לחמים", note: "כיכרות יומיום ולחמי מחמצת" },
  { id: "challahs", name: "חלות", note: "לשבת ולחגים" },
  { id: "croissants", name: "קרואסונים", note: "חמאה ושכבות" },
  { id: "pastries", name: "מאפים", note: "מתוקים ומלוחים" },
  { id: "cakes", name: "עוגות", note: "אישיות ומעוצבות" },
  { id: "cookies", name: "עוגיות", note: "למארז ולקפה" },
  { id: "desserts", name: "קינוחים", note: "סיומים עדינים" },
  { id: "platters", name: "מגשי אירוח", note: "לשולחן ולאירוע" },
] as const;
