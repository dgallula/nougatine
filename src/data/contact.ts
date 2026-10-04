/**
 * Business contact data.
 * Fields marked verified: false must be confirmed with the bakery before publishing as fact.
 */

/** Local Jerusalem number — contact via WhatsApp only. */
const WHATSAPP_LOCAL = "026421242";
const WHATSAPP_DISPLAY = "02-642-1242";
const WHATSAPP_E164 = "97226421242";

export const contact = {
  neighborhood: {
    value: "הר נוף, ירושלים",
    verified: true,
  },
  address: {
    value: "רחוב שאולזון 51, ירושלים",
    verified: true,
  },
  /** No separate phone line — reach them on WhatsApp. */
  phone: null,
  whatsapp: {
    value: WHATSAPP_DISPLAY,
    local: WHATSAPP_LOCAL,
    href: `https://wa.me/${WHATSAPP_E164}`,
    verified: true,
  },
  email: {
    value: "אימייל — לאימות",
    href: undefined as string | undefined,
    verified: false,
  },
  hours: {
    value: "א׳–ה׳ 07:00–20:00 · ו׳ עד 14:00",
    detail: "ראשון עד חמישי 07:00–20:00, יום שישי עד 14:00",
    verified: true,
  },
  mapQuery: {
    value: "רחוב שאולזון 51, ירושלים",
    verified: true,
  },
} as const;
