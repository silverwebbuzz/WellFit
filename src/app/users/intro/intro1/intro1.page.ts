import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro1',
  templateUrl: './intro1.page.html',
  styleUrls: ['./intro1.page.scss'],
})
export class Intro1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.router.navigate(['/intro2']);
  }

  skip() {
    this.router.navigate(['/signin']);
  }

}
