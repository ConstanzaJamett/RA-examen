import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentaAlumnoPage } from './cuenta-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: CuentaAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentaAlumnoPageRoutingModule {}
