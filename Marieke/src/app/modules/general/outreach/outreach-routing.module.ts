import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { outreachComponent } from './outreach.component';

const routes: Routes = [
  {
    path: '', component: outreachComponent, children: [
      {
        path: '',
        loadChildren: () => import(`./instagram/instagram.module`)
          .then(mod => mod.InstagramModule)
      },
      {
        path: 'instagram',
        loadChildren: () => import(`./instagram/instagram.module`)
          .then(mod => mod.InstagramModule)
      },
      {
        path: 'mapping',
        loadChildren: () => import(`./mapping/mapping.module`)
          .then(mod => mod.MappingModule)
      },
      {
        path: '**',
        loadChildren: () => import(`./instagram/instagram.module`)
          .then(mod => mod.InstagramModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class outreachRoutingModule { }