import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPersonalizedRoutinesPage } from './edit-personalized-routines.page';

const routes: Routes = [
  {
    path: '',
    component: EditPersonalizedRoutinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPersonalizedRoutinesPageRoutingModule {}
