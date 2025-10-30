import Growth from '@/assets/images/icons/growth.svg';
import Lightling from '@/assets/images/icons/lightning.svg';
import Lock from '@/assets/images/icons/lock.svg';
import ThumbsUp from '@/assets/images/icons/thumpsup.svg';
import Vehiicle from '@/assets/images/icons/vehicle.svg';
import Image from 'next/image';
import React from 'react';
import SectionHeader from '../shared/Sectionheader';

interface InfoCardProps {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

const INFO_CARD_DATA: InfoCardProps[] = [
  {
    icon: Lock,
    iconAlt: 'Lock icon',
    title: 'Trust',
    description: 'Regulated by Securities and Exchange Commission (SEC) Philippines',
  },
  {
    icon: Growth,
    iconAlt: 'Growth icon',
    title: 'High Amount',
    description: 'Get the highest loan amounts compared to other banks and lenders',
  },
  {
    icon: Lightling,
    iconAlt: 'Lightling icon',
    title: 'Fast',
    description: 'Get the money within a few hours on the same day',
  },
  {
    icon: Vehiicle,
    iconAlt: 'Vehiicle icon',
    title: 'Flexible',
    description: 'Loans are tailored to your needs',
  },
  {
    icon: ThumbsUp,
    iconAlt: 'ThumbsUp icon',
    title: 'Easy',
    description: 'Run through an easy process and get your first loans within days',
  },
];

const WhyOneLotSection: React.FC = () => {
  return (
    <section className="space-y-8 lg:space-y-12 w-full px-5 py-10">
      <SectionHeader
        aria-labelledby="why-onelot-heading"
        label="Why OneLot"
        className="text-center text-3xl font-extrabold"
      />
      <ul
        role="list"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:gap-8 gap-5 justify-center flex-wrap"
      >
        {INFO_CARD_DATA.map((item, i) => (
          <li key={`card-${i}`}>
            <InfoCard {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default WhyOneLotSection;

const InfoCard: React.FC<InfoCardProps> = ({ icon, iconAlt, title, description }) => {
  return (
    <div
      role="group"
      aria-labelledby={`${title.toLowerCase()}-title`}
      className="flex flex-col lg:gap-5 gap-1 lg:w-68 w-full h-full rounded-lg shadow-sm border lg:p-6 p-5 items-center"
    >
      <div className="lg:space-y-6 space-y-4 flex flex-col items-center">
        <span
          aria-hidden="true"
          className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F5EBF9] "
        >
          <Image
            src={icon}
            alt={iconAlt}
            width={50}
            height={50}
            className="w-5 h-5"
            draggable={false}
            priority
          />
        </span>
        <h3
          id={`${title.toLowerCase()}-title`}
          className="lg:text-2xl text-xl font-semibold leading-8 tracking-tight"
        >
          {title}
        </h3>
      </div>
      <p className="text-secondary text-base leading-7 font-normal text-center">{description}</p>
    </div>
  );
};
