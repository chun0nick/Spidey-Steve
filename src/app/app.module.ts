import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component'
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { MatListModule, MatButtonModule, MatGridListModule, MatDialogModule, MatToolbarModule, MatDividerModule } from '@angular/material/';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ImageDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatGridListModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ImageDialogComponent]
})
export class AppModule { }
