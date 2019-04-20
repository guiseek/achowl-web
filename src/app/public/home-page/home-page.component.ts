import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'owl-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  cards = [{
    icon: 'place',
    title: 'Local',
    subtitle: 'Tem um bar / pub / restaurante?',
    text: 'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. A ordem dos tratores não altera o pão duris. Manduma pindureta quium dia nois paga. Mé faiz elementum girarzis, nisi eros vermeio.',
    button: {
      label: 'Cadastre sua empresa',
      action: 'place'
    }
  }, {
    icon: 'music',
    title: 'É músico?',
    subtitle: 'Carreira solo ou banda(s)',
    text: 'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. A ordem dos tratores não altera o pão duris. Manduma pindureta quium dia nois paga. Mé faiz elementum girarzis, nisi eros vermeio.',
    button: {
      label: 'Cadastre seu perfil e/ou banda',
      action: 'musician'
    }
  }, {
    icon: 'tools',
    title: 'Prestador de serviço',
    subtitle: 'Oferece serviços de qualidade?',
    text: 'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. A ordem dos tratores não altera o pão duris. Manduma pindureta quium dia nois paga. Mé faiz elementum girarzis, nisi eros vermeio.',
    button: {
      label: 'Cadastre seus serviços',
      action: 'provider'
    }
  }, {
    icon: 'photographer',
    title: 'Fotógrafo',
    subtitle: 'Trabalha com fotos e filmagens?',
    text: 'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. A ordem dos tratores não altera o pão duris. Manduma pindureta quium dia nois paga. Mé faiz elementum girarzis, nisi eros vermeio.',
    button: {
      label: 'Cadastre seus trabalhos',
      action: 'provider'
    }
  }]
  constructor() { }
  signUp(action: string) {
    console.log(action)
  }
  ngOnInit() {
  }

}
