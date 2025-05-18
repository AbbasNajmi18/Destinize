import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationDetailComponent } from './components/destination-detail/destination-detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destinations/:id', component: DestinationDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
