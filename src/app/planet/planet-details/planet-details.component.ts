import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwapiService } from 'src/app/shared/services/swapi.service';
import { PlanetModel } from 'src/app/shared/models/Planet.model';
import { CharacterModel } from 'src/app/shared/models/Character.model';
import { FilmModel } from 'src/app/shared/models/Film.model';
import { PlanetService } from 'src/app/shared/services/planet.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss'],
})
export class PlanetDetailsComponent implements OnInit {
  public planet: PlanetModel;
  public residents: CharacterModel[];
  public films: FilmModel[];

  constructor(
    private _swapiService: SwapiService,
    private _planetService: PlanetService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.planet = this._planetService.getCurrentPlanet();

    if (this.planet) {
      this._swapiService
        .getDataFormEndPoints(this.planet.residents)
        .subscribe((res) => (this.residents = res));

      this._swapiService
        .getDataFormEndPoints(this.planet.films)
        .subscribe((res) => (this.films = res));
    }
  }

  //
  onGoBack(): void {
    this._router.navigate(['planets'], {
      queryParams: this._route.snapshot.queryParams,
    });
  }
}
