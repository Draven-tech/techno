import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembermenuPageRoutingModule } from './membermenu-routing.module';

import { MembermenuPage } from './membermenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembermenuPageRoutingModule
  ],
  declarations: [MembermenuPage]
})
export class MembermenuPageModule {}
