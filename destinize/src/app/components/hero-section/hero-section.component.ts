import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'app-hero-section',
  standalone: false,
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  searchControl = new FormControl('');
  backgroundImages = [
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop'
  ];
  currentBgIndex = 0;
  currentBackground = this.backgroundImages[0];

  constructor(private destinationService: DestinationService) {
    this.rotateBackground();
  }

  rotateBackground(): void {
    setInterval(() => {
      this.currentBgIndex = (this.currentBgIndex + 1) % this.backgroundImages.length;
      this.currentBackground = this.backgroundImages[this.currentBgIndex];
    }, 5000);
  }

  searchDestinations(): void {
    // This will be connected to the destination service later
    console.log('Searching for:', this.searchControl.value);
  }
}
