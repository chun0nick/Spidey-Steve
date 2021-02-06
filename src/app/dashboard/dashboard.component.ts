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

  openDialog(name: string, volume : string, url: string) {
    let dialogRef = this.dialog.open(ImageDialogComponent);
    if (volume !== null && volume !== undefined && isFinite(Number(volume))) {
      dialogRef.componentInstance.name = name + ' ' + volume;
    } else {
      dialogRef.componentInstance.name = name
    }
    dialogRef.componentInstance.url = url;
  }

  diaarticle() {
    window.open("https://backend-deploy-ljkpxx3zga-uw.a.run.app/get_image/home/diabolique.pdf");
  }

  openArticle() {
    window.open("https://backend-deploy-ljkpxx3zga-uw.a.run.app/get_image/home/fullarticle.pdf");
  }

  openPersonal() {
    window.open("https://www.levine-criminal-law.com/")
  }

  openQA() {
    window.open("https://sandiego.splashmags.com/index.php/2018/07/04/100-insane-rhyming-quatrain-original-little-riddles-review-qa-with-author-attorney-steve-levine/#gsc.tab=0")
  }

  ngOnInit() {
  }

}
