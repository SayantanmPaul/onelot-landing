import Vehicle1 from '@/assets/images/vehicles/vehicle_1.png';
import Vehicle2 from '@/assets/images/vehicles/vehicle_2.png';
import Vehicle3 from '@/assets/images/vehicles/vehicle_3.png';
import Vehicle4 from '@/assets/images/vehicles/vehicle_4.png';
import Vehicle5 from '@/assets/images/vehicles/vehicle_5.png';
import { FacebookIcon, InstagramIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SectionHeader from '../shared/Sectionheader';
import SubHeader from '../shared/Subheader';
import { Button } from '../ui/button';
import { Marquee } from '../ui/marquee';

const SOCIAL_LINKS = [
  {
    label: 'Follow us on Facebook',
    href: 'https://www.facebook.com/OneLotPH/',
    Icon: FacebookIcon,
  },
  {
    label: 'Follow us on Instagram',
    href: 'https://www.instagram.com/onelot.ph/',
    Icon: InstagramIcon,
  },
];

const VEHICLE_IMAGES = [Vehicle1, Vehicle2, Vehicle3, Vehicle4, Vehicle5];

const SocialsSection: React.FC = () => {
  return (
    <section
      aria-labelledby="socialss-heading"
      className="lg:gap-12 gap-8 w-full px-5 py-24 flex flex-col items-center"
    >
      {/* header area */}
      <div className="space-y-4 lg:max-w-[630px] md:max-w-xl max-w-72">
        <SectionHeader
          id="socialss-heading"
          label="Stay Connected"
          className="text-center text-3xl font-extrabold"
        />
        <SubHeader
          label="Follow OneLot on our Facebook and Instagram page and stay up to date with our most recent recent offers, updates and new product features"
          className="text-center w-full text-lg lg:leading-8 leading-7"
        />
      </div>

      {/* buttons */}
      <div className="flex lg:flex-row md:flex-row flex-col items-center gap-4">
        {SOCIAL_LINKS.map(({ href, label, Icon }) => (
          <Link key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Button
              variant="outline"
              className="h-12 border border-foreground text-foreground space-x-4 hover:bg-transparent transition-colors"
            >
              <Icon size={20} strokeWidth={2} aria-hidden="true" />
              <span>{label}</span>
            </Button>
          </Link>
        ))}
      </div>
      <div aria-hidden="true" />

      {/* social media posts */}
      <SocialPostMarquee />
    </section>
  );
};

export default SocialsSection;

const SocialPostMarquee = () => {
  return (
    <div
      role="region"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden "
    >
      <Marquee pauseOnHover className="[--duration:20s]">
        {VEHICLE_IMAGES.map((vehicle, idx) => (
          <SocialPostCard
            key={idx}
            image={vehicle.src}
            imageAlt={`OneLot Post ${idx + 1}`}
            imageBlur={vehicle.blurDataURL}
          />
        ))}
      </Marquee>
      <div
        aria-hidden="true"
        className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r hidden md:block lg:block"
      ></div>
      <div
        aria-hidden="true"
        className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l hidden md:block lg:block"
      ></div>
    </div>
  );
};

const SocialPostCard = ({
  image,
  imageAlt,
  imageBlur,
}: {
  image: string;
  imageAlt: string;
  imageBlur?: string;
}) => {
  return (
    <Image
      src={image}
      alt={imageAlt}
      width={280}
      height={180}
      className="w-[280px] h-auto object-contain shrink-0"
      loading="lazy"
      placeholder={imageBlur ? 'blur' : 'empty'}
      blurDataURL={imageBlur}
      sizes="(max-width: 768px) 50vw, 280px"
    />
  );
};
