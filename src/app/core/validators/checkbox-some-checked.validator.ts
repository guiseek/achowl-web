import { ValidatorFn, FormGroup, ValidationErrors } from "@angular/forms";

export const CheckboxSomeCheckedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const valid = Object.keys(control.controls).map(c => {
    return control.controls[c].value
  }).reduce(v => v)
  return valid ? null : { 'noCheck': true }
}