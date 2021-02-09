import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-sub',
  templateUrl: './explore-sub.page.html',
  styleUrls: ['./explore-sub.page.scss'],
})
export class ExploreSubPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  expVideo() {
    this.router.navigate(['/tabs/explore-video']);
  }

  plan() {
    this.router.navigate(['/premium-plan']);
  }

}
