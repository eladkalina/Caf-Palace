import type { MetadataRoute } from "next";
import { nav } from "@/data/site";

const base = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((n) => ({ url: `${base}${n.href === "/" ? "" : n.href}`, changeFrequency: "monthly", priority: n.href === "/" ? 1 : 0.8 }));
}
