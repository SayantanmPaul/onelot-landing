import { cn } from '@/lib/utils';
import React from 'react';

interface DashboardHeaderProps {
  label: string;
  className?: string;
  id?: string;
}
const SectionHeader: React.FC<DashboardHeaderProps> = ({ label, className, id }) => {
  return (
    <h2
      id={id}
      aria-label={label}
      className={cn(
        `lg:text-4xl text-xl lg:font-extrabold font-bold lg:leading-9 leading-7 text-foreground`,
        className,
      )}
    >
      {label}
    </h2>
  );
};

export default SectionHeader;
