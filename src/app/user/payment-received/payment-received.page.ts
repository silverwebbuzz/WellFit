import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment-received',
  templateUrl: './payment-received.page.html',
  styleUrls: ['./payment-received.page.scss'],
})
export class PaymentReceivedPage implements OnInit {

  constructor(
    private navCtrl: NavController
    ) { }

  ngOnInit() {
  }

  close() {
    this.navCtrl.back();
  }

}
