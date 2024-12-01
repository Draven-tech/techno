import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealOptionsPageRoutingModule } from './meal-options-routing.module';

import { MealOptionsPage } from './meal-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealOptionsPageRoutingModule
  ],
  declarations: [MealOptionsPage]
})
export class MealOptionsPageModule {}
