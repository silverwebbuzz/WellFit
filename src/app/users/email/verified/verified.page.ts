import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verified',
  templateUrl: './verified.page.html',
  styleUrls: ['./verified.page.scss'],
})
export class VerifiedPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  close() {
    this.router.navigate(['/physique-stats']);
  }

}
