export interface Destination {
  id: number;
  name: string;
  location: string;
  region: string;
  tags: string[];
  image: string;
  description: string;
  price?: number;
  rating?: number;
  featured?: boolean;
}
