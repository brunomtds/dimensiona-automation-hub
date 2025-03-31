
import React from 'react';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  children, 
  onClick, 
  className,
  type = 'button'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "cta-button animate-pulse-light",
        className
      )}
    >
      {children}
    </button>
  );
};

export default CTAButton;
