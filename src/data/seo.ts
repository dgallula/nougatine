/**
 * Canonical site URL (production o2switch).
 * Override at build time with NEXT_PUBLIC_SITE_URL if needed.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.nougatine-bakery.com";

export const defaultOgImage = "/images/real-vitrine.jpg";

export const seo = {
  home: {
    title: "nougatine-bakery | bakery and coffee בהר נוף, ירושלים",
    description:
      "nougatine-bakery, bakery and coffee, ברחוב שאולזון 51 בהר נוף. נוגטין בייקרי, מאפייה וקפה. פטיסרי צרפתי, לחמים, חלות ועוגות. כשר בד״ץ מהדרין. וואטסאפ 02-642-1242.",
    path: "/",
  },
  about: {
    title: "אודות נוגטין בייקרי | מאפייה בהר נוף, ירושלים",
    description:
      "הכירו את נוגטין בייקרי בהר נוף: קונדיטוריה ובייגל עם פטיסרי צרפתי, עבודת יד וכשרות בד״ץ מהדרין בהשגחת הרב אברהם רובין.",
    path: "/about",
  },
  products: {
    title: "המאפים והפטיסרי שלנו | נוגטין בייקרי",
    description:
      "קרואסונים, אקלרים, טארטים, חלות שבת, עוגות ומקרונים בנוגטין בייקרי. מאפייה וקונדיטוריה ברחוב שאולזון בהר נוף, ירושלים.",
    path: "/products",
  },
  breads: {
    title: "הלחמים שלנו | נוגטין בייקרי הר נוף",
    description:
      "בגטים, לחמי דגנים, לחם זיתים, מחמצת וחלות שבת בנוגטין בייקרי בהר נוף, ירושלים. נאפים מדי יום.",
    path: "/breads",
  },
  events: {
    title: "אירוח, אירועים ומגשי פטיסרי | נוגטין בייקרי",
    description:
      "מגשי אירוח, עוגות מעוצבות וקרוקמבוש לאירועים משפחתיים ועסקיים בנוגטין בייקרי בהר נוף, ירושלים. הזמנות בוואטסאפ.",
    path: "/events",
  },
  gallery: {
    title: "גלריה | נוגטין בייקרי הר נוף",
    description:
      "תמונות מהוויטרינה ומהתנור של נוגטין בייקרי בהר נוף: חלות, לחמים, עוגות ופטיסרי צרפתי.",
    path: "/gallery",
  },
  contact: {
    title: "צור קשר והגעה | נוגטין בייקרי, שאולזון 51",
    description:
      "נוגטין בייקרי ברחוב שאולזון 51, הר נוף ירושלים. שעות: א׳–ה׳ 07:00–20:00, ו׳ עד 14:00. וואטסאפ 02-642-1242.",
    path: "/contact",
  },
} as const;

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
