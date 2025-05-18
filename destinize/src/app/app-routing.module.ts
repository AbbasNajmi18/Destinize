import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationDetailComponent } from './components/destination-detail/destination-detail.component';
import { HomeComponent } from './components/home/home.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { NationalComponent } from './pages/national/national.component';
import { InternationalComponent } from './pages/international/international.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destinations/:id', component: DestinationDetailComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'national', component: NationalComponent },
  { path: 'international', component: InternationalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
