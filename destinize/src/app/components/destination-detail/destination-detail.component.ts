import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Destination } from '../../models/destination';
import { DestinationDetail } from '../../models/destination-detail';
import { DestinationService } from '../../services/destination.service';
import { DestinationDetailService } from '../../services/destination-detail.service';

@Component({
  selector: 'app-destination-detail',
  standalone: false,
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.css']
})
export class DestinationDetailComponent implements OnInit {
  destination: DestinationDetail | undefined;
  relatedDestinations: Destination[] = [];
  loading = true;
  error = false;
  activeTab = 'overview';
  currentSlideIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private destinationService: DestinationService,
    private destinationDetailService: DestinationDetailService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadDestination(+id); // Convert to number with +
      } else {
        this.error = true;
        this.loading = false;
      }
    });
  }

  loadDestination(id: number): void {
    this.destinationDetailService.getDestinationDetail(id).subscribe(
      destination => {
        this.destination = destination;
        if (destination) {
          this.loadRelatedDestinations(destination.region);
        } else {
          this.error = true;
        }
        this.loading = false;
      },
      error => {
        console.error('Error loading destination:', error);
        this.error = true;
        this.loading = false;
      }
    );
  }

  loadRelatedDestinations(region: string): void {
    this.destinationService.getDestinationsByRegion(region).subscribe(
      destinations => {
        // Filter out the current destination and limit to 4 related destinations
        this.relatedDestinations = destinations
          .filter(d => d.id !== this.destination?.id)
          .slice(0, 4);
      }
    );
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  nextSlide(): void {
    if (this.destination?.gallery) {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.destination.gallery.length;
    }
  }

  prevSlide(): void {
    if (this.destination?.gallery) {
      this.currentSlideIndex = (this.currentSlideIndex - 1 + this.destination.gallery.length) % this.destination.gallery.length;
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
