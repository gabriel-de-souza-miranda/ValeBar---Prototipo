<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
//$year = $data['year'];
$cep = $data['cep'];
$cidade = $data['cidade'];
$bairro = $data['bairro'];
$rua = $data['rua'];
$numero = $data['numero'];



$q = mysqli_query($con, "INSERT INTO enderecos (cep, cidade, bairro, rua, numero) values ( '$cep', '$cidade', '$bairro' ,'$rua', '$numero' )");

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



