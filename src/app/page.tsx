import { CollectionCurationSection } from "@/components/sections/CollectionCurationSection";
import { ConsultationStripSection } from "@/components/sections/ConsultationStripSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { SignatureServicesSection } from "@/components/sections/SignatureServicesSection";
import { StylingConsultationSection } from "@/components/sections/StylingConsultationSection";
import { EditorialHeroBodyFlow } from "@/components/layout/EditorialHeroBodyFlow";
import { BrandScrollMarquee } from "@/components/ui/BrandScrollMarquee";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  aestheticFilters,
  collectionSectionCopy,
  consultationProcessSteps,
  consultationStripCopy,
  differentialItems,
  differentialsSectionTitle,
  eyewearCollection,
  faqItems,
  faqSectionTitle,
  finalCtaCopy,
  heroContent,
  processSectionCopy,
  signatureServices,
  signatureServicesSectionCopy,
  socialProofCopy,
  trustItems,
} from "@/config/site-content";

export default function HomePage() {
  return (
    <>
      <EditorialHeroBodyFlow
        band={<BrandScrollMarquee />}
        image={{
          base: "/Hero+Body.webp",
          medium: "/Hero+Body@0,75x.webp",
          small: "/Hero+Body@0,5x.webp",
        }}
        imageAlt={heroContent.visual.alt}
      >
        <div className="shrink-0">
          <HeroSection content={heroContent} omitBackground />
          <ScrollReveal>
            <CollectionCurationSection
              eyebrow={collectionSectionCopy.eyebrow}
              title={collectionSectionCopy.title}
              intro={collectionSectionCopy.intro}
              filterLabel={collectionSectionCopy.filterLabel}
              aestheticFilters={aestheticFilters}
              models={eyewearCollection}
              tone="editorial"
            />
          </ScrollReveal>
        </div>

        {/* Ocupa o restante da arte e ancora o conteúdo na faixa dourada (abaixo do pano) */}
        <div className="relative flex min-h-0 w-full flex-1 flex-col justify-end px-3 pb-8 pt-4 md:px-5 md:pb-12 md:pt-6">
          <ScrollReveal delayMs={40}>
            <ConsultationStripSection
              headline={consultationStripCopy.headline}
              sub={consultationStripCopy.sub}
              cta={consultationStripCopy.cta}
              editorialOverlay
            />
          </ScrollReveal>
          <ScrollReveal delayMs={60}>
            <DifferentialsSection
              sectionTitle={differentialsSectionTitle}
              items={differentialItems}
              editorialOverlay
            />
          </ScrollReveal>
          <ScrollReveal delayMs={75}>
            <ProcessSection
              eyebrow={processSectionCopy.eyebrow}
              title={processSectionCopy.title}
              steps={consultationProcessSteps}
              editorialOverlay
            />
          </ScrollReveal>
        </div>
      </EditorialHeroBodyFlow>
      <ScrollReveal delayMs={90}>
        <StylingConsultationSection />
      </ScrollReveal>
      <ScrollReveal delayMs={120}>
        <SocialProofSection
          title={socialProofCopy.title}
          intro={socialProofCopy.intro}
          trustItems={trustItems}
        />
      </ScrollReveal>
      <ScrollReveal delayMs={140}>
        <SignatureServicesSection
          eyebrow={signatureServicesSectionCopy.eyebrow}
          sectionTitle={signatureServicesSectionCopy.title}
          items={signatureServices}
        />
      </ScrollReveal>
      <ScrollReveal delayMs={160}>
        <FaqSection title={faqSectionTitle} items={faqItems} />
      </ScrollReveal>
      <ScrollReveal delayMs={180}>
        <FinalCtaSection
          title={finalCtaCopy.title}
          subtitle={finalCtaCopy.subtitle}
          primaryCta={finalCtaCopy.primaryCta}
          secondaryCta={finalCtaCopy.secondaryCta}
        />
      </ScrollReveal>
    </>
  );
}
