import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreTrainerPageRoutingModule } from './explore-trainer-routing.module';

import { ExploreTrainerPage } from './explore-trainer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreTrainerPageRoutingModule
  ],
  declarations: [ExploreTrainerPage]
})
export class ExploreTrainerPageModule {}
