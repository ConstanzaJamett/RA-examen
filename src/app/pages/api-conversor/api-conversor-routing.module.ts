import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiConversorPage } from './api-conversor.page';

const routes: Routes = [
  {
    path: '',
    component: ApiConversorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiConversorPageRoutingModule {}
