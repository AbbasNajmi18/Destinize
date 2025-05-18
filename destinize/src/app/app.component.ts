import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from './services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'destinize';
  isSearchActive = false;
  private searchSubscription: Subscription = new Subscription();

  constructor(public searchService: SearchService) {}

  ngOnInit(): void {
    // Subscribe to search state
    this.searchSubscription = this.searchService.hasSearched$.subscribe(
      (hasSearched) => {
        this.isSearchActive = hasSearched;
      },
    );
  }

  ngOnDestroy(): void {
    // Clean up subscriptions
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
}
