
import React from 'react';
import { Calendar, Music, Users, Umbrella, Sun, Leaf, Snowflake } from 'lucide-react';

interface Event {
  name: string;
  description: string;
  date: string;
  season: 'spring' | 'summer' | 'autumn' | 'winter';
  icon: React.ReactNode;
}

interface SeasonalEventsProps {
  destination: string;
  events: Event[];
}

const SeasonIcon = ({ season }: { season: string }) => {
  switch (season) {
    case 'spring':
      return <div className="text-green-500 bg-green-50 p-2 rounded-full"><Leaf size={20} /></div>;
    case 'summer':
      return <div className="text-amber-500 bg-amber-50 p-2 rounded-full"><Sun size={20} /></div>;
    case 'autumn':
      return <div className="text-orange-500 bg-orange-50 p-2 rounded-full"><Leaf size={20} /></div>;
    case 'winter':
      return <div className="text-blue-500 bg-blue-50 p-2 rounded-full"><Snowflake size={20} /></div>;
    default:
      return <div className="text-gray-500 bg-gray-50 p-2 rounded-full"><Calendar size={20} /></div>;
  }
};

const SeasonalEvents: React.FC<SeasonalEventsProps> = ({ destination, events }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 className="text-xl font-display font-bold text-portugal-navy mb-6">
        Eventos Sazonais em {destination}
      </h3>
      
      <div className="space-y-5">
        {events.map((event, index) => (
          <div key={index} className="flex items-start space-x-4 pb-5 border-b border-gray-100 last:border-0 last:pb-0">
            <SeasonIcon season={event.season} />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-medium text-portugal-navy">{event.name}</h4>
                <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-600">{event.date}</span>
              </div>
              <p className="text-sm text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonalEvents;
