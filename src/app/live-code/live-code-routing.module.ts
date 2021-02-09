import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveCodePage } from './live-code.page';

const routes: Routes = [
  {
    path: '',
    component: LiveCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveCodePageRoutingModule {}
