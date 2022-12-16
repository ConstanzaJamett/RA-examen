import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerClasePageRoutingModule } from './ver-clase-routing.module';

import { VerClasePage } from './ver-clase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerClasePageRoutingModule
  ],
  declarations: [VerClasePage]
})
export class VerClasePageModule {}
