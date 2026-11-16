import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Play, Sparkle } from "@/components/Icons";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { isShortUrl, parseYouTubeId } from "@/lib/youtube";
import { videos } from "@/data/site";

export const metadata: Metadata = {
  title: "Videos",
  description: "Watch Café Palace on YouTube — behind the scenes, the truck and grandma's recipes.",
};

function ComingSoon({ title }: { title: string }) {
  return (
    <div className="relative grid aspect-video place-items-center overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-rose to-berry text-white shadow-soft ring-4 ring-white">
      <div className="dots absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white/95 text-berry shadow-xl"><Play className="ml-1 h-8 w-8" /></span>
        <p className="mt-3 font-display text-3xl font-bold italic">Coming soon</p>
        <span className="sr-only">{title}</span>
      </div>
    </div>
  );
}

export default function VideosPage() {
  const items = videos.map((v) => ({ ...v, id: parseYouTubeId(v.url), vertical: isShortUrl(v.url) }));
  const [first, ...rest] = items;
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-petal to-cream pb-10 pt-14 text-center">
        <Sparkle className="twinkle absolute left-[12%] top-14 h-6 w-6 text-gold" />
        <Sparkle className="twinkle absolute right-[14%] top-28 h-5 w-5 text-rose [animation-delay:1.3s]" />
        <Reveal className="mx-auto max-w-3xl px-4">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-amber">Watch</p>
          <h1 className="mt-2 font-display text-6xl font-bold italic leading-none text-berry sm:text-8xl">Videos</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cocoa/85">Peek inside the palace — the truck, the kitchen and the food.</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {first && (
          <Reveal className={first.vertical ? "grid items-center gap-10 md:grid-cols-[360px_1fr]" : ""}>
            {first.id ? <YouTubeEmbed id={first.id} title={first.title} vertical={first.vertical} /> : <ComingSoon title={first.title} />}
            <div className={first.vertical ? "text-center md:text-left" : ""}>
              <h2 className="mt-6 font-display text-4xl font-bold italic text-berry sm:text-5xl md:mt-0">{first.title}</h2>
              <p className="mt-2 text-lg text-cocoa/80">{first.description}</p>
            </div>
          </Reveal>
        )}

        {rest.length > 0 && (
          <ul className="mt-16 grid gap-10 sm:grid-cols-2">
            {rest.map((v, i) => (
              <Reveal as="li" key={v.title + i} delay={i * 100}>
                {v.id ? <YouTubeEmbed id={v.id} title={v.title} vertical={v.vertical} /> : <ComingSoon title={v.title} />}
                <h3 className="mt-4 text-2xl font-extrabold">{v.title}</h3>
                <p className="text-cocoa/80">{v.description}</p>
              </Reveal>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
