import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreTrainerPage } from './explore-trainer.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreTrainerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreTrainerPageRoutingModule {}
