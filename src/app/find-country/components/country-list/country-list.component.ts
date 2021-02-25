import { Country } from './../../shared/models/country.model';
import { Continents } from './../../shared/models/continents.model';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnChanges {

  @Output() countryFavorite = new EventEmitter<any>();
  @Input() continentsFiltered: Continents;

  public isEmpty = false;

  constructor() {
   }

  ngOnChanges(): void {
    if (this.continentsFiltered != null) {
      setTimeout(() => {
        this.isEmpty = true;
        for (const property in this.continentsFiltered) {
          if (this.continentsFiltered[property]?.length > 0 && this.isEmpty) {
            this.isEmpty = false;
          }
        }
      }, 250);
    } else {
      this.isEmpty = true;
    }
  }

  public emptyRow(row: any[]) {
    return (row && row.length > 0);
  }

  public getFavorite(row: Country) {
    this.countryFavorite.emit(row);
  }

}
