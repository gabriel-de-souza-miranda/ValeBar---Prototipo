<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
//$year = $data['year'];
$nomeEmpresa = $data['nomeEmpresa'];
$cpfCnpj = $data['cpfCnpj'];
$nomeProprietario = $data['nomeProprietario'];
$email = $data['email'];
$senha = $data['senha'];



$q = mysqli_query($con, "INSERT INTO empresas (nomeEmpresa, cpfCnpj, nomeProprietario, email, senha) values ('$nomeEmpresa', '$cpfCnpj', '$nomeProprietario' ,'$email', '$senha')");

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


