import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  // BehaviorSubject to maintain the current selected region
  private selectedRegionSubject = new BehaviorSubject<string>('');

  // Observable that components can subscribe to
  public selectedRegion$: Observable<string> =
    this.selectedRegionSubject.asObservable();

  // Flag to track if we're on the national page
  private isNationalPageSubject = new BehaviorSubject<boolean>(false);
  public isNationalPage$: Observable<boolean> =
    this.isNationalPageSubject.asObservable();

  // Last selected region before navigating to national page
  private lastSelectedRegion: string = '';

  constructor() {}

  // Update selected region
  updateSelectedRegion(
    region: string,
    isFromNationalPage: boolean = false,
  ): void {
    if (!isFromNationalPage) {
      // Store the user-selected region when not coming from national page
      this.lastSelectedRegion = region;
    }
    this.selectedRegionSubject.next(region);
  }

  // Set national page flag
  setIsNationalPage(isNational: boolean): void {
    this.isNationalPageSubject.next(isNational);

    if (isNational) {
      // When entering national page, set region to Asia
      this.updateSelectedRegion('Asia', true);
    } else if (this.lastSelectedRegion) {
      // When leaving national page, restore the last selected region
      this.updateSelectedRegion(this.lastSelectedRegion);
    } else {
      // If no previous selection, set to empty
      this.updateSelectedRegion('');
    }
  }

  // Get current selected region value
  getCurrentRegion(): string {
    return this.selectedRegionSubject.getValue();
  }

  // Get last selected region before national page
  getLastSelectedRegion(): string {
    return this.lastSelectedRegion;
  }
}
