import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../API/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-produtos',
  templateUrl: './view-produtos.page.html',
  styleUrls: ['./view-produtos.page.scss'],
})
export class ViewProdutosPage implements OnInit {
  public dados: any = [];
  produtos: any = [];

  constructor(private route: Router, public apiservice: ApiService){
    this.dados = this.route.getCurrentNavigation().extras.queryParams;

    this.getProdutos();

  }

  ngOnInit() {

  }

  getProdutos(){
    this.apiservice.getProdutos().subscribe((res: any) => {
      //console.log('Sucess ***', res);
      //alert('Sucess');
     for(let i = 0; i <= res.length; i++){
       if(res[i].idEmpresa === this.dados.email){
         this.produtos[i] = res[i];
       }
     }

    },(error: any) => {
      //alert('Error');
      console.log('Error ***', error);
    });
  }


  deleteProduto(x: any){

    this.apiservice.deleteProduto(x).subscribe((ress: any) => {
      //console.log('Sucess ***', ress);
      this.produtos = [];
      this.getProdutos();
      alert('Produto deletado com sucesso!');

    },(errorr: any) => {
      alert('Produto não deletado!');
    });



  }


  perfil(){
    const data = {
      email: this.dados.email,
    };
    this.route.navigate(['/perfil'], {queryParams: data});
  }

  insertProdutos(){
    const data = {
      email: this.dados.email,
    };
    this.route.navigate(['/inserir-produtos'], {queryParams: data});
  }

}
