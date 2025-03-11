
import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import LanguageTips from '@/components/LanguageTips';

const LanguageTipsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-portugal-terracotta font-medium mb-2">
            <Globe size={16} className="inline mr-1" />
            Comunicação
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-portugal-navy mb-4">
            Expressões Úteis em Português
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Aprenda algumas frases e palavras essenciais em português para facilitar sua comunicação durante a viagem.
          </p>
        </div>
        
        <LanguageTips />
        
        <div className="text-center mt-8">
          <a 
            href="#"
            className="inline-flex items-center text-portugal-terracotta hover:text-portugal-navy font-medium transition-colors"
          >
            Ver guia completo de português para viajantes
            <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LanguageTipsSection;
