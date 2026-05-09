import type { Metadata } from "next";

/** Single source of truth for home page discoverability copy (pt-BR). */
const homePageSeoCopy = {
  title: "Malu Rehder | Óculos premium com curadoria estética",
  description:
    "Descubra óculos de alto padrão com consultoria de harmonização estética. Curadoria exclusiva Malu Rehder com atendimento personalizado.",
  openGraphDescription:
    "Curadoria exclusiva de óculos com atendimento consultivo para harmonização do seu estilo.",
} as const;

export const homeMetadata: Metadata = {
  title: homePageSeoCopy.title,
  description: homePageSeoCopy.description,
  keywords: [
    "ótica premium",
    "óculos de luxo",
    "armações de qualidade",
    "consultoria de estilo",
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
