
import React from 'react';
import RegionalTips from '@/components/RegionalTips';

const RegionalTipsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-portugal-terracotta font-medium mb-2">
            Dicas Locais
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-portugal-navy mb-4">
            Dicas Específicas por Região
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Conheça as particularidades de cada região e aproveite ao máximo sua visita com estas recomendações de quem conhece bem cada destino.
          </p>
        </div>
        
        <RegionalTips />
      </div>
    </section>
  );
};

export default RegionalTipsSection;
