
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CTAButton from './CTAButton';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para mudar o estilo da navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-dimensiona-red">Dimensiona</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('problemas')} className="font-medium hover:text-dimensiona-red transition-colors">
              Problemas
            </button>
            <button onClick={() => scrollToSection('solucao')} className="font-medium hover:text-dimensiona-red transition-colors">
              Solução
            </button>
            <button onClick={() => scrollToSection('como-funciona')} className="font-medium hover:text-dimensiona-red transition-colors">
              Como Funciona
            </button>
            <button onClick={() => scrollToSection('depoimentos')} className="font-medium hover:text-dimensiona-red transition-colors">
              Depoimentos
            </button>
            <CTAButton onClick={() => scrollToSection('cadastro')} className="py-2 px-4">
              Garantir acesso
            </CTAButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('problemas')}
              className="block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-dimensiona-lightgray transition-colors"
            >
              Problemas
            </button>
            <button
              onClick={() => scrollToSection('solucao')}
              className="block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-dimensiona-lightgray transition-colors"
            >
              Solução
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-dimensiona-lightgray transition-colors"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="block px-3 py-2 rounded-md text-base font-medium w-full text-left hover:bg-dimensiona-lightgray transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('cadastro')}
              className="block w-full mt-4 bg-dimensiona-red text-white font-semibold py-2 px-4 rounded-md"
            >
              Garantir acesso
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
