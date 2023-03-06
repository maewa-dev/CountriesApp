import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }`
  ]
})
export class ByCountryComponent {

  constructor(private countryService: CountryService) { }

  searched:string = '';
  isError: boolean = false;

  countries : Country[] = [];
  countriesSuggestion : Country[] = [];
  displaySuggestions:boolean = true;

  search(searched:string) {
    console.log(searched)
    this.searched = searched;
    this.isError = false;
    this.displaySuggestions = false;
    this.countryService.searchCountry(searched).subscribe(countries => {
      this.countries = countries;
    }, (err) => {
      this.isError = true;
    });
  } 

  suggestions(searched: string) {
    this.isError = false;
    this.searched = searched;
    this.displaySuggestions = true;
    this.countryService.searchCountry(searched)
    .subscribe(
      countries => this.countriesSuggestion = countries.splice(0,5),
      (err) => this.countriesSuggestion = []
    );
  }


  searchSuggest(searched:string) {
    this.search(searched);
  }
}
