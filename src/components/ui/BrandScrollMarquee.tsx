"use client";

import { Cormorant_Garamond, Dancing_Script } from "next/font/google";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

const scriptFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const serifAccent = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"],
  display: "swap",
});

/** Scroll para baixo → texto desloca para a direita (translateX positivo). */
const SCROLL_TO_X = 0.42;

/** Repetições por segmento — dois segmentos idênticos cobrem qualquer largura sem falha. */
const SEGMENT_SPANS = 32;

function LabelUnit() {
  return (
    <span className="inline-flex shrink-0 items-baseline gap-0.5 whitespace-nowrap px-3 md:px-5">
      <span
        className={`${serifAccent.className} text-[0.95em] font-light italic tracking-[0.12em] text-[#faf8f4]/95`}
      >
        Malu
      </span>
      <span className={`${scriptFont.className} text-[1.05em] font-normal text-[#faf6ef]/98`}>rehder</span>
    </span>
  );
}

function Segment({ id }: { id: string }) {
  return (
    <>
      {Array.from({ length: SEGMENT_SPANS }, (_, i) => (
        <LabelUnit key={`${id}-${i}`} />
      ))}
    </>
  );
}

export function BrandScrollMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const segmentRef = useRef<HTMLDivElement>(null);
  const segmentWRef = useRef(0);

  const measure = useCallback(() => {
    const el = segmentRef.current;
    if (!el) return;
    const w = el.offsetWidth;
    if (w > 0) {
      segmentWRef.current = w;
    }
  }, []);

  useLayoutEffect(() => {
    measure();
    const el = segmentRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const raw = window.scrollY * SCROLL_TO_X;
      const w = segmentWRef.current;
      const track = trackRef.current;
      if (!track) return;
      if (w <= 0) {
        track.style.transform = "translate3d(0px, 0, 0)";
        return;
      }
      // Mantem o deslocamento no intervalo [-w, 0), evitando faixa vazia.
      const tx = (((raw % w) + w) % w) - w;
      track.style.transform = `translate3d(${tx}px, 0, 0)`;
    };

    const onScroll = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(frame);
    };
  }, [measure]);

  return (
    <div
      className="relative isolate w-full overflow-hidden border-y border-white/[0.28] bg-black/[0.08] py-1.5 before:pointer-events-none before:absolute before:inset-x-0 before:top-[3px] before:border-t before:border-white/[0.16] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-[3px] after:border-b after:border-white/[0.16] md:py-2"
      aria-hidden
    >
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex min-h-[2.25rem] w-max transform-gpu will-change-transform select-none md:min-h-[2.65rem]"
        >
          <div
            ref={segmentRef}
            className="flex shrink-0 items-center text-base leading-none md:text-lg"
          >
            <Segment id="a" />
          </div>
          <div className="flex shrink-0 items-center text-base leading-none md:text-lg" aria-hidden>
            <Segment id="b" />
          </div>
          <div className="flex shrink-0 items-center text-base leading-none md:text-lg" aria-hidden>
            <Segment id="c" />
          </div>
        </div>
      </div>
    </div>
  );
}
