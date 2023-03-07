import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewProdutosPage } from './view-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: ViewProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewProdutosPageRoutingModule {}
