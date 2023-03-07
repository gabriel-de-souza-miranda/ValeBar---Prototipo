<?php
header("Access-Control-Allow-Origin: *");
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
//$year = $data['year'];
//$id = $data['id'];
$id = $_GET['id'];



$q = mysqli_query($con, "DELETE FROM pedidos WHERE idMesa = '$id' ");

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



