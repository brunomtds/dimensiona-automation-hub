
import React, { useEffect } from 'react';
import Countdown from '@/components/Countdown';
import RegistrationForm from '@/components/RegistrationForm';
import TestimonialCard from '@/components/TestimonialCard';
import ProcessStep from '@/components/ProcessStep';
import BenefitItem from '@/components/BenefitItem';
import CTAButton from '@/components/CTAButton';
import ProblemCard from '@/components/ProblemCard';
import ExclusiveOfferCard from '@/components/ExclusiveOfferCard';
import NavBar from '@/components/NavBar';
import FloatingCTA from '@/components/FloatingCTA';
import { ArrowDown } from 'lucide-react';

const Index: React.FC = () => {
  // Data de lançamento: 30/03/2025
  const launchDate = new Date('2025-03-30T23:59:59');

  useEffect(() => {
    document.title = "Dimensiona - AVCB muito mais rápido e fácil";
  }, []);

  const scrollToRegistration = () => {
    const registration = document.getElementById('cadastro');
    if (registration) {
      registration.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <FloatingCTA />

      {/* Hero Section */}
      <section id="hero" className="hero-gradient pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                <span className="text-dimensiona-red">🔥</span> AVCB muito mais rápido e fácil
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-dimensiona-gray">
                Automatize classificações, gere orçamentos precisos em minutos e tenha todas as normas atualizadas na palma da mão.
              </p>
              
              <div className="space-y-6">
                <p className="text-lg font-semibold">
                  <span className="text-dimensiona-red">📅</span> Garanta acesso antecipado + 20% de desconto até 30/03/2025
                </p>
                <CTAButton onClick={scrollToRegistration} className="text-lg px-8 py-4">
                  QUERO ME CADASTRAR AGORA →
                </CTAButton>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col items-center">
              <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-lg mb-8">
                <div className="aspect-video bg-dimensiona-lightgray rounded-lg flex items-center justify-center mb-3">
                  <p className="text-dimensiona-gray text-center p-4">
                    [Vídeo: Demonstração da plataforma em ação]
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg font-medium mb-2">Contagem regressiva para o lançamento:</p>
                <Countdown targetDate={launchDate} className="mt-2" />
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-16">
            <button 
              onClick={() => document.getElementById('problemas')?.scrollIntoView({behavior: 'smooth'})}
              className="flex flex-col items-center text-dimensiona-gray hover:text-dimensiona-red transition-colors"
            >
              <span className="mb-2">Saiba mais</span>
              <ArrowDown className="animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* Problemas Section */}
      <section id="problemas" className="bg-white py-20">
        <div className="section-container">
          <h2 className="section-title">Você ainda faz isso manualmente?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ProblemCard 
              icon="⏳" 
              title="Perde 8+ horas por projeto cruzando tabelas e normas desatualizadas?" 
            />
            <ProblemCard 
              icon="💰" 
              title="Deixa de ganhar R$2.700 por projeto por erros de classificação?" 
            />
            <ProblemCard 
              icon="😓" 
              title="Sofre com clientes insatisfeitos por orçamentos imprecisos e retrabalhos?" 
            />
          </div>
          
          <p className="text-xl text-center max-w-3xl mx-auto">
            Chega de perder tempo e dinheiro. A solução existe. E ela está a um clique de você revolucionar sua produtividade.
          </p>
          
          <div className="flex justify-center mt-10">
            <CTAButton onClick={scrollToRegistration}>
              Quero conhecer a solução →
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Solução Section */}
      <section id="solucao" className="bg-dimensiona-lightgray py-20">
        <div className="section-container">
          <h2 className="section-title">A Dimensiona Bombeiro é a única plataforma que entrega:</h2>
          
          <div className="max-w-3xl mx-auto">
            <BenefitItem text="Classificação automática de edificações em 5 minutos (sem erros)." />
            <BenefitItem text="Orçamentos precisos na frente do cliente, com checklist anti-surpresas." />
            <BenefitItem text="Acesso imediato a todas as normas (ITs, Decretos, NBRs) atualizadas." />
            <BenefitItem text="Gestão financeira de projetos + marketplace de especialistas." />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mt-12 max-w-3xl mx-auto">
            <p className="text-xl text-center">
              <strong>Profissionais que testaram a plataforma economizam 18 horas por projeto e aumentam sua capacidade de atendimento em 3x.</strong>
            </p>
          </div>
          
          <div className="flex justify-center mt-10">
            <CTAButton onClick={scrollToRegistration}>
              Quero garantir meu acesso →
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="bg-white py-20">
        <div className="section-container">
          <h2 className="section-title">Seu novo fluxo de trabalho em 3 passos:</h2>
          
          <div className="space-y-12 max-w-4xl mx-auto">
            <ProcessStep 
              number={1}
              title="Cadastre a edificação"
              description="Insira dados básicos: área, altura, ocupação e a plataforma faz todo o trabalho pesado para você."
            />
            
            <ProcessStep 
              number={2}
              title="Receba a lista de medidas obrigatórias"
              description="Todas com referências às normas atualizadas, sem precisar consultar manualmente dezenas de tabelas e decretos."
            />
            
            <ProcessStep 
              number={3}
              title="Gerencie clientes e projetos em um único painel"
              description="Acompanhe status, prazos, pagamentos e documentação de todos os seus projetos em um só lugar."
            />
          </div>
          
          <div className="bg-dimensiona-lightgray p-6 rounded-lg mt-12 max-w-3xl mx-auto text-center">
            <p className="text-xl">
              <strong>Em 30/03, você poderá dizer adeus às planilhas e começar a entregar projetos com 100% de conformidade.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="bg-dimensiona-lightgray py-20">
        <div className="section-container">
          <h2 className="section-title">Profissionais como você já estão garantindo seu acesso antecipado:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <TestimonialCard 
              quote="Antes da Dimensiona, perdia 2 dias por projeto. Agora, entrego orçamentos na hora e meus clientes confiam mais no meu trabalho."
              author="Roberto Silva"
              role="Engenheiro de Segurança"
            />
            <TestimonialCard 
              quote="A classificação automática é incrível! O que eu levava horas para fazer manualmente, agora faço em minutos e sem erros."
              author="Ana Luiza"
              role="Arquiteta"
            />
            <TestimonialCard 
              quote="Consegui aumentar minha carteira de clientes em 40% desde que comecei a usar a plataforma nos testes. Recomendo demais!"
              author="Carlos Eduardo"
              role="Consultor AVCB"
            />
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center max-w-sm mx-auto">
            <span className="text-xl">🔒 Seus dados estão seguros. Nenhum pagamento é necessário agora.</span>
          </div>
        </div>
      </section>

      {/* Oferta Exclusiva Section */}
      <section className="bg-white py-20">
        <div className="section-container">
          <h2 className="section-title">🚨 Oferta Exclusiva para os Primeiros 100 Cadastros:</h2>
          
          <div className="max-w-md mx-auto">
            <ExclusiveOfferCard 
              title="ACESSO ANTECIPADO + DESCONTO"
              oldPrice="R$99/mês"
              newPrice="R$79/mês"
              features={[
                "20% de desconto vitalício na assinatura",
                "Acesso prioritário ao marketplace de especialistas",
                "Treinamento gratuito sobre atualizações das ITs 2025"
              ]}
            />
            
            <div className="mt-8 text-center">
              <p className="text-lg font-semibold mb-4">
                Faltam 47 dias e 65 vagas restantes!
              </p>
              <Countdown targetDate={launchDate} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final & Formulário */}
      <section id="cadastro" className="bg-dimensiona-lightgray py-20">
        <div className="section-container">
          <h2 className="section-title">Não perca sua vaga. O futuro da segurança contra incêndio começa em 30/03.</h2>
          <p className="section-subtitle">Preencha o formulário abaixo e garanta seu lugar:</p>
          
          <RegistrationForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dimensiona-dark-gray text-white py-10">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Dimensiona</h3>
              <p className="text-gray-300">Revolucionando o trabalho com AVCB</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-300 mb-2">© 2024 Dimensiona. Todos os direitos reservados.</p>
              <p className="text-gray-400 text-sm">
                Política de Privacidade | Termos de Uso
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
