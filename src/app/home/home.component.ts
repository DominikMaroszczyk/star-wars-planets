import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanetModel } from '../shared/models/Planet.model';
import { PlanetService } from '../shared/services/planet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public planets: PlanetModel[];
  public pages: number[];
  public currentPage: number = 1;

  constructor(
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
    this.currentPage = page;

    this._planetService.getPlanets().subscribe((res) => {
      let temp = this._planetService.getPlanetsOnPage();
      this.planets = res?.slice((page - 1) * temp, page * temp);
    });

    this._planetService.getNumOfPages().subscribe((res) => {
      this.pages = Array(res)
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

  //
  onClickLink(number: number) {
    this.getPlanetsByPage(number);
    this._router.navigate(['planets'], {
      queryParams: { page: number },
      fragment: 'main-content',
    });
  }
}
