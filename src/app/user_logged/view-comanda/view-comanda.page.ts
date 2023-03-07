import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../../API/api.service';

@Component({
  selector: 'app-view-comanda',
  templateUrl: './view-comanda.page.html',
  styleUrls: ['./view-comanda.page.scss'],
})
export class ViewComandaPage implements OnInit {
  dados: any = [];
  comandas: any = [];
  total: any ;
  constructor(private route: Router, public apiservice: ApiService) {
    this.dados = this.route.getCurrentNavigation().extras.queryParams;


    this.getComandas();
  }

  ngOnInit() {
  }



  getComandas(){
    this.total = this.dados.total;
    //console.log(this.total);
    this.apiservice.getComandas(this.dados.email).subscribe((res: any) => {
      console.log('Sucess ***', res);
      //alert('Sucess');

      let x = 0;
      for(let i = 0; i <= res.length; i++){
        if(res[i].idMesa === this.dados.idMesa){
          this.comandas[x] = res[i];
          x++;
        }


      }


    },(error: any) => {
      //alert('Error');
      console.log('Error ***', error);
    });

  }

  home(){
    //this.comandas = [];

    const data = {
      email: this.dados.email,
    };

    this.route.navigate(['/home'], {queryParams: data});
  }

  comidas(){
    //console.log(this.idMesa);
    //console.log(this.cliente);
    const data = {
      idMesa: this.dados.idMesa,
      cliente: this.dados.cliente,
      email: this.dados.email,
    };

    this.route.navigate(['/comidas'], {queryParams: data});
    //this.route.navigate(['comidas']);
  }

  getTotalPedidos(mesa: any){
    this.apiservice.getPedidosHome(this.dados.email).subscribe((res: any) => {
      //console.log('sucess ***', res);

      for(let i = 0; i < res.length; i++){
          if(res[i].idMesa === mesa ){
            alert('Total Consumido: '+res[i].total);
            i = res.length + 1;
          }

      }


    },(error: any) => {
      //alert('Error');
      console.log('Error ***', error);
    });


  }

  finalizaPedido(){
    this.deletePedido(this.dados.idMesa);

    const data = {
      email: this.dados.email,
    };

    this.route.navigate(['/home'], {queryParams: data});
  }

  deletePedido(mesa: any){

    this.apiservice.deletePedido(mesa).subscribe((res: any) => {
      console.log('Sucess ***', res);




    },(error: any) => {
      //alert('Error');
      console.log('Error ***', error);
    });
  }


}
