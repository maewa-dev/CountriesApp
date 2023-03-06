import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent {

  constructor(private countryService: CountryService) { }

  searched:string = '';
  isError: boolean = false;

  countries : Country[] = [];

  search(searched:string) {
    this.searched = searched;
    this.isError = false;
    this.countryService.searchCountryByCapital(searched).subscribe(countries => {
      this.countries = countries;
    }, (err) => {
      this.isError = true;
    });
  } 

}
