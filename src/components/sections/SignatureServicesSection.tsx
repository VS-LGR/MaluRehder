import type { ServiceItem } from "@/types/site";

type SignatureServicesSectionProps = {
  eyebrow: string;
  sectionTitle: string;
  items: ServiceItem[];
};

export function SignatureServicesSection({ eyebrow, sectionTitle, items }: SignatureServicesSectionProps) {
  return (
    <section className="heading-serif-section border-y border-amber-950/8 bg-[#f4f1eb] py-14 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">{eyebrow}</p>
        <h2 className="heading-editorial mt-3 text-neutral-900">{sectionTitle}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-amber-950/10 bg-[#faf8f4]/80 px-6 py-7"
            >
              <h3 className="font-serif text-lg font-medium text-neutral-900">{item.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-neutral-600">{item.description}</p>
              <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.14em] text-amber-950/70">
                {item.ctaLabel}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
