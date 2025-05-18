import { Component } from '@angular/core';
import { Destination } from '../../models/destination';
import { Subscription } from 'rxjs';
import { DestinationService } from '../../services/destination.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-destinations',
  standalone: false,
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css',
})
export class DestinationsComponent {
  destinations: Destination[] = [];
  regions: string[] = [];
  filteredDestinations: Destination[] = [];
  featuredDestinations: Destination[] = [];
  asiaDestinations: Destination[] = [];
  europeDestinations: Destination[] = [];
  selectedRegion: string = '';

  // Search related properties
  searchResults: Destination[] = [];
  currentSearchQuery: string = '';
  showSearchResults: boolean = false;

  // Subscription management
  private searchSubscription: Subscription = new Subscription();
  private searchQuerySubscription: Subscription = new Subscription();
  private hasSearchedSubscription: Subscription = new Subscription();

  constructor(
    private destinationService: DestinationService,
    public searchService: SearchService,
  ) {}

  ngOnInit(): void {
    this.loadDestinations();

    // Subscribe to search results
    this.searchSubscription = this.searchService.searchResults$.subscribe(
      (results) => {
        this.searchResults = results;
      },
    );

    // Subscribe to search query
    this.searchQuerySubscription = this.searchService.searchQuery$.subscribe(
      (query) => {
        this.currentSearchQuery = query;
      },
    );

    // Subscribe to has searched flag
    this.hasSearchedSubscription = this.searchService.hasSearched$.subscribe(
      (hasSearched) => {
        this.showSearchResults = hasSearched;
      },
    );
  }

  ngOnDestroy(): void {
    // Clean up subscriptions
    this.searchSubscription.unsubscribe();
    this.searchQuerySubscription.unsubscribe();
    this.hasSearchedSubscription.unsubscribe();
  }

  loadDestinations(): void {
    this.destinationService.getDestinations().subscribe((destinations) => {
      this.destinations = destinations;
      this.filteredDestinations = [...destinations];

      // Get featured destinations
      this.featuredDestinations = destinations.filter((d) => d.featured);

      // Get destinations by region
      this.asiaDestinations = destinations.filter((d) => d.region === 'Asia');
      this.europeDestinations = destinations.filter(
        (d) => d.region === 'Europe',
      );

      this.extractRegions();
    });
  }

  extractRegions(): void {
    const regionSet = new Set<string>();
    this.destinations.forEach((destination) => {
      regionSet.add(destination.region);
    });
    this.regions = Array.from(regionSet);
  }

  filterByRegion(region: string): void {
    this.selectedRegion = region;

    if (region === '') {
      this.filteredDestinations = [...this.destinations];
    } else {
      this.filteredDestinations = this.destinations.filter(
        (d) => d.region === region,
      );
    }
  }

  clearFilter(): void {
    this.selectedRegion = '';
    this.filteredDestinations = [...this.destinations];
  }
}
