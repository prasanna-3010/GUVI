<?php
session_start();

if (isset($_SESSION["user_id"])) {
    $mysqli = require __DIR__ . "/database.php";

    $userId = $_SESSION["user_id"];

    $sql = "SELECT id, name, contact, dob, age FROM user WHERE id = $userId";
    $result = $mysqli->query($sql);
    $userData = $result->fetch_assoc();

    
    header("Content-Type: application/json");
    echo json_encode($userData);
} else {
   
    header("HTTP/1.1 401 Unauthorized");
    exit;
}
?>
