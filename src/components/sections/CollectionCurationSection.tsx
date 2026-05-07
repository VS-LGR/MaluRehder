"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { CollectionModel, CollectionOption } from "@/types/site";

/** editorial = texto claro (arte escura); editorialLight = tipografia escura sobre faixa clara. */
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
    tone === "editorialLight"
      ? "text-neutral-600"
      : tone === "editorial"
        ? "text-stone-400/85"
        : "text-neutral-500";
  const borderTone =
    tone === "editorialLight" ? "border-neutral-300/50" : "border-white/12";

  return (
    <div className={`mt-7 flex flex-col gap-3 border-b ${borderTone} pb-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2`}>
      <span className={`shrink-0 text-[10px] uppercase tracking-[0.2em] ${labelClass}`}>{label}</span>
      <div className="flex min-w-0 flex-1 flex-wrap gap-1.5 sm:justify-start">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            className={`rounded-full border px-2 py-1 text-[10px] font-medium tracking-wide transition md:px-2.5 md:text-[11px] ${chipToneClasses(tone, selected === option.id)}`}
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
    () =>
      models.filter(
        (model) =>
          selectedAesthetic === "all" || model.aestheticIds.includes(selectedAesthetic),
      ),
    [models, selectedAesthetic],
  );

  const surface =
    tone === "editorialLight"
      ? "bg-transparent text-neutral-900"
      : tone === "editorial"
        ? "bg-transparent text-stone-50"
        : "bg-neutral-950 text-neutral-100";

  const introEyebrow =
    tone === "editorialLight"
      ? "text-amber-900/75"
      : tone === "editorial"
        ? "text-amber-100/80"
        : "text-neutral-400";
  const introBody =
    tone === "editorialLight"
      ? "text-neutral-700"
      : tone === "editorial"
        ? "text-stone-200/95"
        : "text-neutral-300";

  const cardShell =
    tone === "editorialLight"
      ? "border border-neutral-200/90 bg-white/92 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm"
      : tone === "editorial"
        ? "border border-white/12 bg-neutral-950/50 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
        : "border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950";

  const thumbWrap =
    tone === "editorialLight"
      ? "border border-neutral-200 bg-neutral-100"
      : tone === "editorial"
        ? "border border-white/10 bg-black/30"
        : "border border-neutral-800 bg-neutral-950";

  const titleClass =
    tone === "editorialLight"
      ? "text-neutral-900"
      : tone === "editorial"
        ? "text-stone-50"
        : "text-neutral-100";
  const subClass =
    tone === "editorialLight"
      ? "text-neutral-700"
      : tone === "editorial"
        ? "text-stone-200/90"
        : "text-neutral-300";
  const metaClass =
    tone === "editorialLight"
      ? "text-neutral-600"
      : tone === "editorial"
        ? "text-stone-400/95"
        : "text-neutral-400";
  const emptyClass =
    tone === "editorialLight"
      ? "text-neutral-600"
      : tone === "editorial"
        ? "text-stone-300/90"
        : "text-neutral-400";

  const titleDrop =
    tone === "editorial"
      ? "drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]"
      : tone === "editorialLight"
        ? ""
        : "";
  const introDrop = tone === "editorial" ? "drop-shadow-[0_1px_12px_rgba(0,0,0,0.4)]" : "";

  const sectionSpacing =
    tone === "editorialLight"
      ? "scroll-mt-[88px] pb-20 pt-[clamp(3.5rem,min(16vh),10rem)] md:pb-28 md:pt-[clamp(4rem,min(18vh),12rem)]"
      : tone === "editorial"
        ? "scroll-mt-[88px] pb-20 pt-[clamp(5rem,min(20vh),11rem)] md:pb-28 md:pt-[clamp(6rem,min(24vh),14rem)]"
        : "scroll-mt-[88px] pt-4 pb-20 md:pt-8 md:pb-28";

  return (
    <section id="curadoria" className={`relative z-10 ${surface} ${sectionSpacing}`}>
      {tone === "editorial" && (
        <div
          className="pointer-events-none absolute inset-x-0 -top-12 h-28 bg-gradient-to-b from-black/15 to-transparent md:h-36"
          aria-hidden
        />
      )}
      {tone === "editorialLight" && (
        <div
          className="pointer-events-none absolute inset-x-0 -top-8 h-24 bg-gradient-to-b from-white/25 to-transparent md:h-32"
          aria-hidden
        />
      )}
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <p className={`text-[10px] uppercase tracking-[0.18em] ${introEyebrow}`}>{eyebrow}</p>
        <h2
          className={`mt-3 font-serif text-3xl font-medium tracking-tight md:text-4xl ${titleClass} ${titleDrop}`}
        >
          {title}
        </h2>
        <p className={`mt-4 max-w-3xl text-sm leading-relaxed md:text-base ${introBody} ${introDrop}`}>
          {intro}
        </p>

        <EditorialFilterStrip
          options={aestheticFilters}
          selected={selectedAesthetic}
          onSelect={setSelectedAesthetic}
          label={filterLabel}
          tone={tone}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {filteredModels.map((model) => (
            <article key={model.id} className={`rounded-2xl p-5 md:p-6 ${cardShell}`}>
              <div className={`overflow-hidden rounded-xl ${thumbWrap}`}>
                <Image
                  src={model.visual.src}
                  alt={model.visual.alt}
                  className="h-48 w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </div>
              <h3 className={`mt-4 font-serif text-lg font-medium ${titleClass}`}>{model.lineName}</h3>
              <p className={`mt-2 text-xs tracking-wide ${subClass}`}>{model.styleSignature}</p>
              <p className={`mt-3 text-[13px] leading-snug ${metaClass}`}>{model.materialHighlight}</p>
            </article>
          ))}
        </div>
        {filteredModels.length === 0 && (
          <p className={`mt-6 text-sm ${emptyClass}`}>
            Nenhuma peça nesta linguagem no momento da vitrine atual. Experimente{" "}
            <span
              className={
                tone === "editorialLight" ? "font-medium text-neutral-900" : "text-stone-200"
              }
            >
              Ver tudo
            </span>{" "}
            ou fale com a consultoria para reposição sob medida.
          </p>
        )}
      </div>
    </section>
  );
}
