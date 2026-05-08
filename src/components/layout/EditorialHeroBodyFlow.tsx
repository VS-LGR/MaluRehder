import type { ReactNode } from "react";

type EditorialHeroSources = {
  /** Desktop padrão (fallback). */
  base: string;
  /** Tablet e telas médias. */
  medium?: string;
  /** Mobile. */
  small?: string;
};

type EditorialHeroBodyFlowProps = {
  image: EditorialHeroSources;
  imageAlt: string;
  children: ReactNode;
  /** Faixa sobre a arte (ex.: marquee), ancorada no eixo vertical do bloco (arte) */
  band?: ReactNode;
};

/**
 * Fundo editorial contínuo (hero + início do corpo).
 * A arte usa largura total e altura intrínseca — sem crop, sem letterboxing.
 */
export function EditorialHeroBodyFlow({ image, imageAlt, children, band }: EditorialHeroBodyFlowProps) {
  return (
    <div className="relative isolate w-full overflow-x-clip overflow-y-visible border-b border-black/10">
      <picture>
        {image.small ? <source media="(max-width: 639px)" srcSet={image.small} /> : null}
        {image.medium ? <source media="(max-width: 1023px)" srcSet={image.medium} /> : null}
        <img
          src={image.base}
          alt={imageAlt}
          className="relative z-0 block h-auto w-full select-none"
          draggable={false}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_38%,transparent_42%,rgba(0,0,0,0.08)_70%,rgba(0,0,0,0.14)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[8] h-[min(34vh,18rem)] bg-gradient-to-b from-transparent via-[#f2ede2]/18 via-65% to-[#f2ede2]/90"
        aria-hidden
      />
      <div className="absolute inset-0 z-10 flex min-h-full min-w-0 flex-col">{children}</div>
      {band ? (
        <div className="pointer-events-none absolute inset-x-0 top-[46%] z-[20] -translate-y-1/2 md:top-[47%]">
          {band}
        </div>
      ) : null}
    </div>
  );
}
