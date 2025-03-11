
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 px-4 text-left hover:bg-gray-50 transition-colors rounded-lg focus:outline-none"
      >
        <h3 className="text-lg font-display font-medium text-portugal-navy">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-portugal-terracotta">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-5 px-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Qual é a melhor época para visitar Portugal?",
      answer: "A melhor época para visitar Portugal é durante a primavera (março a maio) e o outono (setembro a outubro), quando o clima é agradável e há menos turistas. O verão (junho a agosto) é a alta temporada, com praias lotadas e preços mais altos. O inverno (novembro a fevereiro) é mais tranquilo, com temperaturas amenas no sul e mais frias no norte."
    },
    {
      question: "Preciso de visto para visitar Portugal?",
      answer: "Para cidadãos da União Europeia, não é necessário visto. Turistas do Brasil, Estados Unidos, Canadá, Austrália e vários outros países podem entrar em Portugal sem visto para estadas de até 90 dias. Verifique sempre as exigências específicas para o seu país de origem antes de viajar."
    },
    {
      question: "Como me locomover dentro de Portugal?",
      answer: "Portugal tem um excelente sistema de transporte público. Em Lisboa e Porto, os metrôs, ônibus e bondes são eficientes. Para viagens entre cidades, há trens rápidos (como o Alfa Pendular) e ônibus confortáveis. Alugar um carro é recomendado para explorar áreas rurais e pequenas cidades. Aplicativos de compartilhamento de carros e táxis também estão disponíveis nas principais cidades."
    },
    {
      question: "É possível usar cartão de crédito em todos os lugares?",
      answer: "Cartões de crédito são amplamente aceitos em hotéis, restaurantes e lojas nas áreas urbanas e turísticas. No entanto, é recomendável ter sempre algum dinheiro em espécie (euros) para estabelecimentos menores, mercados locais e áreas rurais. Multibanco (ATMs) são facilmente encontrados em todo o país."
    },
    {
      question: "Portugal é um país seguro para turistas?",
      answer: "Portugal é considerado um dos países mais seguros da Europa e do mundo. Os crimes violentos são raros, mas como em qualquer destino turístico, é importante ter cuidado com batedores de carteira em áreas movimentadas, especialmente em Lisboa e Porto. Mantenha seus pertences seguros e esteja atento ao seu entorno."
    },
    {
      question: "Quais são as palavras e frases em português mais úteis para turistas?",
      answer: "Algumas frases úteis incluem: 'Olá' (Olá), 'Bom dia' (Bom dia), 'Por favor' (Por favor), 'Obrigado/Obrigada' (Obrigado/a), 'Desculpe' (Desculpe), 'Fala inglês?' (Você fala inglês?), 'Quanto custa?' (Quanto custa?), 'Onde fica...?' (Onde fica...?). Mesmo que fale apenas algumas palavras em português, os locais apreciarão seu esforço."
    }
  ];

  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
