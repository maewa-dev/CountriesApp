import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs/operators';

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

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(switchMap(({countryCode}) => this.countryService.getCountryByAlpha(countryCode))).subscribe( resp => {
      console.log(resp)
    });
  }

}
