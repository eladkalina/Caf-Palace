import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/data/site";
import { Facebook, Heart, Instagram, Mail, Phone, TikTok, WhatsApp } from "./Icons";

export function Footer() {
  const socials = [
    site.instagram && { href: site.instagram, label: "Instagram", Icon: Instagram },
    site.facebook && { href: site.facebook, label: "Facebook", Icon: Facebook },
    site.tiktok && { href: site.tiktok, label: "TikTok", Icon: TikTok },
    site.whatsapp && { href: `https://wa.me/${site.whatsapp}`, label: "WhatsApp", Icon: WhatsApp },
    site.email && { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
    site.phone && { href: `tel:${site.phone.replace(/\s/g, "")}`, label: "Phone", Icon: Phone },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof Mail }[];

  return (
    <footer className="relative mt-24 bg-gradient-to-b from-berry to-berry-dark text-white">
      <div className="scallop-up absolute inset-x-0 -top-[25px]" style={{ "--scallop": "var(--color-berry)" } as React.CSSProperties} aria-hidden="true" />
      <div className="dots absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <span className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-cream shadow-xl ring-4 ring-gold/70"><Image src="/images/logo-sm.webp" alt="" width={84} height={84} className="h-[5.2rem] w-[5.2rem]" /></span>
            <div>
              <p className="font-display text-3xl font-bold italic leading-none">Café Palace</p>
              <p className="mt-1 text-sm font-bold text-petal">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-white/85">Grandma&apos;s recipes, kosher &amp; dairy, served with a smile from our little palace on wheels.</p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold italic text-gold">Explore</h2>
          <ul className="mt-3 space-y-2 font-bold">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-white/90 transition hover:text-gold">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold italic text-gold">Kosher Dairy</h2>
          <Link href="/kosher" className="mt-3 block w-40 transition hover:scale-105" aria-label="About our kosher certification">
            <Image src="/images/kosher-badge.webp" alt="Kosher Dairy" width={320} height={246} className="h-auto w-full drop-shadow-xl" />
          </Link>
          {socials.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-3">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full bg-white/15 transition hover:bg-gold hover:text-cocoa">
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="relative border-t border-white/20 py-5 text-center text-sm text-white/80">
        <p className="inline-flex items-center gap-1.5">
          © {new Date().getFullYear()} Café Palace · Made with <Heart className="h-4 w-4 text-petal" /> and a lot of cheese
        </p>
      </div>
    </footer>
  );
}
