import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarClasePageRoutingModule } from './registrar-clase-routing.module';

import { RegistrarClasePage } from './registrar-clase.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarClasePageRoutingModule,
    //Se agrego el componente
    ComponentsModule
    //Fin componente    
  ],
  declarations: [RegistrarClasePage]
})
export class RegistrarClasePageModule {}
