import type { ReactNode } from "react";

type EditorialHeroSources = {
  base: string;
  medium?: string;
  small?: string;
};

type EditorialHeroBodyFlowProps = {
  /** Se omitido, usa painel editorial em gradiente (sem foto de fundo). */
  image?: EditorialHeroSources | null;
  /** Obrigatório quando `image` está definido (acessibilidade). */
  imageAlt?: string;
  children: ReactNode;
  /** Faixa no rodapé do hero (fluxo normal — evita corte entre seções). */
  band?: ReactNode;
};

function hasHeroArt(image: EditorialHeroSources | null | undefined): image is EditorialHeroSources {
  return Boolean(image?.base);
}

/** Arte full-bleed + conteúdo sobreposto, ou painel luxuoso em fluxo normal (sem imagem). */
export function EditorialHeroBodyFlow({ image, imageAlt, children, band }: EditorialHeroBodyFlowProps) {
  if (hasHeroArt(image)) {
    return (
      <header className="relative isolate w-full overflow-x-clip border-b border-black/10">
        {/*
          Coluna: (1) área da foto + overlays + conteúdo, (2) faixa (band) em fluxo.
          A faixa deixa de ser position:absolute no mesmo retângulo da foto — assim não é “partida”
          entre o fim do hero e o início da próxima seção ao redimensionar a altura da viewport.
        */}
        <div className="flex min-h-[min(86svh,50rem)] w-full min-w-0 flex-col sm:min-h-[min(84svh,52rem)] md:min-h-[min(82vh,54rem)] lg:min-h-[min(84vh,56rem)] xl:min-h-[min(86vh,58rem)] 2xl:min-h-[min(88vh,60rem)]">
          {/*
            flex-[1_0_auto]: não encolhe abaixo do conteúdo (evita cortar overlay + faixa).
            Só overflow-x — a foto continua presa ao retângulo via position:absolute no filho.
          */}
          <div className="relative isolate w-full flex-[1_0_auto] min-h-[clamp(30rem,60svh,34rem)] overflow-x-clip">
            <picture className="pointer-events-none absolute inset-0 z-0 block h-full w-full overflow-hidden">
              {image.small ? <source media="(max-width: 639px)" srcSet={image.small} /> : null}
              {image.medium ? <source media="(max-width: 1023px)" srcSet={image.medium} /> : null}
              <img
                src={image.base}
                alt={imageAlt ?? ""}
                className="h-full w-full object-cover object-[50%_32%] select-none sm:object-[50%_28%] md:object-[50%_26%] lg:object-[50%_24%] xl:object-[50%_23%] 2xl:object-[50%_22%]"
                draggable={false}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_95%_90%_at_40%_28%,transparent_36%,rgba(42,32,26,0.12)_68%,rgba(24,18,14,0.2)_100%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[8] h-[min(26vh,11rem)] bg-gradient-to-b from-transparent via-[#ebe4d8]/18 to-[#ebe4d8]/88 sm:h-[min(28vh,13rem)] lg:h-[min(30vh,15rem)]"
              aria-hidden
            />
            <div className="absolute inset-0 z-[20] flex min-h-0 min-w-0 flex-col overflow-x-clip">
              <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-[clamp(0.75rem,4vw,1.5rem)] pb-10 pt-[calc(4.25rem+env(safe-area-inset-top,0px))] sm:px-6 sm:pb-12 sm:pt-[4.5rem] md:pb-14 md:pt-24 lg:pb-16 lg:pt-28">
                {children}
              </div>
            </div>
          </div>
          {band ? (
            <div className="relative z-[30] w-full shrink-0 overflow-x-clip border-t border-white/12 bg-gradient-to-b from-black/45 to-black/[0.58] backdrop-blur-[3px]">
              {band}
            </div>
          ) : null}
        </div>
      </header>
    );
  }

  return (
    <header className="relative isolate w-full overflow-x-clip border-b border-[#c9b8a8]/25 bg-gradient-to-b from-[#ddd4c8] via-[#ebe4d8] to-[#f4efe6]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-35%,rgba(92,72,54,0.1),transparent_52%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_100%_18%,rgba(168,138,108,0.09),transparent_46%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-[clamp(0.75rem,4vw,1.5rem)] pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-8 md:pb-14 md:pt-10 lg:pb-16 lg:pt-12">
        {children}
      </div>
    </header>
  );
}
