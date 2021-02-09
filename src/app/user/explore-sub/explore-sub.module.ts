import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreSubPageRoutingModule } from './explore-sub-routing.module';

import { ExploreSubPage } from './explore-sub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreSubPageRoutingModule
  ],
  declarations: [ExploreSubPage]
})
export class ExploreSubPageModule {}
