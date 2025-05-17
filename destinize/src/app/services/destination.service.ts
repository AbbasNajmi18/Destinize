import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Destination } from '../models/destination';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private destinations: Destination[] = [
    {
      id: 1,
      name: 'Paris',
      location: 'France',
      region: 'Europe',
      tags: ['☀️', '🍷', '🗼'],
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop',
      description: 'Known as the City of Love, Paris offers iconic landmarks, world-class cuisine, and charming streets.',
      price: 1200,
      rating: 4.7,
      featured: true
    },
    {
      id: 2,
      name: 'Bali',
      location: 'Indonesia',
      region: 'Asia',
      tags: ['🌴', '🏄‍♂️', '🌊'],
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop',
      description: 'Tropical paradise with beautiful beaches, lush rice terraces, and vibrant cultural experiences.',
      price: 950,
      rating: 4.8,
      featured: true
    },
    {
      id: 3,
      name: 'Santorini',
      location: 'Greece',
      region: 'Europe',
      tags: ['🏖️', '🏛️', '🌅'],
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000&auto=format&fit=crop',
      description: 'Stunning island with white-washed buildings, blue domes, and breathtaking sunset views.',
      price: 1500,
      rating: 4.9,
      featured: true
    },
    {
      id: 4,
      name: 'Kyoto',
      location: 'Japan',
      region: 'Asia',
      tags: ['🌸', '🏯', '🍵'],
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop',
      description: 'Historic city with traditional temples, beautiful gardens, and authentic Japanese culture.',
      price: 1350,
      rating: 4.6
    },
    {
      id: 5,
      name: 'Marrakech',
      location: 'Morocco',
      region: 'Africa',
      tags: ['🏜️', '🛍️', '🕌'],
      image: 'https://images.unsplash.com/photo-1548018560-c7196548e84d?q=80&w=1000&auto=format&fit=crop',
      description: 'Vibrant city with colorful markets, exotic architecture, and rich cultural heritage.',
      price: 800,
      rating: 4.4
    },
    {
      id: 6,
      name: 'New York',
      location: 'USA',
      region: 'North America',
      tags: ['🗽', '🎭', '🏙️'],
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000&auto=format&fit=crop',
      description: 'The city that never sleeps, offering world-class entertainment, cuisine, and iconic skyscrapers.',
      price: 1600,
      rating: 4.5
    },
    {
      id: 7,
      name: 'Sydney',
      location: 'Australia',
      region: 'Oceania',
      tags: ['🏄‍♂️', '🌉', '🦘'],
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1000&auto=format&fit=crop',
      description: 'Stunning harbor city with famous Opera House, beautiful beaches, and vibrant culture.',
      price: 1700,
      rating: 4.7
    },
    {
      id: 8,
      name: 'Rio de Janeiro',
      location: 'Brazil',
      region: 'South America',
      tags: ['🏖️', '🎭', '⛰️'],
      image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1000&auto=format&fit=crop',
      description: 'Beautiful coastal city known for Carnival, stunning beaches, and the iconic Christ the Redeemer statue.',
      price: 1100,
      rating: 4.5
    }
  ];

  constructor() { }

  getDestinations(): Observable<Destination[]> {
    return of(this.destinations);
  }

  getDestinationById(id: number): Observable<Destination | undefined> {
    const destination = this.destinations.find(d => d.id === id);
    return of(destination);
  }

  getDestinationsByRegion(region: string): Observable<Destination[]> {
    return of(this.destinations.filter(d => d.region === region));
  }

  getFeaturedDestinations(): Observable<Destination[]> {
    return of(this.destinations.filter(d => d.featured));
  }

  searchDestinations(query: string): Observable<Destination[]> {
    query = query.toLowerCase();
    return of(this.destinations.filter(d => 
      d.name.toLowerCase().includes(query) || 
      d.location.toLowerCase().includes(query) ||
      d.description.toLowerCase().includes(query)
    ));
  }
}
