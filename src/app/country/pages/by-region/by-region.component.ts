import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {

  constructor(private countryService: CountryService) { }

  countries: Country[] = [];
  activeRegion: string = '';
  regions : object = {
    'EU': 'European Union',
    'EFTA' :'European Free Trade Association',
    'CARICOM' :'Caribbean Community',
    'PA' :'Pacific Alliance',
    'AU' :'African Union',
    'USAN' :'Union of South American Nations',
    'EEU' :'Eurasian Economic Union',
    'AL' :'Arab League',
    'ASEAN' :'Association of Southeast Asian Nations',
    'CAIS' :'Central American Integration System',
    'CEFTA' :'Central European Free Trade Agreement',
    'NAFTA' :'North American Free Trade Agreement',
    'SAARC' :'South Asian Association for Regional Cooperation'
  };

  getRegions() {
    const objectArray = Object.entries(this.regions).map(([key, value]) => ({ code:key, value }));
    return objectArray;
  }

  activateRegion (region: string) {
    if ( region === this.activeRegion){ return; }
    this.activeRegion = region;
    this.countries = [];
    this.countryService.getCountryByRegion(region).subscribe(countries => {
      countries.forEach(country => {
        country.cca2 = country.alpha2Code
      });
      this.countries = countries;
    })
  }

  getCssClass ( region:string ) {
    return (region === this.activeRegion) ? 'btn btn-primary': 'btn btn-outline-primary';
  }
}
