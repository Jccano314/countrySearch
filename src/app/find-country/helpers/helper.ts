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

}
