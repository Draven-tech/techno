import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDietPlansPage } from './edit-diet-plans.page';

const routes: Routes = [
  {
    path: '',
    component: EditDietPlansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDietPlansPageRoutingModule {}
