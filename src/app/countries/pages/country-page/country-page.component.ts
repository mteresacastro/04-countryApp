import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country, Languages } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  public country?: Country;

  constructor(
    private activatedRoute : ActivatedRoute,
    private countriesService : CountriesService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id )),//regresa un nuevo observable
      )
      .subscribe( country =>{
        if (!country) {
          return this.router.navigateByUrl('');
        }

        return this.country = country;

      })


    //  otra forma de hacerlo sin el switchMap

    // .subscribe( ({id}) => {
    //   this.countriesService.searchCountryByAlphaCode(id)
    //     .subscribe(country =>{
    //       console.log(country);
    //     })
    //})
  }

}
