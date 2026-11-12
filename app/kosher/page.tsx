import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Check, Sparkle } from "@/components/Icons";
import { kosher, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Kosher Certification",
  description: "Café Palace is a kosher dairy food truck. Learn what Kosher Dairy means and how to ask about our certification.",
};

const points = [
  { t: "100% dairy", d: "Our entire menu is dairy — no meat and no poultry." },
  { t: "Made for the community", d: "Open to everyone in the Jewish community, and to anyone who loves good food." },
  { t: "Affordable", d: "Kosher shouldn't be a luxury. We keep our prices friendly for families." },
];

const faqs = [
  { q: "What does “Kosher Dairy” mean?", a: "In Jewish dietary law, foods are divided into dairy, meat and pareve (neutral). Kosher Dairy food contains dairy ingredients and is kept separate from meat. At Café Palace, everything on the menu is dairy." },
  { q: "Is everything on the menu dairy?", a: "Yes. Pasta, pizza, sushi, salads, omelets, drinks and desserts are all part of our dairy kitchen." },
  { q: "I have a question about our supervision.", a: "We're happy to help. Reach out through the contact details on this site, or just ask us at the truck." },
];

export default function KosherPage() {
  const hasCert = kosher.agency || kosher.certificateNumber || kosher.validThrough || kosher.certificateImage;
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fff3d6] via-blush to-cream pb-20 pt-14">
        <Sparkle className="twinkle absolute left-[10%] top-20 h-7 w-7 text-gold" />
        <Sparkle className="twinkle absolute right-[12%] top-40 h-5 w-5 text-rose [animation-delay:1s]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="text-center md:text-left">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-amber">Kosher certification</p>
            <h1 className="mt-2 font-display text-6xl font-bold italic leading-[0.98] text-berry sm:text-8xl">Kosher Dairy, through and through.</h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cocoa/85 md:mx-0 md:text-xl">
              Café Palace exists so that everyone in the community can enjoy delicious kosher food — with total peace of mind.
            </p>
          </Reveal>
          <Reveal delay={150} className="mx-auto w-full max-w-md">
            <Image src="/images/kosher-badge.webp" alt="Kosher Dairy certification badge with the OU symbol" width={800} height={614} priority sizes="(min-width: 768px) 420px, 90vw" className="float h-auto w-full drop-shadow-2xl" style={{ "--r": "2deg" } as React.CSSProperties} />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ul className="grid gap-6 md:grid-cols-3">
          {points.map((p, i) => (
            <Reveal as="li" key={p.t} delay={i * 100} className="rounded-[2rem] bg-white p-7 shadow-soft ring-2 ring-petal">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-leaf text-white shadow-md"><Check className="h-6 w-6" /></span>
              <h2 className="mt-4 font-display text-3xl font-bold italic text-berry">{p.t}</h2>
              <p className="mt-2 text-lg text-cocoa/85">{p.d}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {hasCert && (
        <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
          <Reveal className="board p-8 sm:p-10">
            <h2 className="font-display text-4xl font-bold italic text-berry sm:text-5xl">Our certificate</h2>
            <div className={`mt-6 grid gap-8 ${kosher.certificateImage ? "md:grid-cols-2" : ""}`}>
              <dl className="space-y-4 text-lg">
                {kosher.agency && <div><dt className="text-sm font-black uppercase tracking-widest text-amber">Certifying agency</dt><dd className="font-bold">{kosher.agency}</dd></div>}
                {kosher.certificateNumber && <div><dt className="text-sm font-black uppercase tracking-widest text-amber">Certificate no.</dt><dd className="font-bold">{kosher.certificateNumber}</dd></div>}
                {kosher.validThrough && <div><dt className="text-sm font-black uppercase tracking-widest text-amber">Valid through</dt><dd className="font-bold">{kosher.validThrough}</dd></div>}
              </dl>
              {kosher.certificateImage && (
                <a href={kosher.certificateImage} target="_blank" rel="noopener" className="block overflow-hidden rounded-2xl ring-2 ring-petal transition hover:scale-[1.02]">
                  <Image src={kosher.certificateImage} alt="Café Palace kosher certificate" width={700} height={900} className="h-auto w-full" />
                </a>
              )}
            </div>
          </Reveal>
        </section>
      )}

      <section className="mx-auto max-w-3xl px-4 pb-10 sm:px-6">
        <Reveal><h2 className="text-center font-display text-5xl font-bold italic text-berry">Good to know</h2></Reveal>
        <div className="mt-8 space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 80}>
              <details className="group rounded-3xl bg-white p-6 shadow-md ring-2 ring-petal open:ring-rose">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-extrabold">
                  {f.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-petal text-xl font-black text-berry transition group-open:rotate-45 group-open:bg-berry group-open:text-white">+</span>
                </summary>
                <p className="mt-3 text-lg leading-relaxed text-cocoa/85">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link href="/menu" className="btn btn-primary text-lg">Browse the menu</Link>
        </Reveal>
      </section>
    </>
  );
}
