import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VerClasePageRoutingModule } from './ver-clase-routing.module';

import { VerClasePage } from './ver-clase.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerClasePageRoutingModule,
    //Se agrego el componente
    ComponentsModule
    //Fin componente
  ],
  declarations: [VerClasePage]
})
export class VerClasePageModule {}
