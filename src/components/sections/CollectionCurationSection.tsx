"use client";

import { useMemo, useState } from "react";
import type { CollectionModel, CollectionOption } from "@/types/site";
import { AmbientCuradoriaLayer } from "@/components/pages/HomeAmbientDecor";
import { CurationCarousel3D } from "@/components/ui/CurationCarousel3D";
import { filterModelsByAesthetic } from "@/lib/collection/filter-models";

/** editorial = texto claro sobre fundo escuro; editorialLight = tipografia escura em faixa clara. */
type CollectionTone = "dark" | "editorial" | "editorialLight";

type CollectionCurationSectionProps = {
  eyebrow: string;
  title: string;
  intro: string;
  filterLabel: string;
  aestheticFilters: CollectionOption[];
  models: CollectionModel[];
  tone?: CollectionTone;
};

function chipToneClasses(tone: CollectionTone, selected: boolean) {
  if (tone === "editorialLight") {
    return selected
      ? "border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800"
      : "border-neutral-400/60 bg-white/50 text-neutral-800 hover:border-neutral-500 hover:bg-white/80";
  }
  if (tone === "editorial") {
    return selected
      ? "border-stone-100/95 bg-stone-100 text-neutral-950 hover:bg-white"
      : "border-white/18 bg-white/[0.03] text-stone-100/95 hover:border-white/28 hover:bg-white/[0.07]";
  }
  return selected
    ? "border-neutral-200 bg-neutral-100 text-neutral-950"
    : "border-neutral-700 text-neutral-200 hover:border-neutral-500";
}

