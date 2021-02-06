import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  imageURLS: string[];
  name: string;
  index: number;
  timestamp: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.index = 0;
    this.route.data.subscribe(v => {
      if (v.spread === "comic") {
        this.name = "Collection Comic Book";
        this.imageURLS = ['assets/JPEGs/1.jpg',
         'assets/JPEGs/2.jpg', 'assets/JPEGs/3.jpg', 'assets/JPEGs/4.jpg',
         'assets/JPEGs/5.jpg', 'assets/JPEGs/6.jpg', 'assets/JPEGs/7.jpg',
         'assets/JPEGs/8.jpg', 'assets/JPEGs/9.jpg', 'assets/JPEGs/10.jpg',
         'assets/JPEGs/11.jpg', 'assets/JPEGs/12.jpg', 'assets/JPEGs/13.jpg',
         'assets/JPEGs/14.jpg', 'assets/JPEGs/15.jpg', 'assets/JPEGs/16.jpg',
         'assets/JPEGs/17.jpg']
      } else if (v.spread === "dia") {
        this.name = "Diabolique 3";
        this.imageURLS = ['https://backend-deploy-ljkpxx3zga-uw.a.run.app/get_image/home/dia2.JPG', 'https://backend-deploy-ljkpxx3zga-uw.a.run.app/get_image/home/dia1.JPG',
        ];
      }
    })
  }
  getLink() {
    if (this.timestamp) {
      return this.imageURLS[this.index] + '?' + this.timestamp
    }
    return this.imageURLS[this.index];
  }
  setLinkPicture() {
    this.timestamp = (new Date()).getTime();
}
  next() {
    this.setLinkPicture();
    this.index += 1;
    this.goToTop();
  }
  prev() {
    this.setLinkPicture();
    this.index -= 1;
    this.goToTop();
  }
  goToTop(): void {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  }
}