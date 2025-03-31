
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ProblemCardProps {
  icon: string;
  title: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ icon, title }) => {
  return (
    <Card className="card-shadow hover:scale-105 transition-transform duration-300">
      <CardContent className="p-6 text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <p className="text-lg">{title}</p>
      </CardContent>
    </Card>
  );
};

export default ProblemCard;
