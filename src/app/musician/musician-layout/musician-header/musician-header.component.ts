import { Component, OnInit } from '@angular/core';
import { MusicianService, AuthService, Musician } from '../../../core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'owl-musician-header',
  templateUrl: './musician-header.component.html',
  styleUrls: ['./musician-header.component.scss']
})
export class MusicianHeaderComponent implements OnInit {
  musician$: Observable<Musician>
  constructor(
    public auth: AuthService,
    public musician: MusicianService,
    private router: Router
  ) { }

  ngOnInit() {
    this.musician$ = this.musician.musician$
  }
  signOut() {
    this.auth.signOut()
      .then(() => this.router.navigateByUrl('/login'))
  }

}
