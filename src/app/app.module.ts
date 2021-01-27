import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatListModule,
  MatSortModule, MatTableModule, MatButtonModule, MatToolbarModule, MatGridListModule, MatDividerModule, MatCardModule} from "@angular/material";
  import {MatDialogModule} from '@angular/material/dialog';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SpreadlistComponent } from './spreadlist/spreadlist.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ImageDialogComponent,
    DashboardComponent,
    SlideshowComponent,
    SpreadlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule, 
    MatInputModule, 
    MatPaginatorModule, 
    MatProgressSpinnerModule, 
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ImageDialogComponent]
})
export class AppModule { }
