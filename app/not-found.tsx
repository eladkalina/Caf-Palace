import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto grid min-h-[60vh] max-w-xl place-items-center px-6 py-24 text-center">
      <div>
        <p className="font-display text-8xl font-bold italic text-berry">Oops!</p>
        <p className="mt-3 text-xl">This page wandered off the truck. Let&apos;s get you back to the good stuff.</p>
        <Link href="/menu" className="btn btn-primary mt-8">See the menu</Link>
      </div>
    </section>
  );
}
