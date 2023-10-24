import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { contact2Component } from './contact2.component';
import { contact2RoutingModule } from './contact2-routing.module';

@NgModule({
  imports: [
    CommonModule,
    contact2RoutingModule
  ],
  exports: [
    contact2Component
  ],
  declarations: [
    contact2Component
  ],
  providers: [
  ],
})
export class contact2Module { }