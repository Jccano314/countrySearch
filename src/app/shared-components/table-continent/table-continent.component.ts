import { Country } from './../../find-country/shared/models/country.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-continent',
  templateUrl: './table-continent.component.html',
  styleUrls: ['./table-continent.component.scss']
})
export class TableContinentComponent implements OnInit {

  @Output() countryFavorite = new EventEmitter<any>();

  @Input() country: Country;
  @Input() nameCountry: string;

  public countryDetail: Country;
  public starFavorite: string;

  constructor() { }

  ngOnInit(): void {
  }

  public setData(row: Country) {
    this.validateFavorite(row);
    this.countryDetail = row;
  }

  public getBorder(row: Country){
    return row.borders.join(', ');
  }

  public setFavorite(row: Country) {
    this.countryFavorite.emit(row);
    this.validateFavorite(this.countryDetail);
  }

  public validateFavorite(row: Country) {
    this.starFavorite = row.favorite ? '2' : '1';
  }

}
