import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainerChatPageRoutingModule } from './trainer-chat-routing.module';

import { TrainerChatPage } from './trainer-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainerChatPageRoutingModule
  ],
  declarations: [TrainerChatPage]
})
export class TrainerChatPageModule {}
