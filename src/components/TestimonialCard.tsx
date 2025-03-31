
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  role, 
  image 
}) => {
  return (
    <Card className="card-shadow h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 text-dimensiona-red">
          🎥
        </div>
        <p className="italic text-lg mb-4 flex-grow">{quote}</p>
        <div className="flex items-center mt-4">
          {image ? (
            <img 
              src={image} 
              alt={author} 
              className="h-10 w-10 rounded-full mr-3 object-cover"
            />
          ) : (
            <div className="h-10 w-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
              {author.charAt(0)}
            </div>
          )}
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
