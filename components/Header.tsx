"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "bg-cream/85 shadow-[0_8px_30px_-12px_rgb(211_23_94/0.35)] backdrop-blur-xl" : "bg-cream/60 backdrop-blur-md"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
          <Image src="/images/logo-sm.webp" alt="" width={56} height={56} priority className="h-12 w-12 sm:h-14 sm:w-14" />
          <span className="font-display text-2xl font-bold italic leading-none text-berry sm:text-3xl">
            Café <span className="text-cocoa">Palace</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((n) => {
            const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[0.95rem] font-extrabold transition ${active ? "bg-berry text-white shadow-pop" : "text-cocoa hover:bg-petal/70 hover:text-berry"}`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full bg-white text-berry shadow-md md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <div id="mobile-nav" className={`grid transition-[grid-template-rows] duration-300 md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <nav className="overflow-hidden" aria-label="Mobile" inert={!open}>
          <ul className="mx-4 mb-4 mt-1 space-y-1.5 rounded-3xl bg-white p-3 shadow-soft">
            {nav.map((n) => {
              const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
              return (
                <li key={n.href}>
                  <Link href={n.href} className={`block rounded-2xl px-4 py-3 text-lg font-extrabold ${active ? "bg-berry text-white" : "text-cocoa hover:bg-blush"}`}>
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
