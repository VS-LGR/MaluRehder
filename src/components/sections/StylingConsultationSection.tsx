import { stylingConsultationContent } from "@/config/site-content";

export function StylingConsultationSection() {
  const { title, intro, panelEyebrow, panelTitle, panelBody } = stylingConsultationContent;

  return (
    <section className="border-y border-amber-950/8 bg-[#fbfaf7] py-12 md:py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2 md:items-center md:gap-12">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-amber-900/45">Consultoria</p>
          <h2 className="heading-editorial mt-3 text-neutral-900">{title}</h2>
          <p className="mt-3 text-[13px] leading-relaxed text-neutral-600 md:mt-4 md:text-[15px]">{intro}</p>
        </div>
        <div className="rounded-2xl border border-amber-200/25 bg-neutral-950 p-6 text-[#f2ebe2] shadow-[0_24px_48px_rgba(0,0,0,0.12)] md:p-8">
          <p className="text-[11px] uppercase tracking-[0.18em] text-amber-100/65">{panelEyebrow}</p>
          <p className="mt-3 font-serif text-xl font-medium leading-snug">{panelTitle}</p>
          <p className="mt-3 text-sm leading-relaxed text-stone-300/95">{panelBody}</p>
        </div>
      </div>
    </section>
  );
}
