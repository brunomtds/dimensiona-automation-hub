
import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = document.getElementById('hero')?.offsetHeight || 0;
      
      // Mostrar o CTA flutuante quando o usuário rolar além da seção hero
      if (scrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRegistration = () => {
    const registration = document.getElementById('cadastro');
    if (registration) {
      registration.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] p-3 z-40 md:hidden">
      <CTAButton 
        onClick={scrollToRegistration}
        className="w-full text-center py-3"
      >
        📅 Garantir acesso antecipado
      </CTAButton>
    </div>
  );
};

export default FloatingCTA;
