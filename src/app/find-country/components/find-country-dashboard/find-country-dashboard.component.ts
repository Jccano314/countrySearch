import { Helper } from './../../helpers/helper';
import { Continents } from './../../shared/models/continents.model';
import { Country } from './../../shared/models/country.model';
import { GeneralService } from './../../shared/services/general.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-find-country-dashboard',
  templateUrl: './find-country-dashboard.component.html',
  styleUrls: ['./find-country-dashboard.component.scss']
})

export class FindCountryDashboardComponent implements OnInit {

  public continents: Continents = new Continents();
  public continentsFiltered: Continents;

  constructor(
      private generalService: GeneralService,
      private helper: Helper
    ) { }

  async ngOnInit(): Promise<void> {
    await this.getListCountries();
  }

  public async getListCountries() {
    this.generalService.getService(environment.restcountries, null).then(async (countryList: Country[]) => {
      this.helper.orderList(countryList);
      this.helper.extractNameBorder(countryList);
      this.getListByContinents(countryList);
    });
  }

  public getListByContinents(countryList: Country[]) {
    this.continents.africa = countryList.filter(row => row.region === 'Africa');
    this.continents.americas = countryList.filter(row => row.region === 'Americas');
    this.continents.asia = countryList.filter(row => row.region === 'Asia');
    this.continents.europe = countryList.filter(row => row.region === 'Europe');
    this.continents.oceania = countryList.filter(row => row.region === 'Oceania');
  }

  public updateData(data: Continents) {
    this.continentsFiltered = data;
  }

  public setFavorite(country: Country) {
    switch (country.region) {
      case 'Asia':
        this.setFavoriteToList('asia', country);
        break;
      case 'Americas':
        this.setFavoriteToList('americas', country);
        break;
      case 'Africa':
        this.setFavoriteToList('africa', country);
        break;
      case 'Europe':
        this.setFavoriteToList('europe', country);
        break;
      case 'Oceania':
        this.setFavoriteToList('oceania', country);
        break;
      default:
        break;
    }
  }

  public setFavoriteToList(region: string, countryFavorite: Country) {
    this.continents[region].forEach( (country: Country) => {
      if (country.name === countryFavorite.name) {
        country.favorite = country.favorite ? !country.favorite : true;
      }
    });

  }

}
