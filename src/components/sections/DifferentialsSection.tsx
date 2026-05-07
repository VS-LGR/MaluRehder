import type { DifferentialItem } from "@/types/site";

type DifferentialsSectionProps = {
  sectionTitle: string;
  items: DifferentialItem[];
};

export function DifferentialsSection({ sectionTitle, items }: DifferentialsSectionProps) {
  return (
    <section
      id="diferenciais"
      className="heading-serif-section scroll-mt-[88px] border-t border-amber-950/10 bg-[#f7f4ef] py-14 md:py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-amber-900/50">Diferenciais</p>
        <h2 className="heading-editorial mt-3 text-neutral-900">{sectionTitle}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="rounded-xl border border-amber-950/12 bg-[#faf8f4]/90 px-7 py-8 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset]"
            >
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
