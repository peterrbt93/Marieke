import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstagramDOMService } from '../../../../instagram-dom.service';

import { instagramRoutingModule } from './instagram-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    instagramRoutingModule
  ],
  providers: [InstagramDOMService]
})
export class InstagramModule { }
