import { Injectable } from '@angular/core';
import { PlanetModel } from '../models/Planet.model';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  private _currentPlanet: PlanetModel;

  constructor() {}

  //
  setCurrentPlanet(planet: PlanetModel) {
    this._currentPlanet = planet;
  }

  //
  getCurrentPlanet(): PlanetModel {
    return this._currentPlanet;
  }
}
