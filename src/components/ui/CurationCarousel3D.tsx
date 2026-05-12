"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { CollectionModel } from "@/types/site";

const FACE_COUNT = 10;
/** Rotação idle mais lenta e contínua (~48s por volta). */
const SPIN_DEG_PER_SEC = 360 / 48;
/** Lerp baixo = aproximação suave ao cartão sob o cursor (menos “elástico”). */
const HOVER_LERP = 0.055;
const LEAVE_DEBOUNCE_MS = 140;

function nearestSnapAngle(currentDeg: number, faceIndex: number): number {
  const goalBase = -faceIndex * 36;
  let best = goalBase;
  for (let k = -5; k <= 5; k++) {
    const candidate = goalBase + k * 360;
    if (Math.abs(candidate - currentDeg) < Math.abs(best - currentDeg)) {
      best = candidate;
    }
  }
  return best;
}

type CurationCarousel3DProps = {
  models: CollectionModel[];
  /** editorial = moldura vidro sobre fundo escuro; editorialLight = vidro claro */
  tone: "editorial" | "editorialLight";
};

export function CurationCarousel3D({ models, tone }: CurationCarousel3DProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const hoverRef = useRef<number | null>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  const [reduceMotion, setReduceMotion] = useState(false);
  const [focusedFace, setFocusedFace] = useState<number | null>(null);

  const faces = useMemo(() => {
    if (!models.length) return [];
    return Array.from({ length: FACE_COUNT }, (_, i) => models[i % models.length]);
  }, [models]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const fn = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  useEffect(() => {
    return () => {
      if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current);
        leaveTimerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || faces.length === 0) return;

    if (reduceMotion) {
      scene.style.setProperty("--curation-ring-y", "0deg");
      return;
    }

    lastTimeRef.current = performance.now();

    const tick = (now: number) => {
      const last = lastTimeRef.current ?? now;
      const dt = Math.min((now - last) / 1000, 0.032);
      lastTimeRef.current = now;

      const h = hoverRef.current;
      if (h !== null) {
        const target = nearestSnapAngle(angleRef.current, h);
        angleRef.current += (target - angleRef.current) * HOVER_LERP;
      } else {
        angleRef.current += SPIN_DEG_PER_SEC * dt;
      }

      scene.style.setProperty("--curation-ring-y", `${angleRef.current}deg`);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [reduceMotion, faces.length]);

  const clearLeaveTimer = useCallback(() => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  }, []);

  const onFaceEnter = useCallback(
    (i: number) => {
      clearLeaveTimer();
      hoverRef.current = i;
      setFocusedFace(i);
    },
    [clearLeaveTimer],
  );

  const onFaceLeave = useCallback(() => {
    leaveTimerRef.current = setTimeout(() => {
      hoverRef.current = null;
      setFocusedFace(null);
      leaveTimerRef.current = null;
    }, LEAVE_DEBOUNCE_MS);
  }, []);

  if (!faces.length) return null;

  const glassTone = tone === "editorialLight" ? "light" : "editorial";

  return (
    <div
      ref={sceneRef}
      className="curation-3d-scene relative mx-auto w-full max-w-full select-none lg:translate-x-[6%] xl:translate-x-[4%] 2xl:translate-x-[2%]"
      aria-label="Vitrine em rotação suave; ao passar o cursor sobre uma peça, ela centra-se na frente"
    >
      <div className="pointer-events-none absolute inset-x-[18%] top-[10%] h-[40%] rounded-[45%] bg-[radial-gradient(ellipse_at_center,rgba(255,220,160,0.18)_0%,transparent_70%)] opacity-80" />
      <div className="curation-3d-ring relative mx-auto flex min-h-[min(34vh,320px)] w-full items-center justify-center sm:min-h-[min(38vh,380px)] lg:min-h-[min(42vh,440px)] [transform-style:preserve-3d]">
        {faces.map((model, i) => (
          <div
            key={`${model.id}-${i}`}
            role="presentation"
            className={`curation-3d-face absolute left-1/2 top-1/2 cursor-pointer will-change-transform pointer-events-auto ${
              focusedFace === i ? "curation-3d-face--focus" : ""
            }`}
            style={{
              transform: `translate(-50%, -50%) rotateY(${i * 36}deg) translateZ(var(--curation-tz))`,
            }}
            onMouseEnter={() => onFaceEnter(i)}
            onMouseLeave={onFaceLeave}
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
                  className="pointer-events-none object-cover"
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
        Passe o cursor sobre uma peça para a centralizar — rotação suave contínua
      </p>
    </div>
  );
}
