import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalizedRoutinesPageRoutingModule } from './personalized-routines-routing.module';

import { PersonalizedRoutinesPage } from './personalized-routines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalizedRoutinesPageRoutingModule
  ],
  declarations: [PersonalizedRoutinesPage]
})
export class PersonalizedRoutinesPageModule {}
