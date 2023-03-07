import { ApiService } from './../../API/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 public dados: any = [];
  comandas: any = [];
  cliente: any;


  constructor(private route: Router, public apiservice: ApiService){
    this.dados = this.route.getCurrentNavigation().extras.queryParams;
    this.cliente = this.dados.cliente;
    this.getPedidos();


  }

  ngOnInit() {

  }

  getPedidos(){
    this.apiservice.getPedidosHome(this.dados.email).subscribe((res: any) => {
      console.log('sucess ***', res);
      //let x = 0;
      for(let i = 0; i < res.length; i++){
          this.comandas[i] = res[i];

      }


    },(error: any) => {
      //alert('Error');
      console.log('Error ***', error);
    });


  }


  home(){
    const data = {
      email: this.dados.email,
    };
    this.comandas = [];
    this.getPedidos();
    this.route.navigate(['/home'],  {queryParams: data});
  }

  logout(){
    //this.route.navigate(['/logout']);
  }

  viewComanda(id: any, cli: any, totalProd: any){

    const data = {
      email: this.dados.email,
      cliente: cli,
      idMesa: id,
      total: totalProd,
    };

    this.route.navigate(['/view-comanda'], {queryParams: data});
  }


  createPedido() {
    const data = {
      email: this.dados.email,
    };

    this.route.navigate(['/create-pedido'], {queryParams: data});
  }


  perfil(){
    const data = {
      email: this.dados.email,
    };
    this.route.navigate(['/perfil'], {queryParams: data});
  }

}
