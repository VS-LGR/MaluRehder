"use client";

import Image from "next/image";
import { useMemo } from "react";
import type { CollectionModel } from "@/types/site";

const FACE_COUNT = 10;

type CurationCarousel3DProps = {
  models: CollectionModel[];
  /** editorial = moldura vidro sobre fundo escuro; editorialLight = vidro claro */
  tone: "editorial" | "editorialLight";
};

export function CurationCarousel3D({ models, tone }: CurationCarousel3DProps) {
  const faces = useMemo(() => {
    if (!models.length) return [];
    return Array.from({ length: FACE_COUNT }, (_, i) => models[i % models.length]);
  }, [models]);

  if (!faces.length) return null;

  const glassTone = tone === "editorialLight" ? "light" : "editorial";

  return (
    <div
      className="curation-3d-scene relative mx-auto w-full max-w-full select-none lg:translate-x-[6%] xl:translate-x-[4%] 2xl:translate-x-[2%]"
      aria-label="Vitrine em rotacao continua"
    >
      <div className="pointer-events-none absolute inset-x-[18%] top-[10%] h-[40%] rounded-[45%] bg-[radial-gradient(ellipse_at_center,rgba(255,220,160,0.18)_0%,transparent_70%)] opacity-80" />
      <div className="curation-3d-ring relative mx-auto flex min-h-[min(34vh,320px)] w-full items-center justify-center sm:min-h-[min(38vh,380px)] lg:min-h-[min(42vh,440px)] [transform-style:preserve-3d]">
        {faces.map((model, i) => (
          <div
            key={`${model.id}-${i}`}
            className="curation-3d-face pointer-events-none absolute left-1/2 top-1/2 will-change-transform"
            style={{
              transform: `translate(-50%, -50%) rotateY(${i * 36}deg) translateZ(var(--curation-tz))`,
            }}
          >
            <div
              className={`curation-liquid-glass curation-liquid-glass--${glassTone} relative box-border p-[2px]`}
              style={{
                width: "var(--curation-face-w)",
                height: "var(--curation-face-h)",
              }}
            >
              <div className="curation-liquid-glass__inner absolute inset-[2px]">
                <Image
                  src={model.visual.src}
                  alt={model.visual.alt}
                  fill
                  quality={90}
                  preload={i === 0}
                  sizes="(max-width: 640px) 34vw, (max-width: 1024px) 28vw, (max-width: 1536px) 240px, 280px"
                  className="object-cover"
                  draggable={false}
                />
                <div
                  className="curation-liquid-glass__shimmer pointer-events-none absolute inset-0 bg-[linear-gradient(127deg,rgba(255,255,255,0.65)_0%,rgba(255,255,255,0.05)_38%,transparent_52%,rgba(255,255,255,0.2)_100%)] mix-blend-overlay"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-black/30"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <p
        className={`mt-4 text-center text-[11px] tracking-[0.22em] ${
          tone === "editorialLight" ? "text-neutral-600" : "text-stone-400/90"
        }`}
      >
        Vitrine continua — passe o cursor para pausar
      </p>
    </div>
  );
}
