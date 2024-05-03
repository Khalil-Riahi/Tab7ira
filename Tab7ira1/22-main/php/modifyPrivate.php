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
if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    // Retrieve JSON data sent from Angular application
    $user_data = json_decode(file_get_contents("php://input"), true);
    // $raw_data = file_get_contents('php://input');
    // $json_data = json_decode($raw_data, true);

    // Check if all required fields are present and not empty
    $required_fields = ["id_private_beach", "beach_name", "type_of_the_private_beach", "menu", "location", "description", "city", "beach_photos", "id_user"];
    foreach ($required_fields as $field) {
        if (!isset($user_data[$field]) || empty($user_data[$field])) {
            // If any required field is missing or empty, return JSON error message
            echo json_encode(["success" => false, "message" => "All fields are required"]);
            exit; // Stop further execution
        }
    }

    try {
        // Update the specified beach in the private_beach table
        $sql = "UPDATE private_beach 
                SET beach_name = :beach_name, type_of_the_private_beach = :type_of_the_private_beach, menu = :menu, location = :location, description = :description, 
                    city = :city, beach_photos = :beach_photos, id_user = :id_user
                WHERE id_private_beach = :id_private_beach";
        $stmt = $connexion->prepare($sql);
        $stmt->bindParam(':id_private_beach', $user_data["id_private_beach"]);
        $stmt->bindParam(':beach_name', $user_data["beach_name"]);
        $stmt->bindParam(':type_of_the_private_beach', $user_data["type_of_the_private_beach"]);
        $stmt->bindParam(':menu', $user_data["menu"]);
        $stmt->bindParam(':location', $user_data["location"]);
        $stmt->bindParam(':description', $user_data["description"]);
        $stmt->bindParam(':city', $user_data["city"]);
        $stmt->bindParam(':beach_photos', $user_data["beach_photos"]);
        $stmt->bindParam(':id_user', $user_data["id_user"]);
        $stmt->execute();
        
        // Check if any rows were affected
        if ($stmt->rowCount() > 0) {
            // Return success response
            echo json_encode(["success" => true, "message" => "Beach updated successfully"]);
        } else {
            // If no rows were affected, return JSON error message
            echo json_encode(["success" => false, "message" => "Beach not found or no changes made"]);
        }
        
    } catch(PDOException $e) {
        // If an error occurs, return JSON error message
        echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
    }
} else {
    // If the request method is not POST, return JSON error message
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
?>
