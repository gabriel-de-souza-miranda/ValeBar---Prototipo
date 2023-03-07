import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../../API/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-endereco-empresa',
  templateUrl: './endereco-empresa.page.html',
  styleUrls: ['./endereco-empresa.page.scss'],
})
export class EnderecoEmpresaPage implements OnInit {
  cep: any;
  cidade: any;
  bairro: any;
  rua: any;
  numero: any;


  constructor(private route: Router, public apiservice: ApiService) { }

  ngOnInit() {
  }

  addEndereco() {
    const data = {
      cep: this.cep,
      cidade: this.cidade,
      bairro: this.bairro,
      rua: this.rua,
      numero: this.numero,
    };

    this.apiservice.addEndereco(JSON.stringify(data)).subscribe((res: any) => {
      console.log('Sucess ***', res);
      alert('Cadastro Concluido! Faça login');
      this.login();

    },(error: any) => {
      alert('Error');
      console.log('Error ***', error);
    });
  }

  login(){
    this.route.navigate(['/login']);
  }



  home(){
    this.route.navigate(['/home']);
  }


  /*voltar(){
    this.route.navigate(['registrar']);
  }*/

}
