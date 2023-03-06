import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, map } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrlv3: string = 'https://restcountries.com/v3.1';
  private apiUrlv2: string = 'https://restcountries.com/v2';

  get httpParams() {
    return new HttpParams().set('fields', 'name,alpha2Code,capital,population,flags');
  }

  constructor( private http: HttpClient ) { }

  searchCountry(searched: string): Observable<Country[]> {
    const url = `${ this.apiUrlv3 }/name/${ searched }`
    return this.http.get<Country[]>(url);
  }

  searchCountryByCapital(searched: string): Observable<Country[]> {
    const url = `${ this.apiUrlv3 }/capital/${ searched }`
    return this.http.get<Country[]>(url);
  }
  
  getCountryByAlpha(id: string): Observable<Country> {
    const url = `${ this.apiUrlv3 }/alpha/${ id }`
    return this.http.get<Country[]>(url).pipe(map(countries => countries[0]));
  }

  getCountryByRegion (region: string):Observable<Country[]> {

    const paramsHttp = new HttpParams()
    region = region.toLowerCase();
    const url = `${ this.apiUrlv2 }/regionalbloc/${ region }`
    return this.http.get<Country[]>(url, {params:paramsHttp});

  }
}
