import { Component } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';
import { fade } from '../../../animations';
import { About } from '../models/about';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  animations: [
    fade
  ]
})
export class aboutmeComponent {

  abouts: About[];

  constructor(private seoService: SeoService) {

    const content = 'Marieke - About me';
    const title = 'Marieke - About me';

    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);

    this.abouts = [];

  }


  ngOnInit(): void {
    this.abouts = [
      new About(
        "About me",
        "My name is Marieke."
      ),

      new About(
        "Second title",
        "second body text"
      ),

      new About(
        "Third title",
        "third body text"
      )
    ]
  }
}
