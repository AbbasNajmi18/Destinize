import { DestinationDetail } from '../models/destination-detail';

export const DESTINATION_DETAILS: Record<number, Partial<DestinationDetail>> = {
  // Paris
  1: {
    fullDescription: `Paris, the capital of France, is known globally as the City of Light (La Ville Lumière) and the City of Love. Its iconic landmarks, world-class cuisine, art museums, and charming streets make it one of the most visited destinations in the world. The city is divided into 20 arrondissements (districts) that spiral out from the center, each with its own unique character and attractions. From the bohemian atmosphere of Montmartre to the historic grandeur of Le Marais, Paris offers endless opportunities for exploration and discovery.`,
    attractions: [
      {
        name: 'Eiffel Tower',
        description: 'The most iconic symbol of Paris, offering stunning views from its observation decks.',
        image: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?q=80&w=1000&auto=format&fit=crop',
        rating: 4.7,
        visitDuration: '2-3 hours',
        entryFee: '€26.80 for adults to the summit'
      },
      {
        name: 'Louvre Museum',
        description: 'The world\'s largest art museum, home to thousands of works including the Mona Lisa.',
        image: 'https://images.unsplash.com/photo-1565099824688-e0ec07a2fe65?q=80&w=1000&auto=format&fit=crop',
        rating: 4.8,
        visitDuration: '3-4 hours',
        entryFee: '€17 for adults'
      },
      {
        name: 'Notre-Dame Cathedral',
        description: 'A medieval Catholic cathedral known for its French Gothic architecture.',
        image: 'https://images.unsplash.com/photo-1584666539160-dca1cefd54d9?q=80&w=1000&auto=format&fit=crop',
        rating: 4.7,
        visitDuration: '1-2 hours',
        entryFee: 'Free (exterior viewing only during reconstruction)'
      }
    ],
    seasonalInfo: {
      spring: {
        description: 'Mild weather with blooming flowers in parks and gardens.',
        temperature: '8°C - 18°C',
        activities: ['Luxembourg Gardens picnics', 'Seine River cruises', 'Outdoor café visits'],
        events: ['Paris Marathon', 'French Open Tennis Tournament'],
        crowdLevel: 'Moderate'
      },
      summer: {
        description: 'Warm, sunny days perfect for outdoor activities.',
        temperature: '15°C - 25°C',
        activities: ['Paris Plages (beach along the Seine)', 'Open-air cinema', 'Garden tours'],
        events: ['Bastille Day celebrations', 'Paris Fashion Week', 'Outdoor concerts'],
        crowdLevel: 'High'
      },
      autumn: {
        description: 'Cooler temperatures with beautiful fall colors in the parks.',
        temperature: '10°C - 18°C',
        activities: ['Wine tasting', 'Museum hopping', 'Fall foliage viewing'],
        events: ['Nuit Blanche art festival', 'Montmartre Wine Harvest'],
        crowdLevel: 'Moderate'
      },
      winter: {
        description: 'Cold with occasional snowfall, but magical for the holidays.',
        temperature: '3°C - 8°C',
        activities: ['Christmas markets', 'Ice skating', 'Indoor museum visits'],
        events: ['Christmas illuminations', 'New Year\'s Eve celebrations'],
        crowdLevel: 'Low (except during holidays)'
      }
    },
    travelTips: [
      {
        category: 'Transportation',
        tip: 'Purchase a Paris Visite pass for unlimited travel on the metro, buses, and RER within Paris.'
      },
      {
        category: 'Cultural',
        tip: 'Learn a few basic French phrases - locals appreciate the effort even if you are not fluent.'
      },
      {
        category: 'Safety',
        tip: 'Be aware of pickpockets, especially in tourist areas and on public transportation.'
      }
    ],
    localCuisine: [
      {
        name: 'Croissant',
        description: 'Flaky, buttery pastry that\'s a breakfast staple in France.',
        image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=1000&auto=format&fit=crop',
        mustTry: true
      },
      {
        name: 'Boeuf Bourguignon',
        description: 'Traditional beef stew slow-cooked with red wine, mushrooms, and herbs.',
        image: 'https://images.unsplash.com/photo-1584009218463-39f889d4c4e9?q=80&w=1000&auto=format&fit=crop',
        mustTry: true
      }
    ],
    geography: {
      terrain: 'Mostly flat with the Seine River running through the center',
      landmarks: ['Seine River', 'Montmartre Hill', 'Bois de Boulogne park'],
      surroundingAreas: ['Versailles', 'Disneyland Paris', 'Champagne region']
    },
    gallery: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583265627959-fb7042f5133b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?q=80&w=1000&auto=format&fit=crop'
    ],
    currency: 'Euro (€)',
    language: 'French',
    timeZone: 'Central European Time (CET)',
    bestTimeToVisit: 'April to June or September to November',
    budget: {
      budget: '€70-100 per day',
      midRange: '€150-250 per day',
      luxury: '€350+ per day'
    }
  },
  
  // Bali
  2: {
    fullDescription: `Bali, often called the Island of the Gods, is a Indonesian paradise known for its lush landscapes, vibrant spiritual culture, and welcoming locals. This tropical haven offers everything from volcanic mountains and terraced rice fields to pristine beaches and coral reefs. Each region has its own charm - from the cultural heart of Ubud to the bustling beaches of Kuta and Seminyak, and the more tranquil escapes of Uluwatu and Nusa Dua. Balinese culture, deeply rooted in Hindu traditions, is visible in daily offerings, ornate temples, and frequent ceremonies that visitors are often welcome to observe.`,
    attractions: [
      {
        name: 'Tanah Lot Temple',
        description: 'Ancient sea temple perched on a rock formation, especially stunning at sunset.',
        image: 'https://images.unsplash.com/photo-1518736348021-d69b4c035d4d?q=80&w=1000&auto=format&fit=crop',
        rating: 4.6,
        visitDuration: '1-2 hours',
        entryFee: 'IDR 60,000 (approx. $4)'
      },
      {
        name: 'Sacred Monkey Forest Sanctuary',
        description: 'Natural forest reserve and temple complex with over 700 Balinese long-tailed monkeys.',
        image: 'https://images.unsplash.com/photo-1566427786955-7b3cee6c481a?q=80&w=1000&auto=format&fit=crop',
        rating: 4.3,
        visitDuration: '2-3 hours',
        entryFee: 'IDR 80,000 (approx. $5.50)'
      },
      {
        name: 'Tegallalang Rice Terraces',
        description: 'Stunning stepped rice paddies demonstrating the traditional Balinese cooperative irrigation system.',
        image: 'https://images.unsplash.com/photo-1531592937781-344ad608fabf?q=80&w=1000&auto=format&fit=crop',
        rating: 4.5,
        visitDuration: '1-2 hours',
        entryFee: 'Free (small donations expected)'
      }
    ],
    seasonalInfo: {
      spring: {
        description: 'Start of the dry season with comfortable temperatures.',
        temperature: '23°C - 33°C',
        activities: ['Beach activities', 'Temple visits', 'Rice field trekking'],
        events: ['Nyepi (Balinese New Year)', 'Bali Spirit Festival'],
        crowdLevel: 'Moderate'
      },
      summer: {
        description: 'Peak dry season with ideal beach weather.',
        temperature: '23°C - 31°C',
        activities: ['Surfing', 'Diving', 'Island hopping'],
        events: ['Bali Arts Festival', 'Kite Festival'],
        crowdLevel: 'High'
      },
      autumn: {
        description: 'Transitioning to wet season with occasional showers.',
        temperature: '24°C - 32°C',
        activities: ['Spa treatments', 'Cooking classes', 'Cultural tours'],
        events: ['Nusa Dua Festival', 'Ubud Writers & Readers Festival'],
        crowdLevel: 'Moderate to Low'
      },
      winter: {
        description: 'Wet season with brief heavy rainfall, often followed by sunshine.',
        temperature: '24°C - 30°C',
        activities: ['Waterfall visits', 'Coffee plantation tours', 'Museum visits'],
        events: ['Galungan and Kuningan ceremonies', 'Christmas and New Year celebrations at beach clubs'],
        crowdLevel: 'Low (except during holidays)'
      }
    },
    travelTips: [
      {
        category: 'Transportation',
        tip: 'Rent a scooter for flexibility, but only if you are comfortable with local driving conditions.'
      },
      {
        category: 'Cultural',
        tip: 'Dress modestly when visiting temples - sarongs and sashes are often provided or can be rented.'
      },
      {
        category: 'Health',
        tip: 'Stick to bottled water and be cautious with street food to avoid "Bali belly".'
      }
    ],
    localCuisine: [
      {
        name: 'Nasi Goreng',
        description: 'Indonesian fried rice with sweet soy sauce, typically served with a fried egg on top.',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1000&auto=format&fit=crop',
        mustTry: true
      },
      {
        name: 'Babi Guling',
        description: 'Balinese roast suckling pig flavored with turmeric and various spices.',
        image: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?q=80&w=1000&auto=format&fit=crop',
        mustTry: true
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=1000&auto=format&fit=crop'
    ],
    currency: 'Indonesian Rupiah (IDR)',
    language: 'Indonesian, Balinese',
    timeZone: 'Central Indonesia Time (WITA)',
    bestTimeToVisit: 'April to October (dry season)',
    budget: {
      budget: 'IDR 500,000-800,000 per day ($30-55)',
      midRange: 'IDR 800,000-1,500,000 per day ($55-100)',
      luxury: 'IDR 1,500,000+ per day ($100+)'
    },
    geography: {
      terrain: 'Volcanic mountains, rice terraces, beaches, and coral reefs',
      landmarks: ['Mount Batur', 'Mount Agung', 'Uluwatu Cliffs'],
      surroundingAreas: ['Nusa Penida', 'Gili Islands', 'Lombok']
    }
  }
};
