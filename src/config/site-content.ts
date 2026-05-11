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
  href: "https://www.instagram.com/oticamalurehder/",
  handle: "@oticamalurehder",
} as const;

export const heroContent: HeroContent = {
  eyebrow: "Malu Rehder",
  title: "Curadoria sob medida para o seu rosto.",
  subtitle: "Consultoria para escolher com precisão — menos opções, mais acerto.",
  primaryCta: { ...consultationWhatsAppCta },
  secondaryCta: { ...curadoriaAnchorCta },
  visual: {
    src: "/Hero1X.webp",
    alt: "Malu Rehder — curadoria de óculos com orientação estética",
  },
};

export const differentialsSectionTitle = "Mais do que escolher óculos: valorizar sua presença";

export const differentialItems: DifferentialItem[] = [
  {
    title: "Curadoria com critério",
    description:
      "A seleção é feita com cuidado para evitar excesso de opções e aproximar você dos modelos que realmente combinam com seu rosto, seu estilo e sua necessidade.",
  },
  {
    title: "Orientação estética e conforto",
    description:
      "O atendimento considera formato do rosto, proporção, caimento, conforto e a imagem que você deseja transmitir.",
  },
  {
    title: "Acompanhamento próximo",
    description:
      "Após a escolha, você recebe orientação sobre uso, cuidado, ajustes e manutenção para que seus óculos continuem confortáveis e elegantes.",
  },
];

export const trustItems: TrustItem[] = [
  { label: "Atendimento personalizado", value: "Cuidado individual" },
  { label: "Curadoria de modelos", value: "Escolha com critério" },
  { label: "Pós-venda", value: "Ajustes e orientação" },
];

export const socialProofCopy = {
  title: "Olhar estético, cuidado técnico e atendimento próximo",
  intro:
    "A Malu Rehder une experiência em ótica, curadoria de modelos e atendimento personalizado para tornar a escolha dos óculos mais simples, segura e refinada. Você não precisa escolher entre dezenas de opções parecidas. Você precisa encontrar os modelos certos.",
};

export const signatureServicesSectionCopy = {
  eyebrow: "Serviços personalizados",
  title: "Detalhes pensados para deixar seus óculos ainda mais seus",
};

export const signatureServices: ServiceItem[] = [
  {
    title: "Personalização de lentes",
    description:
      "Orientação sobre tonalidade, acabamento e proteção das lentes, considerando conforto visual, rotina e estética.",
    ctaLabel: "Personalizar meu modelo",
  },
  {
    title: "Gravação personalizada",
    description:
      "Serviço para personalizar peças selecionadas com um detalhe discreto e elegante.",
    ctaLabel: "Consultar gravação",
  },
  {
    title: "Ajuste fino da armação",
    description:
      "Ajuste técnico de caimento, alinhamento e estabilidade para que os óculos fiquem mais confortáveis e bem posicionados no rosto.",
    ctaLabel: "Agendar ajuste",
  },
];

/** Filtros por estilo (+ ver tudo). */
export const aestheticFilters: CollectionOption[] = [
  { id: "all", label: "Ver tudo" },
  { id: "discreto", label: "Discreto" },
  { id: "marcante", label: "Marcante" },
  { id: "classico", label: "Clássico" },
  { id: "acetato", label: "Acetato" },
  { id: "metal-leve", label: "Metal leve" },
  { id: "dourado", label: "Dourado" },
];

export const collectionSectionCopy = {
  eyebrow: "CURADORIA POR ESTILO",
  title: "Armações escolhidas para valorizar seu rosto e sua presença",
  intro:
    "Na Malu Rehder, a escolha dos óculos começa com atenção ao seu rosto, à sua rotina e ao estilo que você deseja expressar. Cada linha reúne modelos com uma proposta diferente: dos mais discretos aos mais marcantes, sempre com foco em elegância, conforto e bom acabamento.",
  filterLabel: "Filtrar por",
};

export const eyewearCollection: CollectionModel[] = [
  {
    id: "mr-01",
    lineName: "Linha Essenza",
    aestheticIds: ["discreto", "acetato"],
    styleSignature: "Discreto e sofisticado",
    materialHighlight:
      "Modelos leves, elegantes e atemporais para quem busca uma presença refinada sem exageros.",
    visual: {
      src: "/Oculus1.webp",
      alt: "Seleção de armações Linha Essenza em estojo premium",
    },
  },
  {
    id: "mr-02",
    lineName: "Linha Forte",
    aestheticIds: ["marcante", "metal-leve"],
    styleSignature: "Presença marcante",
    materialHighlight:
      "Armações com traços mais definidos para quem deseja transmitir segurança, personalidade e estilo.",
    visual: {
      src: "/Oculus2.webp",
      alt: "Armação Linha Forte em composição editorial",
    },
  },
  {
    id: "mr-03",
    lineName: "Linha Clássica",
    aestheticIds: ["classico", "dourado"],
    styleSignature: "Elegância atemporal",
    materialHighlight:
      "Modelos equilibrados, com detalhes delicados e acabamento refinado para quem valoriza um visual clássico e sofisticado.",
    visual: {
      src: "/Oculus3.webp",
      alt: "Coleção Linha Clássica em vitrine curada",
    },
  },
  {
    id: "mr-04",
    lineName: "Linha Sutil",
    aestheticIds: ["discreto", "metal-leve"],
    styleSignature: "Leveza no rosto",
    materialHighlight:
      "Armações delicadas, confortáveis e discretas, pensadas para uso diário com elegância.",
    visual: {
      src: "/Oculus4.webp",
      alt: "Armação Linha Sutil em composição de curadoria",
    },
  },
  {
    id: "mr-05",
    lineName: "Linha Autoral",
    aestheticIds: ["marcante", "acetato"],
    styleSignature: "Design com personalidade",
    materialHighlight:
      "Modelos selecionados para quem deseja fugir do comum, mantendo sofisticação e bom gosto.",
    visual: {
      src: "/Oculus5.webp",
      alt: "Armação Linha Autoral em mesa editorial",
    },
  },
  {
    id: "mr-06",
    lineName: "Linha Dourada",
    aestheticIds: ["classico", "dourado", "metal-leve"],
    styleSignature: "Detalhes que iluminam",
    materialHighlight:
      "Armações com acabamentos dourados e detalhes elegantes para valorizar o rosto com sutileza.",
    visual: {
      src: "/Oculus6.webp",
      alt: "Armação Linha Dourada com acabamento metálico refinado",
    },
  },
];

