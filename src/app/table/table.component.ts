import { Component, OnInit } from '@angular/core'
import { ComicDataService } from '../comic-data-service.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dataSource : MatTableDataSource<Comic>;
  displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Appearance","Value", "Image"];

  constructor(private comicData : ComicDataService) { }

  ngOnInit() {
    this.getData(0);
  }
  getData(partition: number) {
    this.comicData.getAppearances(partition).subscribe((apps) => {this.dataSource = new MatTableDataSource(apps)})
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
  Image_Box: string;
  Image_File_Name: string;
}
