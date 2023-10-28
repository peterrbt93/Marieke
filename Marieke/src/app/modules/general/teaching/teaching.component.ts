import { Component } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class teachingComponent {

  constructor(private seoService: SeoService) {

    const content = 'Marieke - Teaching';
    const title = 'Marieke - Teaching';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }

}
