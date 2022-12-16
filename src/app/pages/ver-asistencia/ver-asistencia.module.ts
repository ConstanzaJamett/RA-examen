import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VerAsistenciaPageRoutingModule } from './ver-asistencia-routing.module';

import { VerAsistenciaPage } from './ver-asistencia.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerAsistenciaPageRoutingModule,
    //Se agrego el componente
    ComponentsModule
    //Fin componente
  ],
  declarations: [VerAsistenciaPage]
})
export class VerAsistenciaPageModule {}
