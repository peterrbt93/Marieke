import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { talksComponent } from './talks.component';

const routes: Routes = [
  {
    path: '', component: talksComponent, children: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class talksRoutingModule { }