import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaProfesorPageRoutingModule } from './cuenta-profesor-routing.module';

import { CuentaProfesorPage } from './cuenta-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaProfesorPageRoutingModule
  ],
  declarations: [CuentaProfesorPage]
})
export class CuentaProfesorPageModule {}
