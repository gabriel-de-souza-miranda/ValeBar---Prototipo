import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InserirProdutosPageRoutingModule } from './inserir-produtos-routing.module';

import { InserirProdutosPage } from './inserir-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InserirProdutosPageRoutingModule
  ],
  declarations: [InserirProdutosPage]
})
export class InserirProdutosPageModule {}
