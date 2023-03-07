import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';
/*, private http: HttpClient*/
import { ApiService } from '../API/api.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})


export class RegistrarPage implements OnInit {

    nomeEmpresa: any;
    cpfCnpj: any;
    nomeProprietario: any;
    email: any;
    senha: any;



  constructor(private route: Router, public apiservice: ApiService) {

  }

  ngOnInit() {

  }

  authCadastro( ){
    //this.insert();signIn: NgForm
    //this.route.navigate(['/home'])


    this.apiservice.getUsers().subscribe((res: any) => {

      let x: boolean;

      if(res.length >= 1){
        for( let i = 0; i <= res.length; i++){
          if(res[i].email === this.email){
            x = true;
            i = res.length + 1;

          }
          if(x === true){
            alert('Usuario existente, faça login!');
            this.route.navigate(['/login']);
          }
          else{
            this.addUsers();
            i = res.length + 1;
          }
        }
      }

      else if(res.length === 0){
        this.addUsers();
      }




    },(error: any) => {
      //alert('Error');
      console.log('Error ***', error);
    });



  }

  addUsers() {
    //console.log(x);

      const data = {
        nomeEmpresa: this.nomeEmpresa,
        cpfCnpj: this.cpfCnpj,
        nomeProprietario: this.nomeProprietario,
        senha: this.senha,
        email: this.email,
      };

      this.apiservice.addUsers(JSON.stringify(data)).subscribe((res: any) => {
        console.log('Sucess ***', res);
        //alert('Sucess');
        this.dadosIniciais();

      },(error: any) => {
        alert('Error');
        console.log('Error ***', error);
      });




  }



  onSubmit(registrar: NgForm ) {
    /*alert("Registrar "  + "\n"  + this.data.empresa + "\n" +this.data.cpf_cnpj + "\n" + this.data.nome
    + "\n" + this.data.email + "\n" + this.data.senha);*/
  }

  login(){
    this.route.navigate(['/login']);
  }

  dadosIniciais(){
    this.route.navigate(['/endereco-empresa']);
  }



}



