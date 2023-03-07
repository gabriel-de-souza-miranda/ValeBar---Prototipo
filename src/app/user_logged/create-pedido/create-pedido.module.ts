import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { CreatePedidoPageRoutingModule } from './create-pedido-routing.module';

import { CreatePedidoPage } from './create-pedido.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePedidoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [CreatePedidoPage]
})
export class CreatePedidoPageModule {}
