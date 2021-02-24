import { Country } from './../../find-country/shared/models/country.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-continent',
  templateUrl: './table-continent.component.html',
  styleUrls: ['./table-continent.component.scss']
})
export class TableContinentComponent implements OnInit {

  @Input() country: Country;
  @Input() nameCountry: string;

  public countryDetail: Country;

  constructor() { }

  ngOnInit(): void {
  }

  public setData(row: Country) {
    console.log(row)
    this.countryDetail = row;
  }

  public getBorder(row: Country){
    return row.borders.join(', ');
  }

}
