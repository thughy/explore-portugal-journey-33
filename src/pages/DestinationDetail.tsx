import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SeasonalEvents from '@/components/SeasonalEvents';
import BudgetTips from '@/components/BudgetTips';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  ThumbsUp, 
  Landmark, 
  Utensils, 
  Waves, 
  Hotel,
  Navigation,
  ArrowLeft,
  ChevronRight,
  Coffee,
  Bus,
  Ticket,
  Home,
  Music,
  Users,
  Euro
} from 'lucide-react';

interface Destination {
  id: string;
  name: string;
  heroImage: string;
  tagline: string;
  description: string;
  highlights: string[];
  attractions: {
    name: string;
    description: string;
    image: string;
    type: 'landmark' | 'food' | 'nature' | 'hotel';
  }[];
  bestTimeToVisit: string;
  transportTips: string;
}

const destinations: Record<string, Destination> = {
  'lisbon': {
    id: 'lisbon',
    name: 'Lisbon',
    heroImage: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1920&q=80',
    tagline: 'Portugal\'s vibrant capital with rich history and colorful streets',
    description: 'Lisbon, Portugal\'s hilly capital, is a coastal city known for its pastel-colored buildings, vintage trams, and vibrant food scene. Built on seven hills, it offers stunning viewpoints, historic neighborhoods like Alfama, and is famous for its melancholic Fado music. The city seamlessly blends ancient traditions with modern innovation, making it a fascinating destination for travelers.',
    highlights: [
      'Ride the iconic Tram 28 through the historic districts',
      'Explore the cobblestone streets of Alfama',
      'Visit Belém Tower and sample the original Pastéis de Nata',
      'Enjoy panoramic views from São Jorge Castle',
      'Experience the nightlife in Bairro Alto'
    ],
    attractions: [
      {
        name: 'Belém Tower',
        description: 'UNESCO World Heritage site and iconic monument from the Age of Discoveries.',
        image: 'https://images.unsplash.com/photo-1513366884929-b0559bb4c1bd?auto=format&fit=crop&w=800&q=80',
        type: 'landmark'
      },
      {
        name: 'Time Out Market',
        description: 'Gourmet food hall featuring the best of Portuguese cuisine under one roof.',
        image: 'https://images.unsplash.com/photo-1555881400-a4fab944f30b?auto=format&fit=crop&w=800&q=80',
        type: 'food'
      },
      {
        name: 'Alfama District',
        description: 'Oldest neighborhood in Lisbon with narrow streets and traditional Fado houses.',
        image: 'https://images.unsplash.com/photo-1580323956656-26bbb1206e34?auto=format&fit=crop&w=800&q=80',
        type: 'landmark'
      },
      {
        name: 'Jerónimos Monastery',
        description: 'Spectacular monastery built in the Portuguese Gothic Manueline style.',
        image: 'https://images.unsplash.com/photo-1588873281272-14886ba1f737?auto=format&fit=crop&w=800&q=80',
        type: 'landmark'
      }
    ],
    bestTimeToVisit: 'Spring (March to May) and Fall (September to October) offer pleasant temperatures and fewer crowds. Summer can be hot but brings festive events.',
    transportTips: 'The Lisboa Card offers unlimited public transportation and free entry to many attractions. Taxis and Uber are readily available throughout the city.'
  },
  'porto': {
    id: 'porto',
    name: 'Porto',
    heroImage: 'https://images.unsplash.com/photo-1542117991-205f1f5ffab0?auto=format&fit=crop&w=1920&q=80',
    tagline: 'Historic riverside city famous for port wine and stunning bridges',
    description: 'Porto, Portugal\'s second-largest city, is a charming riverside metropolis known for its stately bridges, port wine production, and medieval Ribeira district. The city\'s historic center is a UNESCO World Heritage site, featuring colorful buildings cascading down to the Douro River. Porto offers a perfect blend of old-world charm and contemporary culture, with remarkable architecture, galleries, and restaurants.',
    highlights: [
      'Visit the spectacular Livraria Lello, one of the world\'s most beautiful bookstores',
      'Sample port wine at the historic cellars in Vila Nova de Gaia',
      'Explore the riverside Ribeira district',
      'Walk across the iconic Dom Luís I Bridge',
      'Admire the blue and white tiles at São Bento Station'
    ],
    attractions: [
      {
        name: 'Livraria Lello',
        description: 'Historic bookstore with stunning neo-Gothic interior that inspired J.K. Rowling.',
        image: 'https://images.unsplash.com/photo-1603984362497-0a878f607b92?auto=format&fit=crop&w=800&q=80',
        type: 'landmark'
      },
      {
        name: 'Port Wine Cellars',
        description: 'Traditional wine cellars offering tours and tastings of Porto\'s famous fortified wine.',
        image: 'https://images.unsplash.com/photo-1571641471268-f04601bfab60?auto=format&fit=crop&w=800&q=80',
        type: 'food'
      },
      {
        name: 'Ribeira District',
        description: 'UNESCO-listed historic neighborhood with colorful houses along the Douro River.',
        image: 'https://images.unsplash.com/photo-1555881400-a4fab944f30b?auto=format&fit=crop&w=800&q=80',
        type: 'landmark'
      },
      {
        name: 'Douro River Cruise',
        description: 'Scenic boat trips offering beautiful views of Porto and the six bridges.',
        image: 'https://images.unsplash.com/photo-1574724713425-fee7e2eacf84?auto=format&fit=crop&w=800&q=80',
        type: 'nature'
      }
    ],
    bestTimeToVisit: 'May to September offers the best weather. Visit during June for the São João Festival, the city\'s biggest celebration.',
    transportTips: 'Porto\'s efficient metro connects the airport to the city center. The historic trams offer a nostalgic way to see the sights.'
  },
  'algarve': {
    id: 'algarve',
    name: 'Algarve',
    heroImage: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1920&q=80',
    tagline: 'Sun-soaked beaches, dramatic cliffs, and charming coastal towns',
    description: 'The Algarve, Portugal\'s southernmost region, is renowned for its stunning coastline, featuring golden beaches, dramatic limestone cliffs, and crystal-clear waters. Beyond the beaches, you\'ll discover charming historic towns, delicious seafood cuisine, and world-class golf courses. The region enjoys a Mediterranean climate with over 300 days of sunshine per year, making it a perfect year-round destination.',
    highlights: [
      'Explore the stunning sea caves and grottoes near Lagos',
      'Visit the picturesque town of Tavira with its Roman bridge',
      'Relax on the beautiful beaches of Praia da Marinha',
      'Discover the historic city of Faro and its medieval Old Town',
      'Try water sports at Praia do Amado or Praia da Rocha'
    ],
    attractions: [
      {
        name: 'Benagil Cave',
        description: 'Stunning sea cave with a natural oculus, accessible by boat or kayak.',
        image: 'https://images.unsplash.com/photo-1598546720078-8659863bc47d?auto=format&fit=crop&w=800&q=80',
        type: 'nature'
      },
      {
        name: 'Ponta da Piedade',
        description: 'Spectacular rock formations and sea arches near Lagos.',
        image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80',
        type: 'nature'
      },
      {
        name: 'Old Town Albufeira',
        description: 'Charming historic center with whitewashed houses and traditional restaurants.',
        image: 'https://images.unsplash.com/photo-1563784462386-044fd95e9852?auto=format&fit=crop&w=800&q=80',
        type: 'landmark'
      },
      {
        name: 'Ria Formosa Natural Park',
        description: 'Coastal lagoon system with rich biodiversity and beautiful islands.',
        image: 'https://images.unsplash.com/photo-1555881400-6ddb3e4f77af?auto=format&fit=crop&w=800&q=80',
        type: 'nature'
      }
    ],
    bestTimeToVisit: 'May to October is ideal for beach weather. Spring and fall offer pleasant temperatures and fewer crowds.',
    transportTips: 'Renting a car is the best way to explore the Algarve. Public buses connect major towns, but service to smaller villages can be limited.'
  },
  'madeira': {
    id: 'madeira',
    name: 'Madeira',
    heroImage: 'https://images.unsplash.com/photo-1599484481979-3b85288a20a1?auto=format&fit=crop&w=1920&q=80',
    tagline: 'A lush island paradise with dramatic landscapes and subtropical climate',
    description: 'Madeira, an autonomous region of Portugal, is a volcanic island in the Atlantic Ocean known for its lush landscapes, rugged coastline, and year-round mild climate. The island features dramatic mountain scenery, levada walking trails, exotic gardens, and unique culinary traditions including Madeira wine. With its blend of natural beauty and cultural richness, Madeira offers an unforgettable island experience.',
    highlights: [
      'Hike along the scenic levada water channels',
      'Visit the traditional thatched houses of Santana',
      'Experience the thrilling Monte toboggan sled ride',
      'Explore the vibrant Funchal Farmers\' Market',
      'Enjoy panoramic views from Cabo Girão, Europe\'s highest sea cliff'
    ],
    attractions: [
      {
        name: 'Pico do Arieiro',
        description: 'Madeira\'s third-highest peak offering spectacular mountain views.',
        image: 'https://images.unsplash.com/photo-1593108395036-be06da638afe?auto=format&fit=crop&w=800&q=80',
        type: 'nature'
      },
      {
        name: 'Monte Palace Tropical Garden',
        description: 'Beautiful garden featuring exotic plants, artworks, and stunning views.',
        image: 'https://images.unsplash.com/photo-1599484481979-3b85288a20a1?auto=format&fit=crop&w=800&q=80',
        type: 'nature'
      },
      {
        name: 'Funchal Old Town',
        description: 'Historic district with painted doors, traditional restaurants, and cultural attractions.',
        image: 'https://images.unsplash.com/photo-1590272456521-1bbe160a18ce?auto=format&fit=crop&w=800&q=80',
        type: 'landmark'
      },
      {
        name: 'Porto Moniz Natural Swimming Pools',
        description: 'Natural lava rock pools filled with crystal-clear seawater.',
        image: 'https://images.unsplash.com/photo-1564594327423-604c2129921d?auto=format&fit=crop&w=800&q=80',
        type: 'nature'
      }
    ],
    bestTimeToVisit: 'Madeira enjoys a mild climate year-round. Spring brings beautiful flowers, while September and October offer warm temperatures and fewer tourists.',
    transportTips: 'Buses connect major towns, but renting a car provides the flexibility to explore remote areas. The roads can be steep and winding, so confident driving is recommended.'
  },
  'azores': {
    id: 'azores',
    name: 'Azores',
    heroImage: 'https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&w=1920&q=80',
    tagline: 'Remote volcanic islands with emerald lakes and abundant wildlife',
    description: 'The Azores, an autonomous region of Portugal, is an archipelago of nine volcanic islands in the mid-Atlantic. Known for their stunning natural beauty, the islands feature crater lakes, hot springs, lush forests, and dramatic coastal landscapes. The Azores offer excellent hiking, whale watching, and diving opportunities, as well as a unique cultural heritage shaped by centuries of isolation and maritime tradition.',
    highlights: [
      'Marvel at the twin lakes of Sete Cidades on São Miguel Island',
      'Whale watching tours to spot resident and migratory species',
      'Soak in the thermal hot springs at Furnas',
      'Hike the volcanic landscapes of Pico Island',
      'Visit the UNESCO-listed historic center of Angra do Heroísmo'
    ],
    attractions: [
      {
        name: 'Lagoa das Sete Cidades',
        description: 'Twin blue and green lakes in a volcanic crater on São Miguel Island.',
        image: 'https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&w=800&q=80',
        type: 'nature'
      },
      {
        name: 'Mount Pico',
        description: 'Portugal\'s highest mountain on Pico Island, offering challenging hiking and spectacular views.',
        image: 'https://images.unsplash.com/photo-1565631798744-fc86d98be820?auto=format&fit=crop&w=800&q=80',
        type: 'nature'
      },
      {
        name: 'Furnas Hot Springs',
        description: 'Geothermal area with hot springs, fumaroles, and traditional cozido stew cooked underground.',
        image: 'https://images.unsplash.com/photo-1594022078772-ac843a271e3e?auto=format&fit=crop&w=800&q=80',
        type: 'nature'
      },
      {
        name: 'Angra do Heroísmo',
        description: 'UNESCO World Heritage city on Terceira Island with colorful historic buildings.',
        image: 'https://images.unsplash.com/photo-1604944327380-9892f0c6bff7?auto=format&fit=crop&w=800&q=80',
        type: 'landmark'
      }
    ],
    bestTimeToVisit: 'May to October offers the best weather, with June to August being peak whale watching season.',
    transportTips: 'Inter-island ferries operate in summer. SATA Air Açores offers flights between islands year-round. Renting a car is recommended for exploring each island.'
  }
};

