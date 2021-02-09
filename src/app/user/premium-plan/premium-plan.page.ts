import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-premium-plan',
  templateUrl: './premium-plan.page.html',
  styleUrls: ['./premium-plan.page.scss'],
})
export class PremiumPlanPage implements OnInit {

  tabs: string = "6";

  constructor(
    private navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back();
  }

  close() {
    this.navCtrl.back();
  }

  payment() {
    this.router.navigate(['/payment']);
  }

}
