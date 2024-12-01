import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipmentStatusPageRoutingModule } from './equipment-status-routing.module';

import { EquipmentStatusPage } from './equipment-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipmentStatusPageRoutingModule
  ],
  declarations: [EquipmentStatusPage]
})
export class EquipmentStatusPageModule {}