function EditorialFilterStrip({
  options,
  selected,
  onSelect,
  label,
  tone,
}: {
  options: CollectionOption[];
  selected: string;
  onSelect: (id: string) => void;
  label: string;
  tone: CollectionTone;
}) {
  const labelClass =
    tone === "editorialLight" ? "text-neutral-600" : tone === "editorial" ? "text-stone-400/85" : "text-neutral-500";
  const borderTone =
    tone === "editorialLight" ? "border-neutral-300/50" : tone === "editorial" ? "border-white/12" : "border-neutral-600";

  return (
    <div className={`mt-7 flex flex-col gap-3 border-b ${borderTone} pb-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2 md:max-lg:gap-x-6`}>
      <span className={`shrink-0 text-[10px] uppercase tracking-[0.2em] ${labelClass}`}>{label}</span>
      <div className="flex min-w-0 flex-1 flex-wrap gap-1.5 sm:justify-start md:max-lg:gap-x-2 md:max-lg:gap-y-2">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            className={`min-h-9 rounded-full border px-2.5 py-1.5 text-[10px] font-medium leading-tight tracking-wide transition md:px-3 md:text-[11px] ${chipToneClasses(tone, selected === option.id)}`}
            aria-pressed={selected === option.id}
            aria-label={`Filtrar por ${option.label}`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function CollectionCurationSection({
  eyebrow,
  title,
  intro,
  filterLabel,
  aestheticFilters,
  models,
  tone = "dark",
}: CollectionCurationSectionProps) {
  const [selectedAesthetic, setSelectedAesthetic] = useState("all");

  const filteredModels = useMemo(
    () => filterModelsByAesthetic(models, selectedAesthetic),
    [models, selectedAesthetic],
  );

  const surface =
    tone === "editorialLight"
      ? "bg-transparent text-neutral-900"
      : tone === "editorial"
        ? "bg-transparent text-stone-50"
        : "bg-neutral-950 text-neutral-100";

  const introEyebrow =
    tone === "editorialLight" ? "text-amber-900/75" : tone === "editorial" ? "text-amber-100/80" : "text-neutral-400";
  const introBody =
    tone === "editorialLight" ? "text-neutral-700" : tone === "editorial" ? "text-stone-200/95" : "text-neutral-300";

  const titleClass =
    tone === "editorialLight" ? "text-neutral-900" : tone === "editorial" ? "text-stone-50" : "text-neutral-100";
  const emptyClass =
    tone === "editorialLight" ? "text-neutral-600" : tone === "editorial" ? "text-stone-300/90" : "text-neutral-400";

  const titleDrop = tone === "editorial" ? "drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]" : "";
  const introDrop = tone === "editorial" ? "drop-shadow-[0_1px_12px_rgba(0,0,0,0.4)]" : "";

  const sectionSpacing =
    tone === "editorialLight"
      ? "scroll-mt-[88px] pb-12 pt-8 sm:pb-16 sm:pt-10 md:pb-20 md:pt-12 lg:pb-24"
      : tone === "editorial"
        ? "scroll-mt-[88px] pb-14 pt-[clamp(1.5rem,min(8vh),4rem)] md:pb-20 md:pt-[clamp(2rem,min(10vh),5rem)]"
        : "scroll-mt-[88px] pt-4 pb-20 md:pt-8 md:pb-28";

  const carouselTone: "editorial" | "editorialLight" =
    tone === "editorialLight" ? "editorialLight" : "editorial";

  const listBorder = tone === "editorialLight" ? "border-neutral-900/15" : "border-white/15";
  const listItem = tone === "editorialLight" ? "text-neutral-600" : "text-stone-400/90";
  const emptySpan = tone === "editorialLight" ? "font-medium text-neutral-900" : "text-stone-200";

  return (
    <section id="curadoria" className={`relative z-10 ${surface} ${sectionSpacing}`}>
      {tone === "editorial" && (
        <div className="pointer-events-none absolute inset-x-0 -top-12 z-[1] h-28 bg-gradient-to-b from-black/15 to-transparent md:h-36" aria-hidden />
      )}
      {tone === "editorialLight" && (
        <div className="pointer-events-none absolute inset-x-0 -top-6 z-[1] h-0 bg-gradient-to-b from-[#ebe4d8]/90 to-transparent" aria-hidden />
      )}
      {tone === "editorialLight" ? <AmbientCuradoriaLayer /> : null}
      <div className="relative z-[2] mx-auto w-full min-w-0 max-w-7xl px-[clamp(0.75rem,4vw,1.5rem)] sm:px-6 md:max-lg:px-10 lg:px-8">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          <div className="relative z-10 min-w-0 lg:col-span-5 xl:col-span-6">
            <p className={`text-[10px] uppercase tracking-[0.18em] ${introEyebrow}`}>{eyebrow}</p>
            <h2 className={`mt-3 text-balance font-serif text-[1.95rem] font-medium tracking-tight sm:text-3xl md:text-4xl ${titleClass} ${titleDrop}`}>
              {title}
            </h2>
            <p className={`mt-3 max-w-xl text-[13px] leading-relaxed sm:text-sm md:mt-4 md:text-base ${introBody} ${introDrop}`}>
              {intro}
            </p>

            <EditorialFilterStrip
              options={aestheticFilters}
              selected={selectedAesthetic}
              onSelect={setSelectedAesthetic}
              label={filterLabel}
              tone={tone}
            />

            {filteredModels.length > 0 && (
              <ul className={`mt-6 flex flex-wrap gap-x-4 gap-y-1.5 border-t pt-4 sm:mt-8 sm:gap-x-5 sm:gap-y-2 sm:pt-6 md:max-lg:gap-x-6 ${listBorder}`}>
                {filteredModels.slice(0, 6).map((m) => (
                  <li key={m.id} className={`text-[11px] tracking-[0.14em] ${listItem}`}>
                    {m.lineName}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative min-w-0 overflow-hidden lg:col-span-7 xl:col-span-6 lg:pl-1">
            {filteredModels.length > 0 ? (
              <div className="mx-auto w-full max-w-[min(100%,26rem)] sm:max-w-[min(100%,28rem)] lg:ml-auto lg:mr-0 lg:max-w-[min(100%,32rem)] xl:max-w-[min(100%,34rem)] 2xl:max-w-[min(100%,36rem)]">
                <CurationCarousel3D models={filteredModels} tone={carouselTone} />
              </div>
            ) : (
              <p className={`mt-6 text-sm ${emptyClass}`}>
                Nenhuma peça nesta linguagem no momento da vitrine atual. Experimente{" "}
                <span className={emptySpan}>Ver tudo</span> ou fale com a consultoria para reposição sob medida.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
