import { FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';

export const PasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const pass = control.get('password')
  const confirm = control.get('confirmPassword')

  return pass && confirm && pass.value === confirm.value ? null : { 'notEqual': true }
}