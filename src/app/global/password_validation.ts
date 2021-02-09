import { AbstractControl, ValidatorFn, FormControl } from '@angular/forms';

export class PasswordValidation {


    static MatchPassword(AC: AbstractControl) {
        const password = AC.get('password').value; // to get value in input tag
        const confirm_password = AC.get('confirm_password').value; // to get value in input tag
        if (confirm_password != "" && password != confirm_password) {
            AC.get('confirm_password').setErrors({ MatchPassword: true })
        } else {
            return null
        }
    }

    static ResetPassword(AC: AbstractControl) {
        const new_password = AC.get('new_password').value; // to get value in input tag
        const confirm_password = AC.get('confirm_password').value; // to get value in input tag
        if (confirm_password != "" && new_password != confirm_password) {
            AC.get('confirm_password').setErrors({ ResetPassword: true })
        } else {
            return null
        }
    }
}

