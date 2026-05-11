import type { Metadata } from "next";

/** Single source of truth for home page discoverability copy (pt-BR). */
const homePageSeoCopy = {
  title: "Malu Rehder | Curadoria de óculos e consultoria personalizada",
  description:
    "Óculos escolhidos com critério, orientação estética e atendimento próximo. Malu Rehder — Sorocaba/SP.",
  openGraphDescription:
    "Curadoria de armações com consultoria para valorizar seu rosto, seu estilo e sua rotina.",
} as const;

export const homeMetadata: Metadata = {
  title: homePageSeoCopy.title,
  description: homePageSeoCopy.description,
  keywords: [
    "ótica Sorocaba",
    "óculos alto padrão",
    "armações curadas",
    "consultoria óculos",
    "Malu Rehder",
  ],
  openGraph: {
    title: homePageSeoCopy.title,
    description: homePageSeoCopy.openGraphDescription,
    type: "website",
    locale: "pt_BR",
  },
  alternates: {
    canonical: "/",
  },
};
