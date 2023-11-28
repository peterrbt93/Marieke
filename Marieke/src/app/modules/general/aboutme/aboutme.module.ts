import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { aboutmeComponent } from './aboutme.component';
import { aboutmeRoutingModule } from './aboutme-routing.module';
import { SanitizedHtmlPipe } from './sanitized-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    aboutmeRoutingModule
  ],
  exports: [
    aboutmeComponent
  ],
  declarations: [
    aboutmeComponent,
    SanitizedHtmlPipe
  ],
  providers: [
  ],
})
export class AboutmeModule { }