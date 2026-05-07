import type {
  CollectionModel,
  CollectionOption,
  DifferentialItem,
  FaqItem,
  HeroContent,
  ProcessStep,
  ServiceItem,
  TrustItem,
} from "@/types/site";
import Estojo from "@/assets/Estojo.png";
import EstojoWide from "@/assets/Estojo_Wide.png";
import HeroBodyCombined from "@/assets/Hero+Body.jpg";
import Oculos from "@/assets/Oculos.png";

/** Link principal WhatsApp para consultoria (reutilizado no hero, header, faixa e CTA final). */
export const consultationWhatsAppCta = {
  label: "Agendar consultoria",
  href: "https://wa.me/5500000000000?text=Ola%2C%20quero%20agendar%20uma%20consultoria%20Malu%20Rehder.",
} as const;

export const curadoriaAnchorCta = {
  label: "Conhecer a curadoria",
  href: "#curadoria",
} as const;

export const instagramLink = {
  href: "https://instagram.com/",
  handle: "@malurehder",
} as const;

export const heroContent: HeroContent = {
  eyebrow: "CURADORIA ÓPTICA DE ALTO PADRÃO",
  title: "Curadoria óptica com presença e medida certa para o seu rosto",
  subtitle:
    "Seleção restrita de armações sofisticadas e acompanhamento estético para equilibrar estilo, conforto e intenção de imagem — sem excesso de opções.",
  primaryCta: { ...consultationWhatsAppCta },
  secondaryCta: { ...curadoriaAnchorCta },
  visual: {
    src: HeroBodyCombined,
    alt: "Malu Rehder — curadoria editorial em óculos de alto padrão",
  },
};

export const differentialsSectionTitle =
  "Mais do que escolher óculos: construir presença";

export const differentialItems: DifferentialItem[] = [
  {
    title: "Curadoria com critério",
    description:
      "Poucos modelos escolhidos a dedo, alinhados a design atemporal e impacto visual refinado — longe do catálogo infinito.",
  },
  {
    title: "Ajuste técnico e leitura de estilo",
    description:
      "Atendimento consultivo que considera anatomia, proporção facial e sua linguagem visual para uma escolha segura.",
  },
  {
    title: "Acompanhamento próximo",
    description:
      "Relacionamento contínuo após a escolha, com orientações de uso, cuidado e revisitas quando fizer sentido.",
  },
];

export const trustItems: TrustItem[] = [
  { label: "Atendimento consultivo", value: "1:1 especializado" },
  { label: "Design italiano", value: "Curadoria autoral" },
  { label: "Pós-venda", value: "Ajustes e orientação" },
];

export const socialProofCopy = {
  title: "Curadoria com olhar estético e precisão óptica",
  intro:
    "Processo consultivo, critério técnico e acompanhamento próximo — para uma experiência de compra clara, segura e alinhada à sua imagem.",
};

export const signatureServicesSectionCopy = {
  eyebrow: "Serviços de assinatura",
  title: "Luxo com personalização precisa",
};

export const signatureServices: ServiceItem[] = [
  {
    title: "Personalização de lentes",
    description:
      "Sugestão de tonalidade e acabamento para alinhar imagem pessoal, uso real e conforto visual.",
    ctaLabel: "Personalizar meu modelo",
  },
  {
    title: "Assinatura e gravação",
    description:
      "Serviço premium para personalização discreta de peças selecionadas, com identidade única.",
    ctaLabel: "Consultar gravação",
  },
  {
    title: "Fit atelier",
    description:
      "Ajuste técnico fino de caimento e alinhamento da armação para estabilidade e elegância.",
    ctaLabel: "Agendar fit atelier",
  },
];

/** Filtro único: linguagem estética (+ ver tudo). */
export const aestheticFilters: CollectionOption[] = [
  { id: "all", label: "Ver tudo" },
  { id: "minimal", label: "Minimal" },
  { id: "statement", label: "Statement" },
  { id: "italiano-classico", label: "Italiano clássico" },
  { id: "acetato", label: "Acetato" },
  { id: "metal-leve", label: "Metal leve" },
  { id: "dourado", label: "Dourado" },
];

export const collectionSectionCopy = {
  eyebrow: "Curadoria por linguagem estética",
  title: "Armações com assinatura de mercado de luxo",
  intro:
    "Cada linha traduz uma linguagem estética distinta. Refine a vitrine por tom — de minimalista a statement — e encontre o encaixe com a sua presença.",
  /** Exibido em linha com os chips: “Filtrar por” + opções */
  filterLabel: "Filtrar por",
};

