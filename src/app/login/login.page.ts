import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';
import { ApiService } from '../API/api.service';



@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})


export class LoginPage  {
 /* data = {
    email: '',
    senha: ''

  };*/

  email: any;
  senha: any;
  users: any = [];


  constructor(private route: Router, public apiservice: ApiService ){

  }

  addUsers() {
    //console.log(this.email);

    const data = {
      email: this.email,
    };

    this.apiservice.addUsers(data).subscribe((res: any) => {
      console.log('Sucess ***', res);
      alert('Sucess');
      //this.getUsers();

    },(error: any) => {
      alert('Error');
      console.log('Error ***', error);
    });

  }



  authLogin(){
    //this.insert();signIn: NgForm
    //this.route.navigate(['/home'])


    this.apiservice.getUsers().subscribe((res: any) => {
      //console.log('Sucess ***', res);
      //alert('Sucess');


     //let x: boolean;
      for( let i = 0; i <= res.length; i++){
        if(res[i].email === this.email){
          //i = 11;
          //x = true;
          if(res[i].senha === this.senha){
            const data = {
              email: this.email,
              cliente: res[i].nomeProprietario,
            };
            i = res.length + 1;
           this.users = res;

            this.route.navigate(['/home'], {queryParams: data});

          }
          else if(res[i].senha !== this.senha){
            i = res.length + 1;
            alert('Email ou Senha incorretos');

          }
        }

      }






    },(error: any) => {
      //alert('Error');
      console.log('Error ***', error);
    });



  }

  login(){
    this.route.navigate(['/login']);
  }

  registrar(){
    this.route.navigate(['/registrar']);
  }

}
