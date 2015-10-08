<?php
$server_name = "pulseece.web.engr.illinois.edu";
$username = "pulseece_admin";
$password = "";
$database = "pulseece_2016";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}

function saveEmail($email)
{
    $query = "INSERT INTO preregister (col1) VALUES(".$email.")";
    $conn->query($query);
}

$email = $_POST["email"];

saveEmail($email);
?>