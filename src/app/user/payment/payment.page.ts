import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  pay_form: FormGroup;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private formBuilder: FormBuilder,) { 

      this.pay_fb();
    }

  ngOnInit() {
  }

  close() {
    this.navCtrl.back();
  }

  pay_fb() {
    this.pay_form = this.formBuilder.group({
      name: [null, Validators.required],
      number: [null, Validators.required],
      expiry: [null, Validators.required],
      cvv: [null, Validators.required],
    });
  }

  pay() {
    // this.router.navigate(['/payment-received']);
    this.router.navigate(['/payment-error']);
    // for (let v in this.pay_form.controls) {
    //   this.pay_form.controls[v].markAsTouched();
    // }
    // if (this.pay_form.valid) {
    //   var body = {
    //     name: this.pay_form.value.name,
    //     number: this.pay_form.value.number,
    //     expiry: this.pay_form.value.expiry,
    //     cvv: this.pay_form.value.cvv,
    //   };
    // }
  }

}
