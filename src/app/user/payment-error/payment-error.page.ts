import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment-error',
  templateUrl: './payment-error.page.html',
  styleUrls: ['./payment-error.page.scss'],
})
export class PaymentErrorPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  close() {
    this.navCtrl.back();
  }

}
