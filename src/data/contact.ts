/**
 * Business contact data.
 * Fields marked verified: false must be confirmed with the bakery before publishing as fact.
 */
export const contact = {
  neighborhood: {
    value: "הר נוף, ירושלים",
    verified: true,
  },
  address: {
    value: "כתובת מדויקת — לאימות",
    verified: false,
  },
  phone: {
    value: "טלפון — לאימות",
    href: undefined as string | undefined,
    verified: false,
  },
  whatsapp: {
    value: "וואטסאפ — לאימות",
    href: undefined as string | undefined,
    verified: false,
  },
  email: {
    value: "אימייל — לאימות",
    href: undefined as string | undefined,
    verified: false,
  },
  hours: {
    value: "שעות פתיחה — לאימות",
    verified: false,
  },
  mapQuery: {
    value: "Har Nof Jerusalem bakery",
    verified: false,
  },
} as const;
