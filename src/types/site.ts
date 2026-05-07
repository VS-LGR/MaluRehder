import type { StaticImageData } from "next/image";

export type CtaLink = {
  label: string;
  href: string;
};

export type SiteImage = {
  src: StaticImageData;
  alt: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  visual: SiteImage;
};

export type DifferentialItem = {
  title: string;
  description: string;
};

export type TrustItem = {
  label: string;
  value: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  ctaLabel: string;
};

export type CollectionOption = {
  id: string;
  label: string;
};

export type CollectionModel = {
  id: string;
  lineName: string;
  /** Linguagem estética (um ou mais ids de `aestheticFilters` em config). */
  aestheticIds: string[];
  styleSignature: string;
  materialHighlight: string;
  visual: SiteImage;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};
