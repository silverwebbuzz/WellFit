import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  close() {
    this.navCtrl.back();
  }

}
