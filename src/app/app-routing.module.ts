import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portada-app',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'api-conversor',
    loadChildren: () => import('./pages/api-conversor/api-conversor.module').then( m => m.ApiConversorPageModule)
  },
  {
    path: 'api-clima',
    loadChildren: () => import('./pages/api-clima/api-clima.module').then( m => m.ApiClimaPageModule)
  },
  {
    path: 'registrar-asistencia',
    loadChildren: () => import('./pages/registrar-asistencia/registrar-asistencia.module').then( m => m.RegistrarAsistenciaPageModule)
  },
  {
    path: 'mi-cuenta',
    loadChildren: () => import('./pages/mi-cuenta/mi-cuenta.module').then( m => m.MiCuentaPageModule)
  },
  {
    path: 'error404',
    loadChildren: () => import('./pages/error404/error404.module').then( m => m.Error404PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'portada-app',
    loadChildren: () => import('./pages/portada-app/portada-app.module').then( m => m.PortadaAppPageModule)
  },
  {
    path: 'cuenta-profesor',
    loadChildren: () => import('./pages/cuenta-profesor/cuenta-profesor.module').then( m => m.CuentaProfesorPageModule)
  },
  {
    path: 'cuenta-alumno',
    loadChildren: () => import('./pages/cuenta-alumno/cuenta-alumno.module').then( m => m.CuentaAlumnoPageModule)
  },
  {
    path: 'registrar-clase',
    loadChildren: () => import('./pages/registrar-clase/registrar-clase.module').then( m => m.RegistrarClasePageModule)
  },
  {
    path: 'ver-asistencia',
    loadChildren: () => import('./pages/ver-asistencia/ver-asistencia.module').then( m => m.VerAsistenciaPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },


  
  {
    path: '**',
    redirectTo: 'error404'
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
