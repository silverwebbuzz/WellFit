import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerChatPage } from './trainer-chat.page';

const routes: Routes = [
  {
    path: '',
    component: TrainerChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerChatPageRoutingModule {}
