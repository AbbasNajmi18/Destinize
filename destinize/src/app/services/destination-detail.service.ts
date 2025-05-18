import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DestinationDetail } from '../models/destination-detail';
import { DestinationService } from './destination.service';
import { map } from 'rxjs/operators';
import { DESTINATION_DETAILS } from '../mock-data/destination-details';

@Injectable({
  providedIn: 'root',
})
export class DestinationDetailService {
  private destinationDetails: Record<number, Partial<DestinationDetail>> =
    DESTINATION_DETAILS;

  constructor(private destinationService: DestinationService) {}

  getDestinationDetail(id: number): Observable<DestinationDetail> {
    return this.destinationService.getDestinationById(id).pipe(
      map((baseDestination) => {
        if (!baseDestination) {
          throw new Error(`Destination with id ${id} not found`);
        }

        const detailedInfo = this.destinationDetails[id] || {};

        // If we don't have detailed info for this destination, create some default values
        if (Object.keys(detailedInfo).length === 0) {
          return this.createDefaultDetailedDestination(baseDestination);
        }

        // Merge the base destination with the detailed information
        return {
          ...baseDestination,
          ...detailedInfo,
        } as DestinationDetail;
      }),
    );
  }

  private createDefaultDetailedDestination(
    baseDestination: any,
  ): DestinationDetail {
    return {
      ...baseDestination,
      fullDescription: baseDestination.description,
      attractions: [
        {
          name: `Visit ${baseDestination.name}`,
          description: `Explore the beautiful sights of ${baseDestination.name}.`,
          image: baseDestination.image,
          rating: baseDestination.rating || 4.5,
          visitDuration: '2-3 hours',
        },
      ],
      seasonalInfo: {
        spring: {
          description: 'Mild and pleasant weather.',
          temperature: '15°C - 25°C',
          activities: ['Sightseeing', 'Walking tours', 'Photography'],
          events: ['Local spring festivals'],
          crowdLevel: 'Moderate',
        },
        summer: {
          description: 'Warm and sunny days.',
          temperature: '20°C - 30°C',
          activities: ['Outdoor activities', 'Water sports', 'Cafe hopping'],
          events: ['Summer festivals', 'Outdoor concerts'],
          crowdLevel: 'High',
        },
        autumn: {
          description: 'Cool with beautiful foliage.',
          temperature: '10°C - 20°C',
          activities: ['Hiking', 'Shopping', 'Museum visits'],
          events: ['Harvest festivals', 'Cultural events'],
          crowdLevel: 'Moderate',
        },
        winter: {
          description: 'Cold with possible snow.',
          temperature: '0°C - 10°C',
          activities: ['Winter sports', 'Indoor activities', 'Holiday events'],
          events: ['Winter markets', 'New Year celebrations'],
          crowdLevel: 'Low (except holidays)',
        },
      },
      travelTips: [
        {
          category: 'Transportation',
          tip: `Public transportation is a convenient way to get around ${baseDestination.name}.`,
        },
        {
          category: 'Safety',
          tip: 'Always keep your belongings secure and be aware of your surroundings.',
        },
      ],
      localCuisine: [
        {
          name: `Traditional ${baseDestination.location} food`,
          description: `Sample authentic local dishes from ${baseDestination.location}.`,
          image:
            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop',
          mustTry: true,
        },
      ],
      geography: {
        terrain: `Varied landscape featuring urban areas and natural beauty`,
        landmarks: [
          `${baseDestination.name} landmarks`,
          'Local natural features',
        ],
        surroundingAreas: ['Nearby cities and attractions'],
      },
      gallery: [baseDestination.image],
      currency: 'Local currency',
      language: `${baseDestination.location} official language`,
      timeZone: 'Local time zone',
      bestTimeToVisit: 'Spring and fall for mild weather',
      budget: {
        budget: '$50-100 per day',
        midRange: '$100-200 per day',
        luxury: '$300+ per day',
      },
    };
  }
}