const destinationEvents = {
  'lisbon': [
    {
      name: "Festas de Lisboa (Festas dos Santos Populares)",
      description: "Celebrações com música, sardinha grelhada e decorações coloridas por toda a cidade, com o ápice na noite de Santo Antônio.",
      date: "Junho (especialmente dia 12-13)",
      season: "summer",
      icon: <Music />
    },
    {
      name: "NOS Alive",
      description: "Um dos maiores festivais de música de Portugal, com artistas internacionais e locais em vários palcos.",
      date: "Julho",
      season: "summer",
      icon: <Music />
    },
    {
      name: "Festival Internacional de Chocolate",
      description: "Evento dedicado ao chocolate com degustações, demonstrações e esculturas de chocolate.",
      date: "Fevereiro/Março",
      season: "winter",
      icon: <Utensils />
    },
    {
      name: "Lisboa na Rua",
      description: "Série de eventos culturais gratuitos, incluindo concertos, cinema ao ar livre e performances de arte.",
      date: "Agosto/Setembro",
      season: "summer",
      icon: <Users />
    }
  ],
  'porto': [
    {
      name: "Festa de São João",
      description: "A maior festa da cidade com música ao vivo, comida de rua, fogos de artifício e a tradição de bater na cabeça dos outros com martelos de plástico ou alho-poró.",
      date: "23-24 de Junho",
      season: "summer",
      icon: <Users />
    },
    {
      name: "Essência do Vinho",
      description: "O maior evento de vinhos de Portugal, com degustações, masterclasses e apresentações de produtores de todo o país.",
      date: "Fevereiro",
      season: "winter",
      icon: <Utensils />
    },
    {
      name: "NOS Primavera Sound",
      description: "Festival de música alternativa com line-ups internacionais no Parque da Cidade.",
      date: "Junho",
      season: "spring",
      icon: <Music />
    },
    {
      name: "Natal no Porto",
      description: "Iluminações festivas, mercados natalinos e a grande árvore de Natal na Avenida dos Aliados.",
      date: "Dezembro",
      season: "winter",
      icon: <Users />
    }
  ],
  'algarve': [
    {
      name: "Festival de Marisco de Olhão",
      description: "Um dos maiores festivais gastronômicos do Algarve, com frutos do mar frescos, música ao vivo e artesanato local.",
      date: "Agosto",
      season: "summer",
      icon: <Utensils />
    },
    {
      name: "Festival Internacional de Escultura em Areia",
      description: "Impressionantes esculturas de areia criadas por artistas de todo o mundo em Pêra.",
      date: "Maio a Outubro",
      season: "summer",
      icon: <Users />
    },
    {
      name: "Carnaval de Loulé",
      description: "O maior carnaval do Algarve, com desfiles coloridos, fantasias e música.",
      date: "Fevereiro/Março",
      season: "winter",
      icon: <Music />
    },
    {
      name: "Festival Med",
      description: "Festival de música dedicado a sons mediterrâneos e culturas do mundo em Loulé.",
      date: "Junho/Julho",
      season: "summer",
      icon: <Music />
    }
  ],
  'madeira': [
    {
      name: "Festa da Flor",
      description: "Celebração da primavera com desfiles florais, exposições de flores e muitas atividades culturais.",
      date: "Maio",
      season: "spring",
      icon: <Users />
    },
    {
      name: "Ano Novo na Madeira",
      description: "Espetáculo de fogos de artifício reconhecido pelo Guinness World Records como um dos maiores do mundo.",
      date: "31 de Dezembro",
      season: "winter",
      icon: <Users />
    },
    {
      name: "Festival do Atlântico",
      description: "Combinação de competições de fogos de artifício e concertos nos finais de semana de junho.",
      date: "Junho",
      season: "summer",
      icon: <Music />
    },
    {
      name: "Festa do Vinho da Madeira",
      description: "Celebração da colheita com demonstrações de vindima, degustações e folclore tradicional.",
      date: "Agosto/Setembro",
      season: "autumn",
      icon: <Utensils />
    }
  ],
  'azores': [
    {
      name: "Festas do Espírito Santo",
      description: "Celebrações religiosas com procissões, música tradicional e refeições comunitárias em várias ilhas.",
      date: "Maio a Setembro",
      season: "summer",
      icon: <Users />
    },
    {
      name: "Semana do Mar",
      description: "Festival marítimo na ilha do Faial com regatas, atividades náuticas e entretenimento.",
      date: "Agosto",
      season: "summer",
      icon: <Waves />
    },
    {
      name: "Festival da Maré de Agosto",
      description: "Festival de música internacional na ilha de Santa Maria com uma localização à beira-mar deslumbrante.",
      date: "Agosto",
      season: "summer",
      icon: <Music />
    },
    {
      name: "Festa dos Baleeiros",
      description: "Celebração da herança baleeira nas ilhas do Pico e Faial com corridas de barcos e eventos culturais.",
      date: "Agosto",
      season: "summer",
      icon: <Users />
    }
  ]
};

