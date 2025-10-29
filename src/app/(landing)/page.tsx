'use client';

import HeroDashboard from '@/assets/images/platform/dashboard_1.webp';
import HeroSection from '@/components/sections/Hero';
import Image from 'next/image';

const Landing = () => {
  return (
    <section
      aria-label="OneLot Landing Page"
      className="flex flex-col gap-1.5 items-center h-full justify-start w-full"
    >
      <div className="lg:h-9 lg:block hidden w-full" />
      <HeroSection />
      <Image
        src={HeroDashboard}
        alt="OneLot's dealership management platform"
        width={1080}
        height={653}
        className="lg:w-[1080px] w-[609px] h-full"
        draggable={false}
        priority={true}
        placeholder="blur"
        blurDataURL={HeroDashboard.src}
      />
    </section>
  );
};

export default Landing;
