import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPersonalizedRoutinesPageRoutingModule } from './edit-personalized-routines-routing.module';

import { EditPersonalizedRoutinesPage } from './edit-personalized-routines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPersonalizedRoutinesPageRoutingModule
  ],
  declarations: [EditPersonalizedRoutinesPage]
})
export class EditPersonalizedRoutinesPageModule {}