export const faqSectionTitle = "Dúvidas antes da consultoria";

export const faqItems: FaqItem[] = [
  {
    question: "Como funciona a consultoria?",
    answer:
      "Entendemos seu estilo, formato de rosto, rotina e necessidades visuais para indicar modelos que valorizem sua imagem e tragam conforto.",
  },
  {
    question: "A loja trabalha com poucos modelos?",
    answer:
      "Sim. A seleção é propositalmente mais enxuta para facilitar a escolha e manter um padrão maior de qualidade, acabamento e atendimento.",
  },
  {
    question: "Posso iniciar o atendimento online?",
    answer:
      "Sim. O primeiro contato pode ser feito pelo WhatsApp. A partir dele, entendemos melhor o que você procura e orientamos os próximos passos.",
  },
  {
    question: "Existe opção de personalização?",
    answer:
      "Sim. Algumas peças permitem personalização em lentes, acabamentos ou detalhes específicos, sempre com orientação da equipe.",
  },
  {
    question: "A consultoria também ajuda na escolha das lentes?",
    answer:
      "Sim. A equipe orienta sobre opções de lentes, tratamentos e acabamentos de acordo com sua necessidade e com o modelo escolhido.",
  },
  {
    question: "Posso buscar óculos de grau e óculos de sol?",
    answer:
      "Sim. A curadoria pode considerar diferentes usos, como rotina profissional, leitura, direção, eventos, proteção solar e estilo pessoal.",
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
      "Conversamos sobre sua rotina, suas preferências, suas necessidades visuais e o tipo de imagem que você deseja passar.",
  },
  {
    title: "Seleção orientada",
    description:
      "Em vez de apresentar muitos modelos sem direção, indicamos armações que combinam melhor com seu rosto, seu estilo e seu momento.",
  },
  {
    title: "Escolha das lentes e acabamentos",
    description:
      "Orientamos a escolha das lentes, tratamentos e acabamentos, sempre pensando em conforto, proteção e harmonia com a armação.",
  },
  {
    title: "Ajustes e próximos passos",
    description:
      "Ajustamos o caimento dos óculos, orientamos os cuidados de uso e combinamos novas visitas quando necessário.",
  },
];

export const stylingConsultationContent = {
  title: "Uma escolha guiada por proporção, estilo e presença",
  intro:
    "A consultoria Malu Rehder considera seu formato de rosto, sua rotina, suas preferências e a imagem que você deseja transmitir. O objetivo é tornar a escolha dos óculos mais clara, segura e elegante — com modelos que valorizem seus traços e acompanhem seu dia a dia com conforto.",
  panelEyebrow: "Experiência personalizada",
  panelTitle: "Uma curadoria feita para o seu rosto e sua rotina",
  panelBody:
    "Armações, lentes e acabamentos são indicados a partir das suas necessidades, do seu estilo e da forma como você usa seus óculos no dia a dia.",
};

export const consultationStripCopy = {
  headline: "Pronto para escolher seus próximos óculos com mais segurança?",
  sub: "Fale conosco e receba indicações de modelos alinhados ao seu rosto, ao seu estilo e à sua rotina.",
  cta: { ...consultationWhatsAppCta },
};

export const finalCtaCopy = {
  title: "Agende uma curadoria e escolha seus próximos óculos com mais clareza",
  subtitle:
    "Fale com nossa equipe para receber indicações personalizadas de armações, lentes e acabamentos — com segurança, conforto e intenção de imagem bem definida.",
  primaryCta: { ...consultationWhatsAppCta },
  secondaryCta: { ...curadoriaAnchorCta },
};

export const siteFooterCopy = {
  line1: "Malu Rehder",
  line2:
    "Curadoria de óculos, atendimento personalizado e orientação estética para uma escolha mais elegante, segura e alinhada ao seu estilo.",
  line3: "Sorocaba/SP",
  line4: "Atendimento com horário marcado, conforme disponibilidade da loja.",
};
