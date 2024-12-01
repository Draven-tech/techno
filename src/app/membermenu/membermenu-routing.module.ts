import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembermenuPage } from './membermenu.page';

const routes: Routes = [
  {
    path: '',
    component: MembermenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembermenuPageRoutingModule {}
