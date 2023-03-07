import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CreatePedidoPage } from './create-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePedidoPageRoutingModule {}
