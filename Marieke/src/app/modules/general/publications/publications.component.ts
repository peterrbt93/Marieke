import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';
import { fade } from '../../../animations';

import { Publication } from '../models/publication';


@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
  animations: [
    fade
  ]
})
export class publicationsComponent {

  publications: Publication[];

  constructor(private seoService: SeoService) {

    const content = 'Marieke - Publications';
    const title = 'Marieke - Publications';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

    this.publications = [];

  }

  ngOnInit(): void {

    this.publications = [
      new Publication("Title1", "Body1"),
      new Publication("Title2", "Body2"),
      new Publication("Title3", "Body3"),
    ]
    
  }

}
