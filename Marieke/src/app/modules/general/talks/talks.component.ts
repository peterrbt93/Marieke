import { Component } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class talksComponent {

  constructor(private seoService: SeoService) {

    const content = 'Marieke - Talks';
    const title = 'Marieke - Talks';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }

}
