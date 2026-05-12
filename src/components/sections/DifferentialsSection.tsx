import { AmbientDifferentialsLayer } from "@/components/pages/HomeAmbientDecor";
import type { DifferentialItem } from "@/types/site";

type DifferentialsSectionProps = {
  sectionTitle: string;
  items: DifferentialItem[];
  /** Cartões vidro sobre faixa dourada da arte */
  editorialOverlay?: boolean;
};

export function DifferentialsSection({
  sectionTitle,
  items,
  editorialOverlay = false,
}: DifferentialsSectionProps) {
  const sectionShell = editorialOverlay
    ? "heading-serif-section relative z-10 scroll-mt-[88px] bg-transparent pb-4 pt-6 md:pb-8 md:pt-10"
    : "heading-serif-section relative z-10 scroll-mt-[88px] bg-transparent pb-6 pt-10 md:pb-10 md:pt-12";

  const eyebrow = editorialOverlay ? "text-amber-100/75" : "text-amber-900/55";
  const title = editorialOverlay
    ? "text-stone-50 drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]"
    : "text-neutral-900";
  const gridMt = editorialOverlay ? "mt-6 md:mt-10" : "mt-12 md:mt-14";

  const cardShell = editorialOverlay
    ? "rounded-3xl border border-white/30 bg-white/[0.2] px-4 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.25)] ring-1 ring-white/10 backdrop-blur-xl md:px-7 md:py-8"
    : "rounded-3xl border border-amber-950/10 bg-white/90 px-6 py-7 shadow-[0_10px_36px_rgba(40,30,20,0.08)] md:px-7 md:py-8";

  const cardIndex = editorialOverlay ? "text-amber-100/65" : "text-amber-900/45";
  const cardTitle = editorialOverlay ? "text-stone-50" : "text-neutral-900";
  const cardDescription = editorialOverlay ? "text-stone-200/90" : "text-neutral-600";

  return (
    <section id="diferenciais" className={sectionShell}>
      {!editorialOverlay ? <AmbientDifferentialsLayer /> : null}
      <div className="relative z-[2] mx-auto w-full min-w-0 max-w-7xl px-[clamp(0.75rem,3vw,2rem)] sm:px-4 md:px-8">
        <p className={`text-[10px] uppercase tracking-[0.2em] ${eyebrow}`}>Diferenciais</p>
        <h2 className={`heading-editorial mt-2 max-w-4xl ${title}`}>{sectionTitle}</h2>
        <div className={`grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 ${gridMt}`}>
          {items.map((item, index) => (
            <article key={item.title} className={`flex min-h-0 flex-col ${cardShell}`}>
              <p className={`font-serif text-sm tabular-nums ${cardIndex}`}>
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className={`mt-2 font-serif text-base font-medium leading-snug md:mt-3 md:text-lg ${cardTitle}`}>
                {item.title}
              </h3>
              <p className={`mt-2 text-[12px] leading-relaxed md:mt-3 md:text-[13px] ${cardDescription}`}>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
