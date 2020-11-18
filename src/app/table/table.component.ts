import { Component, OnInit, ViewChild } from '@angular/core'
import { ComicDataService } from '../comic-data-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dataSource : MatTableDataSource<Comic>;
  displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Appearance","Value", "Image"];

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private comicData : ComicDataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.comicData.getAppearances().subscribe((apps) => {
      this.dataSource = new MatTableDataSource(apps);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;})
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
