import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymLocationsPageRoutingModule } from './gym-locations-routing.module';

import { GymLocationsPage } from './gym-locations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymLocationsPageRoutingModule
  ],
  declarations: [GymLocationsPage]
})
export class GymLocationsPageModule {}
