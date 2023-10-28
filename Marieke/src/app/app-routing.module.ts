import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'landing-page',
    loadChildren: () => import('./modules/application/example-landing-page/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./modules/application/example-news/news.module')
      .then(mod => mod.NewsModule)
  },
  {
    path: 'news/:id',
    loadChildren: () => import('./modules/application/example-news-form/news-form.module')
      .then(mod => mod.NewsFormModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modules/application/example-modal/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./modules/application/example-cards/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'httpclient',
    loadChildren: () => import('./modules/application/example-httpclient/items.module')
      .then(mod => mod.ItemsModule)
  },  {
    path: 'bootstrap',
    loadChildren: () => import('./modules/application/example-bootstrap/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./modules/application/example-components/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./modules/application/example-forms/tutorial.module')
      .then(mod => mod.TutorialModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/application/example-services/tutorial.module')
      .then(mod => mod.TutorialModule)
  },

  {
    path: 'about',
    loadChildren: () => import('./modules/general/aboutme/aboutme.module')
      .then(mod => mod.AboutmeModule)
  },
  {
    path: 'publications',
    loadChildren: () => import('./modules/general/publications/publications.module')
      .then(mod => mod.PublicationsModule)
  },
  {
    path: 'talks',
    loadChildren: () => import('./modules/general/talks/talks.module')
      .then(mod => mod.TalksModule)
  },
  {
    path: 'teaching',
    loadChildren: () => import('./modules/general/teaching/teaching.module')
      .then(mod => mod.TeachingModule)
  },
  {
    path: 'outreach',
    loadChildren: () => import('./modules/general/outreach/outreach.module')
      .then(mod => mod.OutreachModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // initialNavigation: 'enabledBlocking'
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'    
})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }