import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { talksComponent } from './talks.component';
import { talksRoutingModule } from './talks-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoryPipe } from './category.pipe';
import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    talksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    talksComponent
  ],
  declarations: [
    talksComponent,
    CategoryPipe,
    SafePipe,
  ],
  providers: [
  ],
})
export class TalksModule { }