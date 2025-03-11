
import React from 'react';
import { HelpCircle, MessageSquare } from 'lucide-react';
import FAQ from '@/components/FAQ';

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-portugal-terracotta font-medium mb-2">
            <HelpCircle size={16} className="inline mr-1" />
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-portugal-navy mb-4">
            Dúvidas Comuns
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Encontre respostas para as perguntas mais frequentes sobre viagens em Portugal.
          </p>
        </div>
        
        <FAQ />
        
        <div className="text-center mt-10">
          <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <MessageSquare size={24} className="text-portugal-terracotta mr-2" />
              <h3 className="text-xl font-display font-bold text-portugal-navy">Ainda tem dúvidas?</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Não encontrou a resposta que procurava? Entre em contato conosco e teremos prazer em ajudar com qualquer dúvida sobre sua viagem a Portugal.
            </p>
            <button className="px-6 py-2.5 bg-portugal-terracotta text-white rounded-full font-medium hover:bg-portugal-terracotta/90 transition-colors">
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
