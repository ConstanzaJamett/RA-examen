import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerClasePage } from './ver-clase.page';

const routes: Routes = [
  {
    path: '',
    component: VerClasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerClasePageRoutingModule {}
