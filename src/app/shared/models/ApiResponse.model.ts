import { PlanetModel } from './Planet.model';

export class ApiResponseModel {
  public count: number;
  public next: string;
  public previous: string;
  public results: PlanetModel[];
}
