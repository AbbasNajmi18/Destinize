import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Destination } from '../models/destination';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // BehaviorSubject to maintain the current search results
  private searchResultsSubject = new BehaviorSubject<Destination[]>([]);
  
  // Observable that components can subscribe to
  public searchResults$: Observable<Destination[]> = this.searchResultsSubject.asObservable();
  
  // BehaviorSubject to maintain the current search query
  private searchQuerySubject = new BehaviorSubject<string>('');
  
  // Observable for the search query
  public searchQuery$: Observable<string> = this.searchQuerySubject.asObservable();
  
  // Flag to indicate if search has been performed
  private hasSearchedSubject = new BehaviorSubject<boolean>(false);
  public hasSearched$: Observable<boolean> = this.hasSearchedSubject.asObservable();

  constructor() { }

  // Update search results
  updateSearchResults(results: Destination[]): void {
    this.searchResultsSubject.next(results);
    this.hasSearchedSubject.next(true);
  }

  // Update search query
  updateSearchQuery(query: string): void {
    this.searchQuerySubject.next(query);
  }

  // Clear search
  clearSearch(): void {
    this.searchResultsSubject.next([]);
    this.searchQuerySubject.next('');
    this.hasSearchedSubject.next(false);
  }
}
