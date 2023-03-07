import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InserirProdutosPage } from './inserir-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: InserirProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InserirProdutosPageRoutingModule {}
