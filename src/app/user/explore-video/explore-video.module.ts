import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreVideoPageRoutingModule } from './explore-video-routing.module';

import { ExploreVideoPage } from './explore-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreVideoPageRoutingModule
  ],
  declarations: [ExploreVideoPage]
})
export class ExploreVideoPageModule {}
