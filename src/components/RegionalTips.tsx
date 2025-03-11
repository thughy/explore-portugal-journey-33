
import React from 'react';
import { Clock, Sun, Umbrella, Wallet, Utensils, Globe } from 'lucide-react';

interface TipProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  region: string;
}

const Tip: React.FC<TipProps> = ({ icon, title, content, region }) => {
  return (
    <div className="flex space-x-4 p-5 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="text-portugal-terracotta mt-1">{icon}</div>
      <div>
        <span className="text-xs font-medium text-portugal-navy/60 uppercase tracking-wider">{region}</span>
        <h3 className="font-display font-medium text-portugal-navy text-lg mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{content}</p>
      </div>
    </div>
  );
};

const RegionalTips: React.FC = () => {
  const tips = [
    {
      icon: <Clock size={24} />,
      title: "Horários em Lisboa",
      content: "Muitos museus em Lisboa fecham às segundas-feiras. Planeje suas visitas com antecedência e verifique os horários, especialmente fora da temporada turística.",
      region: "Lisboa"
    },
    {
      icon: <Wallet size={24} />,
      title: "Economia no Porto",
      content: "No Porto, os tours de degustação de vinho do Porto são mais baratos em Vila Nova de Gaia do que no centro histórico. Compare preços antes de reservar.",
      region: "Porto"
    },
    {
      icon: <Sun size={24} />,
      title: "Proteção no Algarve",
      content: "O sol do Algarve é extremamente forte, mesmo em dias nublados. Use protetor solar FPS 50+ e reaplique frequentemente, especialmente após nadar.",
      region: "Algarve"
    },
    {
      icon: <Umbrella size={24} />,
      title: "Clima na Madeira",
      content: "Mesmo no verão, traga um casaco impermeável leve para a Madeira. O clima pode mudar rapidamente nas montanhas, com chuvas repentinas mesmo em dias ensolarados.",
      region: "Madeira"
    },
    {
      icon: <Globe size={24} />,
      title: "Conectividade nos Açores",
      content: "Baixe mapas offline antes de explorar os Açores. A cobertura de celular pode ser limitada em trilhas remotas e algumas partes das ilhas.",
      region: "Açores"
    },
    {
      icon: <Utensils size={24} />,
      title: "Gastronomia Regional",
      content: "Experimente o prato típico de cada região: Pastéis de Belém em Lisboa, Francesinha no Porto, peixe grelhado no Algarve, Espetada na Madeira e queijo da ilha nos Açores.",
      region: "Geral"
    }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <Tip key={index} {...tip} />
        ))}
      </div>
    </div>
  );
};

export default RegionalTips;
