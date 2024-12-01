import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachChatPageRoutingModule } from './coach-chat-routing.module';

import { CoachChatPage } from './coach-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachChatPageRoutingModule
  ],
  declarations: [CoachChatPage]
})
export class CoachChatPageModule {}
