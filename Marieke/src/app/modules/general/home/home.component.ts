import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SeoService } from '../../../services/seo/seo.service';
import { fade } from '../../../animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
      fade
    ]
})
export class HomeComponent {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;



  constructor(private seoService: SeoService) {




    const content =
      'This application was developed with ' + this.angular + ' and ' + this.bootstrap +
      ' It applies Routing, Lazy loading and Progressive Web App (PWA)';

    const title = 'Marieke van Beest';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);


  }

}