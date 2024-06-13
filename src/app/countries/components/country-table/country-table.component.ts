import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles:[`
    img{
      width: 50px;
    }
    .country-flag{
      font-family: "Noto Color Emoji", sans-serif;
    }`]
})
export class CountryTableComponent {


  @Input()
  public countries:Country[] = [];
}
