import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiConversorPageRoutingModule } from './api-conversor-routing.module';

import { ApiConversorPage } from './api-conversor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiConversorPageRoutingModule
  ],
  declarations: [ApiConversorPage]
})
export class ApiConversorPageModule {}
