import type { FaqItem } from "@/types/site";

type FaqSectionProps = {
  title: string;
  items: FaqItem[];
};

export function FaqSection({ title, items }: FaqSectionProps) {
  return (
    <section
      id="contato"
      className="heading-serif-section scroll-mt-[88px] border-t border-amber-950/10 bg-[#f7f4ef] py-14 md:py-16"
    >
      <div className="mx-auto w-full max-w-3xl px-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-amber-900/45">Orientações</p>
        <h2 className="heading-editorial mt-3 text-neutral-900">{title}</h2>
        <div className="mt-8 divide-y divide-amber-950/12 border-y border-amber-950/12">
          {items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 text-left [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-medium leading-snug text-neutral-900">{item.question}</span>
                <span
                  className="mt-0.5 shrink-0 text-neutral-400 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="stroke-current">
                    <path d="M4 6l4 4 4-4" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </summary>
              <p className="pb-4 text-[13px] leading-relaxed text-neutral-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
