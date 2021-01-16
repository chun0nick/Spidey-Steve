import { Component, OnInit } from '@angular/core';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(name: string, volume : number, url: string) {
    console.log(url);
    let dialogRef = this.dialog.open(ImageDialogComponent);
    dialogRef.componentInstance.name = name + ' ' + volume;
    dialogRef.componentInstance.url = url;
  }

  ngOnInit() {
  }

}
