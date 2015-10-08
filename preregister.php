<?php
$servername = "pulseece.web.engr.illinois.edu";
$username = "pulseece_admin16";
$password = "ECEPulse123";
$database = "pulseece_2016";
$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error)
{
    echo "connection error";
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST["email"];
echo $email;

$query = 'INSERT INTO preregister (email) VALUES("'.$email.'")';
$conn->query($query);

?>