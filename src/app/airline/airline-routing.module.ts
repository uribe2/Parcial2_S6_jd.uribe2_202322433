import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { AirlineDetailComponent } from './airline-detail/airline-detail.component';


const routes: Routes = [
  {
    path: 'airlines',
    component: AirlineListComponent
  },
  {
    path: 'airlines/:id',
    component: AirlineDetailComponent
  },
  {
    path: '',
    redirectTo: '/airlines',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AirlineRoutingModule { }