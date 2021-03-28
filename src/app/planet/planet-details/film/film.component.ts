import { Component, Input, OnInit } from '@angular/core';
import { FilmModel } from 'src/app/shared/models/Film.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  @Input() film: FilmModel;

  constructor() {}

  ngOnInit(): void {}
}
