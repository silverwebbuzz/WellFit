import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.page.html',
  styleUrls: ['./trainer-profile.page.scss'],
})
export class TrainerProfilePage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private router: Router
    ) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back();
  }

  chat() {
    this.router.navigate(['/trainer-chat']);
  }

}
