<?php
header("Access-Control-Allow-Origin: *");
include "config.php";
$input = file_get_contents('php://input');
$data = array();
$email = $_GET['email'];

$q = mysqli_query($con, "SELECT idMesa, idEmpresa , cliente,nomeProduto,produto ,quantidade, valorProduto, sum(quantidade*valorProduto) as totalProduto FROM pedidos WHERE idEmpresa = '$email' GROUP BY idMesa,produto " );


while ($row = mysqli_fetch_object($q)){
  $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($con);
