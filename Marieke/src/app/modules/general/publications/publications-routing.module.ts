import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { publicationsComponent } from './publications.component';

const routes: Routes = [
  {
    path: '', component: publicationsComponent, children: [
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class publicationsRoutingModule { }