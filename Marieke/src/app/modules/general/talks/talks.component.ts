import { Component } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';
import { fade } from '../../../animations';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css'],
  animations: [
    fade
  ]
})
export class talksComponent {

  constructor(private seoService: SeoService) {

    const content = 'Marieke - Talks';
    const title = 'Marieke - Talks';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }

}
