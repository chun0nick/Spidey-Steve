import { Component, OnInit, ViewChild } from '@angular/core'
import { ComicDataService } from '../comic-data-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dataSource : MatTableDataSource<Comic>;
  displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Appearance", "Image"];
  spreadsheet;
  video;
  name;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private comicData : ComicDataService, public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.route.data.subscribe(v => {
      if (v.spread === "app") {
        this.comicData.getAppearances().subscribe((apps) => {
          this.name = "Appearances";
          this.video = 'assets/Appearances S. Levine.mp4';
          this.dataSource = new MatTableDataSource(apps);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;}
          )
      } else if (v.spread == "asm") {
        this.comicData.getASM().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Grade", "Publisher", "Note", "Image"];
          this.name = "ASM 1-700";
          this.video = 'assets/ASM #1-700 S. Levine.mp4';
          this.dataSource = new MatTableDataSource(apps);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          })
      }});
}
  openDialog(name: string, volume : string, url: string) {
    let dialogRef = this.dialog.open(ImageDialogComponent);
    dialogRef.componentInstance.name = name + ' ' + volume;
    dialogRef.componentInstance.url = url;
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
