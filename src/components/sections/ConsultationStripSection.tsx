import type { CtaLink } from "@/types/site";
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
    ? "relative z-[5] mx-4 mb-6 overflow-hidden rounded-2xl border border-white/15 bg-black/40 py-7 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl md:mx-6 md:mb-8 md:py-8"
    : "relative z-[5] mx-4 mb-8 mt-0 overflow-hidden rounded-2xl border border-neutral-800/15 bg-neutral-900/[0.92] py-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)] md:mx-6 md:mb-10 md:py-9";

  const wash = editorialOverlay
    ? "from-black/25 via-[#0f0c0a]/72 to-[#161311]/82"
    : "from-black/15 via-black/50 to-black/75";

  return (
    <section className={shell} aria-label="Convite para consultoria">
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b ${wash}`}
        aria-hidden
      />
      <div
        className={
          editorialOverlay
            ? "pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_90%_120%_at_72%_40%,rgba(200,170,120,0.12),transparent_55%)]"
            : "pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_90%_120%_at_72%_40%,rgba(200,170,120,0.1),transparent_55%)]"
        }
        aria-hidden
      />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between md:gap-10 md:px-8">
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
