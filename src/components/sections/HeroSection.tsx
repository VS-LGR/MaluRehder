import { ButtonLink } from "@/components/ui/ButtonLink";
import Image from "next/image";
import Link from "next/link";
import type { HeroContent } from "@/types/site";

type HeroSectionProps = {
  content: HeroContent;
  /**
   * fullBleed — própria foto de fundo + texto sobre ela.
   * editorialOverlay — texto sobre imagem fornecida pelo pai (ex.: EditorialHeroBodyFlow).
   * belowArt — bloco claro em fluxo contínuo após a arte (sem overlay).
   */
  variant?: "fullBleed" | "editorialOverlay" | "belowArt";
};

export function HeroSection({ content, variant = "fullBleed" }: HeroSectionProps) {
  const belowArt = variant === "belowArt";
  const editorialOverlay = variant === "editorialOverlay";

  return (
    <section
      className={
        belowArt
          ? "relative border-b border-neutral-900/8 bg-transparent"
          : editorialOverlay
            ? "relative w-full bg-transparent"
            : "relative min-h-[72vh] overflow-hidden border-b border-neutral-800/40 bg-neutral-950 md:min-h-[78vh]"
      }
    >
      {variant === "fullBleed" && (
        <>
          <Image
            src={content.visual.src}
            alt={content.visual.alt}
            className="absolute inset-0 h-full w-full object-cover object-[52%_45%]"
            preload
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(12,10,8,0.78)_0%,rgba(12,10,8,0.56)_24%,rgba(12,10,8,0.26)_44%,transparent_60%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_82%_50%,transparent_0%,rgba(0,0,0,0.12)_65%,rgba(0,0,0,0.22)_100%)]"
            aria-hidden
          />
        </>
      )}
      <div
        className={
          belowArt
            ? "relative z-[1] mx-auto flex w-full max-w-6xl flex-col items-start px-4 py-10 sm:px-6 sm:py-12 md:py-14 lg:py-16"
            : editorialOverlay
              ? "relative z-[1] mx-auto flex w-full min-h-0 min-w-0 max-w-6xl flex-col items-start px-0 py-0"
              : "relative z-[1] mx-auto flex w-full max-w-6xl flex-col min-h-[72vh] items-center justify-center px-4 py-16 sm:px-6 md:min-h-[78vh] md:py-20"
        }
      >
        {editorialOverlay ? (
          <div className="flex w-full min-w-0 justify-center md:w-1/2 md:justify-center md:pr-5 md:max-lg:pr-8 lg:pr-8">
            <div className="w-full min-w-0 max-w-[min(100%,22rem)] sm:max-w-lg md:max-w-xl">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.42em] text-[#181716]/90 sm:mb-6 sm:text-[11px] sm:tracking-[0.38em]">
                {content.eyebrow}
              </p>
              <h1 className="max-w-[18ch] font-serif font-medium tracking-[-0.025em] text-balance text-[clamp(1.85rem,5.2vw+0.35rem,3.25rem)] leading-[1.06] text-[#181716] drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:max-w-[20ch] md:leading-[1.04]">
                {content.title}
              </h1>
              <p className="mt-5 max-w-[26ch] text-[13px] leading-[1.65] text-[#181716]/88 sm:mt-6 sm:text-sm md:mt-7 md:max-w-[30ch] md:text-[0.95rem]">
                {content.subtitle}
              </p>
              <div className="mt-9 flex w-full min-w-0 flex-col items-start gap-6 sm:mt-11 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-4">
                <ButtonLink href={content.primaryCta.href} label={content.primaryCta.label} appearance="onDark" />
                <Link
                  href={content.secondaryCta.href}
                  className="text-[11px] uppercase tracking-[0.26em] text-black underline decoration-black/35 underline-offset-[6px] transition hover:text-neutral-900 hover:decoration-neutral-900/50"
                >
                  {content.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={
              belowArt
                ? "w-full max-w-lg rounded-3xl border border-neutral-200/90 bg-white/95 px-5 py-6 shadow-[0_10px_40px_rgba(40,30,20,0.07)] ring-1 ring-black/[0.04] sm:max-w-xl sm:px-6 sm:py-7 md:max-w-2xl md:px-8 md:py-9"
                : "box-border w-full max-w-[min(100%,22.5rem)] rounded-3xl border border-[#f5ebe0]/[0.16] bg-[rgba(16,12,10,0.42)] px-[clamp(0.875rem,3.5vw,1.25rem)] py-5 shadow-[0_10px_40px_rgba(12,8,6,0.45)] ring-1 ring-[#c4a574]/[0.1] backdrop-blur-[12px] sm:max-w-lg sm:px-6 sm:py-7 md:max-w-xl md:px-8 md:py-8"
            }
          >
            <p
              className={`mb-3 text-[10px] font-medium uppercase tracking-[0.2em] sm:mb-4 ${
                belowArt ? "text-amber-900/75" : "text-amber-50/85"
              }`}
            >
              {content.eyebrow}
            </p>
            <h1
              className={`font-serif font-medium tracking-tight text-balance ${
                belowArt
                  ? "max-w-3xl text-[1.65rem] leading-[1.12] text-neutral-900 sm:text-3xl sm:leading-tight md:text-[2.65rem] md:leading-[1.1]"
                  : "max-w-[min(100%,42rem)] text-[clamp(1.45rem,3.6vw+0.4rem,2.65rem)] leading-[1.12] text-[#faf8f5] drop-shadow-[0_1px_14px_rgba(0,0,0,0.4)] sm:leading-[1.1] md:leading-[1.08]"
              }`}
            >
              {content.title}
            </h1>
            <p
              className={`mt-3 max-w-xl text-[13px] leading-relaxed sm:mt-4 sm:text-sm md:mt-5 md:text-base ${
                belowArt ? "text-neutral-700" : "text-stone-100/95"
              }`}
            >
              {content.subtitle}
            </p>
            <div className="mt-5 flex w-full min-w-0 flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3 md:mt-8 md:gap-4 [&>a]:w-full [&>a]:justify-center sm:[&>a]:w-auto sm:[&>a]:justify-center">
              <ButtonLink href={content.primaryCta.href} label={content.primaryCta.label} appearance={belowArt ? "default" : "onDark"} />
              <ButtonLink
                href={content.secondaryCta.href}
                label={content.secondaryCta.label}
                variant="secondary"
                appearance={belowArt ? "default" : "onDark"}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
