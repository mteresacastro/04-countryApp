import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { ByRegionPageComponent } from '../pages/by-region-page/by-region-page.component';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';
import { LocalizedString } from '@angular/compiler';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  public cacheStore: CacheStore = {
    byCapital: {term:'', countries: []},
    byCountries: {term:'', countries: []},
    byRegion: {region:'', countries: []},

  }


  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage();
   }

  private saveToLocalStorage(){
    localStorage.setItem( 'cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(){
    if (!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  private getCountriesRequest( url: string): Observable<Country[]>{
    return this.httpClient.get<Country[]>(url)
    .pipe( //recibe tantos operadores de Rxjs como quiera
      catchError( () => of([])),
      //delay ( 2000 )
    )
  }

  searchCountryByAlphaCode( code: string ): Observable<Country | null>{

    return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${ code }`)
    .pipe(
      map(countries => countries.length > 0 ? countries[0]: null),
      catchError( () => of(null))
    )
  }

  searchCapital( term: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${ term }`
    return this.getCountriesRequest( url )
      .pipe(
        tap( (countries => this.cacheStore.byCapital = {term: term, countries: countries})),
        tap(() => this.saveToLocalStorage( ))
      );
  }

  searchCountry( term: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${ term }`
    return this.getCountriesRequest( url)
      .pipe(
        tap( (countries => this.cacheStore.byCountries = {term: term, countries: countries})),
        tap(() => this.saveToLocalStorage( ))
      );
  }


  searchRegion( region: Region): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${ region }`
    return this.getCountriesRequest( url )
      .pipe(
        tap( (countries => this.cacheStore.byRegion = {region: region, countries: countries})),
        tap(() => this.saveToLocalStorage( ))
      );
  }
}
