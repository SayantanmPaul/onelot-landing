import Link from 'next/link';
import Header from '../shared/Heade';
import SubHeader from '../shared/Subheader';
import { Button } from '../ui/button';

const HeroSection = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="space-y-12 w-full flex flex-col items-center mx-auto lg:py-12 py-9 lg:px-20 md:px-14 px-5"
    >
      <div className=" flex flex-col items-center lg:space-y-8 space-y-7 ">
        <Header
          id="hero-heading"
          label="Grow your dealership with working capital loans and digital tools from OneLot"
          className="text-center"
        />
        <div className="max-w-3xl w-full">
          <SubHeader
            label="We enable dealers to buy more cars through our working capital loan solutions and sell cars more efficiently through our Dealership Management System with its inventory management, marketing solutions and market insights"
            className="text-center w-full"
          />
        </div>
      </div>
      <Link href="/" passHref aria-label="Inquire now">
        <Button className="h-12 px-5 items-center text-base leading-6 font-medium w-auto cursor-pointer ">
          Inquire now
        </Button>
      </Link>
    </section>
  );
};

export default HeroSection;
