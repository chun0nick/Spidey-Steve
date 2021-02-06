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
  appearances: boolean;
  giveaways: boolean;
  comictitles: boolean;
  british: boolean;
  rest: boolean;
  art: boolean;
  kids: boolean;
  misc: boolean;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.data.subscribe(v => {
      this.toys = (v.spread === "toys");
      this.giveaways = (v.spread === "giveaway");
      this.rest = (v.spread === "rest");
      this.art = (v.spread == "art");
      this.appearances = (v.spread == "appearance");
      this.comictitles = (v.spread == "comictitles");
      this.british = (v.spread == "british");
      this.kids = (v.spread == "kids");
      this.misc = (v.spread == "misc");
    })
  }

  openDialog(name: string, volume : string, url: string) {
    let dialogRef = this.dialog.open(ImageDialogComponent);
    if (volume !== null && volume !== undefined && isFinite(Number(volume))) {
      dialogRef.componentInstance.name = name + ' ' + volume;
    } else {
      dialogRef.componentInstance.name = name
    }
    dialogRef.componentInstance.url = url;
  }
}
