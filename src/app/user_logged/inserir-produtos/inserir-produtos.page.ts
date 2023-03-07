import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../API/api.service';


@Component({
  selector: 'app-inserir-produtos',
  templateUrl: './inserir-produtos.page.html',
  styleUrls: ['./inserir-produtos.page.scss'],
})
export class InserirProdutosPage implements OnInit {
  public dados: any = [];

  nome: any;
  tipo: any;
  valor: any;

  constructor(private route: Router, public apiservice: ApiService) {
    this.dados = this.route.getCurrentNavigation().extras.queryParams;
  }

  ngOnInit() {
  }


  addProduto(){
    const data = {
      nome: this.nome,
      tipo: this.tipo,
      valor: this.valor,
      idEmpresa: this.dados.email,
    };

    this.apiservice.addProduto(JSON.stringify(data)).subscribe((ress: any) => {
      //console.log('Produto inserido!', ress);
      alert('Produto inserido');


    },(errorr: any) => {
      alert('Produto não inserido!');
    });

  }

  verifProduto() {

    this.apiservice.getProdutos().subscribe((res: any) => {
      //console.log('Sucess ***', res);
      //alert('Sucess');
      if(res.length >= 1){
        let x: boolean;
        for(let i = 0; i <= res.length; i++){
          if(res[i].nome === this.nome && res[i].tipo === this.tipo && res[i].idEmpresa === this.dados.email){

            x = true;
          }

          if(x === true){
            alert('Produto Existente!');
            i = res.length;
          }
          else{
            this.addProduto();
            i = res.length;
          }
          console.log(x);
      }
      }
      else if(res.length === 0){
        this.addProduto();
      }



    },(error: any) => {
      //alert('Error');
      console.log('Error ***', error);
    });



  }


   perfil(){
    const data = {
      email: this.dados.email,
    };

    this.route.navigate(['/perfil'], {queryParams: data});
  }

  home(){
    const data = {
      email: this.dados.email,
    };

    this.route.navigate(['/home'], {queryParams: data});
  }

}
