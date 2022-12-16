import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentaProfesorPage } from './cuenta-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: CuentaProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentaProfesorPageRoutingModule {}
