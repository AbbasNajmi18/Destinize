import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
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
