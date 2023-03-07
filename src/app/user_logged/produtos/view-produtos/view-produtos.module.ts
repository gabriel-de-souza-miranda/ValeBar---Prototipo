import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewProdutosPageRoutingModule } from './view-produtos-routing.module';

import { ViewProdutosPage } from './view-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewProdutosPageRoutingModule
  ],
  declarations: [ViewProdutosPage]
})
export class ViewProdutosPageModule {}
