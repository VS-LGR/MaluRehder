import { ButtonLink } from "@/components/ui/ButtonLink";
import Image from "next/image";
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
          ? "relative border-b border-neutral-200/65 bg-[#fbfaf7]"
          : editorialOverlay
            ? "relative bg-transparent"
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
      {editorialOverlay && (
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(5,4,3,0.36)_0%,rgba(5,4,3,0.1)_30%,transparent_52%)]"
          aria-hidden
        />
      )}
      <div
        className={`relative mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6 ${
          belowArt
            ? "items-start py-10 sm:py-12 md:py-14 lg:py-16"
            : editorialOverlay
              ? "min-w-0 justify-start py-10 max-lg:min-h-[min(52vh,22rem)] md:py-14 lg:min-h-[min(60vh,36rem)] lg:py-20 xl:min-h-[min(64vh,40rem)]"
              : "min-h-[72vh] items-center justify-center py-16 md:min-h-[78vh] md:py-20"
        }`}
      >
        <div
          className={
            belowArt
              ? "w-full max-w-lg rounded-2xl border border-neutral-200/90 bg-white/95 px-5 py-6 shadow-[0_10px_40px_rgba(40,30,20,0.07)] ring-1 ring-black/[0.04] sm:max-w-xl sm:px-6 sm:py-7 md:max-w-2xl md:px-8 md:py-9"
              : `max-w-sm rounded-2xl border border-white/[0.08] bg-[rgba(8,8,8,0.28)] px-5 py-6 shadow-[0_6px_28px_rgba(0,0,0,0.18)] ring-0 backdrop-blur-[6px] sm:px-6 sm:py-7 md:max-w-md md:px-8 md:py-8 ${
                  editorialOverlay ? "mr-auto mt-[clamp(1.5rem,7vw,6rem)]" : ""
                }`
          }
        >
          <p
            className={`mb-4 text-[10px] font-medium uppercase tracking-[0.2em] ${
              belowArt ? "text-amber-900/75" : "text-amber-50/80"
            }`}
          >
            {content.eyebrow}
          </p>
          <h1
            className={`font-serif text-[1.85rem] font-medium leading-tight tracking-tight sm:text-3xl md:text-[2.75rem] md:leading-[1.12] ${
              belowArt
                ? "max-w-3xl text-neutral-900"
                : "max-w-3xl text-[#faf8f5] drop-shadow-[0_1px_12px_rgba(0,0,0,0.35)]"
            }`}
          >
            {content.title}
          </h1>
          <p
            className={`mt-4 max-w-xl text-[13px] leading-relaxed sm:text-sm md:mt-5 md:text-base ${
              belowArt ? "text-neutral-700" : "text-stone-100/95"
            }`}
          >
            {content.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3 md:gap-4">
            <ButtonLink href={content.primaryCta.href} label={content.primaryCta.label} appearance={belowArt ? "default" : "onDark"} />
            <ButtonLink
              href={content.secondaryCta.href}
              label={content.secondaryCta.label}
              variant="secondary"
              appearance={belowArt ? "default" : "onDark"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
