
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Label } from '@/components/ui/label';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulação de envio para um servidor
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast.success('Cadastro realizado com sucesso! Verifique seu email para mais informações.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        profession: ''
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto">
      <div>
        <Label htmlFor="name">Nome *</Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Seu nome completo"
          value={formData.name}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      
      <div>
        <Label htmlFor="email">E-mail *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="seu@email.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      
      <div>
        <Label htmlFor="phone">Telefone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(XX) XXXXX-XXXX"
          value={formData.phone}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      
      <div>
        <Label htmlFor="profession">Profissão *</Label>
        <Input
          id="profession"
          name="profession"
          type="text"
          required
          placeholder="Engenheiro, Arquiteto, etc"
          value={formData.profession}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      
      <Button 
        type="submit"
        disabled={loading}
        className="w-full bg-dimensiona-red hover:brightness-110 text-white font-bold py-3 text-lg"
      >
        {loading ? 'Processando...' : '🚀 Quero garantir meu desconto e acesso antecipado'}
      </Button>
      
      <p className="text-sm text-center text-gray-500 mt-2">
        Se não gostar, cancele em 14 dias sem custos. Nenhum risco.
      </p>
    </form>
  );
};

export default RegistrationForm;
