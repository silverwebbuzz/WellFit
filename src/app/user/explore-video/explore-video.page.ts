import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-video',
  templateUrl: './explore-video.page.html',
  styleUrls: ['./explore-video.page.scss'],
})
export class ExploreVideoPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {
  }

  back() {
    // this.navCtrl.pop();
    this.navCtrl.back();
  }

  video() {
    this.router.navigate(['/video']);
  }

}
