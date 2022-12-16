import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiConversorPageRoutingModule } from './api-conversor-routing.module';

import { ApiConversorPage } from './api-conversor.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiConversorPageRoutingModule,
    //Se agrego el componente
    ComponentsModule
    //Fin componente
  ],
  declarations: [ApiConversorPage]
})
export class ApiConversorPageModule {}
