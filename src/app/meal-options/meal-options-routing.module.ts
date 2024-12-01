import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealOptionsPage } from './meal-options.page';

const routes: Routes = [
  {
    path: '',
    component: MealOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealOptionsPageRoutingModule {}
