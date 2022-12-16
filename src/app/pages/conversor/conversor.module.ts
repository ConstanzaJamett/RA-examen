import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { ConversorPageRoutingModule } from './conversor-routing.module';

import { ConversorPage } from './conversor.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConversorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConversorPage]
})
export class ConversorPageModule {}
