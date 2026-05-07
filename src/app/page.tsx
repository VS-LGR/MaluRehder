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
      <EditorialHeroBodyFlow image={heroContent.visual.src} imageAlt={heroContent.visual.alt}>
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
        <ScrollReveal delayMs={40}>
          <ConsultationStripSection
            headline={consultationStripCopy.headline}
            sub={consultationStripCopy.sub}
            cta={consultationStripCopy.cta}
          />
        </ScrollReveal>
      </EditorialHeroBodyFlow>
      <ScrollReveal delayMs={60}>
        <DifferentialsSection sectionTitle={differentialsSectionTitle} items={differentialItems} />
      </ScrollReveal>
      <ScrollReveal delayMs={75}>
        <ProcessSection
          eyebrow={processSectionCopy.eyebrow}
          title={processSectionCopy.title}
          steps={consultationProcessSteps}
        />
      </ScrollReveal>
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
