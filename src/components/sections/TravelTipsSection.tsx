
import React from 'react';
import { Compass, Briefcase, CreditCard, Train, Utensils, SunMedium } from 'lucide-react';
import TravelTip from '@/components/TravelTip';

export const travelTips = [
  {
    icon: <Compass />,
    title: 'Navigation',
    description: 'Public transportation is excellent in major cities. Consider the Lisboa Card for unlimited travel and museum access.'
  },
  {
    icon: <CreditCard />,
    title: 'Currency',
    description: 'Portugal uses the Euro (€). Credit cards are widely accepted, but carry some cash for small establishments.'
  },
  {
    icon: <Briefcase />,
    title: 'Packing',
    description: 'Pack layers even in summer. Bring comfortable shoes for cobblestone streets and sunscreen for beach days.'
  },
  {
    icon: <Train />,
    title: 'Transportation',
    description: 'Trains connect major cities, while buses reach smaller towns. Consider renting a car to explore rural areas.'
  },
  {
    icon: <Utensils />,
    title: 'Dining',
    description: 'Lunch is typically 12-3pm and dinner starts after 7:30pm. Try the local specialties like bacalhau and pastéis de nata.'
  },
  {
    icon: <SunMedium />,
    title: 'Weather',
    description: 'Portugal enjoys a Mediterranean climate with hot summers and mild winters. Spring and fall are ideal for sightseeing.'
  }
];

const TravelTipsSection = () => {
  return (
    <section id="tips" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-portugal-terracotta font-medium mb-2">
            Essential Knowledge
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-portugal-navy mb-4">
            Travel Tips for Portugal
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Make the most of your journey with these practical tips and recommendations for traveling in Portugal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelTips.map((tip, index) => (
            <TravelTip
              key={index}
              {...tip}
              variant={index === 0 ? "filled" : "default"}
              className={index === 3 ? "lg:col-span-3 xl:col-span-1" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelTipsSection;
