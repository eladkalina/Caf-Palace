import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Crown, Sparkle } from "@/components/Icons";
import { fmt, menu, type MenuCategory } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu",
  description: "Café Palace kosher dairy menu: pasta vodka, cheese pizza, Greek salad, veggie sushi, drinks and desserts.",
};

function Heading({ c }: { c: MenuCategory }) {
  return (
    <h2 className={`ribbon ${c.tone === "pink" ? "ribbon-pink" : "ribbon-orange"} -ml-2 text-4xl sm:text-5xl`}>
      <Crown className="h-8 w-10 shrink-0" /> {c.title}
    </h2>
  );
}

function Price({ n }: { n: number }) {
  return <span className="font-black text-berry text-2xl">{fmt(n)}</span>;
}

function Cards({ c }: { c: MenuCategory }) {
  return (
    <ul className="mt-8 grid gap-5 sm:grid-cols-2">
      {c.items.map((it, i) => (
        <Reveal as="li" key={it.name} delay={i * 80} className="group rounded-[1.6rem] bg-white p-4 shadow-md ring-2 ring-petal/80 transition hover:-translate-y-1.5 hover:ring-rose">
          <div className="grid aspect-[16/10] place-items-center rounded-2xl bg-gradient-to-br from-blush to-petal/60">
            {it.image && <Image src={it.image} alt={it.name} width={360} height={225} className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-110 group-hover:-rotate-2" />}
          </div>
          <div className="mt-4 flex items-baseline gap-3 px-1">
            <h3 className="text-xl font-extrabold leading-tight">{it.name}{it.note && <span className="block text-sm font-semibold text-cocoa/70">({it.note})</span>}</h3>
            <span className="leader" aria-hidden="true" />
            <Price n={it.price} />
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

function Feature({ c }: { c: MenuCategory }) {
  return (
    <div className="mt-8 grid items-center gap-6 sm:grid-cols-[0.9fr_1.1fr]">
      <Reveal className="grid place-items-center rounded-[1.6rem] bg-gradient-to-br from-blush to-petal/60 p-4">
        {c.image && <Image src={c.image} alt={c.title} width={400} height={c.id === "drinks" ? 560 : 300} className={`h-auto w-full object-contain ${c.id === "drinks" ? "max-h-72 w-auto" : "max-w-sm"} float`} style={{ "--r": "-2deg" } as React.CSSProperties} />}
      </Reveal>
      <ul className="space-y-5">
        {c.items.map((it, i) => (
          <Reveal as="li" key={it.name} delay={i * 80}>
            <div className="flex items-baseline gap-3">
              <h3 className="text-xl font-extrabold leading-tight sm:text-2xl">{it.name}</h3>
              <span className="leader" aria-hidden="true" />
              <Price n={it.price} />
            </div>
            {it.note && <p className="mt-0.5 font-semibold text-cocoa/70">{it.note}</p>}
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export default function MenuPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-petal to-cream pb-14 pt-14 text-center">
        <Sparkle className="twinkle absolute left-[12%] top-12 h-6 w-6 text-gold" />
        <Sparkle className="twinkle absolute right-[14%] top-24 h-5 w-5 text-rose [animation-delay:1.2s]" />
        <Reveal className="mx-auto max-w-3xl px-4">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-amber">Kosher · Dairy</p>
          <h1 className="mt-2 font-display text-6xl font-bold italic leading-none text-berry sm:text-8xl">Food Truck Menu</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cocoa/85">Everything is dairy, made with love and priced for families.</p>
        </Reveal>

        <nav aria-label="Menu categories" className="sticky top-[4.4rem] z-30 mx-auto mt-10 flex max-w-fit flex-wrap justify-center gap-2 rounded-full bg-white/90 p-2 shadow-soft backdrop-blur-xl sm:top-[4.9rem]">
          {menu.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="rounded-full px-4 py-2 text-sm font-extrabold text-berry transition hover:bg-berry hover:text-white">{c.title}</a>
          ))}
        </nav>
      </section>

      <div className="mx-auto max-w-6xl space-y-14 px-4 pt-6 sm:px-6">
        {menu.map((c) => (
          <section key={c.id} id={c.id} className="board p-6 sm:p-10">
            <Reveal><Heading c={c} /></Reveal>
            {c.layout === "cards" ? <Cards c={c} /> : <Feature c={c} />}
          </section>
        ))}

        <Reveal className="rounded-[2rem] bg-gradient-to-br from-berry to-berry-dark p-8 text-center text-white shadow-pop sm:p-12">
          <p className="font-display text-4xl font-bold italic sm:text-5xl">Love the printed menu?</p>
          <p className="mx-auto mt-3 max-w-lg text-white/90">Open or save the full Café Palace menu to share with friends and family.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="/images/menu-full.jpg" target="_blank" rel="noopener" className="btn btn-gold">Open full menu</a>
            <a href="/images/menu-full.jpg" download="Cafe-Palace-Menu.jpg" className="btn bg-white/15 text-white ring-2 ring-white/50 hover:bg-white/25">Download</a>
          </div>
        </Reveal>
        <p className="text-center text-sm font-semibold text-cocoa/70">Prices in USD. Menu and prices may change — ask us at the truck.</p>
      </div>
    </>
  );
}
