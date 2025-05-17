import { Component, OnInit } from '@angular/core';
import { Destination } from '../../models/destination';
import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'app-destination-list',
  standalone: false,
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit {
  destinations: Destination[] = [];
  regions: string[] = [];
  filteredDestinations: Destination[] = [];
  selectedRegion: string = '';
  
  constructor(private destinationService: DestinationService) {}
  
  ngOnInit(): void {
    this.loadDestinations();
  }
  
  loadDestinations(): void {
    this.destinationService.getDestinations().subscribe(destinations => {
      this.destinations = destinations;
      this.filteredDestinations = [...destinations];
      this.extractRegions();
    });
  }
  
  extractRegions(): void {
    const regionSet = new Set<string>();
    this.destinations.forEach(destination => {
      regionSet.add(destination.region);
    });
    this.regions = Array.from(regionSet);
  }
  
  filterByRegion(region: string): void {
    this.selectedRegion = region;
    
    if (region === '') {
      this.filteredDestinations = [...this.destinations];
    } else {
      this.filteredDestinations = this.destinations.filter(d => d.region === region);
    }
  }
  
  clearFilter(): void {
    this.selectedRegion = '';
    this.filteredDestinations = [...this.destinations];
  }
}
