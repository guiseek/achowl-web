import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackService } from '../../../shared/services/snack.service';
import { WindowService } from '../../../core/services/window.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'owl-musician-sign-in-page',
  templateUrl: './musician-sign-in-page.component.html',
  styleUrls: ['./musician-sign-in-page.component.scss']
})
export class MusicianSignInPageComponent implements OnInit, AfterViewInit {
  @ViewChild('recaptchaContainer') recaptchaContainer: ElementRef
  form = this.fb.group({
    email: ['gguiseek@gmail.com', [Validators.required, Validators.email]],
    password: ['guiseek', [Validators.required, Validators.minLength(6)]]
  })
  loading = false
  windowRef
  verificationCode: string
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private snack: SnackService,
    private win: WindowService,
    private router: Router
  ) { }

  ngOnInit() {
    this.windowRef = this.win.windowRef
  }
  ngAfterViewInit() {
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(this.recaptchaContainer.nativeElement, {
      size: '400px',
      callback: (response) => {
        console.table(response)
      },
      'expired-callback': () => {
        console.log('expired-callback')
      }
    }, firebase.app('achowl-web'))
  }
  onSignIn() {
    this.loading = true
    this.auth.emailLogin(this.form.value)
      .then(
        (auth) => {
          console.log(auth)
          this.loading = false
          this.router.navigateByUrl('/musico')
        },
        (error) => {
          console.log(error)
          if (error.code == 'auth/too-many-requests') {
            this.windowRef.recaptchaVerifier.render()
          }
          this.loading = false
          this.snack.open(error.message)
        }
      )
  }
}
