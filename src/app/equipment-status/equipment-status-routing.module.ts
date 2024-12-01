import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipmentStatusPage } from './equipment-status.page';

const routes: Routes = [
  {
    path: '',
    component: EquipmentStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipmentStatusPageRoutingModule {}
