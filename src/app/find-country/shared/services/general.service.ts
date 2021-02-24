import { Country } from './../models/country.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GeneralService {

  constructor(private http: HttpClient) { }

  public async getService(url: string, paramsIn: any): Promise<any> {
    return this.http.get(url, {
      params: paramsIn
    }).toPromise()
      .then((res) => res);
  }
}
