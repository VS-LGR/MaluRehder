import type { CtaLink } from "@/types/site";
import { AmbientConsultationStripLayer } from "@/components/pages/HomeAmbientDecor";
import { ButtonLink } from "@/components/ui/ButtonLink";

type ConsultationStripSectionProps = {
  headline: string;
  sub?: string;
  cta: CtaLink;
  /** Sobre a arte (faixa dourada): vidro escuro. Fora: faixa opaca em página clara. */
  editorialOverlay?: boolean;
};

/** Faixa editorial sobre a arte — menos “banner”, mais composição com texto e ação. */
export function ConsultationStripSection({
  headline,
  sub,
  cta,
  editorialOverlay = false,
}: ConsultationStripSectionProps) {
  const shell = editorialOverlay
    ? "relative z-[5] mx-3 mb-5 overflow-x-clip overflow-y-visible rounded-3xl border border-white/15 bg-black/40 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl md:mx-6 md:mb-8 md:py-8"
    : "relative z-[5] mx-auto mb-8 mt-0 w-[min(100%,calc(100vw-1.5rem))] max-w-7xl overflow-x-clip overflow-y-visible rounded-3xl border border-neutral-800/15 bg-neutral-900/[0.92] py-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)] md:mb-10 md:py-9";

  const wash = editorialOverlay
    ? "from-black/25 via-[#0f0c0a]/72 to-[#161311]/82"
    : "from-black/15 via-black/50 to-black/75";

  return (
    <section className={shell} aria-label="Convite para consultoria">
      <div
        className={`pointer-events-none absolute inset-0 z-[1] rounded-3xl bg-gradient-to-b ${wash}`}
        aria-hidden
      />
      <div
        className={
          editorialOverlay
            ? "pointer-events-none absolute inset-0 z-[1] rounded-3xl bg-[radial-gradient(ellipse_90%_120%_at_72%_40%,rgba(200,170,120,0.12),transparent_55%)]"
            : "pointer-events-none absolute inset-0 z-[1] rounded-3xl bg-[radial-gradient(ellipse_90%_120%_at_72%_40%,rgba(200,170,120,0.1),transparent_55%)]"
        }
        aria-hidden
      />
      <AmbientConsultationStripLayer />
      <div className="relative z-[6] mx-auto flex w-full min-w-0 max-w-7xl flex-col gap-4 px-[clamp(0.75rem,4vw,1.5rem)] md:flex-row md:items-end md:justify-between md:gap-10 md:px-8">
        <div className="min-w-0 max-w-full md:max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.22em] text-stone-400/90">Consultoria</p>
          <h2 className="mt-2 font-serif text-lg font-normal leading-snug tracking-tight text-[#f7f3ea] drop-shadow-sm md:text-2xl">
            {headline}
          </h2>
          {sub ? (
            <p className="mt-2 max-w-md text-[13px] leading-relaxed text-stone-300/88 md:text-sm">{sub}</p>
          ) : null}
        </div>
        <div className="w-full shrink-0 sm:w-auto md:pb-0.5">
          <ButtonLink href={cta.href} label={cta.label} appearance="onDark" />
        </div>
      </div>
    </section>
  );
}
