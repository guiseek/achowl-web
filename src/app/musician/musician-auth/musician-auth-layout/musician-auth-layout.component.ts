import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'owl-musician-auth-layout',
  templateUrl: './musician-auth-layout.component.html',
  styleUrls: ['./musician-auth-layout.component.scss']
})
export class MusicianAuthLayoutComponent implements OnInit {
  navLinks = [{
    path: 'entrar',
    label: 'Entrar'
  }, {
    path: 'cadastrar',
    label: 'Cadastrar'
  }]
  constructor() { }

  ngOnInit() {
  }

}
