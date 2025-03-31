
import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  image?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  number, 
  title, 
  description, 
  image 
}) => {
  return (
    <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start gap-6 animate-fade-in">
      <div className="flex-shrink-0">
        <div className="bg-dimensiona-red text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
          {number}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-dimensiona-gray mb-4">{description}</p>
        {image && (
          <div className="bg-dimensiona-lightgray rounded-lg p-4 mt-4">
            <img src={image} alt={title} className="mx-auto max-h-40 object-contain" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessStep;
