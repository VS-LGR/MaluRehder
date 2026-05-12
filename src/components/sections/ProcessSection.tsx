import { AmbientProcessLayer } from "@/components/pages/HomeAmbientDecor";
import type { ProcessStep } from "@/types/site";

type ProcessSectionProps = {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
  editorialOverlay?: boolean;
};

export function ProcessSection({
  eyebrow,
  title,
  steps,
  editorialOverlay = false,
}: ProcessSectionProps) {
  const sectionShell = editorialOverlay
    ? "heading-serif-section relative z-10 scroll-mt-[88px] bg-transparent pb-8 pt-5 md:pb-16 md:pt-8"
    : "heading-serif-section relative z-10 scroll-mt-[88px] bg-transparent pb-16 pt-6 md:pb-24 md:pt-8";

  const eyebrowClass = editorialOverlay ? "text-stone-400/95" : "text-neutral-600";
  const titleClass = editorialOverlay
    ? "text-stone-50 drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
    : "text-neutral-900";

  const cardShell = editorialOverlay
    ? "rounded-3xl border border-white/28 bg-white/[0.18] px-4 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.22)] ring-1 ring-white/10 backdrop-blur-xl md:px-6 md:py-7"
    : "rounded-3xl border border-amber-950/10 bg-white/90 px-5 py-6 shadow-[0_10px_36px_rgba(40,30,20,0.07)] md:px-6 md:py-7";

  const cardIndex = editorialOverlay ? "text-amber-100/65" : "text-amber-900/40";
  const cardTitle = editorialOverlay ? "text-stone-50" : "text-neutral-900";
  const cardDescription = editorialOverlay ? "text-stone-200/90" : "text-neutral-600";

  return (
    <section id="consultoria" className={sectionShell}>
      {!editorialOverlay ? <AmbientProcessLayer /> : null}
      <div className="relative z-[2] mx-auto w-full min-w-0 max-w-7xl px-[clamp(0.75rem,3vw,2rem)] sm:px-4 md:px-8">
        <p className={`text-[11px] uppercase tracking-[0.18em] ${eyebrowClass}`}>{eyebrow}</p>
        <h2 className={`heading-editorial mt-2 max-w-4xl ${titleClass}`}>{title}</h2>
        <ol className="mt-6 grid grid-cols-1 gap-3.5 sm:mt-8 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-5">
          {steps.map((step, index) => (
            <li key={step.title} className={`flex min-h-0 flex-col ${cardShell}`}>
              <span className={`font-serif text-sm tabular-nums ${cardIndex}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={`mt-2 font-serif text-base font-medium md:text-lg ${cardTitle}`}>{step.title}</h3>
              <p className={`mt-2 text-[12px] leading-relaxed md:text-[13px] ${cardDescription}`}>
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
