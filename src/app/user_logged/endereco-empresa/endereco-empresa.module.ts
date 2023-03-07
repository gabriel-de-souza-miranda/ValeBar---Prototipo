import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnderecoEmpresaPageRoutingModule } from './endereco-empresa-routing.module';

import { EnderecoEmpresaPage } from './endereco-empresa.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnderecoEmpresaPageRoutingModule
  ],
  declarations: [EnderecoEmpresaPage]
})
export class EnderecoEmpresaPageModule {}
