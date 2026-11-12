import { Sparkle } from "./Icons";

export function SectionHeading({
  kicker, title, children, center = true, light = false,
}: { kicker?: string; title: string; children?: React.ReactNode; center?: boolean; light?: boolean }) {
  return (
    <div className={`${center ? "text-center" : ""} mx-auto max-w-2xl`}>
      {kicker && (
        <p className={`inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] ${light ? "text-gold" : "text-amber"}`}>
          <Sparkle className="h-3.5 w-3.5" /> {kicker} <Sparkle className="h-3.5 w-3.5" />
        </p>
      )}
      <h2 className={`mt-2 font-display text-5xl font-bold italic leading-[1.05] sm:text-6xl ${light ? "text-white" : "text-berry"}`}>{title}</h2>
      {children && <p className={`mt-4 text-lg ${light ? "text-white/90" : "text-cocoa/80"}`}>{children}</p>}
    </div>
  );
}
