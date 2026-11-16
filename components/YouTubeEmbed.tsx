"use client";

import { useState } from "react";
import { Play } from "./Icons";

/** Click-to-load player: no YouTube scripts or cookies until the visitor presses play (fast + privacy-friendly). */
export function YouTubeEmbed({ id, title, vertical = false }: { id: string; title: string; vertical?: boolean }) {
  const [on, setOn] = useState(false);
  return (
    <div className={`relative ${vertical ? "mx-auto aspect-[9/16] w-full max-w-[360px]" : "aspect-video"} overflow-hidden rounded-[1.75rem] bg-cocoa shadow-soft ring-4 ring-white`}>
      {on ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setOn(true)} className="group absolute inset-0 h-full w-full" aria-label={`Play video: ${title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          <span className="absolute inset-0 bg-gradient-to-t from-cocoa/60 to-transparent" />
          <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-berry text-white shadow-pop ring-4 ring-white/80 transition group-hover:scale-110">
            <Play className="ml-1 h-9 w-9" />
          </span>
        </button>
      )}
    </div>
  );
}
