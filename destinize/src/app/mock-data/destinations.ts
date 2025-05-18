import { Destination } from '../models/destination';

export const Destinations: Destination[] = [
  // Europe
  {
    id: 1,
    name: 'Paris',
    location: 'France',
    region: 'Europe',
    tags: ['☀️', '🍷', '🗼'],
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop',
    description:
      'Known as the City of Love, Paris offers iconic landmarks, world-class cuisine, and charming streets.',
    price: 1200,
    rating: 4.7,
    featured: true,
  },
  {
    id: 2,
    name: 'Santorini',
    location: 'Greece',
    region: 'Europe',
    tags: ['🏖️', '🏛️', '🌅'],
    image:
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000&auto=format&fit=crop',
    description:
      'Stunning island with white-washed buildings, blue domes, and breathtaking sunset views.',
    price: 1500,
    rating: 4.9,
    featured: true,
  },
  {
    id: 3,
    name: 'Rome',
    location: 'Italy',
    region: 'Europe',
    tags: ['🏛️', '🍝', '🛵'],
    image:
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'The Eternal City filled with ancient ruins, Renaissance art, and charming streets.',
    price: 1400,
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Barcelona',
    location: 'Spain',
    region: 'Europe',
    tags: ['🏖️', '🎨', '⚽'],
    image:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000&auto=format&fit=crop',
    description:
      'A vibrant city known for Gaudí’s architecture, beaches, and rich cultural life.',
    price: 1300,
    rating: 4.6,
  },
  {
    id: 5,
    name: 'Amsterdam',
    location: 'Netherlands',
    region: 'Europe',
    tags: ['🚲', '🌷', '🛶'],
    image:
      'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Charming canals, historic architecture, and a relaxed lifestyle await in Amsterdam.',
    price: 1250,
    rating: 4.5,
  },

  // Asia
  {
    id: 6,
    name: 'Bali',
    location: 'Indonesia',
    region: 'Asia',
    tags: ['🌴', '🏄‍♂️', '🌊'],
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop',
    description:
      'Tropical paradise with beautiful beaches, lush rice terraces, and vibrant cultural experiences.',
    price: 950,
    rating: 4.8,
    featured: true,
  },
  {
    id: 7,
    name: 'Kyoto',
    location: 'Japan',
    region: 'Asia',
    tags: ['🌸', '🏯', '🍵'],
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop',
    description:
      'Historic city with traditional temples, beautiful gardens, and authentic Japanese culture.',
    price: 1350,
    rating: 4.6,
  },
  {
    id: 8,
    name: 'Bangkok',
    location: 'Thailand',
    region: 'Asia',
    tags: ['🕌', '🍜', '🏙️'],
    image:
      'https://plus.unsplash.com/premium_photo-1661963188068-1bac46e28727?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Energetic city with ornate shrines, street food, and a vibrant nightlife.',
    price: 1100,
    rating: 4.4,
  },
  {
    id: 9,
    name: 'Seoul',
    location: 'South Korea',
    region: 'Asia',
    tags: ['🎶', '🌸', '🏙️'],
    image:
      'https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Dynamic capital city known for K-pop, fashion, technology, and ancient palaces.',
    price: 1450,
    rating: 4.6,
  },
  {
    id: 10,
    name: 'Dubai',
    location: 'UAE',
    region: 'Asia',
    tags: ['🌆', '🛍️', '🏜️'],
    image:
      'https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'A luxurious city with skyscrapers, deserts, and shopping malls galore.',
    price: 1550,
    rating: 4.7,
  },

  // Africa
  {
    id: 11,
    name: 'Marrakech',
    location: 'Morocco',
    region: 'Africa',
    tags: ['🏜️', '🛍️', '🕌'],
    image:
      'https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Vibrant city with colorful markets, exotic architecture, and rich cultural heritage.',
    price: 800,
    rating: 4.4,
  },
  {
    id: 12,
    name: 'Cape Town',
    location: 'South Africa',
    region: 'Africa',
    tags: ['⛰️', '🌊', '🍷'],
    image:
      'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Spectacular scenery with Table Mountain, beaches, and wine estates.',
    price: 1200,
    rating: 4.6,
  },
  {
    id: 13,
    name: 'Cairo',
    location: 'Egypt',
    region: 'Africa',
    tags: ['🕌', '🏜️', '📜'],
    image:
      'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Home to the Pyramids of Giza and rich ancient Egyptian history.',
    price: 900,
    rating: 4.5,
  },
  {
    id: 14,
    name: 'Zanzibar',
    location: 'Tanzania',
    region: 'Africa',
    tags: ['🏖️', '🌴', '🐠'],
    image:
      'https://images.unsplash.com/photo-1575999502951-4ab25b5ca889?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Tropical island paradise with white sand beaches and turquoise waters.',
    price: 1150,
    rating: 4.7,
  },
  {
    id: 15,
    name: 'Nairobi',
    location: 'Kenya',
    region: 'Africa',
    tags: ['🦒', '🌄', '🌿'],
    image:
      'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Gateway to safari adventures with a blend of urban and wildlife experiences.',
    price: 1100,
    rating: 4.4,
  },

  // North America
  {
    id: 16,
    name: 'New York',
    location: 'USA',
    region: 'North America',
    tags: ['🗽', '🎭', '🏙️'],
    image:
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000&auto=format&fit=crop',
    description:
      'The city that never sleeps, offering world-class entertainment, cuisine, and iconic skyscrapers.',
    price: 1600,
    rating: 4.5,
  },
  {
    id: 17,
    name: 'Toronto',
    location: 'Canada',
    region: 'North America',
    tags: ['🏙️', '🍁', '🗣️'],
    image:
      'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Multicultural metropolis with iconic CN Tower and diverse cuisine.',
    price: 1300,
    rating: 4.5,
  },
  {
    id: 18,
    name: 'Los Angeles',
    location: 'USA',
    region: 'North America',
    tags: ['🎬', '🏖️', '🌴'],
    image:
      'https://images.unsplash.com/photo-1597982087634-9884f03198ce?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Famous for Hollywood, beaches, and a vibrant arts scene.',
    price: 1500,
    rating: 4.4,
  },
  {
    id: 19,
    name: 'Cancún',
    location: 'Mexico',
    region: 'North America',
    tags: ['🏝️', '🌮', '🐠'],
    image:
      'https://images.unsplash.com/photo-1510097467424-192d713fd8b2?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Popular beach destination with turquoise waters and Mayan ruins.',
    price: 1000,
    rating: 4.6,
  },
  {
    id: 20,
    name: 'San Francisco',
    location: 'USA',
    region: 'North America',
    tags: ['🌉', '🌁', '🚋'],
    image:
      'https://images.unsplash.com/photo-1488747279002-c8523379faaa?q=80&w=1000&auto=format&fit=crop',
    description:
      'Home of the Golden Gate Bridge, tech innovation, and beautiful hills.',
    price: 1550,
    rating: 4.5,
  },

  // Oceania
  {
    id: 21,
    name: 'Sydney',
    location: 'Australia',
    region: 'Oceania',
    tags: ['🏄‍♂️', '🌉', '🦘'],
    image:
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1000&auto=format&fit=crop',
    description:
      'Stunning harbor city with famous Opera House, beautiful beaches, and vibrant culture.',
    price: 1700,
    rating: 4.7,
  },
  {
    id: 22,
    name: 'Queenstown',
    location: 'New Zealand',
    region: 'Oceania',
    tags: ['⛰️', '🏂', '🚤'],
    image:
      'https://images.unsplash.com/photo-1512017615494-fdf6146235ff?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Adventure capital with bungee jumping, skiing, and stunning lake views.',
    price: 1650,
    rating: 4.8,
  },
  {
    id: 23,
    name: 'Melbourne',
    location: 'Australia',
    region: 'Oceania',
    tags: ['🎨', '☕', '🎶'],
    image:
      'https://plus.unsplash.com/premium_photo-1733317293766-5606f74b765b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Cultural capital with coffee culture, festivals, and art galleries.',
    price: 1600,
    rating: 4.6,
  },
  {
    id: 24,
    name: 'Auckland',
    location: 'New Zealand',
    region: 'Oceania',
    tags: ['🌋', '🚤', '🏖️'],
    image:
      'https://images.unsplash.com/photo-1595125990323-885cec5217ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'A bustling city built around volcanic hills and a stunning harbor.',
    price: 1450,
    rating: 4.5,
  },
  {
    id: 25,
    name: 'Fiji Islands',
    location: 'Fiji',
    region: 'Oceania',
    tags: ['🌴', '🏝️', '🐚'],
    image:
      'https://plus.unsplash.com/premium_photo-1664304458186-9a67c1330d02?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Idyllic islands with coral reefs, blue lagoons, and relaxing vibes.',
    price: 1800,
    rating: 4.9,
  },

  // South America
  {
    id: 26,
    name: 'Rio de Janeiro',
    location: 'Brazil',
    region: 'South America',
    tags: ['🏖️', '🎭', '⛰️'],
    image:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1000&auto=format&fit=crop',
    description:
      'Beautiful coastal city known for Carnival, stunning beaches, and the iconic Christ the Redeemer statue.',
    price: 1100,
    rating: 4.5,
  },
  {
    id: 27,
    name: 'Buenos Aires',
    location: 'Argentina',
    region: 'South America',
    tags: ['💃', '🥩', '🎶'],
    image:
      'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'European-style capital known for tango, steak, and vibrant culture.',
    price: 1150,
    rating: 4.6,
  },
  {
    id: 28,
    name: 'Lima',
    location: 'Peru',
    region: 'South America',
    tags: ['🏛️', '🍲', '🌊'],
    image:
      'https://images.unsplash.com/photo-1577587230708-187fdbef4d91?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Coastal capital with rich history, culinary excellence, and colonial architecture.',
    price: 1050,
    rating: 4.5,
  },
  {
    id: 29,
    name: 'Cartagena',
    location: 'Colombia',
    region: 'South America',
    tags: ['🏖️', '🏰', '🎨'],
    image:
      'https://images.unsplash.com/photo-1563131896-ee67f23bbc98?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Historic city on the Caribbean coast with colorful streets and forts.',
    price: 980,
    rating: 4.4,
  },
  {
    id: 30,
    name: 'Quito',
    location: 'Ecuador',
    region: 'South America',
    tags: ['⛰️', '🏙️', '🌋'],
    image:
      'https://images.unsplash.com/photo-1610226977124-9fd2755d09f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'High-altitude capital with colonial history and access to Andean adventures.',
    price: 1020,
    rating: 4.3,
  },
  // India
  {
    id: 31,
    name: 'Jaipur',
    location: 'India',
    region: 'Asia',
    tags: ['🏰', '🐘', '🎨'],
    image:
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'The Pink City with magnificent palaces, colorful bazaars, and rich Rajasthani culture.',
    price: 850,
    rating: 4.7,
  },
  {
    id: 32,
    name: 'Goa',
    location: 'India',
    region: 'Asia',
    tags: ['🏖️', '🌴', '🎉'],
    image:
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Beach paradise with golden sands, vibrant nightlife, and Portuguese-influenced architecture.',
    price: 750,
    rating: 4.6,
    featured: true,
  },
  {
    id: 33,
    name: 'Varanasi',
    location: 'India',
    region: 'Asia',
    tags: ['🛕', '🚣', '🕯️'],
    image:
      'https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Ancient spiritual city on the banks of the Ganges with sacred ghats and rituals.',
    price: 650,
    rating: 4.5,
  },
  {
    id: 34,
    name: 'Darjeeling',
    location: 'India',
    region: 'Asia',
    tags: ['🍵', '🚂', '🏔️'],
    image:
      'https://images.unsplash.com/photo-1544634076-a90160ddf44c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Himalayan town famous for tea plantations, mountain views, and the toy train.',
    price: 700,
    rating: 4.4,
  },
  {
    id: 35,
    name: 'Kerala Backwaters',
    location: 'India',
    region: 'Asia',
    tags: ['🚣', '🌴', '🌿'],
    image:
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Serene network of lagoons, canals, and lakes with traditional houseboat experiences.',
    price: 800,
    rating: 4.8,
  },
  {
    id: 36,
    name: 'Agra',
    location: 'India',
    region: 'Asia',
    tags: ['🏛️', '💎', '🏰'],
    image:
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Home to the iconic Taj Mahal, Agra Fort, and other Mughal architectural wonders.',
    price: 780,
    rating: 4.7,
    featured: true,
  },
  {
    id: 37,
    name: 'Udaipur',
    location: 'India',
    region: 'Asia',
    tags: ['🏰', '💦', '🌅'],
    image:
      'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D',
    description:
      'Romantic lake city with majestic palaces, temples, and scenic beauty.',
    price: 820,
    rating: 4.6,
  },
];
