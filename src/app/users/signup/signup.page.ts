import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  tabs: string = "user";
  user_form: FormGroup;
  trainer1_form: FormGroup;
  trainer2_form: FormGroup;
  step = 0

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,) { 

      this.user_fb();
      this.trainer1_fb();
      this.trainer2_fb();
    }

  ngOnInit() {
  }

  back() {
    this.step = 0;
    // this.router.navigate(['/']);
    console.log('Back');
  }

  user_fb() {
    this.user_form = this.formBuilder.group({
      user_first_name: [null, Validators.required],
      user_last_name: [null, Validators.required],
      user_email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])],
      user_password: [null, Validators.required],
    });
  }

  userSignup() {
    this.router.navigate(['/not-verified']);
    // for (let v in this.user_form.controls) {
    //   this.user_form.controls[v].markAsTouched();
    // }
    // if (this.user_form.valid) {
    //   var body = {
    //     user_first_name: this.user_form.value.user_first_name,
    //     user_last_name: this.user_form.value.user_last_name,
    //     user_email: this.user_form.value.user_email,
    //     user_password: this.user_form.value.user_password,
    //   };
    // }
  }

  trainer1_fb() {
    this.trainer1_form = this.formBuilder.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])],
      password: [null, Validators.required],
    });
  }

  next() {
    this.step = 1;
    // for (let v in this.trainer1_form.controls) {
    //   this.trainer1_form.controls[v].markAsTouched();
    // }
    // if (this.trainer1_form.valid) {
    //   var body = {
    //     first_name: this.trainer1_form.value.first_name,
    //     last_name: this.trainer1_form.value.last_name,
    //     email: this.trainer1_form.value.email,
    //     password: this.trainer1_form.value.password,
    //   };
    //   this.step = 1;
    // }
  }

  trainer2_fb() {
    this.trainer2_form = this.formBuilder.group({
      phone_number: [null, Validators.required],
      certificate: [null, Validators.required],
      passport: [null, Validators.required],
    });
  }

  trainerSignup() {
    this.router.navigate(['/verified']);
    // for (let v in this.trainer2_form.controls) {
    //   this.trainer2_form.controls[v].markAsTouched();
    // }
    // if (this.trainer2_form.valid) {
    //   var body = {
    //     phone_number: this.trainer2_form.value.phone_number,
    //     certificate: this.trainer2_form.value.certificate,
    //     passport: this.trainer2_form.value.passport,
    //   };
    // }
  }

}
