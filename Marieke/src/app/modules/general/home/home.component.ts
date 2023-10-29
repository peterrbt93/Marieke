import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  items = [
    {
      icon: "fa-solid fa-address-card",
      name: "Images Cards",
      description: "Cascade Cards",
      link:'/cards'
    },
    {
      icon: "fa-brands fa-bootstrap",
      name: "bootstrap",
      description: "UI and components",
      link:'/bootstrap'
    },
    {
      icon: "fa-sharp fa-solid fa-newspaper",
      name: "News",
      description: "Trailers and youtube",
      link:'/news'
    },
    {
      icon: "fa-solid fa-blender-phone",
      name: "Services",
      description: "angular Services",
      link:'/services'
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      name: "Components",
      description: "Angular components",
      link:'/components'
    },
    {
      icon: "fa-solid fa-network-wired",
      name: "HttpClient",
      description: "Httpclient library",
      link:'/httpclient'
    },
    {
      icon: "fa-regular fa-rectangle-list",
      name: "forms",
      description: "Reactive & Template",
      link:'/forms'
    },
    {
      icon: "fa-regular fa-window-restore",
      name: "Modal",
      description: "Modal with bootstrap",
      link:'/modal'
    },
    
  ]

  constructor(private seoService: SeoService) {




    const content =
      'This application was developed with ' + this.angular + ' and ' + this.bootstrap +
      ' It applies Routing, Lazy loading and Progressive Web App (PWA)';

    const title = 'Marieke van Beest';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);


  }

}