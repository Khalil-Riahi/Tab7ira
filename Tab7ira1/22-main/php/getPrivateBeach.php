<?php
header("Content-Type: application/json"); // Set the content type at the beginning

$servername = "localhost";
$username = "root";
$password = "";
$database = "Tab7ira"; // Changed variable name for clarity

try {
    // Create a PDO connection object
    $connexion = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    // Set PDO error mode to exception
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // If connection fails, send a JSON error message
    http_response_code(500); // Internal Server Error
    echo json_encode(["error" => "Connection failed: " . $e->getMessage()]);
    exit(); // Terminate script execution on connection failure
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Check if id_private_beach parameter is provided
    if (!isset($_GET['id_private_beach']) || empty(trim($_GET['id_private_beach']))) {
        http_response_code(400); // Bad Request
        echo json_encode(["error" => "Missing 'id_private_beach' parameter"]);
        exit();
    }

    $id_private_beach = trim($_GET['id_private_beach']);
    $requete = "SELECT * FROM private_beach WHERE id_private_beach = :id_private_beach";

    try {
        // Prepare and execute the statement to prevent SQL injection
        $statement = $connexion->prepare($requete);
        $statement->bindParam(':id_private_beach', $id_private_beach, PDO::PARAM_INT);
        $statement->execute();
        $resultat = $statement->fetch(PDO::FETCH_ASSOC);

        if (!$resultat) {
            http_response_code(404); // Not Found
            echo json_encode(["error" => "No private beach found with the ID: $id_private_beach"]);
        } else {
            echo json_encode($resultat);
        }
    } catch (PDOException $e) {
        // If the query fails, send a JSON error message
        http_response_code(500); // Internal Server Error
        echo json_encode(["error" => "Query failed: " . $e->getMessage()]);
    }
}
?>
