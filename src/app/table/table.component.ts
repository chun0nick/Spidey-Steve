import { Component, OnInit, ViewChild } from '@angular/core'
import { ComicDataService } from '../comic-data-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dataSource : Comic[];
  content : Comic[];
  counter : number;

  constructor(private comicData : ComicDataService, public dialog: MatDialog) {
    this.counter = 100;
   }

  ngOnInit() {
    this.getData();
  }
  
  loadMore() {
    for (let i=this.counter; i < this.dataSource.length;) {
        this.content.push(this.dataSource[i]);
        i++;
        if (i % 100 == 0) break;
    }
    let el = document.getElementById("image" + this.counter);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    this.counter += 100;
  }

  getData() {
    this.comicData.getAppearances().subscribe((apps) => {
      this.dataSource = apps;
      this.content = this.dataSource.slice(0,100);
      });
  }
  openDialog(comic: Comic) {
    let dialogRef = this.dialog.open(ImageDialogComponent);
    dialogRef.componentInstance.comic = comic;
  }
}

export interface Comic{
  ID: string;
  Title: number;
  Volume: string;
  Year: string;
  Publisher: string;
  Note: string;
  Appearance: string;
  Box: string;
  Value: string;
  Image_URL: string;
}
