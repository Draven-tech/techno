import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietPlansPageRoutingModule } from './diet-plans-routing.module';

import { DietPlansPage } from './diet-plans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietPlansPageRoutingModule
  ],
  declarations: [DietPlansPage]
})
export class DietPlansPageModule {}
