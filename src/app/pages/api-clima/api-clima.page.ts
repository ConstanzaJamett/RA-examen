import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-clima',
  templateUrl: './api-clima.page.html',
  styleUrls: ['./api-clima.page.scss'],
})
export class ApiClimaPage implements OnInit {

  //Se agrego el componente
  pageTitle = 'Clima';
  isNotHome = true;
  //Fin componente

  constructor() { }

  ngOnInit() {
  }

}
