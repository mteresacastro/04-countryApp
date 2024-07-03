import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?: Region;
  public isLoading: boolean = false;

  constructor (private countriesServices: CountriesService){}

  searchByRegion( region : Region): void{

    this.selectedRegion = region;

    this.isLoading = true;

    this.countriesServices.searchRegion( region )
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
