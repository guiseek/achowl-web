import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../../core/validators/password.validator';
import { CheckboxSomeCheckedValidator } from '../../core/validators/checkbox-some-checked.validator';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UserService } from '../../core/services/user.service';
import { MatSnackBar } from '@angular/material';
import { User } from '../../core/interfaces/user';

@Component({
  selector: 'owl-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  form = this.fb.group({
    firstname: [null, Validators.required],
    lastname: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    roles: this.fb.group({
      subscriber: [true],
      editor: [true],
      admin: [true],
    }, { validator: CheckboxSomeCheckedValidator }),
    types: this.fb.group({
      customer: [true],
      provider: [false],
      place: [false],
      musician: [false],
    }, { validator: CheckboxSomeCheckedValidator }),
    pass: this.fb.group({
      password: [null, Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])],
      confirmPassword: [null, Validators.required],
    }, { validator: PasswordValidator })
  })
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private auth: AuthService,
    private user: UserService,
    private snackBar: MatSnackBar
  ) {
    this.route.params.subscribe(params => {
      console.log('params: ', params)
      if (params && params.segment && this[params.segment]) {
        this[params.segment].patchValue(true)
      }
    })
  }
  get firstname() { return this.form.get('firstname') }
  get lastname() { return this.form.get('lastname') }
  get pass() { return this.form.get('pass') }
  get password() { return this.pass.get('password') }
  get confirmPassword() { return this.pass.get('confirmPassword') }
  get roles() { return this.form.get('roles') }
  get types() { return this.form.get('types') }
  get provider() { return this.types.get('provider') }
  get place() { return this.types.get('place') }
  get musician() { return this.types.get('musician') }
  ngOnInit() {
  }
  async onSignUp() {
    console.log(this.form.value)
    let { pass, ...data } = this.form.value
    let { email, ...user } = data
    // let { password }
    try {
      let fuser = await this.auth.createAuth(email, pass.password)
      if (fuser) {
        console.log('fuser: ', fuser)
        const account: User = {
          uid: fuser.uid,
          ...user
        }
        const profile = await this.user.createUser(account)
        console.log('profile: ', profile)
      }
    } catch(err) {
      console.log('erere: ', err)
      this.snackBar.open(err.message, 'OK', {
        duration: 4000
      })
    }
  }
}
