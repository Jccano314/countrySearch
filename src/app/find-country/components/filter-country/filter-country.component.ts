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
  public selectText = 'SA';

  constructor() { }

  async ngOnChanges(change: any) {
    if (change.continents) {
      await this.getAllCountries();
    }
  }

  public async filterCountry(search: any) {
    setTimeout(async () => {
      this.continentsFiltered = new Continents();
      const filterText = search.target.value;
      if (filterText !== '') {
        this.filterByContinents(filterText, this.selectText);
      } else if (filterText === '' && this.selectText !== '') {
        this.filterByContinents(null, this.selectText);
      } else {
        this.getAllCountries();
      }
    }, 250);

  }

  public applyFilter(field: string, filter: string, region?: string) {
    if (filter) {
      if (region !== 'SA' && region !== 'FA') {
        return this.continents[field].filter(
          (f: Country) => f.name.toLowerCase().includes(filter.toLowerCase()) && f.region === region
        );
      } else if (region === 'FA') {
        return this.continents[field].filter(
          (f: Country) => f.name.toLowerCase().includes(filter.toLowerCase()) && f.favorite === true
        );
      } else {
        return this.continents[field].filter(
          (f: Country) => f.name.toLowerCase().includes(filter.toLowerCase())
        );
      }
    } else {
      if (region !== 'SA' && region !== 'FA') {
        return this.continents[field].filter(
          (f: Country) => f.region === region
        );
      } else if (region === 'FA') {
        return this.continents[field].filter(
          (f: Country) => f.favorite === true
        );
      } else {
        return this.continents[field];
      }
    }
  }

  public async filterByContinents(filterText: string, region?: string) {
    this.continentsFiltered.africa = await this.applyFilter('africa', filterText, region);
    this.continentsFiltered.americas = await this.applyFilter('americas', filterText, region);
    this.continentsFiltered.asia = await this.applyFilter('asia', filterText, region);
    this.continentsFiltered.europe = await this.applyFilter('europe', filterText, region);
    this.continentsFiltered.oceania = await this.applyFilter('oceania', filterText, region);
    this.continentsFilteredOut.emit(this.continentsFiltered);
  }

  public async getAllCountries() {
    this.continentsFiltered = this.continents;
    this.continentsFilteredOut.emit(this.continentsFiltered);
  }

  public setFilter(event: any) {
    this.continentsFiltered = new Continents();
    const region = event.target.value;
    this.selectText = region;
    const text = this.searchText !== '' ? this.searchText : null;
    this.filterByContinents(text, region);
  }

}
