import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.page.html',
  styleUrls: ['./mi-cuenta.page.scss'],
})
export class MiCuentaPage implements OnInit {

  //Se agrego el componente
  pageTitle = 'Mi cuenta RA';
  isNotHome = true;
  //Fin componente

  constructor() { }

  ngOnInit() {
  }

}
