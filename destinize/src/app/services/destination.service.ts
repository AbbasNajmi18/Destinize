import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Destination } from '../models/destination';
import { Destinations } from '../mock-data/destinations';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  private destinations: Destination[] = Destinations;

  constructor() {}

  getDestinations(): Observable<Destination[]> {
    return of(this.destinations);
  }

  getDestinationById(id: number): Observable<Destination | undefined> {
    const destination = this.destinations.find((d) => d.id === id);
    return of(destination);
  }

  getDestinationsByRegion(region: string): Observable<Destination[]> {
    return of(this.destinations.filter((d) => d.region === region));
  }

  getFeaturedDestinations(): Observable<Destination[]> {
    return of(this.destinations.filter((d) => d.featured));
  }

  searchDestinations(query: string): Observable<Destination[]> {
    if (!query || query.trim() === '') {
      return this.getDestinations();
    }

    query = query.toLowerCase().trim();

    return of(
      this.destinations.filter((d) => {
        // Search by name, location, description
        const basicMatch =
          d.name.toLowerCase().includes(query) ||
          d.location.toLowerCase().includes(query) ||
          d.description.toLowerCase().includes(query);

        // Search by region
        const regionMatch = d.region.toLowerCase().includes(query);

        // Search by emoji tags
        const tagMatch = d.tags.some((tag) => tag.includes(query));

        return basicMatch || regionMatch || tagMatch;
      }),
    );
  }
}
