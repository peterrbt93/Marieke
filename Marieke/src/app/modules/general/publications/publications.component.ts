import { Component } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';
import { fade } from '../../../animations';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
  animations: [
    fade
  ]
})
export class publicationsComponent {

  constructor(private seoService: SeoService) {

    const content = 'Marieke - Publications';
    const title = 'Marieke - Publications';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }

}
