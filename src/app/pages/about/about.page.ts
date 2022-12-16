import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

//Se agrego el componente
  pageTitle = 'About';
  isNotHome = true;
//Fin componente

  constructor() { }

  ngOnInit() {
  }

}
