import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { publicationsComponent } from './publications.component';
import { publicationsRoutingModule } from './publications-routing.module';

@NgModule({
  imports: [
    CommonModule,
    publicationsRoutingModule
  ],
  exports: [
    publicationsComponent
  ],
  declarations: [
    publicationsComponent
  ],
  providers: [
  ],
})
export class PublicationsModule { }