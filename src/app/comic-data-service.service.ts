import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicDataService {
  private appearancesURL = "http://127.0.0.1:5000/appearances/"

  constructor(private http: HttpClient) { }

  getAppearances() : any {
    return this.http.get(this.appearancesURL)
  }
}
