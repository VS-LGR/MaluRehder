import type { TrustItem } from "@/types/site";

type SocialProofSectionProps = {
  title: string;
  intro: string;
  trustItems: TrustItem[];
};

export function SocialProofSection({ title, intro, trustItems }: SocialProofSectionProps) {
  return (
    <section className="heading-serif-section border-t border-amber-950/8 bg-[#f7f4ef] py-14 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-amber-900/45">Confiança</p>
        <h2 className="heading-editorial mt-3 text-neutral-900">{title}</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-600 md:text-[15px]">{intro}</p>
        <div className="mt-8 grid gap-8 border-t border-amber-950/12 pt-8 md:grid-cols-3 md:gap-10">
          {trustItems.map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-[0.12em] text-neutral-500">{item.label}</p>
              <p className="mt-2 font-serif text-xl font-medium text-neutral-900">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
