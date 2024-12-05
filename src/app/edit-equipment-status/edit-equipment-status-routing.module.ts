import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEquipmentStatusPage } from './edit-equipment-status.page';

const routes: Routes = [
  {
    path: '',
    component: EditEquipmentStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditEquipmentStatusPageRoutingModule {}
