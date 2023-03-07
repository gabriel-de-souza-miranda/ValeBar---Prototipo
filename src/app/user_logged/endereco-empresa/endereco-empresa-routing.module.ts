import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnderecoEmpresaPage } from './endereco-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: EnderecoEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnderecoEmpresaPageRoutingModule {}
