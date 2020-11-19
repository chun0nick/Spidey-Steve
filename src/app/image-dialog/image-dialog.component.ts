import { Component, OnInit } from '@angular/core';
import { Comic } from '../table/table.component';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent implements OnInit {
  comic: Comic;

  constructor() { }

  ngOnInit() {
  }

}
