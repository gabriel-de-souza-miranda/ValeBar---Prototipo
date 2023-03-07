<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
//$year = $data['year'];
$idMesa = $data['idMesa'];
$cliente = $data['cliente'];
$idEmpresa = $data['idEmpresa'];
$produto = $data['produto'];
$quantidade = $data['quantidade'];

$q = mysqli_query($con, "UPDATE pedidos SET quantidade='$quantidade' where idMesa = '$idMesa'  && idEmpresa = '$idEmpresa' && produto = '$produto' ");

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