const budgetTips = {
  'lisbon': [
    {
      title: "Lisboa Card",
      description: "Compre o Lisboa Card para entrada gratuita ou com desconto em mais de 35 atrações, além de transporte público ilimitado. Vale a pena para estadias de 2+ dias.",
      icon: <Ticket size={20} />,
      savingsLevel: "high"
    },
    {
      title: "Almoços de Menu do Dia",
      description: "Muitos restaurantes oferecem 'menu do dia' no almoço (12h-15h) que inclui entrada, prato principal, sobremesa e bebida por cerca de €10-15.",
      icon: <Utensils size={20} />,
      savingsLevel: "medium"
    },
    {
      title: "Hospedagem em Bairros Alternativos",
      description: "Em vez de ficar em Baixa ou Chiado, considere áreas como Graça ou Anjos, que são mais baratas e ainda bem conectadas.",
      icon: <Home size={20} />,
      savingsLevel: "high"
    },
    {
      title: "Beba Café no Balcão",
      description: "Um espresso (bica) consumido no balcão custa cerca de €0,70, enquanto sentado na mesa pode custar o dobro.",
      icon: <Coffee size={20} />,
      savingsLevel: "low"
    }
  ],
  'porto': [
    {
      title: "Porto Card",
      description: "O Porto Card oferece transporte gratuito e descontos em atrações por 1-4 dias. Faça as contas para ver se vale a pena para seu itinerário.",
      icon: <Ticket size={20} />,
      savingsLevel: "medium"
    },
    {
      title: "Provas de Vinho Econômicas",
      description: "Em vez das caves mais famosas, visite produtores menores como Augusto's ou Vinologia para provas mais baratas e muitas vezes mais personalizadas.",
      icon: <Utensils size={20} />,
      savingsLevel: "medium"
    },
    {
      title: "Andante Tour 3",
      description: "Compre o passe Andante Tour 3 para usar todo o transporte público por 72 horas, inclusive o trem para praias próximas.",
      icon: <Bus size={20} />,
      savingsLevel: "high"
    },
    {
      title: "Francesinha nos Bairros",
      description: "A famosa francesinha é mais barata fora das áreas turísticas. Experimente em Campanhã ou Boavista em vez do centro.",
      icon: <Utensils size={20} />,
      savingsLevel: "low"
    }
  ],
  'algarve': [
    {
      title: "Visite Fora da Alta Temporada",
      description: "Os preços no Algarve podem cair até 50% em maio/junho ou setembro/outubro, com clima ainda excelente para praia.",
      icon: <Calendar size={20} />,
      savingsLevel: "high"
    },
    {
      title: "Praias Menos Conhecidas",
      description: "Evite as praias mais famosas como Marinha ou Rocha e explore praias locais como Arrifes ou Coelha, que são igualmente bonitas.",
      icon: <Waves size={20} />,
      savingsLevel: "low"
    },
    {
      title: "Mercados Locais",
      description: "Compre frutas, legumes e peixe fresco nos mercados municipais em vez de supermercados turísticos. O de Olhão é excelente.",
      icon: <Utensils size={20} />,
      savingsLevel: "medium"
    },
    {
      title: "Aluguéis de Carro Antecipados",
      description: "Reserve seu carro com meses de antecedência. Os preços podem triplicar durante o verão quando há escassez.",
      icon: <Navigation size={20} />,
      savingsLevel: "high"
    }
  ],
  'madeira': [
    {
      title: "Passe de Ônibus Giro",
      description: "Compre o passe Giro para transporte ilimitado em Funchal por 1-7 dias, muito mais barato que táxis.",
      icon: <Bus size={20} />,
      savingsLevel: "medium"
    },
    {
      title: "Teleférico + Jardim Botânico",
      description: "Compre o bilhete combinado para o teleférico e Jardim Botânico, que oferece desconto de cerca de 20% em relação aos ingressos separados.",
      icon: <Ticket size={20} />,
      savingsLevel: "medium"
    },
    {
      title: "Piqueniques nas Levadas",
      description: "Leve almoço para suas caminhadas nas levadas. Há áreas de piquenique gratuitas com vistas espetaculares.",
      icon: <Utensils size={20} />,
      savingsLevel: "low"
    },
    {
      title: "Hospedagem em Quintas",
      description: "Fique em quintas tradicionais (casas de campo) em vez de hotéis turísticos. Muitas oferecem café da manhã com produtos locais.",
      icon: <Home size={20} />,
      savingsLevel: "high"
    }
  ],
  'azores': [
    {
      title: "Cartão Açores",
      description: "Registre-se para o cartão Açores online antes de viajar para obter descontos em tours, restaurantes e lojas.",
      icon: <Ticket size={20} />,
      savingsLevel: "medium"
    },
    {
      title: "Viaje Entre Ilhas de Barco",
      description: "Quando possível, viaje entre ilhas próximas (como Faial-Pico-São Jorge) de balsa em vez de avião, economizando até 70%.",
      icon: <Waves size={20} />,
      savingsLevel: "high"
    },
    {
      title: "Termas Gratuitas",
      description: "Visite piscinas termais naturais gratuitas como Poça da Dona Beija à noite (depois das 20h) quando o ingresso é mais barato.",
      icon: <Waves size={20} />,
      savingsLevel: "medium"
    },
    {
      title: "Tours em Grupo",
      description: "Para atividades como observação de baleias, procure grupos no seu alojamento para dividir o custo do tour privado.",
      icon: <Users size={20} />,
      savingsLevel: "medium"
    }
  ]
};

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [destination, setDestination] = useState<Destination | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading destination data
    setIsLoading(true);
    setTimeout(() => {
      if (id && destinations[id]) {
        setDestination(destinations[id]);
      }
      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-portugal-terracotta"></div>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-display font-bold text-portugal-navy mb-4">Destination Not Found</h1>
        <p className="text-gray-600 mb-6">The destination you're looking for doesn't exist or has been moved.</p>
        <Link 
          to="/" 
          className="inline-flex items-center px-5 py-2 bg-portugal-terracotta text-white rounded-full"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
      </div>
    );
  }

  const getIconByType = (type: string) => {
    switch (type) {
      case 'landmark': return <Landmark className="w-5 h-5 text-portugal-terracotta" />;
      case 'food': return <Utensils className="w-5 h-5 text-portugal-terracotta" />;
      case 'nature': return <Waves className="w-5 h-5 text-portugal-terracotta" />;
      case 'hotel': return <Hotel className="w-5 h-5 text-portugal-terracotta" />;
      default: return <Landmark className="w-5 h-5 text-portugal-terracotta" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={destination.heroImage}
            alt={destination.name}
            className="object-cover h-full w-full animate-zoom-in"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-4 animate-fade-in">
              <MapPin size={16} className="text-portugal-terracotta" />
              <span className="text-white font-medium text-sm">Portugal</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 text-shadow-lg animate-slide-up">
              {destination.name}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-slide-up-delay-1">
              {destination.tagline}
            </p>
          </div>
        </div>
        
        {/* Breadcrumbs */}
        <div className="absolute bottom-6 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-white/80 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={16} className="mx-2" />
              <Link to="/#destinations" className="hover:text-white transition-colors">Destinations</Link>
              <ChevronRight size={16} className="mx-2" />
              <span className="text-white">{destination.name}</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-portugal-navy mb-6">
                About {destination.name}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                {destination.description}
              </p>
              
              <h3 className="text-xl font-display font-bold text-portugal-navy mb-4">
                Highlights
              </h3>
              <ul className="space-y-3 mb-10">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <ThumbsUp size={18} className="mr-2 mt-1 text-portugal-terracotta" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-display font-bold text-portugal-navy mb-6">
                Top Attractions
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {destination.attractions.map((attraction, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={attraction.image} 
                        alt={attraction.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center mb-2">
                        {getIconByType(attraction.type)}
                        <h4 className="text-lg font-display font-bold text-portugal-navy ml-2">
                          {attraction.name}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        {attraction.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Seasonal Events Section */}
              <h3 className="text-xl font-display font-bold text-portugal-navy mb-6">
                Quando Visitar: Eventos e Festivais
              </h3>
              {destinationEvents[destination.id] && (
                <div className="mb-10">
                  <SeasonalEvents 
                    destination={destination.name} 
                    events={destinationEvents[destination.id]} 
                  />
                </div>
              )}
              
              {/* Budget Tips Section */}
              <h3 className="text-xl font-display font-bold text-portugal-navy mb-6">
                Economize em sua Viagem
              </h3>
              {budgetTips[destination.id] && (
                <div className="mb-10">
                  <BudgetTips 
                    destination={destination.name} 
                    tips={budgetTips[destination.id]} 
                  />
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm mb-6 sticky top-24">
                <h3 className="text-xl font-display font-bold text-portugal-navy mb-4">
                  Travel Information
                </h3>
                
                <div className="space-y-5">
                  <div className="flex items-start">
                    <Calendar size={20} className="mr-3 mt-1 text-portugal-terracotta" />
                    <div>
                      <h4 className="font-medium text-portugal-navy mb-1">Best Time to Visit</h4>
                      <p className="text-sm text-gray-600">{destination.bestTimeToVisit}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Navigation size={20} className="mr-3 mt-1 text-portugal-terracotta" />
                    <div>
                      <h4 className="font-medium text-portugal-navy mb-1">Transportation Tips</h4>
                      <p className="text-sm text-gray-600">{destination.transportTips}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={20} className="mr-3 mt-1 text-portugal-terracotta" />
                    <div>
                      <h4 className="font-medium text-portugal-navy mb-1">Suggested Duration</h4>
                      <p className="text-sm text-gray-600">3-5 days to experience the main attractions and local culture.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full py-3 bg-portugal-terracotta text-white rounded-lg font-medium hover:bg-portugal-terracotta/90 transition-colors shadow-sm">
                    Download Travel Guide
                  </button>
                </div>
              </div>
              
              {/* Related Destinations */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-display font-bold text-portugal-navy mb-4">
                  You Might Also Like
                </h3>
                
                <div className="space-y-4">
                  {Object.values(destinations)
                    .filter(d => d.id !== destination.id)
                    .slice(0, 3)
                    .map((relatedDest) => (
                      <Link 
                        key={relatedDest.id}
                        to={`/destination/${relatedDest.id}`}
                        className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-16 h-16 rounded-lg overflow-hidden mr-3">
                          <img 
                            src={relatedDest.heroImage} 
                            alt={relatedDest.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-portugal-navy">
                            {relatedDest.name}
                          </h4>
                          <p className="text-xs text-gray-500 line-clamp-1">
                            {relatedDest.tagline}
                          </p>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-portugal-navy mb-6">
            Ready to Explore {destination.name}?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Plan your perfect trip with our customized itineraries, accommodation recommendations, and local insights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="px-8 py-3 bg-portugal-terracotta text-white rounded-full font-medium hover:bg-portugal-terracotta/90 transition-colors shadow-lg">
              Plan Your Trip
            </button>
            <Link 
              to="/" 
              className="px-8 py-3 bg-white text-portugal-navy rounded-full font-medium hover:bg-gray-50 transition-colors border border-gray-200"
            >
              Explore More Destinations
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DestinationDetail;
