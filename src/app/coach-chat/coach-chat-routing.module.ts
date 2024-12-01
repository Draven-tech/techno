import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachChatPage } from './coach-chat.page';

const routes: Routes = [
  {
    path: '',
    component: CoachChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachChatPageRoutingModule {}
