import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;

  constructor( public http: HttpClient ) {
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');


  }

  getUsers(){
    return this.http.get('http://localhost/projetos_ionic/valebar/db_mysql/getUsers.php');
  }
  getEmpresas(email){
    return this.http.get('http://localhost/projetos_ionic/valebar/db_mysql/getEmpresas.php?email='+email);
  }

   getComandas(email){
    return this.http.get('http://localhost/projetos_ionic/valebar/db_mysql/getComandas.php?email='+email);
  }

  getProdutos(){
    return this.http.get('http://localhost/projetos_ionic/valebar/db_mysql/getProdutos.php');
  }

  getPedidos(){
    return this.http.get('http://localhost/projetos_ionic/valebar/db_mysql/getPedidos.php');
  }

  getPedidosHome(email){
    return this.http.get('http://localhost/projetos_ionic/valebar/db_mysql/getPedidosHome.php?email='+email);
  }

  addEndereco(data) {
    return this.http.post('http://localhost/projetos_ionic/valebar/db_mysql/insertEndereco.php', data);
  }

  addPedido(data) {
    return this.http.post('http://localhost/projetos_ionic/valebar/db_mysql/insertPedido.php', data);
  }

  addUsers(data) {
    return this.http.post('http://localhost/projetos_ionic/valebar/db_mysql/insertUser.php', data);
  }

  addProduto(data) {
    return this.http.post('http://localhost/projetos_ionic/valebar/db_mysql/insertProduto.php', data);
  }

  updatePedido(data) {
    return this.http.post('http://localhost/projetos_ionic/valebar/db_mysql/updatePedidos.php', data);
  }

  deleteProduto(id) {
    return this.http.delete('http://localhost/projetos_ionic/valebar/db_mysql/deleteProduto.php?id='+id);
  }

  deleteProdutoPedido(id, idMesa) {
    return this.http.delete('http://localhost/projetos_ionic/valebar/db_mysql/deleteProdutoPedido.php?id='+id+'&idMesa='+idMesa);
  }

  deletePedido(id) {
    return this.http.delete('http://localhost/projetos_ionic/valebar/db_mysql/deletePedido.php?id='+id);
  }

}
