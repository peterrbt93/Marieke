import { Component } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class publicationsComponent {

  constructor(private seoService: SeoService) {

    const content = 'angular-starter - Description - publications Page';
    const title = 'angular-starter - Title - publications Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }

}
