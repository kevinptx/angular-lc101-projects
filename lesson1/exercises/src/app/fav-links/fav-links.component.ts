import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
favLinks = ['https://developer.mozilla.org/en-US/', 'https://www.w3schools.com/'];
  constructor() { }

  ngOnInit() {
  }

}
