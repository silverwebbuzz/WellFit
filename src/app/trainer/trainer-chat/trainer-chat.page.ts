import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-trainer-chat',
  templateUrl: './trainer-chat.page.html',
  styleUrls: ['./trainer-chat.page.scss'],
})
export class TrainerChatPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back();
  }

  send() {
    console.log('Send');
  }

}
