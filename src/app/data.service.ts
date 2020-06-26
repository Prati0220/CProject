import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getURL: string;

  constructor(private http: HttpClient) { }

  getCountries(region: String) {
    this.getURL = "https://restcountries.eu/rest/v2/region/" + region;
    return this.http.get(this.getURL);
  }
}
