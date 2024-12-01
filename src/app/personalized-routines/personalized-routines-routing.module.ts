import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalizedRoutinesPage } from './personalized-routines.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalizedRoutinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalizedRoutinesPageRoutingModule {}
