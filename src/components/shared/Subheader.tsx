import { cn } from '@/lib/utils';
import React from 'react';

interface DashboardHeaderProps {
  label: string;
  className?: string;
}
const SubHeader: React.FC<DashboardHeaderProps> = ({ label, className }) => {
  return (
    <p
      className={cn(
        `lg:text-xl text-base font-normal lg:leading-7 leading-6 text-secondary`,
        className,
      )}
    >
      {label}
    </p>
  );
};

export default SubHeader;
