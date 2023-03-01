import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.css']
})
export class ViewCountryComponent implements OnInit {

  constructor( 
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
    ) { }

  country!: Country;

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap(({countryCode}) => this.countryService.getCountryByAlpha(countryCode)),
      tap( console.log  )  //todo_mrt forma corta de hacer una impresion en consola
    )
    .subscribe( country => this.country = country);









  }

}
