import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'intro1',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'intro1',
    loadChildren: () => import('./users/intro/intro1/intro1.module').then( m => m.Intro1PageModule)
  },
  {
    path: 'intro2',
    loadChildren: () => import('./users/intro/intro2/intro2.module').then( m => m.Intro2PageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./users/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./users/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./users/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./users/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'verified',
    loadChildren: () => import('./users/email/verified/verified.module').then( m => m.VerifiedPageModule)
  },
  {
    path: 'not-verified',
    loadChildren: () => import('./users/email/not-verified/not-verified.module').then( m => m.NotVerifiedPageModule)
  },
  {
    path: 'physique-stats',
    loadChildren: () => import('./users/physique-stats/physique-stats.module').then( m => m.PhysiqueStatsPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./user/explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'explore-sub',
    loadChildren: () => import('./user/explore-sub/explore-sub.module').then( m => m.ExploreSubPageModule)
  },
  {
    path: 'explore-video',
    loadChildren: () => import('./user/explore-video/explore-video.module').then( m => m.ExploreVideoPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./user/video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'premium-plan',
    loadChildren: () => import('./user/premium-plan/premium-plan.module').then( m => m.PremiumPlanPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./user/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'payment-received',
    loadChildren: () => import('./user/payment-received/payment-received.module').then( m => m.PaymentReceivedPageModule)
  },
  {
    path: 'payment-error',
    loadChildren: () => import('./user/payment-error/payment-error.module').then( m => m.PaymentErrorPageModule)
  },  {
    path: 'chat-history',
    loadChildren: () => import('./chat-history/chat-history.module').then( m => m.ChatHistoryPageModule)
  },
  {
    path: 'explore-trainer',
    loadChildren: () => import('./trainer/explore-trainer/explore-trainer.module').then( m => m.ExploreTrainerPageModule)
  },
  {
    path: 'trainer-profile',
    loadChildren: () => import('./trainer/trainer-profile/trainer-profile.module').then( m => m.TrainerProfilePageModule)
  },
  {
    path: 'trainer-chat',
    loadChildren: () => import('./trainer/trainer-chat/trainer-chat.module').then( m => m.TrainerChatPageModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./book/bookings/bookings.module').then( m => m.BookingsPageModule)
  },
  {
    path: 'live-code',
    loadChildren: () => import('./live-code/live-code.module').then( m => m.LiveCodePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
