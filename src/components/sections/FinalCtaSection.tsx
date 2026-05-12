import { AmbientFinalCtaLayer } from "@/components/pages/HomeAmbientDecor";
import type { CtaLink } from "@/types/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

type FinalCtaSectionProps = {
  title: string;
  subtitle: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
};

export function FinalCtaSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: FinalCtaSectionProps) {
  return (
    <section className="heading-serif-section relative border-t border-amber-950/10 bg-[#f0ebe3] py-16 md:py-18">
      <AmbientFinalCtaLayer />
      <div className="relative z-[2] mx-auto w-full min-w-0 max-w-6xl px-[clamp(0.75rem,4vw,1.5rem)] text-center sm:px-6">
        <h2 className="heading-editorial text-neutral-900 md:text-[2.125rem]">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-[15px]">
          {subtitle}
        </p>
        <div className="mt-8 flex w-full min-w-0 flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center [&>a]:w-full sm:[&>a]:w-auto">
          <ButtonLink href={primaryCta.href} label={primaryCta.label} />
          <ButtonLink href={secondaryCta.href} label={secondaryCta.label} variant="secondary" />
        </div>
      </div>
    </section>
  );
}
