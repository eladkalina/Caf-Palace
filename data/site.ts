/**
 * ✏️  EDIT ME — everything you'll likely want to change lives in this file.
 * Leave a value as "" and it simply won't be shown on the site.
 */

export const site = {
  name: "Café Palace",
  tagline: "Kosher dairy food truck",
  description:
    "Café Palace is a kosher dairy food truck serving grandma's recipes — pasta, pizza, veggie sushi, desserts and more — at affordable prices in a warm, welcoming place for families and friends.",

  // ── Contact & social (leave "" to hide) ─────────────────────────────
  phone: "", // e.g. "+1 555 123 4567"
  email: "", // e.g. "hello@cafepalace.com"
  whatsapp: "", // digits only with country code, e.g. "15551234567"
  instagram: "", // full URL, e.g. "https://instagram.com/cafepalace"
  facebook: "", // full URL
  tiktok: "", // full URL

  // ── Where to find the truck (leave "" / [] to hide) ─────────────────
  location: "", // e.g. "Main Street & 5th Ave, Your City"
  hours: [] as { days: string; time: string }[],
  // e.g. [{ days: "Sun – Thu", time: "11:00 – 20:00" }]
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/kosher", label: "Kosher" },
  { href: "/our-story", label: "Our Story" },
  { href: "/videos", label: "Videos" },
];

/**
 * ▶️  YouTube videos — paste your links below (watch, youtu.be, shorts or embed links all work).
 * An entry whose URL is not a valid YouTube link shows a friendly "coming soon" card.
 * The first entry is shown large; delete or add entries freely.
 */
export const videos = [
  {
    title: "Meet Café Palace",
    description: "A little tour of our palace on wheels.",
    url: "https://youtube.com/shorts/qb3YKBtYQZM?feature=share",
  },
  // Add more videos by copying the block above, e.g.:
  // { title: "Another video", description: "A short description.", url: "https://youtu.be/XXXXXXXXXXX" },
];

/**
 * ✡️  Kosher certification details (all optional).
 * Add them and the Kosher page will display a certificate card.
 * Put the certificate image/PDF in /public/kosher/ and reference it, e.g. "/kosher/certificate.jpg".
 */
export const kosher = {
  agency: "", // e.g. "Your local Vaad / certifying agency"
  certificateNumber: "",
  validThrough: "", // e.g. "December 2026"
  certificateImage: "", // e.g. "/kosher/certificate.jpg"
};
