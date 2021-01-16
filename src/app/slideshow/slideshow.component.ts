import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  imageURLS: string[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(v => {
      if (v.spread === "comic") {
        this.imageURLS = ['/assets/JPEGs/1.jpg',
         '/assets/JPEGs/2.jpg', '/assets/JPEGs/3.jpg', '/assets/JPEGs/4.jpg',
         '/assets/JPEGs/5.jpg', '/assets/JPEGs/6.jpg', '/assets/JPEGs/7.jpg',
         '/assets/JPEGs/8.jpg', '/assets/JPEGs/9.jpg', '/assets/JPEGs/10.jpg',
         '/assets/JPEGs/11.jpg', '/assets/JPEGs/12.jpg', '/assets/JPEGs/13.jpg',
         '/assets/JPEGs/14.jpg', '/assets/JPEGs/15.jpg', '/assets/JPEGs/16.jpg',
         '/assets/JPEGs/17.jpg']
      } else if (v.spread === "dia") {
        this.imageURLS = ['/assets/dia1.JPG', '/assets/dia2.JPG'];
      }
    })
  }

}
