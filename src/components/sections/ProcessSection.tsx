import type { ProcessStep } from "@/types/site";

type ProcessSectionProps = {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
};

export function ProcessSection({ eyebrow, title, steps }: ProcessSectionProps) {
  return (
    <section
      id="consultoria"
      className="heading-serif-section scroll-mt-[88px] border-y border-amber-950/8 bg-[#f7f4ef] py-12 md:py-14"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">{eyebrow}</p>
        <h2 className="heading-editorial mt-3 text-neutral-900">{title}</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-2 md:gap-x-12 md:gap-y-8">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t border-amber-950/10 pt-5">
              <span className="font-serif text-sm text-neutral-400 tabular-nums">
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
