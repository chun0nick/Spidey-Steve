import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-spreadlist',
  templateUrl: './spreadlist.component.html',
  styleUrls: ['./spreadlist.component.css']
})
export class SpreadlistComponent implements OnInit {

  toys: boolean;
  giveaways: boolean;
  rest: boolean;
  art: boolean;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.data.subscribe(v => {
      this.toys = (v.spread === "toys");
      this.giveaways = (v.spread === "giveaway");
      this.rest = (v.spread === "rest");
      this.art = (v.spread == "art");
    })
  }

  openDialog(name: string, volume : number, url: string) {
    console.log(url);
    let dialogRef = this.dialog.open(ImageDialogComponent);
    dialogRef.componentInstance.name = name + ' ' + volume;
    dialogRef.componentInstance.url = url;
  }
}
