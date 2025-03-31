
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ExclusiveOfferCardProps {
  title: string;
  oldPrice?: string;
  newPrice?: string;
  features: string[];
}

const ExclusiveOfferCard: React.FC<ExclusiveOfferCardProps> = ({ 
  title, 
  oldPrice, 
  newPrice, 
  features 
}) => {
  return (
    <Card className="card-shadow border-2 border-dimensiona-red">
      <div className="bg-dimensiona-red text-white p-3 text-center font-bold">
        {title}
      </div>
      <CardContent className="p-6">
        {(oldPrice || newPrice) && (
          <div className="text-center mb-6">
            {oldPrice && (
              <span className="text-gray-500 line-through mr-2">{oldPrice}</span>
            )}
            {newPrice && (
              <span className="text-dimensiona-red font-bold text-2xl">{newPrice}</span>
            )}
          </div>
        )}
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-dimensiona-red flex-shrink-0">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ExclusiveOfferCard;
