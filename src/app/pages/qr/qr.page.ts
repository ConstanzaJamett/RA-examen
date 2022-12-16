import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  //Se agrego el componente
  pageTitle = 'Generador de clase';
  isNotHome = true;
  //Fin componente

  public loaded = false;
  constructor() { }

  ngOnInit() {
  }

}
