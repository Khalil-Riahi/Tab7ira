<?php
header("Content-Type: application/json");
$servername = "localhost";
$username = "root";
$password = "";
$base = "Tab7ira";

try {
    // Create a PDO connection object
    $connexion = new PDO("mysql:host=$servername;dbname=$base", $username, $password);
    // Set PDO error mode to exception
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    // If connection fails, return JSON error message
    echo json_encode(["success" => false, "message" => "Connection failed: " . $e->getMessage()]);
    exit; // Stop further execution
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    // Retrieve JSON data sent from Angular application
    $user_data = json_decode(file_get_contents("php://input"), true);

    // Check if the required field (id_private_beach) is present and not empty
    // if (empty($user_data["id_private_beach"])) {
    //     // If id_private_beach is missing or empty, return JSON error message
    //     echo json_encode(["success" => false, "message" => "id_private_beach is required"]);
    //     exit; // Stop further execution
    // }

    try {
        // Delete the specified beach from the private_beach table
        $sql = "DELETE FROM private_beach WHERE id_private_beach = :id_private_beach";
        $stmt = $connexion->prepare($sql);
        $stmt->bindParam(':id_private_beach', $user_data["id_private_beach"]);
        $stmt->execute();
        
        // Check if any rows were affected
        if ($stmt->rowCount() > 0) {
            // Return success response
            echo json_encode(["success" => true, "message" => "Beach deleted successfully"]);
        } else {
            // If no rows were affected, return JSON error message
            echo json_encode(["success" => false, "message" => $user_data["id_private_beach"]]);
        }
        
    } catch(PDOException $e) {
        // If an error occurs, return JSON error message
        echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
    }
} else {
    // If the request method is not DELETE, return JSON error message
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
?>
