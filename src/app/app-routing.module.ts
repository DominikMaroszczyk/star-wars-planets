import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanetDetailsComponent } from './planet/planet-details/planet-details.component';
import { PlanetComponent } from './planet/planet.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/planets',
    pathMatch: 'full',
  },
  {
    path: 'planets',
    component: HomeComponent,
  },
  {
    path: 'planet',
    component: PlanetDetailsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 0],
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
