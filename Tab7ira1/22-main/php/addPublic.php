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
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve JSON data sent from Angular application
    $user_data = json_decode(file_get_contents("php://input"), true);

    // Check if all required fields are present and not empty
    $required_fields = ["beach_name", "location", "description", "city", "beach_photos"];
    foreach ($required_fields as $field) {
        if (!isset($user_data[$field]) || empty($user_data[$field])) {
            // If any required field is missing or empty, return JSON error message
            echo json_encode(["success" => false, "message" => "All fields are required"]);
            exit; // Stop further execution
        }
    }

    try {
        // Insert the user data into the public_beach table
        $sql = "INSERT INTO public_beach (id_public_beach, beach_name,location, description, city, beach_photos, id_user) 
                VALUES (:id_public_beach,:beach_name, :location, :description, :city, :beach_photos, :id_user)";
        $stmt = $connexion->prepare($sql);
        $stmt->bindParam(':id_public_beach', $user_data["id_public_beach"]);
        $stmt->bindParam(':beach_name', $user_data["beach_name"]);
        $stmt->bindParam(':location', $user_data["location"]);
        $stmt->bindParam(':description', $user_data["description"]);
        $stmt->bindParam(':city', $user_data["city"]);
        $stmt->bindParam(':beach_photos', $user_data["beach_photos"]);
        $stmt->bindParam(':id_user', $user_data["id_user"]);
        $stmt->execute();
        
        // Return success response
        echo json_encode(["success" => true, "message" => "Data inserted successfully"]);
        
    } catch(PDOException $e) {
        // If an error occurs, return JSON error message
        echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
    }
} else {
    // If the request method is not POST, return JSON error message
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
?>