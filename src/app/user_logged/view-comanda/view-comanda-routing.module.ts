import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewComandaPage } from './view-comanda.page';

const routes: Routes = [
  {
    path: '',
    component: ViewComandaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewComandaPageRoutingModule {}
