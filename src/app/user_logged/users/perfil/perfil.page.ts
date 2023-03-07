import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../API/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  dados: any = [];

  users: any = [];
  constructor(private route: Router, public apiservice: ApiService){
    this.dados = this.route.getCurrentNavigation().extras.queryParams;
    this.getUsers();

  }

  ngOnInit() {
  }

  getUsers(){
    this.apiservice.getEmpresas(this.dados.email).subscribe((res: any) => {
      //console.log('sucess ***', res);
          this.users = res;

      //console.log(this.users);

    },(error: any) => {
      //alert('Error');
      console.log('Error ***', error);
    });

  }

  home(){
    const data = {
      email: this.dados.email,
    };
    this.route.navigate(['/home'], {queryParams: data});
  }

  produtos(){
    const data = {
      email: this.dados.email,
    };

    this.route.navigate(['/view-produtos'], {queryParams: data});
  }

  logOut(){
    window.location.href = 'http://localhost:8100/login';
  }

}
