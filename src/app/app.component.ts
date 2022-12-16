import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  async logout(){
    this.authService.logout();
    this.router.navigateByUrl('/',{replaceUrl:true})
  }


  public appPages = [
    { title: 'Registrar asistencia', url: 'registrar-asistencia', icon: 'copy' },
    { title: 'Registrar clase', url: 'registrar-clase', icon: 'copy' },
    { title: 'Api Conversor', url: 'api-conversor', icon: 'cash' },
    { title: 'Api Clima', url: 'api-clima', icon: 'sunny' },
    { title: 'Mi cuenta', url: 'mi-cuenta', icon: 'person' },
    { title: 'Equipo de trabajo', url: 'about', icon: 'people' },
  ];

}
