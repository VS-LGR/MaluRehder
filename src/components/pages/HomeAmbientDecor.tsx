import Image from "next/image";

/** Caminhos em /public com espaços codificados para o Next Image. */
export function publicAmbientSrc(filename: string) {
  return `/${encodeURIComponent(filename)}`;
}

type AmbientFigureProps = {
  file: string;
  wrapperClassName: string;
  innerClassName: string;
  sizes: string;
  blendClass?: string;
};

function AmbientFigure({ file, wrapperClassName, innerClassName, sizes, blendClass }: AmbientFigureProps) {
  return (
    <div className={wrapperClassName}>
      <div className={`relative w-full ${blendClass ?? ""} ${innerClassName}`}>
        <Image
          src={publicAmbientSrc(file)}
          alt=""
          fill
          sizes={sizes}
          className="object-contain"
          loading="lazy"
          draggable={false}
        />
      </div>
    </div>
  );
}

/** Curadoria — fundo claro transparente; cantos da secção. */
export function AmbientCuradoriaLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-visible" aria-hidden>
      <AmbientFigure
        file="Marble pink.webp"
        wrapperClassName="absolute right-0 top-[2%] w-[min(40vw,12rem)] max-w-[min(92%,12rem)] opacity-[0.22] mix-blend-multiply sm:top-[4%] sm:w-[min(34vw,14rem)] sm:opacity-[0.28] md:opacity-[0.3]"
        innerClassName="relative aspect-square rotate-[9deg]"
        sizes="(max-width: 640px) 40vw, 220px"
      />
      <AmbientFigure
        file="GoldSimple.webp"
        wrapperClassName="absolute bottom-[6%] left-0 w-[min(38vw,11rem)] max-w-[min(90%,11rem)] opacity-[0.2] mix-blend-multiply sm:bottom-[8%] sm:w-[min(30vw,12rem)] sm:opacity-[0.26]"
        innerClassName="relative aspect-[4/5] -rotate-[6deg]"
        sizes="(max-width: 640px) 38vw, 200px"
      />
    </div>
  );
}

/** Faixa de consultoria — fundo escuro. */
export function AmbientConsultationStripLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[3] overflow-visible rounded-3xl" aria-hidden>
      <AmbientFigure
        file="Oculus azul escuro.webp"
        wrapperClassName="absolute right-3 top-1/2 w-[min(36vw,9.5rem)] max-w-[min(82%,9.5rem)] -translate-y-1/2 opacity-[0.22] mix-blend-soft-light sm:right-4 sm:opacity-[0.28]"
        innerClassName="relative aspect-[3/4] rotate-[7deg]"
        sizes="220px"
      />
      <AmbientFigure
        file="Golden Glasses.webp"
        wrapperClassName="absolute bottom-3 left-3 w-[min(34vw,8.5rem)] max-w-[min(80%,8.5rem)] opacity-[0.16] mix-blend-soft-light sm:opacity-[0.22]"
        innerClassName="relative aspect-[5/6] -rotate-[5deg]"
        sizes="200px"
      />
    </div>
  );
}

/** Processo — faixa clara. */
export function AmbientProcessLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-visible" aria-hidden>
      <AmbientFigure
        file="Oculus Azul turquesa.webp"
        wrapperClassName="absolute right-0 top-[12%] w-[min(34vw,10rem)] max-w-[min(90%,10rem)] opacity-[0.2] mix-blend-multiply sm:right-[1%] sm:opacity-[0.26]"
        innerClassName="relative aspect-[3/4] rotate-[6deg]"
        sizes="200px"
      />
    </div>
  );
}

/** Diferenciais — faixa clara. */
export function AmbientDifferentialsLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-visible" aria-hidden>
      <AmbientFigure
        file="Oculus gold marble.webp"
        wrapperClassName="absolute bottom-[4%] left-0 w-[min(38vw,11rem)] max-w-[min(92%,11rem)] opacity-[0.2] mix-blend-multiply sm:opacity-[0.26]"
        innerClassName="relative aspect-square -rotate-[4deg]"
        sizes="220px"
      />
    </div>
  );
}

/** CTA final — fundo #f0ebe3. */
export function AmbientFinalCtaLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-visible" aria-hidden>
      <AmbientFigure
        file="Golden Glasses.webp"
        wrapperClassName="absolute right-0 top-[8%] w-[min(36vw,10rem)] max-w-[min(90%,10rem)] opacity-[0.18] mix-blend-multiply sm:opacity-[0.24]"
        innerClassName="relative aspect-[5/6] rotate-[5deg]"
        sizes="200px"
      />
      <AmbientFigure
        file="GoldSimple.webp"
        wrapperClassName="absolute bottom-[10%] left-0 w-[min(34vw,9rem)] max-w-[min(88%,9rem)] opacity-[0.17] mix-blend-multiply sm:opacity-[0.23]"
        innerClassName="relative aspect-square -rotate-[8deg]"
        sizes="200px"
      />
    </div>
  );
}
