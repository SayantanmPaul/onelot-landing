import { CheckIcon, MoveRightIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import SectionHeader from './Sectionheader';
import SubHeader from './Subheader';

interface PlatformOptionsProps {
  title: string;
  subtitle?: string;
  description: string;
  featureList: string[];
  actionButton: string;
  actionButtonFn: () => void;
  bottomText: string;
  platformImg: string;
  platformAlt: string;
  imgPosition: 'left' | 'right';
}

const PlatformOptions: React.FC<PlatformOptionsProps> = ({
  title,
  subtitle,
  description,
  featureList,
  actionButton,
  actionButtonFn,
  bottomText,
  platformImg,
  imgPosition,
}) => {
  const imagePositionClass =
    imgPosition === 'left'
      ? 'lg:flex-row flex-col lg:pr-9'
      : 'lg:flex-row-reverse flex-col lg:pl-9';
  return (
    <section
      className={`flex items-center justify-around lg:gap-24 gap-8 ${imagePositionClass} md:px-6 px-5`}
    >
      <Image
        src={platformImg}
        alt={platformImg}
        width={800}
        height={652}
        draggable={false}
        loading="lazy"
        placeholder="blur"
        blurDataURL={platformImg}
      />
      <div className="flex flex-col gap-6">
        <header className="flex flex-col gap-3">
          <SectionHeader
            label={title}
            className="text-3xl font-bold"
            id={`${title.toLowerCase()}`}
          />
          {subtitle && (
            <h3 className="lg:text-xl text-lg lg:font-bold font-semibold leading-8">{subtitle}</h3>
          )}
        </header>
        <SubHeader label={description} />
        <OfferingsList itemList={featureList} />
        <SubHeader label={bottomText} />

        <Button onClick={actionButtonFn} className="text-sm font-medium leading-4 w-36 h-10">
          {actionButton} <MoveRightIcon className="size-5" />
        </Button>
      </div>
    </section>
  );
};

export default PlatformOptions;

const OfferingsList = ({ itemList }: { itemList: string[] }) => {
  return (
    <ul className="flex flex-col gap-4 py-8 border-y border-border" aria-label="Feature list">
      {itemList.map((item, i) => {
        const [labeled, ...rest] = item.split(':');
        const restText = rest.join(':');

        return (
          <li key={`feature-${i}`} className="flex items-center gap-2.5">
            <span className="w-4 h-4 flex items-center justify-center shrink-0 rounded-full bg-[#F0E2FF]">
              {' '}
              <CheckIcon strokeWidth={2.5} className="size-2 text-[#8D4ED5] shrink-0" />
            </span>
            <p className="text-base font-medium leading-7 -tracking-0.5 ">
              {restText ? (
                <>
                  <strong className="font-semi  bold">{labeled}:</strong>
                  {restText}
                </>
              ) : (
                item
              )}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
