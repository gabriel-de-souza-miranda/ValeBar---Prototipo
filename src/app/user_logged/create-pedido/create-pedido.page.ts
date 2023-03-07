import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../../API/api.service';


@Component({
  selector: 'app-create-pedido',
  templateUrl: './create-pedido.page.html',
  styleUrls: ['./create-pedido.page.scss'],
})
export class CreatePedidoPage implements OnInit {
  public dados: any = [];
  idMesa: any;
  cliente: any;


  constructor(private route: Router, public apiservice: ApiService) {
    this.dados = this.route.getCurrentNavigation().extras.queryParams;

  }

  ngOnInit() {
  }



  home(){
    const data = {
      email: this.dados.email,
    };

    this.route.navigate(['/home'], {queryParams: data});
  }

  comidas(){
    //console.log(this.idMesa);
    //console.log(this.cliente);
    const data = {
      idMesa: this.idMesa,
      cliente: this.cliente,
      email: this.dados.email
    };

    this.route.navigate(['/comidas'], {queryParams: data});
    //this.route.navigate(['comidas']);
  }

  bebidas(){
    const data = {
      idMesa: this.idMesa,
      cliente: this.cliente,
      email: this.dados.email
    };
    this.route.navigate(['bebidas'], {queryParams: data} );
  }


  createPedido() {
    const data = {
      idMesa: this.idMesa,
      cliente: this.cliente,
    };

    this.route.navigate(['/create-pedido'], {queryParams: data});

  }

}
