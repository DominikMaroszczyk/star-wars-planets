import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HomeComponent } from './home/home.component';
import { PlanetComponent } from './planet/planet.component';
import { PlanetDetailsComponent } from './planet/planet-details/planet-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmComponent } from './planet/planet-details/film/film.component';
import { ResidentComponent } from './planet/planet-details/resident/resident.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanetComponent,
    PlanetDetailsComponent,
    FilmComponent,
    ResidentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
