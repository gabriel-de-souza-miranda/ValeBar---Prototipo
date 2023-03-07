import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../API/api.service';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.page.html',
  styleUrls: ['./comidas.page.scss'],
})
export class ComidasPage implements OnInit {
  produtos: any = [];
  lanches: any = [];
  porcoes: any = [];
  dados: any = [];
  public idMesa: any;
  public cliente: any;
  public pedidos: any = [];
  quantidade: any;


  constructor(private route: Router, public apiservice: ApiService) {
    //recebendo idmesa da page create-pedido
    this.dados = this.route.getCurrentNavigation().extras.queryParams;
    //this.idMesa = this.dados.idMesa;
    //this.cliente = this.dados.cliente;
    //console.log(this.dados);

    this.getProdutos();

  }

  ngOnInit() {
  }

  getProdutos(){
    this.apiservice.getProdutos().subscribe((res: any) => {
      //console.log('Sucess ***', res);
      //alert('Sucess');
      let i = 0;
      let x = 0;
      let y = 0;
      while( i <= res.length){

        if(res[i].tipo === 'lanche' && res[i].idEmpresa === this.dados.email){
          this.lanches[x] = res[i];
          x++;
        }
        else if(res[i].tipo === 'porcao' && res[i].idEmpresa === this.dados.email){
          this.porcoes[y] = res[i];
          y++;
        }

        i++;
      }

    console.log(this.lanches);
    console.log(this.porcoes);

    },(error: any) => {
      //alert('Error');
      console.log('Error ***', error);
    });
  }

  deleteProduto(x: any, mesa: any){

    this.apiservice.deleteProdutoPedido(x, mesa).subscribe((ress: any) => {
      //console.log('Sucess ***', ress);
      //this.produtos = [];
      //this.getPedidos();
      alert('Nenhuma unidade selecionada!');

    },(errorr: any) => {
      console.log('Sucess ***', errorr);
      alert('Produto não deletado!');
    });



  }

  update(dados: any, q: any){
    let quant = q;
    ++quant;

      alert(quant+' unidade Selecionada.');



    const data = {
      idMesa: dados.idMesa,
      cliente: dados.cliente,
      quantidade: quant,
      produto: dados.produto ,
      nomeProduto: dados.nomeProduto,
      valorProduto: dados.valorProduto,
      idEmpresa: this.dados.email,
    };
    this.apiservice.updatePedido(JSON.stringify(data)).subscribe((ress: any) => {
      //console.log('Sucess ***', ress);
      //alert('Sucess');

    },(error: any) => {
      //alert('Error');
      //console.log('Error ***', error);
    });
  }

  addPedido(data: any){

    this.apiservice.addPedido(JSON.stringify(data)).subscribe((res: any) => {
      //console.log('Sucess ***', res);


    },(error: any) => {
      //alert('Error');
      //console.log('Error ***', error);
    });
  }

  verifPedido(id: any, q: any, nomeProd: any, valor: any) {

    const data = {
      idMesa: this.dados.idMesa,
      cliente: this.dados.cliente,
      quantidade: q,
      produto: id ,
      nomeProduto: nomeProd,
      valorProduto: valor,
      idEmpresa: this.dados.email,

    };


    this.apiservice.getPedidos().subscribe((res: any) => {
      this.pedidos = res;
      for( let i = 0; i <= res.length; i++){

        if(this.pedidos[i].idMesa === this.dados.idMesa && this.pedidos[i].idEmpresa === this.dados.email &&this.pedidos[i].produto === id){
          this.update(data, this.pedidos[i].quantidade);
          return;
        }

      }
    },(error: any) => {
      //alert('erro');
      //console.log('Error ***', error);

    });




    this.addPedido(data);


  }

  decrementPedido(dados: any, q: any) {
    let quant = q;
    --quant;

    if(quant === 0 && dados.idMesa === this.dados.idMesa){
      this.deleteProduto(dados.produto, this.dados.idMesa);
    }
    else{
      const data = {
        idMesa: dados.idMesa,
        cliente: dados.cliente,
        quantidade: quant,
        produto: dados.produto ,
        nomeProduto: dados.nomeProduto,
        valorProduto: dados.valorProduto,
        idEmpresa: this.dados.email,
      };
      this.apiservice.updatePedido(JSON.stringify(data)).subscribe((ress: any) => {
        //console.log('Sucess ***', ress);
        alert(quant+' unidade selecionada');

      },(error: any) => {
        //alert('Error');
        console.log('Error ***', error);
      });

    }

    }

  verifPedido2(id: any, q: any, nomeProd: any, valor: any) {

    const data = {
      idMesa: this.dados.idMesa,
      cliente: this.dados.cliente,
      quantidade: q-1,
      produto: id ,
      nomeProduto: nomeProd,
      valorProduto: valor,
      idEmpresa: this.dados.email,

    };


    this.apiservice.getPedidos().subscribe((res: any) => {
      this.pedidos = res;
      for( let i = 0; i <= res.length; i++){

        if(this.pedidos[i].idMesa === this.dados.idMesa && this.pedidos[i].idEmpresa === this.dados.email &&this.pedidos[i].produto === id){
          this.decrementPedido(data, this.pedidos[i].quantidade);

        }

      }
    },(error: any) => {
      //alert('erro');
      //console.log('Error ***', error);
    });


  }



  bebidas(){
    const data = {
      idMesa: this.dados.idMesa,
      cliente: this.dados.cliente,
      email: this.dados.email
    };
    this.route.navigate(['/bebidas'], {queryParams: data});
  }


  createPedido() {
    const data = {
      email: this.dados.email
    };

    this.route.navigate(['/create-pedido'], {queryParams: data});

  }

  home(){
    const data = {
      email: this.dados.email
    };

    this.route.navigate(['/home'], {queryParams: data});
  }


}
