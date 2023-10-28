import { Component } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class aboutmeComponent {

  constructor(private seoService: SeoService) {

    const content = 'Marieke - About me';
    const title = 'Marieke - About me';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }

}
