import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

type EditorialHeroBodyFlowProps = {
  image: StaticImageData;
  imageAlt: string;
  children: ReactNode;
};

/**
 * Fundo editorial contínuo (hero + início do corpo).
 * A arte usa largura total e altura intrínseca — sem crop, sem letterboxing.
 */
export function EditorialHeroBodyFlow({ image, imageAlt, children }: EditorialHeroBodyFlowProps) {
  return (
    <div className="relative isolate w-full overflow-x-hidden overflow-y-visible border-b border-black/10">
      <Image
        src={image}
        alt={imageAlt}
        width={image.width}
        height={image.height}
        priority
        sizes="100vw"
        className="relative z-0 block h-auto w-full select-none"
        draggable={false}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_38%,transparent_42%,rgba(0,0,0,0.08)_70%,rgba(0,0,0,0.14)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[8] h-[min(26vh,13rem)] bg-gradient-to-b from-transparent via-stone-100/35 to-[#f7f4ef]"
        aria-hidden
      />
      <div className="absolute left-0 right-0 top-0 z-10 flex flex-col">{children}</div>
    </div>
  );
}
