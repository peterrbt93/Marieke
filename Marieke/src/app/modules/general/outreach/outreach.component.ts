import { Component } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-outreach',
  templateUrl: './outreach.component.html',
  styleUrls: ['./outreach.component.css']
})
export class outreachComponent {

  constructor(private seoService: SeoService) {

    const content = 'angular-starter - Description - outreach Page';
    const title = 'angular-starter - Title - outreach Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }

}
