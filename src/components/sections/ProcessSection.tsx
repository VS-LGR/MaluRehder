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
    ? "heading-serif-section relative z-10 scroll-mt-[88px] bg-transparent pb-12 pt-6 md:pb-16 md:pt-8"
    : "heading-serif-section relative z-10 scroll-mt-[88px] bg-transparent pb-16 pt-6 md:pb-24 md:pt-8";

  const eyebrowClass = editorialOverlay ? "text-stone-400/95" : "text-neutral-600";
  const titleClass = editorialOverlay
    ? "text-stone-50 drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
    : "text-neutral-900";

  const cardShell = editorialOverlay
    ? "rounded-2xl border border-white/28 bg-white/[0.2] px-5 py-6 shadow-[0_12px_40px_rgba(0,0,0,0.22)] ring-1 ring-white/10 backdrop-blur-xl md:px-6 md:py-7"
    : "rounded-2xl border border-amber-950/10 bg-white/90 px-5 py-6 shadow-[0_10px_36px_rgba(40,30,20,0.07)] md:px-6 md:py-7";

  return (
    <section id="consultoria" className={sectionShell}>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <p className={`text-[11px] uppercase tracking-[0.18em] ${eyebrowClass}`}>{eyebrow}</p>
        <h2 className={`heading-editorial mt-2 max-w-4xl ${titleClass}`}>{title}</h2>
        <ol className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-5">
          {steps.map((step, index) => (
            <li key={step.title} className={`flex min-h-0 flex-col ${cardShell}`}>
              <span className="font-serif text-sm text-amber-900/40 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-serif text-lg font-medium text-neutral-900">{step.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
