import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanetModel } from '../shared/models/Planet.model';
import { PlanetService } from '../shared/services/planet.service';
import { SwapiService } from '../shared/services/swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public planets: PlanetModel[];
  public pages: number[];

  constructor(
    private _swapiService: SwapiService,
    private _planetService: PlanetService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  //
  ngOnInit(): void {
    this.getPlanetsByPage(this._route.snapshot.queryParams['page']);
  }

  //
  getPlanetsByPage(page: number = 1) {
    this._swapiService.getPlanetsByPage(page).subscribe((res) => {
      this.planets = res.results;

      let numOfPages =
        Math.floor(res.count / 10) + (res.count % 10 > 0 ? 1 : 0);

      this.pages = Array(numOfPages)
        .fill(0)
        .map((val, i) => i + 1);
    });
  }

  //
  planetSelect(planet: PlanetModel): void {
    this._planetService.setCurrentPlanet(planet);
    this._router.navigate(['planet'], {
      queryParams: this._route.snapshot.queryParams,
    });
  }
}
