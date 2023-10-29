import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { aboutmeComponent } from './aboutme.component';

const routes: Routes = [
  {
    path: '', component: aboutmeComponent, children: [
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class aboutmeRoutingModule { }