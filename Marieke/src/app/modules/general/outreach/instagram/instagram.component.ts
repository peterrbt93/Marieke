import { Component } from '@angular/core';

import { Input, OnInit } from '@angular/core';
import { InstagramDOMService } from '../../../../instagram-dom.service';
import { fade } from '../../../../animations';


@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css'],
  animations: [
    fade
  ]
})
export class instagramComponent implements OnInit  {
  constructor(private instagram: InstagramDOMService) {}

  ngOnInit() {
    this.instagram.processEmbeddedInstagramPosts();
  }

}
