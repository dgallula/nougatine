export const site = {
  nameHe: "נוגטין בייקרי",
  nameHeCoffee: "מאפייה וקפה",
  nameEn: "nougatine-bakery",
  nameEnCoffee: "bakery and coffee",
  nameShortHe: "נוגטין",
  tagline: "bakery and coffee · מאפייה וקפה · הר נוף, ירושלים",
  logo: "/images/logo-nougatine.png",
  values: ["פטיסרי צרפתי", "טריות", "עבודת יד", "כשרות", "ירושלים"] as const,
  hero: {
    /** Moulin Doré: « Un sublime mélange / De qualité et d'excellence » */
    eyebrow: "שילוב נשגב",
    title: "של איכות ומצוינות",
    image: "/images/hero-patisserie.jpg",
    object3d: "/images/3d-croissant.jpg",
  },
  homeLinks: [
    { label: "החנות שלנו", href: "/contact" },
    { label: "הלחמים", href: "/breads" },
    { label: "הפטיסרי", href: "/products" },
    { label: "אירוח ואירועים", href: "/events" },
  ],
  brandStory: {
    eyebrow: "הסיפור שלנו",
    title: "מסורת צרפתית, לב ירושלמי",
    body: "בנוגטין בייקרי בהר נוף אנחנו מביאים את שפת הפטיסרי הצרפתי אל השכונה: בצק חמאה, קרמים עדינים וויטרינה שמזמינה לעצור. כל מאפה נאפה בעבודת יד, בכשרות בד״ץ מהדרין בהשגחת הרב אברהם רובין.",
  },
  craft: {
    title: "הפטיסרי של פריז בהר נוף",
    body: "טכניקה צרפתית קלאסית: שכבות חמאה, זמני התפחה מדויקים וגימורים שמכבדים את המסורת, ליד הבית ברחוב שאולזון.",
    points: [
      { title: "ויינאסרי", body: "קרואסונים ובריוש בשכבות פריכות וזהובות" },
      { title: "פטיסרי עדין", body: "אקלרים, טארטלטים וקינוחים אישיים מהוויטרינה" },
      { title: "עבודת יד", body: "כל יצירה עוברת ידיים, בלי קיצורי דרך" },
    ],
  },
  immersive: {
    title: "הטעם של צרפת, כל יום",
    body: "מאפה שוקולד עם קרם עדין: רגע קטן של פטיסרי צרפתי בלב ירושלים.",
    detail: "חמאה, שוקולד, דיוק",
    image: "/images/3d-eclair.jpg",
  },
  kashrut: {
    label: "כשרות",
    text: "בד״ץ מהדרין בהשגחת הרב אברהם רובין",
    badge: "/images/kashrut-badge.jpg",
  },
  events: {
    eyebrow: "אירוח ואירועים",
    title: "מגשים ואירוח בסגנון צרפתי",
    body: "מגשי פטיסרי, עוגות מעוצבות וקרוקמבוש לאירועים משפחתיים ועסקיים, באותו סטנדרט של טריות ואסתטיקה.",
    services: [
      "אירועים משפחתיים",
      "שבתות",
      "בריתות",
      "בר מצווה",
      "בת מצווה",
      "אירוח עסקי",
      "מגשי אירוח",
    ],
    cta: "דברו איתנו על האירוע",
    ctaHref: "/contact",
  },
  breads: {
    eyebrow: "מהתנור",
    title: "הלחמים שלנו",
    body: "בגטים, לחמי דגנים, לחם זיתים, מחמצת וחלות שבת — נאפים מדי יום בנוגטין בייקרי בהר נוף.",
  },
  location: {
    title: "מחכים לכם בהר נוף",
    body: "בואו לפגוש את הריח, את הוויטרינה ואת הקפה של הבוקר ברחוב שאולזון 51.",
  },
} as const;
