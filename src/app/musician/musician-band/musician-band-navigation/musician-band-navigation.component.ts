import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'owl-musician-band-navigation',
  templateUrl: './musician-band-navigation.component.html',
  styleUrls: ['./musician-band-navigation.component.scss']
})
export class MusicianBandNavigationComponent implements OnInit {
  bandPages = [{
    icon: 'paper-list',
    title: 'Repertório',
    subtitle: 'Listas para shows',
    path: 'repertorio'
  },
  {
    icon: 'calendar',
    title: 'Agenda',
    subtitle: 'Eventos marcados',
    path: 'agenda'
  }, {
    icon: 'people',
    title: 'Membros',
    subtitle: 'Participantes da banda',
    path: 'membros'
  },
  {
    icon: 'album',
    title: 'Disco',
    subtitle: 'Cadastrar disco',
    path: 'discos'
  },
  {
    icon: 'music',
    title: 'Músicas',
    subtitle: 'Adicione suas músicas',
    path: 'musicas'
  }]
  constructor() { }

  ngOnInit() {
  }

}
