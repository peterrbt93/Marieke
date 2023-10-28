import { Component } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class teachingComponent {

  constructor(private seoService: SeoService) {

    const content = 'angular-starter - Description - teaching Page';
    const title = 'angular-starter - Title - teaching Page';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }

}
