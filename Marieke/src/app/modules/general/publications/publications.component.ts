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
        "We reconsider the problem of electrically charged, massless fermions scattering off magnetic monopoles. The interpretation of the outgoing states has long been a puzzle as, in certain circumstances, they necessarily carry fractional quantum numbers. We argue that consistency requires such outgoing particles to be attached to a topological co-dimension 1 surface, which ends on the monopole. This surface cannot participate in a 2-group with the magnetic 1-form symmetry and is often non-invertible. Equivalently, the outgoing radiation lies in a twisted sector and not in the original Fock space. The outgoing radiation therefore not only carries unconventional flavor quantum numbers, but is often trailed by a topological field theory. We exemplify these ideas in the 1+1 dimensional, chiral 3450 model which shares many of the same features. We comment on the effects of gauge field fluctuations on the lowest angular momentum fermion scattering states in the presence of a magnetic monopole. While, to leading order, these zero modes can penetrate into the monopole core, in the full theory some of the zero modes are lifted and develop a small centrifugal barrier. The dynamics of the zero modes is that of a multi-flavor Schwinger model with a space-dependent gauge coupling. Symmetries and anomalies constrain the fate of the pseudo-zero modes.",
        this.getAuthorString( 
        [
          new Author("Marieke van Beest", "Stony Brook"), 
          new Author("Diego Del Mastro", "Stony Brook"),
          new Author("Marieke van Beest", "Stony Brook"), 
          new Author("Diego Del Mastro", "Stony Brook")
        ]),
        "(Jun 12, 2023)",
        "e-Print: 2306.07318 [hep-th]"
        ),

      new Publication(
        "Symmetry TFTs for 3d QFTs from M-theory", 
        "https://arxiv.org/pdf/2210.03703",
        "ABSTRACT2",
        this.getAuthorString(  
        [
          new Author("Marieke van Beest", "Stony Brook"), 
          new Author("Dewi S.W. Gould", "Oxford")
        ]),
        "(Oct 7, 2022)",
        "Published in: JHEP 02 (2023) 226 • e-Print: 2210.03703 [hep-th]"
        ),

      new Publication(
        "Connecting 5d Higgs branches via Fayet-Iliopoulos deformations", 
        "https://arxiv.org/pdf/2110.02872",
        "ABSTRACT3",
        this.getAuthorString(  
        [
          new Author("Marieke van Beest", "Stony Brook"), 
          new Author("Simone Giacomelli", "Oxford")
        ]),
        "(Oct 6, 2021)",
        "Published in: JHEP 12 (2021) 202 • e-Print: 2110.02872 [hep-th]"
        ),
    ]
  }

  public getAuthorString(authors: Author[]): string {
    let res = "";
    authors.forEach(element => {
      res += element.name + " (" + element.affiliation + "), "
    });

    return res.slice(0,-2);
  }





}
