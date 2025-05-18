import { Destination } from './destination';

export interface DestinationDetail extends Destination {
  // Extended information
  fullDescription: string;
  attractions: Attraction[];
  seasonalInfo: SeasonalInfo;
  travelTips: TravelTip[];
  localCuisine: CuisineItem[];
  geography: Geography;
  gallery: string[];
  currency: string;
  language: string;
  timeZone: string;
  bestTimeToVisit: string;
  budget: {
    budget: string;
    midRange: string;
    luxury: string;
  };
}

export interface Attraction {
  name: string;
  description: string;
  image: string;
  rating: number;
  visitDuration: string; // e.g., "2-3 hours"
  entryFee?: string; // e.g., "$15" or "Free"
}

export interface SeasonalInfo {
  spring: Season;
  summer: Season;
  autumn: Season;
  winter: Season;
}

export interface Season {
  description: string;
  temperature: string; // e.g., "15°C - 25°C"
  activities: string[];
  events: string[];
  crowdLevel: string; // e.g., "Low", "Moderate", "High"
}

export interface TravelTip {
  category: string; // e.g., "Transportation", "Safety", "Cultural"
  tip: string;
}

export interface CuisineItem {
  name: string;
  description: string;
  image: string;
  mustTry: boolean;
}

export interface Geography {
  terrain: string;
  landmarks: string[];
  surroundingAreas: string[];
}
