import SECP from '@/assets/logo/secp.png';
import Image from 'next/image';
import SubHeader from '../shared/Subheader';

const ComplianceAuthoritiesSection = () => {
  return (
    <section className="w-full flex flex-col items-center gap-3">
      <SubHeader label="Regulated by" />
      <Image
        src={SECP}
        alt="Securities and Exchange Commission of the Philippines"
        width={240}
        height={240}
        className="object-contain md:w-20 w-28 h-full lg:w-48 size-full"
        draggable={false}
        loading="lazy"
        placeholder="blur"
        blurDataURL={SECP.src}
      />
    </section>
  );
};

export default ComplianceAuthoritiesSection;
