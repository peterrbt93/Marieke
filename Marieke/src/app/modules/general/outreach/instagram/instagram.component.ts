import { Component } from '@angular/core';

import { Input, OnInit } from '@angular/core';
import { InstagramDOMService } from '../../../../instagram-dom.service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class instagramComponent implements OnInit  {
  constructor(private instagram: InstagramDOMService) {}

  ngOnInit() {
    this.instagram.processEmbeddedInstagramPosts();
  }

}
