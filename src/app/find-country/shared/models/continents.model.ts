import { Country } from './country.model';
export class Continents {
  constructor(
    public africa?: Country[],
    public americas?: Country[],
    public europe?: Country[],
    public asia?: Country[],
    public oceania?: Country[]
  ) {}
}
