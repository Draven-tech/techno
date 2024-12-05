import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDietPlansPageRoutingModule } from './edit-diet-plans-routing.module';

import { EditDietPlansPage } from './edit-diet-plans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDietPlansPageRoutingModule
  ],
  declarations: [EditDietPlansPage]
})
export class EditDietPlansPageModule {}
