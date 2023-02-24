import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

  constructor(private countryService: CountryService) { }

  searched:string = '';
  isError: boolean = false;

  countries : Country[] = [];

  search() {
    this.isError = false;
    this.countryService.searchCountry(this.searched).subscribe(countries => {
      this.countries = countries;
    }, (err) => {
      this.isError = true;
    });
  } 
}
