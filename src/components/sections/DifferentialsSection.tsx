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
    ? "heading-serif-section relative z-10 scroll-mt-[88px] bg-transparent pb-5 pt-8 md:pb-8 md:pt-10"
    : "heading-serif-section relative z-10 scroll-mt-[88px] bg-transparent pb-6 pt-10 md:pb-10 md:pt-12";

  const eyebrow = editorialOverlay ? "text-amber-100/75" : "text-amber-900/55";
  const title = editorialOverlay
    ? "text-stone-50 drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]"
    : "text-neutral-900";
  const gridMt = editorialOverlay ? "mt-8 md:mt-10" : "mt-12 md:mt-14";

  const cardShell = editorialOverlay
    ? "rounded-2xl border border-white/30 bg-white/[0.22] px-6 py-7 shadow-[0_12px_40px_rgba(0,0,0,0.25)] ring-1 ring-white/10 backdrop-blur-xl md:px-7 md:py-8"
    : "rounded-2xl border border-amber-950/10 bg-white/90 px-6 py-7 shadow-[0_10px_36px_rgba(40,30,20,0.08)] md:px-7 md:py-8";

  return (
    <section id="diferenciais" className={sectionShell}>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <p className={`text-[10px] uppercase tracking-[0.2em] ${eyebrow}`}>Diferenciais</p>
        <h2 className={`heading-editorial mt-2 max-w-4xl ${title}`}>{sectionTitle}</h2>
        <div className={`grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6 ${gridMt}`}>
          {items.map((item, index) => (
            <article key={item.title} className={`flex min-h-0 flex-col ${cardShell}`}>
              <p className="font-serif text-sm tabular-nums text-amber-900/45">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-lg font-medium leading-snug text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-neutral-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
