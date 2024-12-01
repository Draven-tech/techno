import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NonmemberMenuPageRoutingModule } from './nonmember-menu-routing.module';

import { NonMemberMenuPage } from './nonmember-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NonmemberMenuPageRoutingModule
  ],
  declarations: [NonMemberMenuPage]
})
export class NonMemberMenuPageModule {}
