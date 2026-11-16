import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Check, Clock, Crown, Facebook, Heart, Instagram, Mail, Phone, Pin, Play, Sparkle, TikTok, WhatsApp } from "@/components/Icons";
import { featured, fmt } from "@/data/menu";
import { site } from "@/data/site";

const marquee = ["Pasta Vodka", "Cheese Pizza", "Greek Salad", "Savory Pastries", "Veggie Sushi", "Chocolate Soufflé", "Fruit Parfait", "Smoothies", "Lemonade"];

export default function Home() {
  const contacts = [
    site.phone && { href: `tel:${site.phone.replace(/\s/g, "")}`, label: site.phone, Icon: Phone },
    site.whatsapp && { href: `https://wa.me/${site.whatsapp}`, label: "WhatsApp us", Icon: WhatsApp },
    site.email && { href: `mailto:${site.email}`, label: site.email, Icon: Mail },
    site.instagram && { href: site.instagram, label: "Instagram", Icon: Instagram },
    site.facebook && { href: site.facebook, label: "Facebook", Icon: Facebook },
    site.tiktok && { href: site.tiktok, label: "TikTok", Icon: TikTok },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof Mail }[];

  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-petal via-blush to-cream">
        <div className="absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-rose/25 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-24 bottom-0 -z-10 h-96 w-96 rounded-full bg-gold/30 blur-3xl" aria-hidden="true" />
        <Sparkle className="twinkle absolute left-[8%] top-[18%] -z-10 h-7 w-7 text-gold" />
        <Sparkle className="twinkle absolute right-[10%] top-[12%] -z-10 h-5 w-5 text-rose [animation-delay:1s]" />
        <Heart className="float absolute bottom-[22%] left-[5%] -z-10 hidden h-10 w-10 text-rose/60 sm:block" />
        <Sparkle className="twinkle absolute bottom-[30%] right-[6%] -z-10 h-8 w-8 text-gold [animation-delay:2s]" />

        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-24 pt-10 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:pb-32 md:pt-16">
          <div className="text-center md:text-left">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-berry shadow-md">
                <Crown className="h-5 w-6" /> Kosher Dairy Food Truck
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-5 font-display text-6xl font-bold italic leading-[0.98] text-berry sm:text-7xl lg:text-8xl">
                Grandma&apos;s recipes, <span className="text-cocoa">served from our little palace.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cocoa/85 md:mx-0 md:text-xl">
                Delicious kosher dairy food at affordable prices — in a quiet, welcoming spot where families and friends can relax and enjoy time together.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                <Link href="/menu" className="btn btn-primary text-lg">See the menu</Link>
                <Link href="/our-story" className="btn btn-ghost text-lg">Our story</Link>
              </div>
              <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-extrabold text-cocoa/80 md:justify-start">
                {["100% Kosher Dairy", "Family recipes", "Pocket-friendly prices"].map((t) => (
                  <li key={t} className="inline-flex items-center gap-2">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-leaf text-white"><Check className="h-3 w-3" /></span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={150} className="relative mx-auto w-full max-w-md">
            <div className="spin-slow absolute inset-[-6%] rounded-full border-[3px] border-dashed border-gold/70" aria-hidden="true" />
            <div className="float relative" style={{ "--r": "-2deg" } as React.CSSProperties}>
              <Image src="/images/logo.webp" alt="Café Palace — kosher dairy food truck logo with a pink castle, crown and food truck" width={1000} height={994} priority sizes="(min-width: 768px) 440px, 90vw" className="h-auto w-full drop-shadow-[0_30px_40px_rgba(211,23,94,0.35)]" />
            </div>
          </Reveal>
        </div>

        <div className="scallop absolute inset-x-0 bottom-0 translate-y-px rotate-180 [--scallop:var(--color-berry)]" aria-hidden="true" />
      </section>

      {/* ───────── MARQUEE ───────── */}
      <section className="marquee relative overflow-hidden bg-berry py-4 text-white" aria-label="Menu highlights">
        <div className="dots absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="marquee-track relative flex gap-10 whitespace-nowrap font-display text-3xl font-bold italic">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i} className="inline-flex items-center gap-10" aria-hidden={i >= marquee.length ? true : undefined}>
              {m} <Crown className="h-6 w-8 shrink-0" />
            </span>
          ))}
        </div>
      </section>

      {/* ───────── FEATURED DISHES ───────── */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionHeading kicker="Fan favorites" title="Fresh from the truck">
            Simple, comforting and made with love — a taste of grandma&apos;s kitchen in every bite.
          </SectionHeading>
        </Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((d, i) => (
            <Reveal as="li" key={d.name} delay={(i % 3) * 90}>
              <Link href="/menu" className="group relative block overflow-hidden rounded-[2rem] bg-white p-5 shadow-soft ring-2 ring-petal transition duration-300 hover:-translate-y-2 hover:ring-rose">
                <div className="grid aspect-[4/3] place-items-center rounded-[1.4rem] bg-[#fdf4f0] ring-1 ring-petal/60">
                  <Image src={d.image} alt={d.name} width={360} height={270} className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-110 group-hover:-rotate-2" />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-extrabold">{d.name}</h3>
                  <span className="rounded-full bg-berry px-3.5 py-1 text-lg font-black text-white shadow-pop">{fmt(d.price)}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-12 text-center">
          <Link href="/menu" className="btn btn-gold text-lg">View the full menu</Link>
        </Reveal>
      </section>

      {/* ───────── KOSHER BAND ───────── */}
      <section className="relative bg-gradient-to-br from-[#fff3d6] via-cream to-blush py-24">
        <div className="scallop absolute inset-x-0 top-0 [--scallop:var(--color-cream)]" aria-hidden="true" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="mx-auto w-full max-w-sm">
            <Image src="/images/kosher-badge.webp" alt="Kosher Dairy certification badge" width={640} height={491} sizes="(min-width: 768px) 360px, 80vw" className="float h-auto w-full drop-shadow-2xl" style={{ "--r": "2deg" } as React.CSSProperties} />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-amber">Kosher, always</p>
            <h2 className="mt-2 font-display text-5xl font-bold italic leading-tight text-berry sm:text-6xl">Kosher Dairy, from the first bite to the last.</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cocoa/85">
              Where we live there were no kosher restaurants — so we built one on wheels. Everything we serve is dairy, prepared with care for our community.
            </p>
            <Link href="/kosher" className="btn btn-primary mt-7">About our kosher certification</Link>
          </Reveal>
        </div>
      </section>

      {/* ───────── STORY TEASER ───────── */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-berry to-berry-dark p-8 text-white shadow-pop sm:p-14">
            <div className="dots absolute inset-0 opacity-30" aria-hidden="true" />
            <Crown className="absolute -right-4 -top-4 h-28 w-36 rotate-12 opacity-90 sm:h-40 sm:w-52" />
            <div className="relative max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-gold">Our story</p>
              <blockquote className="mt-4 font-display text-4xl font-bold italic leading-tight sm:text-6xl">
                &ldquo;My dream is to share my grandma&apos;s recipes and make people happy through food.&rdquo;
              </blockquote>
              <p className="mt-6 max-w-xl text-lg text-white/90">
                It all started in a kitchen, with a grandma and a little cook who loved spending time with her.
              </p>
              <Link href="/our-story" className="btn btn-gold mt-8">Read our story</Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ───────── VIDEO TEASER ───────── */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <Reveal>
          <Link href="/videos" className="group grid items-center gap-8 rounded-[2.5rem] bg-white p-6 shadow-soft ring-2 ring-petal transition hover:ring-rose sm:p-10 md:grid-cols-[1fr_1.1fr]">
            <div className="relative grid aspect-video place-items-center overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-rose to-berry">
              <div className="dots absolute inset-0 opacity-40" aria-hidden="true" />
              <span className="relative grid h-20 w-20 place-items-center rounded-full bg-white text-berry shadow-xl transition group-hover:scale-110">
                <Play className="ml-1 h-9 w-9" />
              </span>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-amber">Watch</p>
              <h2 className="mt-2 font-display text-5xl font-bold italic leading-tight text-berry">Come hang out with us</h2>
              <p className="mt-4 text-lg text-cocoa/80">See the truck, the kitchen and the people behind Café Palace.</p>
              <span className="btn btn-ghost mt-6">Watch videos</span>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* ───────── FIND US ───────── */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionHeading kicker="Visit us" title="Find the palace">
            Want to know where we&apos;ll be parked next? Say hello — we&apos;d love to see you.
          </SectionHeading>
        </Reveal>
        {(site.location || site.hours.length > 0) && (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {site.location && (
              <Reveal className="rounded-[2rem] bg-white p-7 shadow-soft ring-2 ring-petal">
                <p className="flex items-center gap-2 font-display text-3xl font-bold italic text-berry"><Pin className="h-6 w-6" /> Location</p>
                <p className="mt-3 text-lg">{site.location}</p>
              </Reveal>
            )}
            {site.hours.length > 0 && (
              <Reveal delay={100} className="rounded-[2rem] bg-white p-7 shadow-soft ring-2 ring-petal">
                <p className="flex items-center gap-2 font-display text-3xl font-bold italic text-berry"><Clock className="h-6 w-6" /> Hours</p>
                <dl className="mt-3 space-y-1 text-lg">
                  {site.hours.map((h) => (
                    <div key={h.days} className="flex justify-between gap-4"><dt className="font-bold">{h.days}</dt><dd>{h.time}</dd></div>
                  ))}
                </dl>
              </Reveal>
            )}
          </div>
        )}
        {!site.location && site.hours.length === 0 && contacts.length === 0 && (
          <Reveal className="mx-auto mt-12 max-w-2xl rounded-[2rem] bg-white p-8 text-center shadow-soft ring-2 ring-petal">
            <p className="font-display text-4xl font-bold italic text-berry">Coming to a street near you</p>
            <p className="mt-3 text-lg text-cocoa/80">Our location and opening hours will be posted here very soon. In the meantime, take a peek at the menu and plan your order!</p>
            <Link href="/menu" className="btn btn-primary mt-6">Plan your order</Link>
          </Reveal>
        )}
        {contacts.length > 0 && (
          <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
            {contacts.map(({ href, label, Icon }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="btn btn-ghost">
                <Icon className="h-5 w-5" /> {label}
              </a>
            ))}
          </Reveal>
        )}
      </section>
    </>
  );
}
