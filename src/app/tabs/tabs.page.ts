import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(
    private menu: MenuController,
    private router: Router,) { }

  ngOnInit() {
  }

  open () {
    this.menu.open();
  }

  trainer() {
    this.router.navigate(['/tabs/explore-trainer']);
  }

}
