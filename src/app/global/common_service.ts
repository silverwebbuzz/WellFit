import { Injectable } from '@angular/core';
import { ToastController, LoadingController, ModalController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token'),
    responseType: 'JSON'
  })
};


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  authenticationState = new BehaviorSubject(false);

  isLoading = false;
  isModalOpen = false;
  constructor(public toastCtrl: ToastController,
    public loadingController: LoadingController,
    private http: HttpClient,
    public modal: ModalController) { }

  async presentToastWithOptions(message?, cssClass?, position?) {
    console.log("test")
    const toast = await this.toastCtrl.create({
      message: message ? message : null,
      duration: 3000,
      position: position ? position : 'bottom',
      cssClass: cssClass ? cssClass : 'dark-trans login-toster',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }

  async presentModal(PageName) {
    this.isModalOpen = true;
    return await this.modal.create({
      component: PageName,
    }).then(a => {
      a.present().then(() => {
        if (!this.isModalOpen) {
          a.dismiss();
        }
      })
    });
  }

  async dismissModal() {
    this.isModalOpen = false;
    return await this.modal.dismiss();
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

 

  signin(body) {
    return this.http.post(environment.base_url + 'login', body)
  }

  user_register(body) {
    return this.http.post(environment.base_url + 'user-register', body)
  }

  trainer_register(body) {
    return this.http.post(environment.base_url + 'trainer-register', body)
  }

  signup(body) {
    return this.http.post(environment.base_url + 'user/add_user', body, httpOptions)
  }

  profileDetail(body) {

    return this.http.get<any>(environment.base_url + 'user/get_userby_id/' + body, httpOptions);
  }

  updateUser(data) {
    const httpFormOptions = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') })
    };
    return this.http.put<any>(environment.base_url + 'user/update_user', data, httpFormOptions);
  }

  forgot(data) {
    return this.http.post<any>(environment.base_url + 'login/forgotpasswordlinkgenerate', data);
  }

  receipt_list(data) {
    return this.http.post<any>(environment.base_url + 'receipt/get_recipet', data);
  }


  country_list() {
    return this.http.get<any>(environment.base_url + 'country/get_country');
  }
  
  currency_list() {
    return this.http.get<any>(environment.base_url + 'country/get_currecny');
  }

  add_receipt(data) {
    return this.http.post<any>(environment.base_url + 'receipt/add_receipt', data, httpOptions);

  }
  reset(data) {
    return this.http.post<any>(environment.base_url + 'login/resetpassword', data, httpOptions);
  }

  logout(data) {
    return this.http.post<any>(environment.base_url + 'login/logout', data, httpOptions);
  }

  detailsGet(data) {
    return this.http.post<any>(environment.base_url + 'receipt/get_recipet_by_id', data);
  }

  updatereceipt(data) {
    const httpFormOptions = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') })
    };
    return this.http.put<any>(environment.base_url + 'receipt/receipt_update', data, httpOptions);
  }

  deletereciept(data) {
    return this.http.delete<any>(environment.base_url + 'receipt/delete_recipet/' + data);
  }

  verify(data) {
    return this.http.post<any>(environment.base_url + 'login/emailverify', data, httpOptions);
  }

  resend(data) {
    return this.http.post<any>(environment.base_url + 'login/resendOtp', data, httpOptions);
  }

}