import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhysiqueStatsPageRoutingModule } from './physique-stats-routing.module';

import { PhysiqueStatsPage } from './physique-stats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PhysiqueStatsPageRoutingModule
  ],
  declarations: [PhysiqueStatsPage]
})
export class PhysiqueStatsPageModule {}
