import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreVideoPage } from './explore-video.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreVideoPageRoutingModule {}
