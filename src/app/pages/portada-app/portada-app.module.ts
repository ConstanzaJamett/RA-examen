import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortadaAppPageRoutingModule } from './portada-app-routing.module';

import { PortadaAppPage } from './portada-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortadaAppPageRoutingModule
  ],
  declarations: [PortadaAppPage]
})
export class PortadaAppPageModule {}
