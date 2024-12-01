import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietPlansPage } from './diet-plans.page';

const routes: Routes = [
  {
    path: '',
    component: DietPlansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietPlansPageRoutingModule {}
