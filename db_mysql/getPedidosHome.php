<?php
include "config.php";
$input = file_get_contents('php://input');
$data = array();
$email = $_GET['email'];

$q = mysqli_query($con, "SELECT idMesa, idEmpresa , cliente , SUM((quantidade * valorProduto)) as total FROM pedidos WHERE idEmpresa = '$email' GROUP BY idMesa " );
//$q = mysqli_query($con, "SELECT  idMesa, idEmpresa ,prodConsumidos,quantidade FROM pedidos " );

while ($row = mysqli_fetch_object($q)){
  $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($con);
