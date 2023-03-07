function conect(){
  const mysql = require('mysql');
  //connecion =  mysql.createConnection("mysql://gabriel:hesoyam987@localhost:3306/vale_bar");
  const connection = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'gabriel',
    password : 'hesoyam987',
    database : 'vale_bar'
    //insecureAuth : true
  });

  //connection.connect();

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  return connection;

}


function insertUser(){
  const connection = conect();
  connection.query("SELECT * FROM users WHERE cpf_cnpj = '13534557697' ", function(err, rows, fields){
    if(!err){
      console.log('Resultado: ', rows[0].empresa);
    }
    else{
      console.log('Erro ao realizar consulta');
    }
  });

  connection.end();
}

insertUser();

export{ conect, insertUser};


