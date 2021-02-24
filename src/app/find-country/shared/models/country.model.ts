import { Currency } from './currency.model';
import { Language } from './language.model';
import { Translation } from './translation.model';
import { RegionalBloc } from './regionalBloc.model';

export class Country {
  constructor(
    public name?: string,
    public topLevelDomain?: string[],
    public alpha2Code?: string,
    public alpha3Code?: string,
    public callingCodes?: string[],
    public capital?: string,
    public altSpellings?: string[],
    public region?: string,
    public subregion?: string,
    public population?: string,
    public latlng?: string[],
    public demonym?: string,
    public area?: string,
    public gini?: string,
    public timezones?: string[],
    public borders?: string[],
    public nativeName?: string,
    public numericCode?: string,
    public currencies?: Currency[],
    public languages?: Language[],
    public translations?: Translation,
    public flag?: string,
    public regionalBlocs?: RegionalBloc[],
    public cioc?: string
  ) {}
}
