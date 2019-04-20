import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'owl-musician-sign-in-page',
  templateUrl: './musician-sign-in-page.component.html',
  styleUrls: ['./musician-sign-in-page.component.scss']
})
export class MusicianSignInPageComponent implements OnInit {
  form = this.fb.group({
    email: ['gguiseek@gmail.com', [Validators.required, Validators.email]],
    password: ['guiseek', [Validators.required, Validators.minLength(6)]]
  })
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSignIn() {
    this.auth.emailLogin(this.form.value)
      .then((auth) => {
        console.log(auth)
        this.router.navigateByUrl('/musico')
      })
  }
}
