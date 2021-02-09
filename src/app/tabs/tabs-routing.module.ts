import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "explore",
        loadChildren: () => import("../user/explore/explore.module").then((m) => m.ExplorePageModule),
      },
      {
        path: "explore-sub",
        loadChildren: () => import('../user/explore-sub/explore-sub.module').then( m => m.ExploreSubPageModule)
      },
      {
        path: 'explore-video',
        loadChildren: () => import('../user/explore-video/explore-video.module').then( m => m.ExploreVideoPageModule)
      },
      {
        path: 'chat-history',
        loadChildren: () => import('../chat-history/chat-history.module').then( m => m.ChatHistoryPageModule)
      },
      {
        path: 'explore-trainer',
        loadChildren: () => import('../trainer/explore-trainer/explore-trainer.module').then( m => m.ExploreTrainerPageModule)
      },
      {
        path: 'bookings',
        loadChildren: () => import('../book/bookings/bookings.module').then( m => m.BookingsPageModule)
      },
      {
        path: "",
        redirectTo: "/tabs",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
