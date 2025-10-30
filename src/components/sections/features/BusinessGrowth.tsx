import { MoveRightIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import DollarIcon from '@/assets/images/icons/dollar.svg';
import MicIcon from '@/assets/images/icons/mic.svg';
import SectionHeader from '@/components/shared/Sectionheader';
import SubHeader from '@/components/shared/Subheader';

const BusinessGrowthSection: React.FC = () => {
  return (
    <section
      aria-labelledby="business-growth-heading"
      className="flex flex-col lg:flex-row lg:items-center md:items-center w-full lg:gap-4 gap-7 mx-auto justify-around lg:py-24 py-6 lg:px-4 px-5"
    >
      {/* Left Content */}
      <div className="flex flex-col items-start max-w-[530px] gap-5">
        <SectionHeader
          aria-labelledby="business-growth-heading"
          label="Everything you need to grow your business"
          className="text-3xl font-extrabold"
        />
        <SubHeader label="OneLot is your trusted lending and financing partner, exclusively tailored for used car dealership. We also offer digital tools for streamlined operations and growth of your dealership." />
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Learn more about how OneLot helps grow your business"
          className="text-primary font-medium text-base leading-7 flex items-center gap-1.5 hover:gap-3 transition-all duration-100"
        >
          Learn more
          <MoveRightIcon className="size-5" />
        </a>
      </div>

      {/* Divider */}
      <div
        role="separator"
        aria-hidden="true"
        className="w-full border-t border-border block lg:hidden "
      />

      {/* Right Content */}
      <FeatureCards />
    </section>
  );
};

export default BusinessGrowthSection;

const FeatureCards: React.FC = () => {
  return (
    <div
      role="list"
      className="flex md:flex-row lg:flex-col flex-col md:max-w-3xl lg:max-w-2xl max-w-76 lg:gap-6 gap-8"
    >
      <FeatureCard
        icon={DollarIcon}
        iconAlt="Dollar icon"
        iconBg="#D6F2F5"
        iconColor="#4DC9D6"
        title="Dealer Loans"
        subtitle="Accelerate your growth with tailored loan solutions"
        subtitleColor="text-[#4DC9D6]"
        description="Get comprehensive car financing solutions, unlock the potential of your dealership and take it to new heights."
      />
      <FeatureCard
        icon={MicIcon}
        iconAlt="Mic icon"
        iconBg="#D6F2F5"
        iconColor="#4DC9D6"
        title="Dealership Management System"
        subtitle="Enhance Efficiency and Sales with free digital tools for car dealerships"
        subtitleColor="text-indigo-500"
        description="OneLot offers a suite of powerful digital tools designed to optimize your dealership's operations."
      />
    </div>
  );
};

interface FeatureCardProps {
  icon: string;
  iconAlt: string;
  iconBg: string;
  iconColor?: string;
  title: string;
  subtitle: string;
  subtitleColor: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconAlt,
  iconBg,
  title,
  subtitle,
  subtitleColor,
  description,
}) => (
  <div className="flex flex-col lg:flex-row items-start gap-4" role="listitem">
    <span
      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
      style={{ backgroundColor: iconBg }}
      aria-hidden="true"
    >
      <Image src={icon} alt={iconAlt} width={20} height={20} className="size-5" draggable={false} />
    </span>

    <div className="flex flex-col gap-3">
      <h3 className="lg:text-xl text-[22px] font-bold leading-8">{title}</h3>
      <div className="flex flex-col gap-2">
        <p
          className={`${subtitleColor} lg:text-lg text-base font-semibold lg:leading-6 md:leading-6 leading-8`}
        >
          {subtitle}
        </p>
        <p className="text-secondary lg:text-lg text-base font-normal leading-6">{description}</p>
      </div>
    </div>
  </div>
);
