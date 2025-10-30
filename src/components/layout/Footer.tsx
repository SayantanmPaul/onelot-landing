import BrandLogo from '@/assets/logo/iconwithtext.webp';
import { FacebookIcon, InstagramIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Devider from '../shared/Devider';
import LanguageSelection from '../shared/LanguageSelection';

interface FooterLinkProps {
  href: string;
  label: string;
}

const FOOT_LINKS: FooterLinkProps[] = [
  { href: '/', label: 'Home' },
  { href: '#', label: 'Feature' },
  { href: '#', label: 'About' },
  { href: '#', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="pt-24 pb-6 px-6">
      <div className="flex lg:flex-row md:flex-row flex-col  lg:items-end md:items-end items-startlg:justify-between md:justify-between w-full py-6">
        <Link href="/" aria-label="return to homepage" className="flex items-center h-24">
          <Image
            src={BrandLogo}
            alt="Logo"
            width={192}
            height={94}
            className="lg:w-48 w-32 size-full object-contain"
            draggable={false}
            priority
          />
        </Link>

        <nav
          aria-label="Footer navigation"
          className="lg:gap-4 md:gap-4 gap-8 flex flex-col lg:items-end md:items-end"
        >
          <ul className="flex lg:flex-row md:flex-row flex-col md:items-center lg:items-center items-start lg:gap-8 md:gap-8 gap-6">
            {FOOT_LINKS.map((item, i) => (
              <li key={`footer-link-${i}`}>
                <Link
                  href={item.href}
                  className="text-secondary lg:text-sm md:text-sm text-base hover:text-primary leading-5"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSelection />
        </nav>
      </div>

      <Devider />
      <div className="flex lg:flex-row md:flex-row flex-col lg:gap-3 md:gap-3 gap-6 lg:items-end md:items-end items-start justify-between py-6">
        <CopyRights />
        <Socials />
      </div>
    </footer>
  );
}

const CopyRights = () => {
  return (
    <p className="text-sm  font-normal leading-7 text-secondary space-y-3">
      &copy; 2023 OneLot Technologies Incorporate Pte. Ltd. All rights reserved.
      <br />
      &copy; 2023 OneLot Financing Corporation All rights reserved.
    </p>
  );
};

const Socials = () => {
  return (
    <nav aria-label="Social media links">
      <span className="flex items-center gap-3">
        <Link
          href="https://www.instagram.com/onelot.ph/"
          target="_blank"
          aria-label="Visit OneLot Instagram"
        >
          <InstagramIcon
            size={20}
            strokeWidth={2.5}
            className="size-5 text-secondary"
            aria-hidden="true"
          />
        </Link>
        <Link
          href="https://www.facebook.com/OneLotPH/"
          target="_blank"
          aria-label="Visit our Facebook"
        >
          <FacebookIcon
            size={20}
            strokeWidth={2.3}
            className="size-5 text-secondary "
            aria-hidden="true"
          />
        </Link>
      </span>
    </nav>
  );
};
