import { cn } from '@/lib/utils';
import React from 'react';

interface DashboardHeaderProps {
  label: string;
  className?: string;
  id?: string;
}
const Header: React.FC<DashboardHeaderProps> = ({ label, className, id }) => {
  return (
    <h1
      id={id}
      aria-label={label}
      className={cn(
        `lg:text-5xl text-3xl lg:font-bold font-extrabold lg:leading-12 leading-9 text-foreground`,
        className,
      )}
    >
      {label}
    </h1>
  );
};

export default Header;
