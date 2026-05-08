import { ButtonLink } from "@/components/ui/ButtonLink";
import Image from "next/image";
import type { HeroContent } from "@/types/site";

type HeroSectionProps = {
  content: HeroContent;
  /** Quando true, o fundo fica a cargo do layout pai (imagem hero+corpo contínua). */
  omitBackground?: boolean;
};

export function HeroSection({ content, omitBackground = false }: HeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden ${
        omitBackground ? "bg-transparent" : "min-h-[72vh] border-b border-neutral-800/40 bg-neutral-950 md:min-h-[78vh]"
      }`}
    >
      {!omitBackground && (
        <>
          <Image
            src={content.visual.src}
            alt={content.visual.alt}
            className="absolute inset-0 h-full w-full object-cover object-[52%_45%]"
            priority
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(12,10,8,0.78)_0%,rgba(12,10,8,0.56)_24%,rgba(12,10,8,0.26)_44%,transparent_60%)]"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_82%_50%,transparent_0%,rgba(0,0,0,0.12)_65%,rgba(0,0,0,0.22)_100%)]" aria-hidden />
        </>
      )}
      {omitBackground && (
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(5,4,3,0.36)_0%,rgba(5,4,3,0.1)_30%,transparent_52%)]"
          aria-hidden
        />
      )}
      <div
        className={`relative mx-auto flex w-full max-w-6xl flex-col px-6 ${
          omitBackground
            ? "min-h-[min(76vh,48rem)] justify-start py-16 md:min-h-[min(70vh,44rem)] md:py-20"
            : "min-h-[72vh] items-center py-16 md:min-h-[78vh] md:py-20"
        }`}
      >
        <div
          className={`max-w-sm rounded-2xl border border-white/[0.08] bg-[rgba(8,8,8,0.28)] px-6 py-7 shadow-[0_6px_28px_rgba(0,0,0,0.18)] ring-0 backdrop-blur-[6px] md:max-w-md md:px-8 md:py-8 ${
            omitBackground ? "mr-auto mt-[clamp(2.5rem,9vw,7rem)]" : ""
          }`}
        >
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-amber-50/80">
            {content.eyebrow}
          </p>
          <h1 className="max-w-3xl font-serif text-3xl font-medium leading-tight tracking-tight text-[#faf8f5] drop-shadow-[0_1px_12px_rgba(0,0,0,0.35)] md:text-[2.75rem] md:leading-[1.12]">
            {content.title}
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-stone-100/95 md:text-base">
            {content.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
            <ButtonLink href={content.primaryCta.href} label={content.primaryCta.label} appearance="onDark" />
            <ButtonLink
              href={content.secondaryCta.href}
              label={content.secondaryCta.label}
              variant="secondary"
              appearance="onDark"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
