import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
//import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  databaseObj: SQLiteObject;
  tables = {
    users: 'users',
  };

  constructor(private sqlite: SQLite /*, private sqliteporter: SQLitePorter*/) {

  }

  /*async openDatabase() {
    try{
      this.db = await this.sqlite.create({name: 'valebar', location: 'default'});
      await this.createDatabase();
    } catch (error) {
      console.log('Ocorrreu um erro ao criar o banco de dados', error);
    }
  }*/

  async createDatabase() {
    await this.sqlite
      .create({
        name: 'valebar',
        location: 'default',
      })
      .then((db: SQLiteObject) => {
        this.databaseObj = db;
      })
      .catch((e) => {
        alert('erro on creating database' + JSON.stringify(e));
      });

    await this.createTables();
  }

  async createTables() {
    await this.databaseObj.executeSql (
      'CREATE TABLE IF NOT EXISTS ${this.tables.users} (email varchar(100) primary key , senha varchar(50)',
      []
    );
  }

  async addCategory( email: string ) {
    return this.databaseObj
    .executeSql(
      'insert into '+this.tables.users+' (name) values ('+email+')',
      []
    )
    .then(() => {
      console.log( 'user created'); //return
    })
    .catch((e) => {
      if(e.code === 6){
        return 'user already exists';
      }

      //return 'error on creating user '+ JSON.stringify(e);
    });
  }

  async getUsers(){
    return this.databaseObj
      .executeSql(
      'SELECT FROM '+ this.tables.users+' ORDER BY email ASC',
      []
    )
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      if(e){
        return 'error on getting users'+ JSON.stringify(e);
      }
    });
  }
  /*
  getCreateTable() {
    const sqls = [];
    sqls.push('CREATE TABLE IF NOT EXISTS users (email varchar(100) primary key , senha varchar(50));');
    return sqls.join('\n');
  }

  executeSQL(sql: string, params?: any[]) {
    return this.db.executeSql(sql,params);
  }*/


}

