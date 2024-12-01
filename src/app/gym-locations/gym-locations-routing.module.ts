import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymLocationsPage } from './gym-locations.page';

const routes: Routes = [
  {
    path: '',
    component: GymLocationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymLocationsPageRoutingModule {}
