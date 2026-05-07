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
    <section className="heading-serif-section border-t border-amber-950/10 bg-[#f0ebe3] py-16 md:py-18">
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <h2 className="heading-editorial text-neutral-900 md:text-[2.125rem]">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-[15px]">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href={primaryCta.href} label={primaryCta.label} />
          <ButtonLink href={secondaryCta.href} label={secondaryCta.label} variant="secondary" />
        </div>
      </div>
    </section>
  );
}
