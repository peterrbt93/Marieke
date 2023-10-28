import { Component } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class publicationsComponent {

  constructor(private seoService: SeoService) {

    const content = 'Marieke - Publications';
    const title = 'Marieke - Publications';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }

}
