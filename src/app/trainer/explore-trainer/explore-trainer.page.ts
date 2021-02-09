import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-trainer',
  templateUrl: './explore-trainer.page.html',
  styleUrls: ['./explore-trainer.page.scss'],
})
export class ExploreTrainerPage implements OnInit {

  tabs: string = "trainers";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  profile() {
    this.router.navigate(['/trainer-profile']);
  }

}
