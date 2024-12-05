import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEquipmentStatusPageRoutingModule } from './edit-equipment-status-routing.module';

import { EditEquipmentStatusPage } from './edit-equipment-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEquipmentStatusPageRoutingModule
  ],
  declarations: [EditEquipmentStatusPage]
})
export class EditEquipmentStatusPageModule {}
