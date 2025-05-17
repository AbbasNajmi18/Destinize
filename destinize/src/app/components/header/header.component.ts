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
  private searchSubscription: Subscription = new Subscription();

  constructor(
    private destinationService: DestinationService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
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

  ngOnDestroy(): void {
    // Clean up subscriptions
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  // Method to handle search form submission (prevent form default action)
  onSearchSubmit(event: Event): void {
    event.preventDefault();
    // The search is already triggered by valueChanges
  }
}
