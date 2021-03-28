import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { PlanetModel } from '../models/Planet.model';
import { SwapiService } from './swapi.service';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  private _currentPlanet: PlanetModel;
  private _planetsOnPage: number = 10;

  private _numOfPages = new BehaviorSubject<number>(null);
  private _planets = new BehaviorSubject<PlanetModel[]>(null);

  constructor(private _swapiService: SwapiService) {
    this.getPlanetsFromSwapi();
  }

  //
  private getPlanetsFromSwapi() {
    let subject = new Subject();
    let tempArray = new Array<PlanetModel>();

    subject.subscribe((pageNum: number) => {
      this._swapiService
        .getPlanets(pageNum)
        .pipe(
          tap((data) => {
            if (data.next != null) {
              pageNum++;
              subject.next(pageNum);
            } else {
              this._numOfPages.next(this.countPagesAmount(data.count));
              subject.complete();
            }
          })
        )
        .subscribe((res) => {
          tempArray.push(...res.results);
        });
    });

    subject.next(1);

    subject.toPromise().then(() => {
      this._planets.next(tempArray.sort(PlanetModel.compareFn));
    });
  }

  //
  private countPagesAmount(elements: number): number {
    return (
      Math.floor(elements / this._planetsOnPage) +
      (elements % this._planetsOnPage > 0 ? 1 : 0)
    );
  }

  //
  getPlanets(): BehaviorSubject<PlanetModel[]> {
    return this._planets;
  }

  //
  getNumOfPages(): BehaviorSubject<number> {
    return this._numOfPages;
  }

  //
  getPlanetsOnPage(): number {
    return this._planetsOnPage;
  }

  //
  setCurrentPlanet(planet: PlanetModel) {
    this._currentPlanet = planet;
  }

  //
  getCurrentPlanet(): PlanetModel {
    return this._currentPlanet;
  }
}
