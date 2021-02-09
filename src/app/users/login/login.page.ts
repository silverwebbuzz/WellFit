import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/global/common_service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login_form: FormGroup;
  login_process: boolean;

  constructor(
    private router: Router,
    private api: CommonService, 
    private formBuilder: FormBuilder,) { 

      this.login_fb();
    }

  ngOnInit() {
  }

  signup() {
    this.router.navigate(['/signup']);
  }

  login_fb() {
    this.login_form = this.formBuilder.group({
      email: [null, Validators.compose([
        Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.required
      ])],
      password: [null, Validators.required],
    });
  }

  login() {
    this.router.navigate(['/tabs/explore']);
    // for (let v in this.login_form.controls) {
    //   this.login_form.controls[v].markAsTouched();
    // }
    // if (this.login_form.valid) {
    //   var body = {
    //     email: this.login_form.value.email,
    //     password: this.login_form.value.password,
    //   };
      // this.api.signin(body).subscribe(val => {
      //   this.login_process = false;
      //   this.api.dismissLoading();
      //   if (val['status'] == 200) {
      //     localStorage.setItem('id', val['result']['UserID']);
      //     localStorage.setItem('token', val['result']['Token']);
      //     this.api.presentToastWithOptions(val['message']);
      //     // this.router.navigate(['/home']);

      //   }
      //   //  else if(val['status'] == 400 && val['message'] == 'Email Not verified And Please check your mail'){
      //   //   this.api.presentToastWithOptions(val['message']);
      //   //   this.router.navigate(['/verify']);
      //   // }
      //   else{
      //     this.api.presentToastWithOptions(val['message']);
      //   }
      // },
      //   err => {
      //     this.login_process = false;
      //     this.api.dismissLoading();
      //     this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
      //   }
      // )
    // }
  }

}
