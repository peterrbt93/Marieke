import { Component } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-outreach',
  templateUrl: './outreach.component.html',
  styleUrls: ['./outreach.component.css']
})
export class outreachComponent {

  constructor(private seoService: SeoService) {

    const content = 'Marieke - Outreach';
    const title = 'Marieke - Outreach';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

  }

}
