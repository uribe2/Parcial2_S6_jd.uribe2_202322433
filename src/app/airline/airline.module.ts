import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { RouterModule } from '@angular/router';
import { AirlineRoutingModule } from './airline-routing.module';
import { AirlineDetailComponent } from './airline-detail/airline-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AirlineRoutingModule
  ],
  declarations: [
    AirlineListComponent,
    AirlineDetailComponent
  ],
  exports: [
    AirlineListComponent
  ]
})
export class AirlineModule { }