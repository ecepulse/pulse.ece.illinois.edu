<?php
$server_name = "pulseece.web.engr.illinois.edu";
$username = "pulseece_admin";
$password = "";
$database = "pulseece_2016";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error)
{
    echo "Failure";
    die("Connection failed: " . $conn->connect_error);
}

function saveEmail($email)
{
    $query = "INSERT INTO preregister (col1) VALUES(".$email.")";
    $conn->query($query);
    return "shouldBeSuccessful";
}

$email = $_POST["email"];

echo saveEmail($email);
?>