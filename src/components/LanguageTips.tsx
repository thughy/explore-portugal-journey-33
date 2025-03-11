
import React from 'react';
import { Volume2 } from 'lucide-react';

interface PhraseProps {
  portuguese: string;
  pronunciation: string;
  translation: string;
}

const Phrase: React.FC<PhraseProps> = ({ portuguese, pronunciation, translation }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-display font-medium text-portugal-navy text-lg mb-1">{portuguese}</h3>
          <p className="text-gray-500 text-sm italic mb-2">{pronunciation}</p>
          <p className="text-gray-600">{translation}</p>
        </div>
        <button 
          className="p-2 rounded-full bg-portugal-terracotta/10 text-portugal-terracotta hover:bg-portugal-terracotta/20 transition-colors"
          aria-label="Ouvir pronúncia"
        >
          <Volume2 size={18} />
        </button>
      </div>
    </div>
  );
};

const LanguageTips: React.FC = () => {
  const phrases = [
    {
      portuguese: "Olá",
      pronunciation: "oh-LA",
      translation: "Hello"
    },
    {
      portuguese: "Bom dia",
      pronunciation: "bom DEE-ah",
      translation: "Good morning"
    },
    {
      portuguese: "Boa tarde",
      pronunciation: "BOH-ah TAR-day",
      translation: "Good afternoon"
    },
    {
      portuguese: "Boa noite",
      pronunciation: "BOH-ah NOY-tay",
      translation: "Good evening/night"
    },
    {
      portuguese: "Por favor",
      pronunciation: "por fah-VOR",
      translation: "Please"
    },
    {
      portuguese: "Obrigado/Obrigada",
      pronunciation: "oh-bree-GAH-doo/oh-bree-GAH-dah",
      translation: "Thank you (male/female speaker)"
    },
    {
      portuguese: "Desculpe",
      pronunciation: "desh-COOL-pay",
      translation: "Sorry/Excuse me"
    },
    {
      portuguese: "Fala inglês?",
      pronunciation: "FAH-lah een-GLESH",
      translation: "Do you speak English?"
    },
    {
      portuguese: "Quanto custa?",
      pronunciation: "KWAN-toh KOOSH-tah",
      translation: "How much does it cost?"
    },
    {
      portuguese: "Onde fica o banheiro?",
      pronunciation: "ON-day FEE-kah oo ban-YAIR-oo",
      translation: "Where is the bathroom?"
    },
    {
      portuguese: "Saúde!",
      pronunciation: "sah-OO-day",
      translation: "Cheers! (when drinking)"
    },
    {
      portuguese: "A conta, por favor",
      pronunciation: "ah KON-tah, por fah-VOR",
      translation: "The bill, please"
    }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {phrases.map((phrase, index) => (
          <Phrase key={index} {...phrase} />
        ))}
      </div>
    </div>
  );
};

export default LanguageTips;
