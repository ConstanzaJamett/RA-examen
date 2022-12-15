import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Registrar asistencia', url: 'registrar-asistencia', icon: 'copy' },
    { title: 'Api Conversor', url: 'api-conversor', icon: 'cash' },
    { title: 'Api Clima', url: 'api-clima', icon: 'sunny' },
    { title: 'Mi cuenta', url: 'mi-cuenta', icon: 'person' },
    { title: 'Equipo de trabajo', url: 'about', icon: 'people' },
    { title: 'Cerrar sesión', url: 'error404', icon: 'exit' },
  ];
  public labels = ['Notas', 'Contactos'];
  constructor() {}
}
