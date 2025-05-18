import { Component, OnInit, OnDestroy } from '@angular/core';
import { Destination } from '../../models/destination';
import { Subscription } from 'rxjs';
import { DestinationService } from '../../services/destination.service';
import { SearchService } from '../../services/search.service';
import { RegionService } from '../../services/region.service';

@Component({
  selector: 'app-international',
  standalone: false,
  templateUrl: './international.component.html',
  styleUrl: './international.component.css'
})
export class InternationalComponent implements OnInit, OnDestroy {
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
  private regionSubscription: Subscription = new Subscription();

  constructor(
    private destinationService: DestinationService,
    public searchService: SearchService,
    private regionService: RegionService
  ) {}

  ngOnInit(): void {
    this.loadDestinations();

    // Subscribe to search results
    this.searchSubscription = this.searchService.searchResults$.subscribe(results => {
      this.searchResults = results;
    });

    // Subscribe to search query
    this.searchQuerySubscription = this.searchService.searchQuery$.subscribe(query => {
      this.currentSearchQuery = query;
    });

    // Subscribe to has searched flag
    this.hasSearchedSubscription = this.searchService.hasSearched$.subscribe(hasSearched => {
      this.showSearchResults = hasSearched;
    });
    
    // Subscribe to region changes
    this.regionSubscription = this.regionService.selectedRegion$.subscribe(region => {
      this.selectedRegion = region;
      this.filterDestinationsByRegion();
    });
  }

  ngOnDestroy(): void {
    // Clean up subscriptions
    this.searchSubscription.unsubscribe();
    this.searchQuerySubscription.unsubscribe();
    this.hasSearchedSubscription.unsubscribe();
    this.regionSubscription.unsubscribe();
  }

  loadDestinations(): void {
    this.destinationService.getDestinations().subscribe(destinations => {
      this.destinations = destinations;
      
      // Filter out Indian destinations (these are for national page)
      this.destinations = this.destinations.filter(d => d.location !== 'India');
      
      // Apply any existing region filter
      this.filterDestinationsByRegion();

      // Get featured destinations
      this.featuredDestinations = destinations.filter(d => d.featured && d.location !== 'India');
      
      // Extract unique regions
      const regionSet = new Set<string>();
      this.destinations.forEach(destination => {
        regionSet.add(destination.region);
      });
      this.regions = Array.from(regionSet);
    });
  }
  
  // Filter destinations based on selected region
  filterDestinationsByRegion(): void {
    if (!this.selectedRegion || this.selectedRegion === '') {
      // If no region selected, show all international destinations
      this.filteredDestinations = [...this.destinations];
    } else {
      // Filter by selected region
      this.filteredDestinations = this.destinations.filter(d => d.region === this.selectedRegion);
    }
  }
}
