import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent implements OnInit {

  url: string;
  name: string;

  constructor() { }

  ngOnInit() { 
  }
}
