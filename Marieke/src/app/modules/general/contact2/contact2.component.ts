import { Component } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.component.html',
  styleUrls: ['./contact2.component.css']
})
export class contact2Component {

  constructor(private seoService: SeoService) {

    const content = 'angular-starter - Description - contact2 Page';
    const title = 'angular-starter - Title - contact2 Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }

}
