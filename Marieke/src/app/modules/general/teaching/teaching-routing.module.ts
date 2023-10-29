import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { teachingComponent } from './teaching.component';

const routes: Routes = [
  {
    path: '', component: teachingComponent, children: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class teachingRoutingModule { }