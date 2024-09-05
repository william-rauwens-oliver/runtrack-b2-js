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
    die(json_encode(['error' => "Connection failed: " . $conn->connect_error]));
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $email = $_GET['email'] ?? null;

    if (!$email) {
        echo json_encode(['error' => 'Email requis']);
        exit;
    }

    function my_search_student(string $email) : array {
        global $conn;

        $stmt = $conn->prepare("
            SELECT s.email, s.fullname, s.gender, g.name AS grade_name, s.birthdate
            FROM student s
            JOIN grade g ON s.grade_id = g.id
            WHERE s.email = ?
        ");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        $students = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $students[] = $row;
            }
        }

        $stmt->close();
        $conn->close();

        return $students;
    }

    $students = my_search_student($email);

    echo json_encode($students);
}
?>
