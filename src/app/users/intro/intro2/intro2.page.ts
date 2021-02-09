import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro2',
  templateUrl: './intro2.page.html',
  styleUrls: ['./intro2.page.scss'],
})
export class Intro2Page implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  next() {
    this.router.navigate(['/signin']);
  }

  skip() {
    this.router.navigate(['/signin']);
  }

  back() {
    this.navCtrl.pop();
  }

}
