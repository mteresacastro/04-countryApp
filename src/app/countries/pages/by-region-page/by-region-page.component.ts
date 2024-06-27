import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor (private countriesServices: CountriesService){}

  searchByRegion( region : string): void{

    this.isLoading = true;

    this.countriesServices.searchRegion( region )
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
