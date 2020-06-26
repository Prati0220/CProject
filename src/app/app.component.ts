import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CountryInfo';
  regions = ['Europe', 'Asia'];
  country: any;
  countries = [];
  countryNames = [];
  regionLabel = "Select a region";
  countriesLabel = "Select a country";

  constructor(private dataService: DataService) {

  }

  onRegionSelected(regionValue) {
    let _this = this;
    this.dataService.getCountries(regionValue).subscribe(function(data: any) {
      _this.countries= data;
      _this.countryNames=[];
      data.forEach(element => {
        _this.countryNames.push(element['name']);
      });
      // this.countries = data;
      console.log(data);
    });

  }

  onCountrySelected(countryName) {
    let _this = this;
    this.countries.forEach(function(country){
      if(country.name == countryName) {
        _this.country = country;
      }
    });
  }
}
