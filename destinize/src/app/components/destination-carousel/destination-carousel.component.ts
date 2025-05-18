import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationService } from '../../services/destination.service';
import { Destination } from '../../models/destination';

@Component({
  selector: 'app-destination-carousel',
  standalone: false,
  templateUrl: './destination-carousel.component.html',
  styleUrls: ['./destination-carousel.component.css'],
})
export class DestinationCarouselComponent implements OnInit {
  destinations: Destination[] = [];
  currentIndex = 0;
  totalDestinations = 0;
  itemsToShow = 1;
  touchStartX = 0;
  touchEndX = 0;

  constructor(
    private destinationService: DestinationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadDestinations();
    this.calculateItemsToShow();

    window.addEventListener('resize', () => {
      this.calculateItemsToShow();
    });
  }

  loadDestinations(): void {
    this.destinationService.getDestinations().subscribe((destinations) => {
      // Get featured destinations or destinations with high ratings
      this.destinations = destinations
        .filter(
          (d) => d.featured || (d.rating !== undefined && d.rating >= 4.5),
        )
        .sort((a, b) => (b.rating || 0) - (a.rating || 0))
        .slice(0, 8); // Limit to 8 top destinations

      this.totalDestinations = this.destinations.length;
    });
  }

  calculateItemsToShow(): void {
    const width = window.innerWidth;
    if (width < 768) {
      this.itemsToShow = 1;
    } else if (width < 1200) {
      this.itemsToShow = 2;
    } else {
      this.itemsToShow = 3;
    }

    // Ensure current index doesn't exceed bounds
    if (this.currentIndex > this.totalDestinations - this.itemsToShow) {
      this.currentIndex = Math.max(
        0,
        this.totalDestinations - this.itemsToShow,
      );
    }
  }

  prevSlide(): void {
    this.currentIndex = Math.max(0, this.currentIndex - 1);
  }

  nextSlide(): void {
    this.currentIndex = Math.min(
      this.totalDestinations - 1, // Change to total - 1 to access all slides
      this.currentIndex + 1,
    );
  }

  goToSlide(index: number): void {
    this.currentIndex = Math.min(
      Math.max(0, index),
      this.totalDestinations - 1, // Change to total - 1 to access all slides
    );
  }

  // Touch event handlers for mobile swipe
  onTouchStart(e: TouchEvent): void {
    this.touchStartX = e.touches[0].clientX;
  }

  onTouchMove(e: TouchEvent): void {
    this.touchEndX = e.touches[0].clientX;
  }

  onTouchEnd(): void {
    if (this.touchStartX - this.touchEndX > 50) {
      this.nextSlide(); // Swipe left
    }

    if (this.touchEndX - this.touchStartX > 50) {
      this.prevSlide(); // Swipe right
    }
  }

  getVisibleDestinations(): Destination[] {
    return this.destinations.slice(
      this.currentIndex,
      this.currentIndex + this.itemsToShow,
    );
  }

  viewDestinationDetails(destinationId: number): void {
    this.router.navigate(['/destinations', destinationId]);
  }
}
