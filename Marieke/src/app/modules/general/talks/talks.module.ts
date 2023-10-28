import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { talksComponent } from './talks.component';
import { talksRoutingModule } from './talks-routing.module';

@NgModule({
  imports: [
    CommonModule,
    talksRoutingModule
  ],
  exports: [
    talksComponent
  ],
  declarations: [
    talksComponent
  ],
  providers: [
  ],
})
export class TalksModule { }