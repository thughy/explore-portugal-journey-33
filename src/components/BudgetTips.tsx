
import React from 'react';
import { Euro, Coffee, Bus, Ticket, Utensils, Home, Calendar, Navigation, Waves, Users } from 'lucide-react';

interface Tip {
  title: string;
  description: string;
  icon: React.ReactNode;
  savingsLevel: 'low' | 'medium' | 'high';
}

interface BudgetTipsProps {
  destination: string;
  tips: Tip[];
}

const BudgetTips: React.FC<BudgetTipsProps> = ({ destination, tips }) => {
  const getSavingsLabel = (level: string) => {
    switch (level) {
      case 'low': return 'Economia Pequena';
      case 'medium': return 'Economia Média';
      case 'high': return 'Grande Economia';
      default: return 'Dica de Economia';
    }
  };

  const getSavingsBadgeClass = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-50 text-green-600';
      case 'medium': return 'bg-amber-50 text-amber-600';
      case 'high': return 'bg-portugal-terracotta/10 text-portugal-terracotta';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center mb-6">
        <Euro size={24} className="text-portugal-terracotta mr-3" />
        <h3 className="text-xl font-display font-bold text-portugal-navy">
          Como Economizar em {destination}
        </h3>
      </div>
      
      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
            <div className="text-portugal-terracotta bg-portugal-terracotta/5 p-2 rounded-full">
              {tip.icon}
            </div>
            <div>
              <div className="flex items-center flex-wrap gap-2 mb-1">
                <h4 className="font-medium text-portugal-navy">{tip.title}</h4>
                <span className={`text-xs px-2 py-0.5 rounded-full ${getSavingsBadgeClass(tip.savingsLevel)}`}>
                  {getSavingsLabel(tip.savingsLevel)}
                </span>
              </div>
              <p className="text-sm text-gray-600">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetTips;
