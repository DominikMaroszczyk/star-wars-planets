import { Component, Input, OnInit } from '@angular/core';
import { PlanetModel } from '../shared/models/Planet.model';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent implements OnInit {
  @Input() planet: PlanetModel;

  constructor() {}

  ngOnInit(): void {}
}