export const eyewearCollection: CollectionModel[] = [
  {
    id: "mr-01",
    lineName: "Linea Essenza",
    aestheticIds: ["minimal", "acetato"],
    styleSignature: "Minimal sofisticado",
    materialHighlight:
      "Volumes contidos, acabamento acetinado e leveza visual para uma presença silenciosa.",
    visual: {
      src: Estojo,
      alt: "Seleção de armações Linea Essenza em estojo premium",
    },
  },
  {
    id: "mr-02",
    lineName: "Linea Forte",
    aestheticIds: ["statement", "metal-leve"],
    styleSignature: "Presença marcante",
    materialHighlight:
      "Metal leve, traços assertivos e geometria limpa para uma imagem mais marcante.",
    visual: {
      src: Oculos,
      alt: "Armação Linea Forte em composição editorial",
    },
  },
  {
    id: "mr-03",
    lineName: "Linea Classica",
    aestheticIds: ["italiano-classico", "dourado"],
    styleSignature: "Clássico italiano contemporâneo",
    materialHighlight:
      "Detalhes dourados, proporções atemporais e elegância italiana contemporânea.",
    visual: {
      src: EstojoWide,
      alt: "Coleção Linea Classica — curadoria de luxo em vitrine",
    },
  },
];

export const faqSectionTitle = "Dúvidas antes da consultoria";

export const faqItems: FaqItem[] = [
  {
    question: "Como funciona a consultoria de harmonização estética?",
    answer:
      "Mapeamos seu estilo, formato de rosto e intenção de imagem para indicar modelos que valorizem proporção e personalidade.",
  },
  {
    question: "A loja trabalha com poucos modelos?",
    answer:
      "Sim. A seleção é propositalmente enxuta para garantir qualidade, exclusividade e decisão com suporte consultivo.",
  },
  {
    question: "Posso iniciar o atendimento online?",
    answer:
      "Sim. O primeiro contato pode ser pelo WhatsApp, onde entendemos seu perfil e direcionamos os modelos mais adequados.",
  },
  {
    question: "Existe opção de personalização?",
    answer:
      "Sim. Trabalhamos personalização em lentes e acabamentos selecionados, sempre com avaliação consultiva.",
  },
];

export const processSectionCopy = {
  eyebrow: "Como funciona",
  title: "A consultoria em quatro momentos",
};

export const consultationProcessSteps: ProcessStep[] = [
  {
    title: "Primeiro contato",
    description:
      "Conversamos sobre rotina visual, objetivos de imagem e preferências — para chegar à consulta com direção clara.",
  },
  {
    title: "Seleção assistida",
    description:
      "Menos volume, mais precisão: apresentamos peças alinhadas à sua anatomia e linguagem estética, sem excesso de opções.",
  },
  {
    title: "Medidas e escolha das lentes",
    description:
      "Definimos tecnologia e acabamentos das lentes com foco em conforto, proteção e coerência com o modelo escolhido.",
  },
  {
    title: "Acabamentos e próximos passos",
    description:
      "Ajustamos caimento, orientamos uso e manutenção, e combinamos revisitas quando fizer sentido.",
  },
];

export const stylingConsultationContent = {
  title: "Uma escolha guiada por proporção, estilo e presença",
  intro:
    "A consultoria considera linguagem visual, formato de rosto e contexto de uso — para que cada escolha seja elegante, confortável e coerente com quem você é.",
  panelEyebrow: "Experiência sob medida",
  panelTitle: "Uma curadoria individual, feita para o seu rosto e sua rotina",
  panelBody:
    "Modelos, lentes e acabamentos são direcionados a partir da sua anatomia facial, intenção de imagem e contexto de uso.",
};

export const consultationStripCopy = {
  headline: "Pronto para agendar sua consultoria?",
  sub: "Fale conosco e receba indicações alinhadas ao seu rosto e à sua presença.",
  cta: { ...consultationWhatsAppCta },
};

export const finalCtaCopy = {
  title: "Agende uma curadoria e escolha com mais clareza",
  subtitle:
    "Fale com nossa equipe para receber indicações personalizadas — com segurança na decisão e intenção de imagem bem definida.",
  primaryCta: { ...consultationWhatsAppCta },
  secondaryCta: { ...curadoriaAnchorCta },
};

export const siteFooterCopy = {
  line1: "Malu Rehder Eyewear Curatorship",
  line2: "Atendimento com horário marcado e orientação personalizada.",
};
