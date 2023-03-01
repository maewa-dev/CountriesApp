import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, map } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }


  searchCountry(searched: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ searched }`
    return this.http.get<Country[]>(url);
  }

  searchCountryByCapital(searched: string): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ searched }`
    return this.http.get<Country[]>(url);
  }
  
  getCountryByAlpha(id: string): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ id }`
    return this.http.get<Country[]>(url).pipe(map(countries => countries[0]));

  }

}
