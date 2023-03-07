<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
//$year = $data['year'];
$nome = $data['nome'];
$tipo = $data['tipo'];
$valor = $data['valor'];
$idEmpresa = $data['idEmpresa'];




$q = mysqli_query($con, "INSERT INTO produtos (nome, tipo, valor, idEmpresa) values ( '$nome', '$tipo' ,'$valor', '$idEmpresa')");

if($q) {
  http_response_code(201);
  $message['status'] = "Sucess";
}
else {
  http_response_code(422);
  $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);



