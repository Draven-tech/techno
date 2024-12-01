import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembershipOptionsPage } from './membership-options.page';

const routes: Routes = [
  {
    path: '',
    component: MembershipOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembershipOptionsPageRoutingModule {}
