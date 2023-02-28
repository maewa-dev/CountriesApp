import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    ViewCountryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    ViewCountryComponent
  ],
})
export class CountryModule { }
