'use client';

import ComplianceAuthoritiesSection from '@/components/sections/ComplianceAuthorities';
import FaqSection from '@/components/sections/FaqSection';
import BusinessGrowthSection from '@/components/sections/features/BusinessGrowth';
import FeatureListSection from '@/components/sections/features/FeatureList';
import HeroSection from '@/components/sections/Hero';
import Testimonials from '@/components/sections/Testimonials';
import WhyOneLotSection from '@/components/sections/WhyOneLotSection';
import Devider from '@/components/shared/Devider';

const Landing = () => {
  return (
    <section
      aria-label="OneLot Landing Page"
      className="flex flex-col gap-1.5 items-center h-full justify-start w-full"
    >
      <div role="separator" aria-hidden="true" className="lg:h-9 lg:block hidden w-full" />
      <HeroSection />
      <ComplianceAuthoritiesSection />
      <Devider />
      <BusinessGrowthSection />
      <Devider />
      <FeatureListSection />
      <WhyOneLotSection />
      <Devider />
      <Testimonials />
      <Devider />
      <FaqSection />
    </section>
  );
};

export default Landing;
