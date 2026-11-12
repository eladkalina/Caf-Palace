import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Crown, Heart, Sparkle } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Story",
  description: "The history of Café Palace: a kosher dairy food truck born from grandma's recipes and a dream to bring the community together.",
};

const chapters = [
  {
    title: "Grandma's kitchen",
    emoji: "👵",
    text: ["Since I was little, I always loved cooking with my grandma. She taught me her special dairy recipes, and I enjoyed spending time with her in the kitchen."],
  },
  {
    title: "A gap to fill",
    emoji: "🚚",
    text: ["Where I live, there are no kosher restaurants, so I decided to open my own food truck called Café Palace."],
  },
  {
    title: "A place to gather",
    emoji: "💕",
    text: [
      "I wanted to create a place where everyone in the Jewish community could enjoy delicious kosher food at affordable prices.",
      "I also wanted it to be a nice, quiet, and welcoming place where families and friends could hang out, relax, and spend time together.",
    ],
  },
];

export default function OurStory() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-petal via-blush to-cream pb-16 pt-14 text-center">
        <Sparkle className="twinkle absolute left-[10%] top-16 h-7 w-7 text-gold" />
        <Heart className="float absolute right-[10%] top-28 h-9 w-9 text-rose/60" />
        <Reveal className="mx-auto max-w-3xl px-4">
          <div className="relative mx-auto h-56 w-56 sm:h-64 sm:w-64">
            <div className="spin-slow absolute inset-[-10px] rounded-full border-[3px] border-dashed border-gold/80" aria-hidden="true" />
            <Image src="/images/owner.webp" alt="The owner of Café Palace smiling" width={450} height={450} priority className="h-full w-full rounded-full object-cover shadow-pop ring-[6px] ring-white" />
            <Crown className="absolute -top-9 left-1/2 h-12 w-16 -translate-x-1/2 -rotate-6 drop-shadow-md" />
            <Heart className="float absolute -right-3 bottom-4 h-10 w-10 text-rose" />
          </div>
          <p className="mt-6 font-display text-3xl font-bold italic text-cocoa">The heart behind the palace</p>
          <p className="mt-3 text-sm font-black uppercase tracking-[0.2em] text-amber">Café Palace · Food Truck History</p>
          <h1 className="mt-2 font-display text-6xl font-bold italic leading-none text-berry sm:text-8xl">Our Story</h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <ol className="relative space-y-12 border-l-4 border-dotted border-gold/70 pl-8 sm:pl-12">
          {chapters.map((c, i) => (
            <Reveal as="li" key={c.title} delay={80} className="relative">
              <span className="absolute -left-[3.15rem] top-1 grid h-12 w-12 place-items-center rounded-full bg-white text-2xl shadow-pop ring-4 ring-petal sm:-left-[4.15rem] sm:h-14 sm:w-14" aria-hidden="true">{c.emoji}</span>
              <div className="rounded-[2rem] bg-white p-7 shadow-soft ring-2 ring-petal sm:p-9">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-amber">Chapter {i + 1}</p>
                <h2 className="mt-1 font-display text-4xl font-bold italic text-berry sm:text-5xl">{c.title}</h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed sm:text-xl">
                  {c.text.map((t) => <p key={t}>{t}</p>)}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-berry to-berry-dark p-8 text-center text-white shadow-pop sm:p-14">
          <div className="dots absolute inset-0 opacity-30" aria-hidden="true" />
          <Crown className="relative mx-auto h-14 w-20" />
          <p className="relative mt-4 text-sm font-black uppercase tracking-[0.2em] text-gold">Our dream</p>
          <blockquote className="relative mt-3 font-display text-4xl font-bold italic leading-tight sm:text-6xl">
            My dream is to share my grandma&apos;s recipes and make people happy through food.
          </blockquote>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/menu" className="btn btn-gold">Taste the recipes</Link>
            <Link href="/videos" className="btn bg-white/15 text-white ring-2 ring-white/50 hover:bg-white/25">Watch our videos</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
