<?php
header("Content-Type: application/json"); // Set the content type at the beginning

$servername = "localhost";
$username = "root";
$password = "";
$database = "Tab7ira"; // Name of your database

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
    // Read JSON input
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    // Check if id_user is provided
    if (!isset($data['id_user']) || empty(trim($data['id_user']))) {
        http_response_code(400); // Bad Request
        echo json_encode(["error" => "Missing 'id_user' parameter"]);
        exit();
    }

    $id_user = trim($data['id_user']);
    $requete = "SELECT * FROM private_beach WHERE id_user = :id_user";

    try {
        // Prepare and execute the statement to prevent SQL injection
        $statement = $connexion->prepare($requete);
        $statement->bindParam(':id_user', $id_user, PDO::PARAM_INT);
        $statement->execute();
        $resultat = $statement->fetchAll(PDO::FETCH_ASSOC);

        if (empty($resultat)) {
            http_response_code(404); // Not Found
            echo json_encode(["error" => "No private beaches found for user ID: $id_user"]);
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
