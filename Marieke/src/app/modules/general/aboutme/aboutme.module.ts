import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { aboutmeComponent } from './aboutme.component';
import { aboutmeRoutingModule } from './aboutme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    aboutmeRoutingModule
  ],
  exports: [
    aboutmeComponent
  ],
  declarations: [
    aboutmeComponent
  ],
  providers: [
  ],
})
export class AboutmeModule { }