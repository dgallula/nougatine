/**
 * Confirmed business contact data only.
 * Optional unknown fields are omitted — never publish placeholders.
 */

const WHATSAPP_LOCAL = "026421242";
const WHATSAPP_DISPLAY = "02-642-1242";
const WHATSAPP_E164 = "97226421242";

export const contact = {
  neighborhood: "הר נוף, ירושלים",
  streetAddress: "רחוב שאולזון 51",
  addressLocality: "ירושלים",
  addressCountry: "IL",
  postalAddressDisplay: "רחוב שאולזון 51, הר נוף, ירושלים",
  whatsapp: {
    display: WHATSAPP_DISPLAY,
    local: WHATSAPP_LOCAL,
    href: `https://wa.me/${WHATSAPP_E164}`,
  },
  hours: {
    display: "א׳–ה׳ 07:00–20:00, ו׳ עד 14:00",
    detail: "ראשון עד חמישי 07:00–20:00, ויום שישי עד 14:00",
    /** Schema.org OpeningHoursSpecification — Saturday omitted (not confirmed). */
    openingHoursSpecification: [
      {
        dayOfWeek: [
          "https://schema.org/Sunday",
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
        ],
        opens: "07:00",
        closes: "20:00",
      },
      {
        dayOfWeek: "https://schema.org/Friday",
        opens: "07:00",
        closes: "14:00",
      },
    ],
  },
  mapQuery: "רחוב שאולזון 51, ירושלים",
  maps: {
    google: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("רחוב שאולזון 51 ירושלים")}`,
    waze: `https://waze.com/ul?q=${encodeURIComponent("רחוב שאולזון 51 ירושלים")}&navigate=yes`,
  },
} as const;
