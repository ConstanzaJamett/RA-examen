import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiClimaPageRoutingModule } from './api-clima-routing.module';

import { ApiClimaPage } from './api-clima.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiClimaPageRoutingModule,
    //Se agrego el componente
    ComponentsModule
    //Fin componente    
  ],
  declarations: [ApiClimaPage]
})
export class ApiClimaPageModule {}
