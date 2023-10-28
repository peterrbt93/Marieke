import { Component } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class talksComponent {

  constructor(private seoService: SeoService) {

    const content = 'angular-starter - Description - talks Page';
    const title = 'angular-starter - Title - talks Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }

}
