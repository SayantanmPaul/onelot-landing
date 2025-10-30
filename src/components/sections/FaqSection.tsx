import QuestionIcon from '@/assets/images/icons/question.svg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MoveRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SectionHeader from '../shared/Sectionheader';
import { Button } from '../ui/button';

interface FaqItemProps {
  id: string;
  question: string;
  answer: React.ReactNode;
}

export const FAQ_DATA: FaqItemProps[] = [
  {
    id: 'item-1',
    question: 'How do I apply for a loan?',
    answer: (
      <>
        OneLot onboarding is easy and straightforward. We only require a few documents, and after a
        few days, you can get your first loan.
        <br />
        Check here for exact requirements{' '}
        <a href="#" className="text-primary font-medium">
          See full requirements.
        </a>
      </>
    ),
  },
  {
    id: 'item-2',
    question: 'What kind of financing does OneLot do?',
    answer: (
      <>
        OneLot offers collateralized short-term loans to used car dealers, allowing them to leverage
        their inventory for growth. Unlike AsiaLink and Global Dominion, our financing options are
        for car dealers themselves, not their customers.
      </>
    ),
  },
  {
    id: 'item-3',
    question: 'What is the eligibility criteria for availing a loan?',
    answer: (
      <>
        Any used car dealer located in Greater Metro Manila operating for more than a year can apply
        to OneLot.
      </>
    ),
  },
  {
    id: 'item-4',
    question: 'How are interest rates determined?',
    answer: (
      <>
        OneLot offers monthly interest rates starting at 1.75% for all loan applications. Interest
        is calculated daily, so you only pay for the days your loan is outstanding.
      </>
    ),
  },
];

const FaqSection: React.FC = () => {
  return (
    <section
      aria-labelledby="faq-heading"
      className="space-y-12 lg:space-y-12 w-full px-6 lg:px-0 lg:py-10 py-24 flex flex-col items-center z-0"
    >
      <SectionHeader
        id="faq-heading"
        label="Frequently asked questions"
        className="text-center text-3xl font-extrabold"
      />
      <Accordion type="single" collapsible className="w-full max-w-2xl" defaultValue="item-1">
        {FAQ_DATA.map((item) => (
          <FaqItem key={item.id} {...item} />
        ))}
      </Accordion>
      <Link href="#">
        <Button className="text-sm font-medium leading-4 w-25 h-10 cursor-pointer">
          See all <MoveRightIcon className="size-5" />
        </Button>
      </Link>
    </section>
  );
};

export default FaqSection;

// Accordian Item
const FaqItem: React.FC<FaqItemProps> = ({ id, question, answer }) => {
  return (
    <AccordionItem value={id}>
      <AccordionTrigger className="text-lg font-medium text-secondary lg:leading-7 leading-6 hover:no-underline cursor-pointer data-[state=open]:text-foreground">
        <div className="flex items-center gap-2">
          <Image
            src={QuestionIcon}
            width={16}
            height={16}
            alt="question icon"
            draggable={false}
            priority={false}
          />
          {question}
        </div>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4">
        <span className="text-secondary text-base leading-7">{answer}</span>
      </AccordionContent>
    </AccordionItem>
  );
};
