import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from "@ionic/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-physique-stats',
  templateUrl: './physique-stats.page.html',
  styleUrls: ['./physique-stats.page.scss'],
})
export class PhysiqueStatsPage implements OnInit {

  stats_form: FormGroup;
  selected = ['', ''];

  constructor(private router: Router,
    private pickerCtrl: PickerController,
    private formBuilder: FormBuilder,) { 

      this.stats_fb();
    }

  ngOnInit() {
  }

  stats_fb() {
    this.stats_form = this.formBuilder.group({
      age: [null, Validators.required],
      height: [null, Validators.required],
      weight: [null, Validators.required],
      level: [null, Validators.required],
      gender: [null, Validators.required],
    });
  }

  confirm() {
    for (let v in this.stats_form.controls) {
      this.stats_form.controls[v].markAsTouched();
    }
    if (this.stats_form.valid) {
      var body = {
        age: this.stats_form.value.age,
        height: this.stats_form.value.height,
        weight: this.stats_form.value.weight,
        level: this.stats_form.value.level,
        gender: this.stats_form.value.gender,
      };
    }
  }

  async height() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: "Ok",
          handler: (value: any) => {
            console.log(value);
          }
        },
      ],
      columns: [
        {
          name: 'Ft',
          options: [
            { text: '1 Ft' },
            { text: '2 Ft' },
            { text: '3 Ft' },
            { text: '4 Ft' },
            { text: '5 Ft' },
            { text: '6 Ft' },
            { text: '7 Ft' },
            { text: '8 Ft' },
          ]
        },
        {
          name: 'Inch',
          options: [
            { text: '1 Inch' },
            { text: '2 Inch' },
            { text: '3 Inch' },
            { text: '4 Inch' },
            { text: '5 Inch' },
            { text: '6 Inch' },
            { text: '7 Inch' },
            { text: '8 Inch' },
          ]
        },
      ]
    }
    let picker = await this.pickerCtrl.create(options);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let ft = await picker.getColumn('Ft');
      let inch = await picker.getColumn('Inch');
      this.selected = [
        ft.options[ft.selectedIndex].text,
        inch.options[inch.selectedIndex].text,
      ];
    })
  }

}
