import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaProfesorPageRoutingModule } from './cuenta-profesor-routing.module';

import { CuentaProfesorPage } from './cuenta-profesor.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaProfesorPageRoutingModule,
    //Se agrego el componente
    ComponentsModule
    //Fin componente
  ],
  declarations: [CuentaProfesorPage]
})
export class CuentaProfesorPageModule {}
