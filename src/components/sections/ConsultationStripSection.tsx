import type { CtaLink } from "@/types/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

type ConsultationStripSectionProps = {
  headline: string;
  sub?: string;
  cta: CtaLink;
};

/** Faixa editorial sobre a arte — menos “banner”, mais composição com texto e ação. */
export function ConsultationStripSection({ headline, sub, cta }: ConsultationStripSectionProps) {
  return (
    <section
      className="relative z-10 overflow-hidden border-y border-white/[0.06] py-7 md:py-8"
      aria-label="Convite para consultoria"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-[#0f0c0a]/78 to-[#161311]/88"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_70%_50%,rgba(180,150,100,0.07),transparent_55%)]" aria-hidden />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between md:gap-10">
        <div className="max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.22em] text-stone-400/90">Consultoria</p>
          <h2 className="mt-2 font-serif text-xl font-normal leading-snug tracking-tight text-[#f7f3ea] drop-shadow-sm md:text-2xl">
            {headline}
          </h2>
          {sub ? (
            <p className="mt-2 max-w-md text-sm leading-relaxed text-stone-300/88">{sub}</p>
          ) : null}
        </div>
        <div className="shrink-0 md:pb-0.5">
          <ButtonLink href={cta.href} label={cta.label} appearance="onDark" />
        </div>
      </div>
    </section>
  );
}
