'use client';

import BrandLogo from '@/assets/logo/iconwithtext.webp';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';

interface NavLinkProps {
  href?: string;
  label: string;
  menu?: {
    href: string;
    label: string;
    description?: string;
  }[];
}

const NAV_LINKS: NavLinkProps[] = [
  { href: '/', label: 'Home' },
  {
    label: 'Products',
    menu: [
      { href: '/products/dealer-inventory-loans', label: 'Dealer Inventory Loans' },
      { href: '/products/dealer-management-system', label: 'Dealer Management System' },
    ],
  },
  { href: '/products/sell-your-cars', label: 'Sell Your Cars' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // scroll detection for sticky + shadow effect
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className={` w-full z-50 transition-all duration-100   ${
        isScrolled ? 'bg-background backdrop-blur-md border-b border-border' : 'bg-background'
      }`}
    >
      <div className="mx-auto max-w-screen-2xl pb-2.5 lg:pb-0 md:pb-0">
        <div className="flex lg:px-4 px-2 py-2.5 items-center justify-between">
          <div className="flex items-center space-x-16">
            {/* Logo */}
            <Link href="/" aria-label="return to homepage" className="flex items-center">
              <Image
                src={BrandLogo}
                alt="Logo"
                width={100}
                height={50}
                className="w-[100px] size-full object-contain"
                draggable={false}
                priority
              />
            </Link>
            {/* Desktop Navigation */}
            <DesktopNav />
          </div>
          <div className="hidden lg:flex">
            <NavAction />
          </div>
          {/* Mobile nav trigger */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="mobile-navigation"
            className="lg:hidden hover:text-primary p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon className="size-6.5" strokeWidth={2.6} aria-hidden="true" />
          </button>
        </div>
        {/* Mobile Navigation */}
        {menuOpen && (
          <div id="mobile-navigation" className="lg:hidden block" role="dialog" aria-modal="true">
            <MobileNav />
          </div>
        )}
      </div>
    </nav>
  );
}

const DesktopNav = () => {
  const pathname = usePathname();
  return (
    <div className="hidden lg:flex space-x-8">
      {NAV_LINKS.map((item, i) => {
        const active = pathname === item.href;
        if (item.menu && item.menu.length > 0) {
          return (
            <NavigationMenu key={`item-${item.label}-${i}`}>
              <NavigationMenuList className="w-full">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium px-0 py-0 h-auto border-none hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent">
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="border-none ">
                    {item.menu.map((item) => (
                      <NavigationMenuLink asChild key={item.href} className="min-w-full p-1.5 ">
                        <Link
                          href={item.href}
                          className=" rounded-none text-base font-medium leading-5 text-foreground hover:text-primary hover:bg-transparent w-full text-nowrap"
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          );
        }
        return (
          <Link
            key={item.label}
            href={item.href || '/'}
            aria-current={active ? 'page' : undefined}
            className={`text-base leading-6 font-medium transition-colors ${
              active ? 'text-primary' : 'text-gray-700 hover:text-primary'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <div className="-space-y-1 lg:hidden block backdrop-blur-sm">
      <div className=" px-5 py-3 space-y-4 flex flex-col w-full">
        {NAV_LINKS.map((item, i) => {
          const active = pathname === item.href;
          if (item.menu && item.menu.length > 0) {
            return (
              <NavigationMenu key={`item-${item.label}-${i}`}>
                <NavigationMenuList className="w-full">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base font-medium px-0 py-0 h-auto border-none hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="border-none ">
                      {item.menu.map((item) => (
                        <NavigationMenuLink asChild key={item.href} className="min-w-full p-4 ">
                          <Link
                            href={item.href}
                            className=" rounded-none text-base font-medium leading-5 text-foreground hover:text-primary hover:bg-transparent w-full text-nowrap"
                          >
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            );
          }
          return (
            <Link
              key={item.label}
              href={item.href || '/'}
              className={`text-base leading-6 font-medium transition-colors ${
                active ? 'text-primary' : 'text-gray-700 hover:text-primary'
              }`}
              aria-current={active ? 'page' : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <NavAction />
    </div>
  );
};

const NavAction = () => {
  return (
    <div className="px-2 lg:px-0 flex lg:flex-row flex-col lg:gap-8 gap-2">
      <Link href="/" aria-label="Log in to OneLot">
        <Button className=" items-center lg:px-0 lg:bg-transparent bg-primary-foreground text-foreground text-base leading-6 font-medium w-full hover:bg-transparent cursor-pointer">
          Log In
        </Button>
      </Link>
      <Link href="/" aria-label="Inquire now">
        <Button className="h-[42px] items-center text-base leading-6 font-medium w-full cursor-pointer">
          Inquire now
        </Button>
      </Link>
    </div>
  );
};
