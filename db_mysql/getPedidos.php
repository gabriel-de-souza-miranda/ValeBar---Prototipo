<?php
include "config.php";
$data = array();
$q = mysqli_query($con, "SELECT idMesa, idEmpresa , cliente,produto ,quantidade FROM pedidos " );
//$q = mysqli_query($con, "SELECT  idMesa, idEmpresa ,prodConsumidos,quantidade FROM pedidos " );

while ($row = mysqli_fetch_object($q)){
  $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($con);
