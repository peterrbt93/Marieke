import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExerciceRoutingModule } from './news-form-routing.module';
import { NewsFormComponent } from './news-form.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewsFormComponent
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NewsFormComponent
  ],
})
export class NewsFormModule { }
