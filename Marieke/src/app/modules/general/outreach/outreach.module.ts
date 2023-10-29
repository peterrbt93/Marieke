import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { outreachComponent } from './outreach.component';
import { outreachRoutingModule } from './outreach-routing.module';


@NgModule({
  imports: [
    CommonModule,
    outreachRoutingModule
  ],
  exports: [
    outreachComponent
  ],
  declarations: [
    outreachComponent
  ],
  providers: [
  ],
})
export class OutreachModule { }