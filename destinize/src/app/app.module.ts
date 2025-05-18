import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DestinationCardComponent } from './components/destination-card/destination-card.component';
import { DestinationListComponent } from './components/destination-list/destination-list.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { DestinationCarouselComponent } from './components/destination-carousel/destination-carousel.component';
import { DestinationDetailComponent } from './components/destination-detail/destination-detail.component';
import { HomeComponent } from './components/home/home.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { NationalComponent } from './pages/national/national.component';
import { InternationalComponent } from './pages/international/international.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DestinationCardComponent,
    DestinationListComponent,
    HeroSectionComponent,
    DestinationCarouselComponent,
    DestinationDetailComponent,
    HomeComponent,
    DestinationsComponent,
    NationalComponent,
    InternationalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
