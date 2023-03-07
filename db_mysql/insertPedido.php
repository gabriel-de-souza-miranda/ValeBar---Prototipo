<?php
header("Access-Control-Allow-Origin: *");
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
//$year = $data['year'];
$idMesa = $data['idMesa'];
$cliente = $data['cliente'];
$quantidade = $data['quantidade'];
$produto = $data['produto'];
$nomeProduto = $data['nomeProduto'];
$valorProduto = $data['valorProduto'];
//$produto = 1;
$idEmpresa = $data['idEmpresa'];



$q = mysqli_query($con, "INSERT INTO pedidos (idMesa, cliente, quantidade, produto, nomeProduto, valorProduto  , idEmpresa ) values ('$idMesa', '$cliente', '$quantidade', '$produto', '$nomeProduto', '$valorProduto', '$idEmpresa' )");

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



