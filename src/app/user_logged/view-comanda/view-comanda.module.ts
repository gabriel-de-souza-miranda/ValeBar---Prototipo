import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewComandaPageRoutingModule } from './view-comanda-routing.module';

import { ViewComandaPage } from './view-comanda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewComandaPageRoutingModule
  ],
  declarations: [ViewComandaPage]
})
export class ViewComandaPageModule {}
