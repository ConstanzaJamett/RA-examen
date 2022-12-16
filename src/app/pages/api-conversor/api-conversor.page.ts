import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-conversor',
  templateUrl: './api-conversor.page.html',
  styleUrls: ['./api-conversor.page.scss'],
})
export class ApiConversorPage implements OnInit {

  //Se agrego el componente
  pageTitle = 'Conversor';
  isNotHome = true;
  //Fin componente

  constructor() { }

  ngOnInit() {
  }

}

