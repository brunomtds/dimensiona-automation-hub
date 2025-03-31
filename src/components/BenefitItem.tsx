
import React from 'react';
import { Check } from 'lucide-react';

interface BenefitItemProps {
  text: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ text }) => {
  return (
    <div className="flex items-start gap-2 mb-4 animate-fade-in">
      <div className="flex-shrink-0 mt-1">
        <Check className="h-5 w-5 text-dimensiona-red" />
      </div>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default BenefitItem;
