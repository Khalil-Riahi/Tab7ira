<?php
header("Content-Type: application/json");
// header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$servername = "localhost";
$username = "root";
$password = "";
$database = "Tab7ira";

try {
    // Create a PDO connection object
    $connexion = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    // Set PDO error mode to exception
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    // If connection fails, show error message
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Connection failed: " . $e->getMessage()]);
    exit();
}

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    // Retrieve data sent from the client
    $inputs = json_decode(file_get_contents("php://input"), true);

    // Extract data from JSON
    $id_public_beach = $inputs["id_public_beach"];
    $beach_name = $inputs["beach_name"];
    $location = $inputs["location"];
    $description = $inputs["description"];
    $city = $inputs["city"];
    $beach_photos = $inputs["beach_photos"];
    $id_user = $inputs["id_user"];

    try {
        // Prepare SQL statement to insert data into the table
        // $sql = "UPDATE public_beach (beach_name, location, description, city, beach_photos, id_user) 
        //         VALUES (:beach_name, :location, :description, :city, :beach_photos, :id_user)";

        $sql = "UPDATE public_beach SET beach_name = :beach_name, location = :location, description = :description, city = :city, beach_photos = :beach_photos, id_user = :id_user WHERE id_public_beach = :id_public_beach";

        // Prepare the SQL statement
        $stmt = $connexion->prepare($sql);

        // Bind parameters to the prepared statement
        $stmt->bindParam(':id_public_beach', $id_public_beach);
        $stmt->bindParam(':beach_name', $beach_name);
        $stmt->bindParam(':location', $location);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':city', $city);
        $stmt->bindParam(':beach_photos', $beach_photos);
        $stmt->bindParam(':id_user', $id_user);

        // Execute the prepared statement
        $stmt->execute();

        // Response message
        echo json_encode(["success" => true, "message" => "Beach record created successfully"]);
    } catch(PDOException $e) {
        // If an error occurs during execution of SQL statement, show error message
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
    }
} else {
    // If the request method is not POST, show an error message
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
?>
