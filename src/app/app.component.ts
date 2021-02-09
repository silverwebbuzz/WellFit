import { Component } from '@angular/core';

import { Platform, MenuController, ModalController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LiveCodePage } from './live-code/live-code.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  pages = [
    {
      title: 'Explore',
      url: '/tabs/explore',
    },
    {
      title: 'Bookings',
      url: '/tabs/bookings',
    },
    {
      title: 'Trainers',
      url: '/tabs/explore-trainer',
    },
    {
      title: 'My Schedule',
      url: '/',
    },
    // {
    //   title: 'Live Code',
    //   url: '/live-code',
    //   // component: this.logout(),
    //   // url: '/' + this.logout(),
    // },
  ]

  pages2 = [
    {
      title: 'Chat',
      url: '/tabs/chat-history',
    },
    {
      title: 'Profile',
      url: '/profile',
    },
    {
      title: 'Terms of Use',
      url: '/',
    },
    {
      title: 'Privacy',
      url: '/',
    },
  ]

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private router: Router,
  ) {
    this.initializeApp();
  }

  close() {
    this.menu.close();
  }

  async liveCode() {
    // this.menu.close();
    const modal = await this.modalCtrl.create({
      component: LiveCodePage,
      showBackdrop: true,
      cssClass: 'live-code'
    });
    return await modal.present();
  }

  async logout() {
    // this.menu.close();
    const alert = await this.alertCtrl.create({
      cssClass: 'logout',
      header: 'Confirm!',
      message: 'Are you sure you want to <strong>Logout ?</strong>',
      buttons: [
        {
          text: 'Confirm',
          cssClass: 'btnO_',
          handler: () => {
            this.menu.close();
            this.router.navigate(['/login']);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'btnC_',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        },
      ]
    });

    await alert.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 3000);
    });
  }
}
