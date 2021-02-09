import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreSubPage } from './explore-sub.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreSubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreSubPageRoutingModule {}
