import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../services/seo/seo.service';
import { fade } from '../../../animations';

import { Publication } from '../models/publication';
import { Author } from '../models/author';


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
      new Publication(
        "Monopoles, Scattering, and Generalized Symmetries", 
        "https://arxiv.org/pdf/2306.07318",
        "ABSTRACT1", 
        [
          new Author("Marieke van Beest", "Stony Brook"), 
          new Author("Diego Del Mastro", "Stony Brook")
        ]
        ),
      new Publication(
        "Symmetry TFTs for 3d QFTs from M-theory", 
        "https://arxiv.org/pdf/2210.03703",
        "ABSTRACT2", 
        [
          new Author("Marieke van Beest", "Stony Brook"), 
          new Author("Dewi S.W. Gould", "Oxford")
        ]
        ),
      new Publication(
        "Connecting 5d Higgs branches via Fayet-Iliopoulos deformations", 
        "https://arxiv.org/pdf/2110.02872",
        "ABSTRACT3", 
        [
          new Author("Marieke van Beest", "Stony Brook"), 
          new Author("Simone Giacomelli", "Oxford")
        ]
        ),
    ]
  }





}
