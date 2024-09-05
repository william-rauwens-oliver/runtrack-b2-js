<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "lp_official";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo '<pre>';
    print_r($_POST);
    echo '</pre>';
}

$email = $_POST['student-mail'] ?? null;
$fullname = $_POST['student-fullname'] ?? null;
$gender = $_POST['student-gender'] ?? null;
$grade_id = $_POST['student-grade'] ?? null;
$birthdate = $_POST['student-birthdate'] ?? null;

if (is_null($email) || is_null($fullname) || is_null($gender) || is_null($grade_id) || is_null($birthdate)) {
    die('Un ou plusieurs champs sont vides ou mal remplis.');
}

$stmt = $conn->prepare("SELECT COUNT(*) FROM grade WHERE id = ?");
$stmt->bind_param("i", $grade_id);
$stmt->execute();
$stmt->bind_result($count);
$stmt->fetch();
$stmt->close();

if ($count == 0) {
    die('Le grade_id fourni n\'existe pas dans la table grade.');
}

$birthdate = DateTime::createFromFormat('Y-m-d', $birthdate);

if ($birthdate === false) {
    die('Date de naissance invalide.');
}

function my_insert_student(string $email, string $fullname, string $gender, int $grade_id, DateTime $birthdate) : bool {
    global $conn;

    $stmt = $conn->prepare("INSERT INTO student (email, fullname, gender, grade_id, birthdate) VALUES (?, ?, ?, ?, ?)");
    if ($stmt === false) {
        die('Prepare failed: ' . htmlspecialchars($conn->error));
    }

    $formatted_birthdate = $birthdate->format('Y-m-d');

    $stmt->bind_param("sssss", $email, $fullname, $gender, $grade_id, $formatted_birthdate);

    if ($stmt->execute()) {
        $stmt->close();
        $conn->close();
        return true;
    } else {
        die('Execute failed: ' . htmlspecialchars($stmt->error));
    }
}

if (my_insert_student($email, $fullname, $gender, $grade_id, $birthdate)) {
    echo "Student registered successfully!";
} else {
    echo "Failed to register student.";
}
?>
