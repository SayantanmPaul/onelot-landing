import Link from 'next/link';
import React from 'react';
import SectionHeader from '../shared/Sectionheader';
import SubHeader from '../shared/Subheader';
import { Button } from '../ui/button';

const CallToAction: React.FC = () => {
  return (
    <section
      aria-labelledby="cta-heading"
      className="space-y-6 lg:space-y-8 w-full px-6 lg:px-0 lg:py-10 py-12 flex flex-col items-center z-0"
    >
      <SectionHeader
        id="cta-heading"
        label="Get Started Today"
        className="text-center text-3xl font-extrabold"
      />
      <div className="lg:max-w-2xl md:max-w-2xl max-w-80">
        <SubHeader
          label="We look forward to serving the needs of used car dealers across the Philippines and helping them thrive in this dynamic market."
          className="text-center w-full text-xl leading-8"
        />
      </div>
      <Link href="/" passHref aria-label="Inquire now">
        <Button className="h-12 px-5 items-center text-base leading-6 font-medium w-auto cursor-pointer ">
          Inquire now
        </Button>
      </Link>
    </section>
  );
};

export default CallToAction;
