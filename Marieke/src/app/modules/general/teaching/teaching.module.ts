import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { teachingComponent } from './teaching.component';
import { teachingRoutingModule } from './teaching-routing.module';

@NgModule({
  imports: [
    CommonModule,
    teachingRoutingModule
  ],
  exports: [
    teachingComponent
  ],
  declarations: [
    teachingComponent
  ],
  providers: [
  ],
})
export class TeachingModule { }