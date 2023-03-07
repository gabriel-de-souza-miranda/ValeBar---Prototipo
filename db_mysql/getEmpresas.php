<?php
include "config.php";
$data = array();
$input = file_get_contents('php://input');
$email = $_GET['email'];

$q = mysqli_query($con, "SELECT  email, senha, nomeEmpresa, nomeProprietario, cpfCnpj  FROM empresas where email = '$email' " );

while ($row = mysqli_fetch_object($q)){
  $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($con);
