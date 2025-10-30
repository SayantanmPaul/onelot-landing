'use client';

import ComplianceAuthoritiesSection from '@/components/sections/ComplianceAuthorities';
import BusinessGrowthSection from '@/components/sections/features/BusinessGrowth';
import FeatureListSection from '@/components/sections/features/FeatureList';
import HeroSection from '@/components/sections/Hero';

const Landing = () => {
  return (
    <section
      aria-label="OneLot Landing Page"
      className="flex flex-col gap-1.5 items-center h-full justify-start w-full"
    >
      <div role="separator" aria-hidden="true" className="lg:h-9 lg:block hidden w-full" />
      <HeroSection />
      <ComplianceAuthoritiesSection />
      <div role="separator" aria-hidden="true" className="w-full border-t border-border" />
      <BusinessGrowthSection />
      <div role="separator" aria-hidden="true" className="w-full border-t border-border" />
      <FeatureListSection />
    </section>
  );
};

export default Landing;
