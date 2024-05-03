<?php
header("Content-Type: application/json");
$servername = "localhost";
$username = "root";
$password = "";
$database = "Tab7ira";

try {
    $connexion = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo json_encode(["success" => false, "message" => "Connection failed: " . $e->getMessage()]);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_data = json_decode(file_get_contents("php://input"), true);
    $required_fields = ["id_booking", "date", "time_booking", "id_user", "id_beach", "number_places", "phone_number"];
    foreach ($required_fields as $field) {
        if (!isset($user_data[$field]) || empty($user_data[$field])) {
            echo json_encode(["success" => false, "message" => "All fields are required"]);
            exit;
        }
    }

    // Check if the beach ID exists in the private_beach table
    $checkBeach = $connexion->prepare("SELECT * FROM private_beach WHERE id_private_beach = :id_beach");
    $checkBeach->bindParam(':id_beach', $user_data["id_beach"]);
    $checkBeach->execute();
    if ($checkBeach->rowCount() == 0) {
        echo json_encode(["success" => false, "message" => "Beach ID does not exist"]);
        exit;
    }

    // Check if the user ID exists in the user table
    $checkUser = $connexion->prepare("SELECT * FROM user WHERE id_user = :id_user");
    $checkUser->bindParam(':id_user', $user_data["id_user"]);
    $checkUser->execute();
    if ($checkUser->rowCount() == 0) {
        echo json_encode(["success" => false, "message" => "User ID does not exist"]);
        exit;
    }

    try {
        $sql = "INSERT INTO booking (id_booking, date, time_booking, id_user, id_beach, number_places, phone_number) 
                VALUES (:id_booking, :date, :time_booking, :id_user, :id_beach, :number_places, :phone_number)";
        $stmt = $connexion->prepare($sql);
        foreach ($user_data as $param => $val) {
            $stmt->bindParam(':'.$param, $user_data[$param]);
        }
        $stmt->execute();
        echo json_encode(["success" => true, "message" => "Booking added successfully"]);
    } catch(PDOException $e) {
        echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
?>
