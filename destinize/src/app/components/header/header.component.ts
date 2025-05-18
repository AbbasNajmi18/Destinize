import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { DestinationService } from '../../services/destination.service';
import { SearchService } from '../../services/search.service';
import { RegionService } from '../../services/region.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  searchControl = new FormControl('');
  regions: string[] = [];
  selectedRegion: string = ''; // Property to track selected region
  currentPlaceholder = 'Search destinations by region/emojis';
  placeholders = [
    'Search India',
    'Search Greece',
    'Search Europe',
    'Search 🏖️',
    'Search 🌴',
    'Search 🏙️',
    'Search 🏛️',
    'Search 🌅',
    'Search 🍷',
  ];
  private placeholderInterval: any;
  private searchSubscription: Subscription = new Subscription();
  private regionSubscription: Subscription = new Subscription();

  // Track current route to customize search behavior
  currentRoute: string = '/';
  constructor(
    private destinationService: DestinationService,
    private searchService: SearchService,
    private regionService: RegionService,
    private router: Router,
  ) {
    // Track route changes to adjust search behavior
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.url;

        // Update the national page flag in the region service
        const isNationalPage = this.currentRoute === '/national';
        this.regionService.setIsNationalPage(isNationalPage);
      });
  }

  ngOnInit(): void {
    // Load regions
    this.loadRegions();

    // Start rotating placeholders
    this.startPlaceholderRotation();

    // Set initial route
    this.currentRoute = this.router.url;

    // Set initial national page flag
    const isNationalPage = this.currentRoute === '/national';
    this.regionService.setIsNationalPage(isNationalPage);

    // Subscribe to selected region changes
    this.regionSubscription = this.regionService.selectedRegion$.subscribe(
      (region) => {
        this.selectedRegion = region;
      },
    );
    // Subscribe to changes in the search input
    this.searchSubscription = this.searchControl.valueChanges
      .pipe(
        debounceTime(300), // Wait for 300ms pause in events
        distinctUntilChanged(), // Only emit when the current value is different from the last
      )
      .subscribe((query) => {
        // If search is empty, clear the search state
        if (!query || query.trim() === '') {
          this.searchService.clearSearch();

          // If we're on the destinations page and there was a previous page, go back to it
          if (
            this.currentRoute === '/destinations' &&
            this.searchService.getPreviousRoute() !== '/destinations'
          ) {
            this.router.navigate([this.searchService.getPreviousRoute()]);
          }
          return;
        }

        // Update the search query in the service
        this.searchService.updateSearchQuery(query);

        // Perform the search and update results
        this.destinationService
          .searchDestinations(query)
          .subscribe((results) => {
            // If not on the destinations page, save current route and navigate to destinations
            if (this.currentRoute !== '/destinations') {
              // Save the current route before navigating away
              this.searchService.setPreviousRoute(this.currentRoute);
              this.router.navigate(['/destinations']);
            }

            this.searchService.updateSearchResults(results);
          });
      });
  }

  /**
   * Load all available regions from destinations
   */
  loadRegions(): void {
    this.destinationService.getDestinations().subscribe((destinations) => {
      const regionSet = new Set<string>();
      destinations.forEach((destination) => {
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

    // Update the region service with the selected region
    this.regionService.updateSelectedRegion(region);

    if (!region) {
      // If "All Regions" is selected, clear the search
      this.searchService.clearSearch();

      // If on national page and selecting All Regions, redirect to destinations page
      if (this.currentRoute === '/national') {
        this.router.navigate(['/destinations']);
      }
      return;
    }

    // Use the search service to filter by region
    this.destinationService
      .getDestinationsByRegion(region)
      .subscribe((results) => {
        this.searchService.updateSearchQuery(`Region: ${region}`);
        this.searchService.updateSearchResults(results);

        // Stay on the current page if it's international, otherwise navigate to destinations
        if (this.currentRoute !== '/international') {
          // Only navigate to destinations if not on the international page
          this.router.navigate(['/destinations']);
        }
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

    if (this.regionSubscription) {
      this.regionSubscription.unsubscribe();
    }

    // Clear placeholder rotation interval
    if (this.placeholderInterval) {
      clearInterval(this.placeholderInterval);
    }
  }

  // Method to handle search form submission (prevent form default action)
  onSearchSubmit(event: Event): void {
    event.preventDefault();
    const query = this.searchControl.value;

    // If search is empty, do nothing
    if (!query || query.trim() === '') {
      return;
    }

    // Update the search query in the service
    this.searchService.updateSearchQuery(query);

    // Perform the search and update results
    this.destinationService.searchDestinations(query).subscribe((results) => {
      // Save the current route before navigating away
      this.searchService.setPreviousRoute(this.currentRoute);
      // this.router.navigate(['/destinations']);

      this.searchService.updateSearchResults(results);
    });
  }

  // Reset all filters and search state when clicking on the Destinize logo
  resetAllFilters(): void {
    // Clear search input
    this.searchControl.setValue('');

    // Clear search state
    this.searchService.clearSearch();

    // Reset region selection
    this.regionService.updateSelectedRegion('');

    // Navigate to home page
    this.router.navigate(['/']);
  }
}
