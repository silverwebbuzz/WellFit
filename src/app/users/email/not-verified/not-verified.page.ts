import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-verified',
  templateUrl: './not-verified.page.html',
  styleUrls: ['./not-verified.page.scss'],
})
export class NotVerifiedPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  close() {
    this.router.navigate(['/physique-stats']);
  }

}
