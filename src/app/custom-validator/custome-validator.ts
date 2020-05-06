import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

export class CustomValidators {

    static passwordMatchValidator(formGroup: FormGroup)  {
        const { value: password } = formGroup.get('password');
        const { value: confirmPassword } = formGroup.get('confirmPassword');
        return password === confirmPassword ? null : { passwordNotMatch: true };
      }
}