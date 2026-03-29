<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "nexora_db";

// Create connection
$conn = new mysqli($host, $user, $pass, $dbname, 3307);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
