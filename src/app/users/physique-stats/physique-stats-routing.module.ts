import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhysiqueStatsPage } from './physique-stats.page';

const routes: Routes = [
  {
    path: '',
    component: PhysiqueStatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhysiqueStatsPageRoutingModule {}
