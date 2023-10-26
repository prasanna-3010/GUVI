<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_SESSION["user_id"])) {
    $mysqli = require __DIR__ . "/database.php";

    $dob = $_POST["dob"];
    $contact = $_POST["contact"];
    $age = $_POST["age"];
    $userId = $_SESSION["user_id"];

    // Use prepared statement to prevent SQL injection
    $updateSql = "UPDATE user
                  SET dob = ?, contact = ?, age = ?
                  WHERE id = ?";
    $stmt = $mysqli->prepare($updateSql);

    if ($stmt) {
        $stmt->bind_param("sssi", $dob, $contact, $age, $userId);
        $stmt->execute();

        if ($stmt->affected_rows > 0) {
            // Successfully updated
            echo json_encode(["success" => true]);
            exit;
        } else {
            // Handle update failure if needed
            echo json_encode(["success" => false, "message" => "Failed to update profile"]);
        }

        $stmt->close();
    } else {
        // Handle SQL error if needed
        echo json_encode(["success" => false, "message" => "Database error"]);
    }
} else {
    // Handle unauthorized access
    echo json_encode(["success" => false, "message" => "Unauthorized"]);
}
?>
