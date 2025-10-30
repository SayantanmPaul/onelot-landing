import User1 from '@/assets/images/users/user_1.png';
import User2 from '@/assets/images/users/user_2.png';
import User3 from '@/assets/images/users/user_3.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import React from 'react';
import SectionHeader from '../shared/Sectionheader';

interface TesimoniCardProps {
  userImg: string;
  name: string;
  possition: string;
  userTestimonial: string;
}

const TESTIMONIALS: TesimoniCardProps[] = [
  {
    name: 'Mark Vargel de Dios',
    userImg: User1.src,
    possition: 'Owner, MVD Auto Works',
    userTestimonial:
      'The service of OneLot is top notch, they act fast and can provide dealers with the funds they need, when they need it.',
  },
  {
    name: 'Lourice Trading',
    userImg: User2.src,
    possition: 'Quezen City',
    userTestimonial:
      'OneLot helped me to replace my previous financiar and buy more car loans with their dealer inventory loan solutions.',
  },
  {
    name: 'PMB',
    userImg: User3.src,
    possition: 'Quezen City',
    userTestimonial:
      'OneLot was very supportive in providing a loan for the next car auction when you need funds first',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="space-y-6 lg:space-y-12 w-full px-5 py-24 flex flex-col items-center"
    >
      <SectionHeader
        id="testimonials-heading"
        label="Testimonials"
        className="text-center text-3xl font-extrabold"
      />
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: true,
          }),
        ]}
        className="max-w-3xl flex flex-col items-center"
      >
        <CarouselContent>
          {TESTIMONIALS.map((card, i) => (
            <CarouselItem key={i} className="-z-10">
              <TesimoniCard {...card} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* carousel navigation */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <CarouselPrevious className="border-0 static translate-y-0 shadow-none" />
          <CarouselNext className="border-0 static translate-y-0 shadow-none" />
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;

const TesimoniCard: React.FC<TesimoniCardProps> = ({
  name,
  userImg,
  userTestimonial,
  possition,
}) => {
  return (
    <div className="lg:space-y-8 space-y-6 flex flex-col items-center">
      <Image
        src={userImg}
        alt={name}
        width={100}
        height={100}
        className="w-24 h-24 shrink-0 rounded-full"
        draggable={false}
        loading="lazy"
      />
      <p className="lg:max-w-3xl md:max-w-3xl max-w-64 w-full lg:text-2xl md:text-2xl text-base font-semibold lg:leading-8 leading-7 text-center font-inter">
        {`"${userTestimonial}"`}
      </p>
      <span className="flex lg:flex-row md:flex-row flex-col items-center lg:gap-3 md:gap-3 gap-1 lg:mt-0 md:mt-0 mt-2">
        <p className="text-base font-semibold lg:leading-7 leading-6">{name}</p>
        <p className="text-sm font-normal leading-7 text-secondary">{possition}</p>
      </span>
    </div>
  );
};
