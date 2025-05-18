import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Destination } from '../../models/destination';

@Component({
  selector: 'app-destination-card',
  standalone: false,
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.css'],
})
export class DestinationCardComponent {
  @Input() destination!: Destination;

  constructor(private router: Router) {}

  get formattedLocation(): string {
    return `${this.destination.name}, ${this.destination.location}`;
  }

  navigateToDetail(): void {
    this.router.navigate(['/destinations', this.destination.id]);
  }
}
