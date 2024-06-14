import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';
import { ByRegionPageComponent } from '../pages/by-region-page/by-region-page.component';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'


  constructor(private httpClient: HttpClient) { }

  searchCountryByAlphaCode( code: string ): Observable<Country[]>{

    return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${ code }`)
    .pipe(
      catchError( error => of([]))
    )
  }

  searchCapital( term: string): Observable<Country[]>{

    return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${ term }`)
      .pipe(
        catchError( error => of([]))
      )
  }

  searchCountry( term: string): Observable<Country[]>{

    return this.httpClient.get<Country[]>(`${this.apiUrl}/name/${ term }`)
      .pipe(
        catchError( error => of([]))
      )
  }


  searchRegion( region: string): Observable<Country[]>{

    return this.httpClient.get<Country[]>(`${this.apiUrl}/region/${ region }`)
    .pipe(
      catchError( error => of([]))
    )
  }
}
