
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="card-shadow h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="text-dimensiona-red text-4xl mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-dimensiona-gray">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
