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
    $requete = "SELECT * FROM private_beach";

    try {
        $statement = $connexion->query($requete);
        $resultat = $statement->fetchAll(PDO::FETCH_ASSOC);

        if (empty($resultat)) {
            http_response_code(204); // No Content
            echo json_encode(["error" => "No private beaches available"]);
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
