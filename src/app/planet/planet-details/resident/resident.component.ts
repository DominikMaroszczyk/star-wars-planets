import { Component, Input, OnInit } from '@angular/core';
import { CharacterModel } from 'src/app/shared/models/Character.model';

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.scss'],
})
export class ResidentComponent implements OnInit {
  @Input() resident: CharacterModel;

  constructor() {}

  ngOnInit(): void {}
}
