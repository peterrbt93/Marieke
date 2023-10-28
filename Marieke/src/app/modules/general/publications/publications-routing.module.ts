import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { publicationsComponent } from './publications.component';

const routes: Routes = [
  {
    path: '', component: publicationsComponent, children: [
      {
        path: '',
        loadChildren: () => import(`./mailing/mailing.module`)
          .then(mod => mod.MailingModule)
      },
      {
        path: 'mailing',
        loadChildren: () => import(`./mailing/mailing.module`)
          .then(mod => mod.MailingModule)
      },
      {
        path: 'mapping',
        loadChildren: () => import(`./mapping/mapping.module`)
          .then(mod => mod.MappingModule)
      },
      {
        path: '**',
        loadChildren: () => import(`./mailing/mailing.module`)
          .then(mod => mod.MailingModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class publicationsRoutingModule { }