'use client';

import PhilippinesIcon from '@/assets/images/countries/philippines.svg';
import USAIcon from '@/assets/images/countries/united-states.svg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';

import React, { useState } from 'react';

type Language = 'en' | 'fil';

const languages = {
  en: {
    short: 'eng',
    label: 'English',
    icon: USAIcon,
  },
  fil: {
    short: 'fil',
    label: 'Filipino',
    icon: PhilippinesIcon,
  },
};

const LanguageSelection: React.FC = () => {
  const [selectLanguage, setSelectLanguage] = useState<Language>('en');

  const handleLanguageChange = (lang: Language) => {
    setSelectLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <button type="button" className="text-xs leading-5 font-normal flex items-center gap-2">
          {languages[selectLanguage].short.toUpperCase()}
          <Image
            src={languages[selectLanguage].icon}
            alt={languages[selectLanguage].label}
            width={20}
            height={20}
            className="w-6 h-auto"
            draggable={false}
          />
          <ChevronDownIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-fit p-2" align="end">
        <DropdownMenuGroup>
          {Object.entries(languages).map(([key, lang]) => (
            <DropdownMenuItem
              key={key}
              onClick={() => handleLanguageChange(key as Language)}
              className="flex items-center justify-between cursor-pointer"
              aria-checked={selectLanguage === key}
            >
              <span>{lang.label}</span>
              <Image
                src={lang.icon}
                alt={lang.label}
                width={20}
                height={20}
                className="w-6 h-auto"
                draggable={false}
              />
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelection;
