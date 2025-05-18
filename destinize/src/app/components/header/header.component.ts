import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { DestinationService } from '../../services/destination.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  searchControl = new FormControl('');
  regions: string[] = [];
  currentPlaceholder = 'Search destinations...';
  placeholders = [
    'Search destinations by region/emojis',
    'Search India',
    'Search Greece',
    'Search 🏖️',
    'Search 🌴',
    'Search Europe'
  ];
  private placeholderInterval: any;
  private searchSubscription: Subscription = new Subscription();

  constructor(
    private destinationService: DestinationService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    // Load regions
    this.loadRegions();

    // Start rotating placeholders
    this.startPlaceholderRotation();

    // Subscribe to changes in the search input
    this.searchSubscription = this.searchControl.valueChanges
      .pipe(
        debounceTime(300), // Wait for 300ms pause in events
        distinctUntilChanged() // Only emit when the current value is different from the last
      )
      .subscribe(query => {
        // If search is empty, clear the search state
        if (!query || query.trim() === '') {
          this.searchService.clearSearch();
          return;
        }

        // Update the search query in the service
        this.searchService.updateSearchQuery(query);

        // Perform the search and update results
        this.destinationService.searchDestinations(query).subscribe(results => {
          this.searchService.updateSearchResults(results);
        });
      });
  }

  /**
   * Load all available regions from destinations
   */
  loadRegions(): void {
    this.destinationService.getDestinations().subscribe(destinations => {
      const regionSet = new Set<string>();
      destinations.forEach(destination => {
        regionSet.add(destination.region);
      });
      this.regions = Array.from(regionSet);
      this.regions.sort(); // Sort regions alphabetically
    });
  }

  /**
   * Filter destinations by selected region
   */
  filterByRegion(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const region = select.value;

    if (!region) {
      // If "All Regions" is selected, clear the search
      this.searchService.clearSearch();
      return;
    }

    // Use the search service to filter by region
    this.destinationService.getDestinationsByRegion(region).subscribe(results => {
      this.searchService.updateSearchQuery(`Region: ${region}`);
      this.searchService.updateSearchResults(results);
    });
  }

  /**
   * Start rotating the placeholder text every 2 seconds
   */
  startPlaceholderRotation(): void {
    let index = 0;
    this.placeholderInterval = setInterval(() => {
      index = (index + 1) % this.placeholders.length;
      this.currentPlaceholder = this.placeholders[index];
    }, 2000); // Change every 2 seconds
  }

  ngOnDestroy(): void {
    // Clean up subscriptions
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }

    // Clear placeholder rotation interval
    if (this.placeholderInterval) {
      clearInterval(this.placeholderInterval);
    }
  }

  // Method to handle search form submission (prevent form default action)
  onSearchSubmit(event: Event): void {
    event.preventDefault();
    // The search is already triggered by valueChanges
  }
}
