import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdxp5aFTa6Sk55G7swxQIL3RbdNAg6LX02dCOrtY6X&s';
  image2 = 'https://us.123rf.com/450wm/chudtsankov/chudtsankov1207/chudtsankov120700038/14510469-summer-hot-sun.jpg?ver=6';
  image3 = 'https://mymodernmet.com/wp/wp-content/uploads/2021/12/andrew-mccarthy-fire-fusion-1.jpg';

  constructor() { }

  ngOnInit() {
  }

}