import { Country } from './../shared/models/country.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Helper {
  public constructor() {}

  public orderList(countryList: Country[]) {
    countryList.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

  public extractNameBorder(countryList: Country[]) {
    countryList.forEach(country => {
      const nameBorder = [];
      country.borders.forEach(item => {
        countryList.forEach(oneCountry => {
          if (oneCountry.alpha3Code === item) {
            nameBorder.push(oneCountry.name);
          }
        });
      });
      country.borders = nameBorder;
  });
  }
}
