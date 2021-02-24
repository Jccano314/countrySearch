import { Country } from './../../shared/models/country.model';
import { HEADER_CONTINENTS_FILTER } from './../../utilis/commons/constants';
import { Continents } from './../../shared/models/continents.model';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-filter-country',
  templateUrl: './filter-country.component.html',
  styleUrls: ['./filter-country.component.scss']
})
export class FilterCountryComponent implements OnChanges {

  @Input() continents: Continents;
  @Output() continentsFilteredOut = new EventEmitter<any>();

  public continentsFiltered: Continents = new Continents();
  public filterColumns: any[] = HEADER_CONTINENTS_FILTER;
  public searchText: string;

  constructor() { }

  async ngOnChanges(change: any) {
    if (change.continents) {
      this.getAllCountries();
    }
  }

  public async filterCountry(search: any) {
    setTimeout(async () => {
      const filterText = search.target.value;
      this.continentsFiltered = new Continents();
      if (filterText !== '') {
        this.continentsFiltered.africa = await this.applyFilter('africa', filterText);
        this.continentsFiltered.americas = await this.applyFilter('americas', filterText);
        this.continentsFiltered.asia = await this.applyFilter('asia', filterText);
        this.continentsFiltered.europe = await this.applyFilter('europe', filterText);
        this.continentsFiltered.oceania = await this.applyFilter('oceania', filterText);
        this.continentsFilteredOut.emit(this.continentsFiltered);
      } else {
        this.getAllCountries();
      }
    }, 250);

  }

  public applyFilter(field: string, filter: string) {
    return this.continents[field].filter(
      (f: Country) => f.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  public getAllCountries() {
    this.continentsFiltered = this.continents;
    this.continentsFilteredOut.emit(this.continentsFiltered);
  }

}
