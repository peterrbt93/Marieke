import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { instagramComponent } from './instagram.component';

const routes: Routes = [
  { path: '', component: instagramComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class instagramRoutingModule { }