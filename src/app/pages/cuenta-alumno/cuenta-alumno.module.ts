import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaAlumnoPageRoutingModule } from './cuenta-alumno-routing.module';

import { CuentaAlumnoPage } from './cuenta-alumno.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaAlumnoPageRoutingModule,
    //Se agrego el componente
    ComponentsModule
    //Fin componente
  ],
  declarations: [CuentaAlumnoPage]
})
export class CuentaAlumnoPageModule {}
