import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from './country-table/country-table.component';
import { RouterModule } from '@angular/router';
import { CountryInputComponent } from './country-input/country-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CountryTableComponent, CountryInputComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],exports:[
    CountryTableComponent,
    CountryInputComponent
  ]
})
export class ComponentsModule { }
