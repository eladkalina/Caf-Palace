import type { Metadata, Viewport } from "next";
import "@fontsource/lobster-two/700-italic.css";
import "@fontsource/lobster-two/700.css";
import "@fontsource-variable/nunito";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name} — Kosher Dairy Food Truck`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Kosher Dairy Food Truck`,
    description: site.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Café Palace kosher dairy food truck" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#d3175e" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: site.name,
    description: site.description,
    servesCuisine: ["Kosher", "Dairy", "Vegetarian"],
    url: siteUrl,
    image: `${siteUrl}/og.jpg`,
    hasMenu: `${siteUrl}/menu`,
    ...(site.phone && { telephone: site.phone }),
    ...(site.email && { email: site.email }),
  };
  return (
    <html lang="en">
      <body className="min-h-dvh">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-berry focus:px-5 focus:py-3 focus:font-bold focus:text-white">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
