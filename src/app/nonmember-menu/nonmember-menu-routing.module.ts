import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NonMemberMenuPage } from './nonmember-menu.page';

const routes: Routes = [
  {
    path: '',
    component: NonMemberMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonmemberMenuPageRoutingModule {}
